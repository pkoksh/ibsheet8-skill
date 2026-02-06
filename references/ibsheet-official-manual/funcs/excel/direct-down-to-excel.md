---
KEY: directDownToExcel
KIND: method
PATH: funcs/excel/direct-down-to-excel
ALIAS: sheet.directDownToExcel, directDownToExcel()
ALIAS_EN: feature, ignores, sheet, searched, data, sends, header, information
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/excel/direct-down-to-excel
---
# directDown2Excel ***(method)***

> A feature that ignores the sheet's searched data, sends only header information to the server, and the server combines it with its own data to create/download an Excel file.

> This feature is used when there is too much searched data and downloading to Excel causes server-side load. The server side separately searches the data, 
 creates it in a `List<Map>` structure, stores the data under the name `SHEETDATA` in the `request` object, and then `forward`s it to the `DirectDown2Excel.jsp` or `DirectDown2Excel.aspx` file.
>
> The Excel file download process is as follows:

> ![DirectDown2Excel process](/assets/imgs/directdown2excel_process.png)
<!-- IMAGE: Screenshot/Example Image - DirectDown2Excel process -->
>
>
> Therefore, to use this function, for Java Server Module, `DirectDown2Excel.jsp` along with the `ibsheet8-1.0.x.jar` file and `apache POI library` are required, and for .NET Server Module, `DirectDown2Excel.aspx` along with the `IBSheet8-4.0.dll` file and `Syncfusion library dll` are required.

> Additionally, to use the import/export related features, the `/plugins/ibsheet-excel.js` file provided with the distribution must be included.
>

### Syntax
```javascript
void directDown2Excel( param );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|url|`string`|Required|Server URL to search data|
|extendParam|`string`|Optional|Parameters to send to the URL (write in querystring form)|
|extendParamMethod|`string`|Optional|Sets whether to send `extendParam` content via `GET` or `POST`. (`default: "GET"`)|
|multipart|`boolean`|Optional|Content-Type setting when sending to URL
`0(false)`:Send as general POST
`1(true)`:Send with Content-Type as multipart (`default`)|
|fileName|`string`|Optional|Name of the Excel file to create (`default: "Excel.xlsx"`) 
**The file is created in xls or xlsx format depending on whether the xls or xlsx extension is appended to the filename in this property.
It is recommended to download in xlsx format.**|
|sheetName|`string`|Optional|Name to assign to the Excel file WorkSheet being created|
|downCols|`string`|Optional|Downloads only the specified columns through delimiter.
 Without separate settings, all columns are downloaded.
(ex: "Price\|AMT\|TotalReward" style column name string connected with delimiter ("\|"))|
|sheetDesign|`boolean`|Optional|Whether to reflect the sheet's design elements (from `main.css` file settings) in Excel as well.
The applied design elements are as follows: header background color, font name, font size
`0(false)`:Do not reflect sheet's design elements in Excel
`1(true)`:Reflect sheet's design elements in Excel (`default`)|
|merge|`boolean`|Optional|Whether to reflect header area merge information in Excel
`0(false)`:Do not reflect header area merge information in Excel (`default`)
`1(true)`:Reflect header area merge information in Excel|
|numberFormatMode|`number`|Optional|Sets the cell format configuration method for float-type data types.
`0`:Follows the sheet column format. (`default`)
`1`:Sets cell format as integer or float based on the cell value.
`2`:Sets to general format.|
|titleText|`string`|Optional|Adds a desired string at the top of the Excel document.
 Strings can be composed using column delimiter ("\|") and row delimiter ("\r\n").
For example, if "A\|B\|C\r\nD\|E\|F" is entered, the first row's 3 cells are filled with A,B,C values, and the second row's 3 cells are filled with D,E,F values. To include a newline within the value, insert \r or \n. If \r\n is included, there is a difference between lines 10 and 11, and from the 12th row, the sheet content is output.|
|titleAlign|`string`|Optional|Left/right alignment for strings inserted with titleText (`default: "center"`, "left", "right" can be declared)|
|downCombo|`string`|Optional|Sets the format for downloading `Enum` type select items using `Enum` property and `EnumKeys` property.
 `TEXT`: Downloaded using `Enum` property. (`default`)
 `CODE`: Downloaded using `EnumKeys` property.|
|userMerge|`string`|Optional|Used additionally with TitleText to merge a desired area within Excel.
 The input method consists of 4 numbers: 
"merge start cell row index, merge start cell col index, number of rows to merge downward (1 if no merge), number of cells to merge to the right"
(For multiple merges, separate with spaces)
For example, if set as "2,2,1,6 3,2,3,3", cell 2,2 merges 6 cells to the right, and cell 3,2 merges 3 cells downward and 3 cells to the right.
![userMerge](/assets/imgs/userMerge.png)
<!-- IMAGE: Screenshot/Example Image - userMerge -->|
|excelRowHeight|`number`|Optional|Sets the Excel document row height.|
|excelHeaderRowHeight|`number`|Optional|Sets the Excel header row height.|
|comboValidation|`boolean`|Optional|For columns created as Enum type, uses the data validation feature in Excel to display as a dropdown list.
Ignored when the Enum type has too many items.
`0(false)`:Dropdown list form not used (`default`)
`1(true)`:Dropdown list form used|
|reqHeader|`object`|Optional|Sets user-specified header information in the server transmission header.|
|useXhr|`boolean`|Optional|Download Excel file using xhr communication.
`0(false)`:xhr communication not used (`default`)
`1(true)`:xhr communication used|
|exHead|`object`|Optional|Sets content to display at the top of the sheet.
Cannot be used together with titleText, userMerge, header, footer properties; when used together, titleText, userMerge, header, footer properties are ignored. 
 This property can only be set when using POI.|
|exFoot|`object`|Optional|Sets content to display at the bottom of the sheet.
Cannot be used together with titleText, userMerge, header, footer properties; when used together, titleText, userMerge, header, footer properties are ignored. 
 This property can only be set when using POI.|
<!--!
|`[Private]` hiddenColumn|`boolean`|Optional|Downloads hidden columns in the sheet in "column hide" form in Excel as well.
`0(false)`:Do not include hidden columns in download (`default`)
`1(true)`:Include hidden columns in "column hide" form in download|
!-->


### Return Value
***none***

### Example
```javascript
var param = {
        url:"./apex/yearApexDataList.do",
        extendParam:"year=2019&deptNo=0041",
    fileName:"Annual settlement information.xlsx"
};
sheet.directDown2Excel(param);
```

```java
// directDown2Excel Java Server Module example
String[] sido = { "Seoul", "Suwon", "Seongnam" };
String[] sigungu = { "Gwanak-gu", "Paldal-gu", "Bundang-gu" };

