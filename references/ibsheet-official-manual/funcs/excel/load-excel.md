---
KEY: loadExcel
KIND: method
PATH: funcs/excel/load-excel
ALIAS: sheet.loadExcel, loadExcel()
ALIAS_EN: imports, contents, excel, file, onto, sheet, loadexcel, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/excel/load-excel
---
# loadExcel ***(method)***

> Imports the contents of an Excel file onto the sheet.

> When this function is called, a file dialog appears, and when the user selects an Excel file, the selected file is sent to the server-side specified jsp (typically `LoadExcel.jsp`) file.

> The `LoadExcel.jsp` file that receives the file parses the Excel file and returns it as a JSON string to the client.

> **To use this feature, the `/plugins/ibsheet-excel.js` file provided with the distribution must be included.** 

> 

> The file path for `LoadExcel.jsp` must be set through the [Export](/docs/props/cfg/export) property inside the Cfg property.

> Instead of setting the Export attribute every time a sheet is created, [IBSheet.CommonOptions](/docs/static/common-options) you can set it commonly for all sheets in the attribute.

> To summarize, the following steps are required.

**Java Server Module**

1. Add `ibsheet8-1.0.x.jar` file and related `server library (POI jar file)` to WEB-INF/lib.
2. `/plugins/ibsheet-excel.js` file must be included in the page.
3. Set the path to the `LoadExcel.jsp` file through the `(cfg)Export` property when creating a sheet.

**.NET Server Module**

1. Add `IBSheet8-4.0.dll` file and `Common library (Syncfusion dll)` to bin or reference.
2. `/plugins/ibsheet-excel.js` file must be included in the page.
3. Set the path to the `LoadExcel.aspx` file through the `(cfg)Export` property when creating a sheet.

