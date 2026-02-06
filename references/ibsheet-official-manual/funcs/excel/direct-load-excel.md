---
KEY: directLoadExcel
KIND: method
PATH: funcs/excel/direct-load-excel
ALIAS: sheet.directLoadExcel, directLoadExcel()
ALIAS_EN: feature, sends, user, selected, excel, file, contents, desired
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/excel/direct-load-excel
---
# directLoadExcel ***(method)***

> A feature that sends the user-selected Excel file's contents to a desired servlet without loading them into the sheet, allowing the servlet to save them to the database.

> This feature simplifies the process when the contents of a large Excel file cannot be loaded to the user's PC and then saved again.

>
> The Excel file servlet transmission process is as follows:

> ![DirectLoadExcel process](/assets/imgs/directloadexcel_process.png)
<!-- IMAGE: Screenshot/Example Image - DirectLoadExcel process -->
>
>
> Therefore, to use this function, for Java Server Module, `DirectLoadExcel.jsp` along with the `ibsheet8-1.0.x.jar` file and `apache POI library` are required, and for .NET Server Module, `DirectLoadExcel.aspx` along with the `IBSheet8-4.0.dll` file and `Syncfusion library dll` are required.

> Additionally, to use the import/export related features, the `/plugins/ibsheet-excel.js` file provided with the distribution must be included.
>

### Syntax
```javascript
void directLoadExcel( param );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|extendParam|`string`|Optional|Parameters to send (write in querystring form, stored as String in request.setAttribute("extendParam set parameter name"))
<mark>The servlet (or jsp) path that will process the information parsed in DirectLoadExcel.jsp **must be sent with the name FP**</mark>|
|fileExt|`string`|Optional|Sets uploadable file extensions connected with delimiter ("\|"). (`default: "xls\|xlsx"`)|
|mode|`string`|Optional| Enter one string among "HeaderMatch", "NoHeader", "HeaderSkip".
The meaning of each string is as follows.
<ul><li>"HeaderMatch" : Reads titles from the first row of the Excel file and compares them with the sheet's header row titles.
 If the StartRow attribute is specified, it reads rows starting from the row specified in StartRow for as many rows as the header row count and compares them.</li><li>"NoHeader" : No header row; assigns data to each column in order starting from the first row.</li><li>"HeaderSkip" : Reads in order from the left without column comparison even when a header row exists. Skips rows above the header in Excel and reads from below.</li></ul>(`default: "HeaderMatch"`)|
|startRow|`number`|Optional|Sets which row in the Excel sheet to start from. If not set, reads from the first row of Excel (starting from 1).|
|endRow|`number`|Optional|Sets which row in the Excel sheet to read up to. If not set, reads to the last row of Excel.|
|workSheetName|`string`|Optional|Sets the worksheet name of the Excel file to read. If no matching worksheet name is found, the first worksheet is read.|
|workSheetNo|`number`|Optional|Sets the worksheet order number of the Excel file to read. If not set, reads the first worksheet.|
|reqHeader|`object`|Optional|Sets user-specified header information in the server transmission header.|
|useXhr|`boolean`|Optional|Load Excel file using xhr communication.
`0(false)`:xhr communication not used (`default`)
`1(true)`:xhr communication used|


### Return Value
***none***

### Example
```javascript
// The servlet (or jsp) path to receive the final data must be specified as FP
var param = {
        startRow:5,
        workSheetName:"sheet4",
        extendParam:"year=2019&deptNo=0041&FP=./save/empExcelData.do"
        };
sheet.directLoadExcel(param);
```

```java
// directLoadExcel Java Server Module example
List<Map<String, Object>> data = (List<Map<String, Object>>)request.getAttribute("SHEETDATA");

Map<String, Object> header = (Map<String, Object>)data.get(0);
for (String key : header.keySet()) {
  System.out.print(key + "|");
}
System.out.println();

for (Map<String, Object> row : li) {
  for (String key : row.keySet()) {
    System.out.print(row.get(key) + "|");
  }
  System.out.println();
}
```

```cs
// directLoadExcel .NET Server Module example
List<Object> data = (List<Object>)this.Context.Items["sheetData"];

Dictionary<String, String> header = (Dictionary<String, String>)data[0];
foreach (String key in header.Keys) {
  System.Diagnotics.Debug.Write(key + "|");
}
System.Diagnotics.Debug.WriteLine();

foreach (Dictionary<String, String> row in data) {
  foreach (String key in row.Keys) {
    System.Diagnotics.Debug.Write(row[key] + "|");
  }
  System.Diagnotics.Debug.WriteLine();
}
```

### Read More
- [loadExcel method](./load-excel)
- [onSelectFile event](/docs/events/on-select-file)
- [onImportFinish event](/docs/events/on-import-finish)

### Since

|product|version|desc|
|---|---|---|
|excel|0.0.0|Feature added|
|excel|0.0.8|`reqHeader` Feature added|
