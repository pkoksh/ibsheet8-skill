---
KEY: filteTypeStructure
KIND: data-structure
PATH: dataStructure/filte-type-structure
ALIAS_EN: file, type, data, structure
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/dataStructure/filte-type-structure
---
# File Type Data Structure ***(file-type structure)***
The `File Type` column supports file upload and download in the sheet.

When communicating with the server, the structure of `search/save/response data` must be consistent and can be organized as follows.

## Notes
- After file upload (add/edit), clicking a cell does not automatically trigger a server call (download).
- The search data must have `Path` or `Cfg.Export.FilePath` set for data to be displayed in the cell.

## 1. Search Data Structure
Search data must be structured according to the following rules.
- File name: (Col) Name
- File storage path: (Col) Name + "Path"
- Alias information: (Col) Name + "Alias" (optional. If not set, the value is displayed as lblist)
- If Cfg.Export.FilePath is set, download is possible without the Path setting.

```javascript
// Column configuration example
Cols: [
    {Header: "File", Type: "File", Name: "lblist", Width: 300, Align: "Center"}
]

// Server response example
{
  "data": [
    {
      "lblist": "file.xlsx",         // Actual file name
      "lblistPath": "/customer-sample/", // File storage path
      "lblistAlias": "file.xlsx"     // Alias displayed on screen
    }
  ]
}
```

## 2. Saving
When saving File Type column data, you can use [doSave](/docs/funcs/core/do-save) or apply the result to the sheet using [applySaveResult](/docs/funcs/core/apply-save-result) after Ajax communication.

The sheet's file data is sent to the server in the format `rowID$colName: (binary)`.
```javascript

var url = '../jsp/samples/customer/file_save.jsp';

//doSave save example
sheet.doSave({
    url: url,
    queryMode: 0,
});


//Ajax save example
var saveData = sheet.getSaveJson({ formData: true}); //Extract sheet data and files

//Send extracted data to server
$.ajax({
  	url: url,
      	data: saveData,
      	method: "POST",
      	enctype: 'multipart/form-data',
      	contentType: false,
      	processData: false,
      	cache: false,
      	success:function(data){
      	      var result = data.IO.Result;
      	      var fileData = data.IO.data;

     	      //Apply results to the sheet.
              //To enable file download after save, fileData must be passed.
              // applySaveResult(result, message, response, files)
      	      sheet.applySaveResult(result, null, null, fileData);
     	}
});
```
## 3. Server Response Data Structure After Saving
- `id` is mapped to the sheet's `Row ID`, and file information is reflected in the File type cell of the corresponding Row.
- The data item is required for file download after saving.

## Success Response
```javascript
// Response structure to send from server to sheet
// On success
{"IO": {
    "Result": 0 ,
    "Message": "Saved successfully.",
    "data":[
            //Required for file download after save
            {"file":"file.xlsx", "filePath":"/customer-sample/", "id":"AR7"},
            {"file":"file1.xlsx", "filePath":"/customer-sample/", "id":"AR4"},
           ]
    }
}
```
## Failure Response

```javascript
// On failure, set the Result value to negative.
{"IO": {"Result": -9, "Message":"Error details..." }}
```

## Server Example (JSP)
```jsp
<%@ page language="java" contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.*, javax.servlet.http.Part, com.ibleaders.utility.ib_json.*"%>

<%!
    /**
     * Returns the actual filename of the uploaded file.
     */
    public String getFilename(Part part) {
        for (String cd : part.getHeader("content-disposition").split(";")) {
            if (cd.trim().startsWith("filename")) {
                String filename = cd.substring(cd.indexOf('=') + 1)
                                     .trim()
                                     .replace("\"", "");
                return filename.substring(
                        Math.max(filename.lastIndexOf('/'), filename.lastIndexOf('\\')) + 1
                );
            }
        }
        return null;
    }
%>

<%
    request.setCharacterEncoding("UTF-8");
    response.setContentType("application/json; charset=UTF-8");
    response.setStatus(200);

    boolean process = false;     // Overall processing success flag
    boolean hasFile = false;     // File processing flag

    JSONArray jsonArr = new JSONArray();   // File information to reflect in sheet

    try {
        Collection<Part> parts = request.getParts();

        for (Part part : parts) {

            // ===== File type data processing =====
            if (part.getHeader("Content-Disposition") != null &&
                part.getHeader("Content-Disposition").contains("filename=")) {

                hasFile = true;

                // Parameter name rule: rowID$colName
                String fileParam = part.getName();
                String id  = fileParam.split("\\$", 2)[0];
                String col = fileParam.split("\\$", 2)[1];

                String filename = getFilename(part);

                // ※ Example path (needs to be changed according to actual service environment)
                String filepath = "C:/myPath/temp/";
                part.write(filepath + filename);

                // File information structure for sheet reflection
                JSONObject file = new JSONObject();
                file.put("id", id);
                file.put(col, filename);
                file.put(col + "Path", filepath);

                jsonArr.add(file);

            } else {
                // ===== General data processing =====
                // (Process column values if needed)
                String colName = part.getName();
                String value = request.getParameter(colName);
            }
        }

        // Consider success if at least one file was processed normally
        process = hasFile;

    } catch (Exception ex) {
        // Error occurred during file saving or parsing
        process = false;
    }

    // ===== IBSheet response data construction =====
    JSONObject result = new JSONObject();
    JSONObject IO = new JSONObject();

    int res = process ? 0 : -9;  // Use negative numbers for Result errors (excluding -1 to -7)

    IO.put("Result", res);
    IO.put("Message", process ? "Saved successfully." : "An error occurred while saving the file.");

    if (process) {
        // Pass file information to enable file download after saving
        IO.put("data", jsonArr);
    }

    result.put("IO", IO);

    out.print(result);
%>

```

### Read More
- [Alias cell](/docs/props/cell/Alias)
- [applySaveResult method](/docs/funcs/core/apply-save-result)
- [doSave method](/docs/funcs/core/do-save)
- [doSearch method](/docs/funcs/core/do-search)
- [getSaveJson method](/docs/funcs/core/get-save-json)
- [loadSearchData method](/docs/funcs/core/load-search-data)
- [onBeforeFileDown event](/docs/events/on-before-file-down)
- [Path cell](/docs/props/cell/Path)
- [type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