List<Map<String, Object>> data = new ArrayList<>();

for (int i = 0; i < sido.length(); i++) {
  Map<String, Object> row = new HashMap<>();

  row.put("sSido", sido[i]);
  row.put("sSiGunGu", sigungu[i]);

  data.add(row);
}

request.setAttribute("SHEETDATA", data);

String forwardPath = "./DirectDown2Excel.jsp";
if (!"".equals(forwardPath)) {
  RequestDispatcher rd = request.getRequestDispatcher(forwardPath);
  rd.forward(request, response);
}
```

```cs
// directDown2Excel .NET Server Module example
// Search data from DB to be downloaded as Excel
String connectionString = "Provider=Microsoft.JET.OLEDB.4.0;data source=C:\\mdb\\bussinessList.mdb";
String query = "SELECT * FROM bussinessList";

OleDbConnection conn = new OleDbConnection(connectionString);
OleDbCommand cmd = new OleDbCommand(query, conn);
conn.Open();

OleDbDataReader reader = cmd.ExecuteReader();

// Convert data to List(Dictionary -> Object) form.
// When creating Dictionary data, the name must match the sheet's SaveName.
List<Object> li = new List<object>();
while (reader.Read()) {
  Dictionary<String, String> row = new Dictionary<string, string>();
  for (int i = 0; i < reader.FieldCount; i++) {
    row[reader.GetName(i)] = reader.GetValue(i).ToString();
  }

  li.Add(row);
}

reader.Close();
conn.Close();

this.Context.Items["SHEETDATA"] = li;

// Forwarding to DirectDown2Excel.aspx page
String forwardPath = "./DirectDown2Excel.aspx";
if(forwardPath != "") {
  Server.Execute(forwardPath);
}

```

### Read More
- [down2Excel method](./down-to-excel)
- [onBeforeExport event](/docs/events/on-before-export)
- [onExportFinish event](/docs/events/on-export-finish)

### Since

|product|version|desc|
|---|---|---|
|excel|0.0.0|Feature added|
|excel|0.0.8|`reqHeader` Feature added|
