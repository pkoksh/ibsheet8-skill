---
KEY: loadText
KIND: method
PATH: funcs/excel/load-text
ALIAS: sheet.loadText, loadText()
ALIAS_EN: imports, contents, txt, file, sheet, loadtext, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/excel/load-text
---
# loadText ***(method)***

> Imports the contents of a txt file into the sheet.

> When this function is called, a file dialog opens, and when the user selects a txt (or csv) file, the selected file is sent to the server-side specified jsp (or aspx, such as `LoadText.jsp`). 
 The `LoadText.jsp` parses the txt file and returns the data as a JSON string to the client.

> **To use this feature, the `/plugins/ibsheet-excel.js` file provided with the distribution must be included.**
>
> The file path for `LoadText.jsp` must be set in the Cfg property [Export](/docs/props/cfg/export) Url.

> Instead of setting the `Export` attribute every time a sheet is created, you can set it commonly for all sheets using the [IBSheet.CommonOptions](/docs/static/common-options) attribute.

> Please refer to the `/plugins/ibsheet-common.js` file.
>
> To summarize, the following steps are required.

**Java Server Module**

1. Add the `ibsheet8-1.0.x.jar` file to WEB-INF/lib.
2. The `/plugins/ibsheet-excel.js` file must be included in the page.
3. Set the path for the `LoadText.jsp` file through the `Cfg` `Export` property when creating a sheet.

**.NET Server Module**

1. Add the `IBSheet8-4.0.dll` file to bin or reference.
2. The `/plugins/ibsheet-excel.js` file must be included in the page.
3. Set the path for the `LoadText.aspx` file through the `Cfg` `Export` property when creating a sheet.

### Syntax
```javascript
void loadText( param );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|append|`boolean`|Optional|Whether to append the text file's contents after the sheet's existing data.
If not set, all existing data is deleted before the data is added.
`0(false)`:Remove existing data then add Excel data (`default`)
`1(true)`:Append Excel data to existing data|
|fileExt|`string`|Optional|Sets uploadable file extensions connected with delimiter ("\|"). (`default: "txt\|csv"`)|
|mode|`string`|Optional| Enter one string among `"HeaderMatch"`, `"NoHeader"`, `"HeaderSkip"`.
The meaning of each string is as follows.
<ul><li>`"HeaderMatch"` : Reads titles from the first row of the Excel file and compares them with the sheet's header row titles.
</li><li>`"NoHeader"` : No header row; assigns data to each column in order starting from the first row.</li><li>`"HeaderSkip"` : Reads in order from the left without column comparison even when a header row exists. Skips rows above the header in Excel and reads from below.</li></ul>(`default: "HeaderMatch"`)|
|colSeparator|`string`|Optional|Delimiter string between columns (`default: '\t'(tab character)`)|
|encoding|`string`|Optional|Specifies the text file's encoding format (`default: "utf-8"`)|
|sendParam|`object`|Optional|Sets parameters to send to the server when loading text.|
|reqHeader|`object`|Optional|Sets user-specified header information in the server transmission header.|
|useXhr|`boolean`|Optional| Load file using xhr communication.
`0(false)`:xhr communication not used (`default`)
`1(true)`:xhr communication used|
<!--!
|`[Private]` maxFileSize|`string`|Optional|Sets the maximum uploadable file size. (In MB units; if not set, unlimited.)|
!-->

### Return Value
***none***

### Example
```javascript
//text file upload
var param = {mode:"NoHeader", append:1};
sheet.loadText(param);
```

### Read More
- [loadExcel method](./load-excel)
- [down2Excel method](./down-to-excel)
- [down2Text method](./down-to-text)

### Since

|product|version|desc|
|---|---|---|
|excel|0.0.0|Feature added|
|excel|0.0.8|`reqHeader` Feature added|
