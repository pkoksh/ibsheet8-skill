---
KEY: importData
KIND: method
PATH: funcs/core/import-data
ALIAS: sheet.importData, importData()
ALIAS_EN: imports, contents, excel, file, onto, sheet, importdata, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/import-data
---
# importData ***(method)***

> Imports the contents of an Excel file onto the sheet.

> The `jszip` library is required to use this function. 

> The same events as [loadExcel](/docs/funcs/excel/load-excel) can be used. 

> This provides the same features as [loadExcel](/docs/funcs/excel/load-excel) except for features that require server-side processing. 

> When this function is called, a file dialog appears, and the user-selected Excel file is processed on the client side (no server required). 

> Supported file formats are **xlsx, txt, csv** .


### Syntax
```javascript
void importData( param );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|append|`boolean`|Optional|Whether to append Excel data after the sheet's existing data (`default: 0(false)`)
If not set, all existing data is deleted before Excel data is added.
 `Note` This option cannot be used in `SearchMode:4,5 (server paging)` mode.
`0(false)`:Add Excel data after removing existing data (`default`)
`1(true)`:Append Excel data to existing data|
|fileExt|`string`|Optional|Sets the allowed file extensions in the file selection dialog, connected with delimiter ("\|"). (`default: "xlsx"`)|
|mode|`string`|Optional| Enter one string among `"HeaderMatch"`, `"NoHeader"`, `"HeaderSkip"`.
The meaning of each string is as follows.
<ul><li>`"HeaderMatch"` : Reads titles from the first row of the Excel file and compares them with the sheet's header row titles.
 If the StartRow attribute is specified, it reads rows starting from the row specified in StartRow for as many rows as the header row count and compares them.</li><li>`"NoHeader"` : No header row; assigns data to each column in order starting from the first row.</li><li>`"HeaderSkip"` : Reads in order from the left without column comparison even when a header row exists. Skips rows above the header in Excel and reads from below.</li></ul>(`default: "HeaderMatch"`)|
| next | `object` | Optional | [data row object](/docs/appx/row-object)
Appends data above the specified row. (Only available when `append:1(true)`)|
|startRow|`number`|Optional|Sets which row in the Excel sheet to start from. If not set, reads from the first row of Excel (starting from 1). (`default: 1`) (`xlsx only`)|
|startCol|`number`|Optional|Sets which column in the Excel sheet to start from. If not set, reads from the first column of Excel (starting from 1). 
 For `mode: HeaderMatch`, when a sheet is found (e.g., at position 7,12), setting only `startRow: 7` is sufficient because it reads the text for the length of that row's header, so `startCol` does not need to be set.
 However, when using `startCol`, it is applied so that the sheet starts from the `startCol` column counting from the first column of Excel. (`default: 1`) (`xlsx only`)|
|workSheetName|`string`|Optional|Sets the worksheet name of the Excel file to read. If no matching worksheet name is found, the first worksheet is read.|
|workSheetNameStrict|`boolean`|Optional|When the worksheet set by workSheetName does not exist, returns error code -17 instead of loading the first worksheet.
`0(false)`:Load the first worksheet when the worksheet set by workSheetName does not exist (`default`)
`1(true)`:Return error code -17 when the worksheet set by workSheetName does not exist|
|workSheetNo|`number`|Optional|Sets the worksheet order number of the Excel file to read. If not set, reads the first worksheet. (`default: 1`)|
|columnMapping|`string`|Optional|Option to load data according to the sheet's column order using Excel column numbers. Set by connecting with delimiter ("\|"). (Starting from 1)
 When using column mapping with `mode: HeaderMatch`, the `HeaderMatch` feature is ignored and operates like `HeaderSkip`. (`xlsx only`)|
|colSeparator|`string`|Optional|Delimiter string between columns. For txt upload (`default: \t(tab)`), for csv upload (`default: ,(comma)`). The default delimiter changes according to the uploaded file. `(txt, csv only)`|
|encoding|`string`|Optional|Specifies the encoding format of the text file. `(txt, csv only)` (`default: "utf-8"`)|
|endRow|`number`|Optional|Sets which row in the Excel file to read up to. If not set, reads to the end. Starting from 0.|
|file|`object`|Optional|Directly reads Excel data from a file object or Blob object. (`xlsx only`)
 When this argument is used, the file dialog does not appear.|
|uploadImage|`boolean`|Optional|Whether to upload images displayed on top of cells. 
 `0(false)`: Do not upload images displayed on top of cells 
`1(true)`:Upload images displayed on top of cells (`default`)|
|skipSEQ|`boolean`|Optional|When uploading data with mode: `NoHeader` or `HeaderSkip`, skips the SEQ column and uploads data. Does not work when `columnMapping` is set. (`default: 0`)|
<!--!
|`[Private]`fileType|`string`|Optional|Specifies the file extension when uploading Excel data through the file argument. `(xlsx, csv, txt)` (`default: xlsx`)|
!-->


### Return Value
***none***

### Example
```javascript
// Upload when worksheet name is "sheet" and mode: "HeaderMatch", with Excel sheet starting from the 3rd row
var param = {startRow:3, mode:"HeaderMatch", workSheetName:"sheet"};
sheet.importData(param);

// Upload with mode: "HeaderSkip", starting from the 3rd row and 3rd column of Excel sheet
var param = {startRow:3, startCol:3, mode:"HeaderSkip"};
sheet.importData(param);

// Upload with mode: "NoHeader", 4th worksheet, starting from the 7th row and 3rd column of Excel sheet
var param = {startRow:7, startCol:3, mode:"NoHeader", workSheetNo:4};
sheet.importData(param);

// Upload Excel columns 1-5 in the order of sheet columns 3,4,5,2,1
var param = {columnMapping: "3|4|5|2|1"}
sheet.importData(param);

// Text upload using file extension
var param = {fileExt:"csv|txt"};
sheet.importData(param);
```

### Read More
- [exportData method](./export-data)
- [loadExcel method](/docs/funcs/excel/load-excel)
- [onSelectFile event](/docs/events/on-select-file)
- [onImportFinish event](/docs/events/on-import-finish)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|Feature added|
|core|8.0.0.20|`endRow` Feature added, File format content added|
|core|8.1.0.20|`file` Feature added|
|core|8.1.0.33|`workSheetNameStrict` Feature added|
|core|8.2.0.14|`next` Feature added|
|core|8.3.0.22|`uploadImage` Feature added|
|core|8.3.0.45|`skipSEQ` Feature added|
<!--!
|`[Private]`core|8.1.0.20| `fileType` Feature added|
!-->