### Syntax
```javascript
void loadExcel( param );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|append|`boolean`|Optional|Whether to append Excel data after the sheet's existing data.
If not set, all existing data is deleted before Excel data is added.
`0(false)`:Add Excel data after removing existing data (`default`)
`1(true)`:Append Excel data to existing data|
|fileExt|`string`|Optional|Sets uploadable file extensions connected with delimiter ("\|"). (`default: "xls|xlsx"`)|
|maxFileSize|`string`|Optional|Maximum uploadable file size. (In MB units; if not set, unlimited.)|
|mode|`string`|Optional| Enter one string among `"HeaderMatch"`, `"NoHeader"`, `"HeaderSkip"`.
The meaning of each string is as follows.
<ul><li>`"HeaderMatch"` : Reads titles from the first row of the Excel file and compares them with the sheet's header row titles.
 If the `StartRow` attribute is specified, it reads rows starting from the row specified in `StartRow` for as many rows as the header row count and compares them.</li><li>`"NoHeader"` : No header row; assigns data to each column in order starting from the first row.</li><li>`"HeaderSkip"` : Reads in order from the left without column comparison even when a header row exists. Skips rows above the header in Excel and reads from below.</li><li>`"FullLoad"` : Loads all worksheets from the file in 'NoHeader' mode into the upload dialog. (See description below)</li></ul>(`default: "HeaderMatch"`)|
| next | `object` | Optional | [data row object](/docs/appx/row-object)
Appends data above the specified row. (Only available when `append:1(true)`)|
|startRow|`number`|Optional|Sets which row in the Excel sheet to start from. If not set, reads from the first row of Excel (starting from 1).|
|startCol|`number`|Optional|Sets which column in the Excel sheet to start from. If not set, reads from the first column of Excel (starting from 1). 
 For `mode: HeaderMatch`, when a sheet is found (e.g., at position 7,12), setting only `startRow: 7` is sufficient because it reads the text for the length of that row's header, so `startCol` does not need to be set. However, when using `startCol`, it is applied so that the sheet starts from the `startCol` column counting from the first column of Excel.|
|workSheetName|`string`|Optional|Sets the worksheet name of the Excel file to read. If no matching worksheet name is found, the first worksheet is read.|
|workSheetNameStrict|`boolean`|Optional|When the worksheet set by workSheetName does not exist, returns error code -17 instead of loading the first worksheet.
`0(false)`:Load the first worksheet when the worksheet set by workSheetName does not exist (`default`)
`1(true)`:Return error code -17 when the worksheet set by workSheetName does not exist|
|workSheetNo|`number`|Optional|Sets the worksheet order number of the Excel file to read. If not set, reads the first worksheet.|
|columnMapping|`string`|Optional|Option to load data according to the sheet's column order using Excel column numbers. Set by connecting with delimiter ("\|"). (Starting from 1) The mode property value is ignored.|
|sendParam|`object`|Optional|Sets parameters to send to the server when loading Excel.|
|endRow|`number`|Optional|Sets which row in the Excel file to read up to. If not set, reads to the end. Starting from 0.|
|reqHeader|`object`|Optional|Sets user-specified header information in the server transmission header.|
|skipEmptyRow|`boolean`|Optional|Whether to skip empty rows when loading Excel.
`0(false)`:Include empty row information in Excel loaded data
`1(true)`:Exclude empty row information from Excel loaded data (`default`)|
|workbookPassword|`string`|Optional|Option to use when the Excel file to read has a password set. 
 Only for xlsx extension files.|
|useXhr|`boolean`|Optional|Load Excel file using xhr communication.
`0(false)`:xhr communication not used (`default`)
`1(true)`:xhr communication used|
|uploadImage|`boolean`|Optional|Whether to upload images displayed on top of cells. 
 `0(false)`: Do not upload images displayed on top of cells 
`1(true)`:Upload images displayed on top of cells (`default`)|
|skipSEQ|`boolean`|Optional|When uploading data with mode: `NoHeader` or `HeaderSkip`, skips the SEQ column and uploads data. Does not work when `columnMapping` is set. (`default: 0`)|
|activeSheet|`boolean`|Optional|Uploads the active worksheet when uploading Excel.|
<!--!
|`[Private]` useDOM|`boolean`|Optional|Sets the parsing method for `xlsx` format Excel files in Java Server Module.
`0(false)`: Uses SAX method. This method is suitable for large-volume processing. However, **format errors** may occur. (`default`)
`1(true)`: Uses DOM method. Processing speed is slower compared to SAX method, but loading fits the format. Also, compatibility between `xls` and `xlsx` is better.|
!-->

### FullLoad mode

![FullLoad mode](/assets/imgs/loadexcel_mode_fullload.png "FullLoad mode")
<!-- IMAGE: Screenshot/Example Image - FullLoad mode -->

`FullLoad` mode is a mode that loads all worksheets in the file in 'NoHeader' state into the upload dialog when uploading Excel. 

After selecting one of the loaded worksheets and clicking the check button, the selected worksheet can be loaded into the original sheet. 

**To use `FullLoad` mode, the dialog plugin must be version `1.0.11` or later, the server module must be version `1.1.21` or later, and the Excel plugin must be version `1.0.21` or later.**


### Return Value
***none***

### Example
```javascript
// mode HeaderMatch, starting from the 5th row of Excel, load Excel with worksheet name "December Settlement"
var param = {startRow:5, mode:"HeaderMatch", workSheetName:"December Settlement"};
sheet.loadExcel(param);

// mode HeaderSkip, starting from the 4th row and 3rd column of Excel.
var param = {startRow:4, startCol:3, mode:"HeaderMatch"}
sheet.loadExcel(param);

// Loading the value of the 5th Excel column into IBSheet's first column, and loading the value of the 1st Excel column into IBSheet's 5th column
sheet.loadExcel({columnMapping:"5|4|3|2|1"});
```

### Read More
- [LoadExcelConfig cfg](/docs/props/cfg/load-excel-config)
- [loadText method](./load-text)
- [down2Excel method](./down-to-excel)
- [down2Text method](./down-to-text)
- [onImportFinish event](../events/on-import-finish)
- [onSelectFile event](../events/on-select-file)

### Since

|product|version|desc|
|---|---|---|
|excel|0.0.0|Feature added|
|excel|0.0.8|`reqHeader` Feature added|
|excel|1.0.12|`workSheetNameStrict` Feature added|
|dialog|1.0.11|`FullLoad` Feature added (`servermodule`: 1.1.21, `excel`: 1.0.21)|
|excel|1.1.8|`next` Feature added|
|excel|1.1.23|`uploadImage` Feature added (`servermodule`: 2.0.2)|
|excel|1.1.31|`skipSEQ` Feature added (`servermodule`: 2.0.13)|
|excel|1.1.32|`activeSheet` Feature added (`servermodule`: 2.0.15)|
