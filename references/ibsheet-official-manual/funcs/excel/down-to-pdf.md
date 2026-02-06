---
KEY: downToPdf
KIND: method
PATH: funcs/excel/down-to-pdf
ALIAS: sheet.downToPdf, downToPdf()
ALIAS_EN: downloads, sheet, contents, pdf, file, down, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/excel/down-to-pdf
---
# down2Pdf ***(method)***

> Downloads the sheet's contents as a PDF file.

> This function sends the sheet's contents to the `Down2Pdf.jsp` file included with the product, and the file creates the PDF file and sends it back to the client.

> Therefore, to use this function, `Down2Pdf.jsp` along with the `ibsheet8-x.x.x.jar` file and `ib-itext library` are required.


> **<mark>Note</mark>: MultiRecord([MultiRecord](/docs/props/cfg/multi-record)) is limited in sheets using this feature**

> **<mark>Note</mark>: To use this feature, the `/plugins/ibsheet-excel.js` file provided with the distribution must be included.**


> The path for the `Down2Pdf.jsp` file is set through the `Cfg` `Export` property.

> Instead of setting the `Export` attribute every time a sheet is created, you can set it commonly for all sheets using the [IBSheet.CommonOptions](/docs/static/common-options) attribute.

> To summarize, the following steps are required.

**Java Server Module**

1. Add the `ibsheet8-1.0.x.jar` file and `Common library(ib-itext.jar)` to WEB-INF/lib.
2. The `/plugins/ibsheet-excel.js` file must be included in the page.
3. Set the path for the `Down2Pdf.jsp` file through the `Cfg` `Export` property when creating a sheet.
4. Set the font path in the `Down2Pdf.jsp` file.

**.NET Server Module**

1. Add the `IBSheet8-4.0.dll` file to bin or reference.
2. The `/plugins/ibsheet-excel.js` file must be included in the page.
3. Set the path for the `Down2Pdf.aspx` file through the `Cfg` `Export` property when creating a sheet.
4. Set the path where `wkhtmltopdf.exe` and fonts are located in the `Down2Pdf.aspx` file.

### Syntax
```javascript
void down2Pdf( param );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|fileName|`string`|Optional|PDF filename to create. The file extension must be `.pdf`.
If the extension is omitted, `.pdf` is automatically appended for download. (`default: "ibsheet.pdf"`) |
|downCols|`string`|Optional|Downloads only the specified columns.
Without separate settings, all columns are downloaded.
 If you want to download only visible columns, set it to `"Visible"`.
(ex: "Price\|AMT\|TOTAL" format string column)|
|dpi|`number`|Optional|Zoom ratio; smaller values result in larger output.
Can be set to a value between 50~32840. (`default: 2000`)|
|fontTo|`string`|Optional|Sets the Korean font to use in the PDF.
Select from "Gothic" or "Gulim" (`default: "Gulim"`)

**<mark>Note</mark> : The `Gothic` font is not included in the server module product.**|
|paper|`string`|Optional|Sets the paper orientation.
Landscape: `landscape` or Portrait: `portrait` (`default: "portrait"`)|
|title|`string`|Optional|Sets the title to output in the PDF file (`default: ""`)

**<mark>Note</mark> : This feature is not supported in the .NET Server Module.** |
|titleStyle|`string`|Optional|CSS style to apply to the title output in the PDF file (`default: ""`)|
|url|`string`|Optional|When there is additional content that the server needs to process besides `down2Pdf`, if a URL is provided, the page set in the URL argument is called first before `Down2Pdf.jsp` is called.
 Therefore, after processing is completed on the set page, the request must be sent to the `Down2Pdf.jsp` page. (`default: ""`)|
|extendParam|`string`|Optional|When there is content that must be sent to the server, set it by connecting as a `GET` method QueryString (`default: ""`)|
|extendParamMethod|`string`|Optional|Sets the method for sending extendParam (`default: "POST"`)|
|reqHeader|`object`|Optional|Sets user-specified header information in the server transmission header.|
|useXhr|`boolean`|Optional| Download file using xhr communication.
`0(false)`:xhr communication not used (`default`)
`1(true)`:xhr communication used|
<!--!
|`[Private]` wordWrap|`boolean`|Optional|(`default: 0`)|
!-->

### Return Value
***none***

### Example
```javascript
  var param = {
    fileName: "John Doe Transportation details.pdf",
    title: "John Doe Transportation details",
    titleStyle: "color:red; font-size:100px;"
  };

  sheet.down2Pdf(param);
```

### Read More
- [doPrint method](/docs/funcs/core/do-print)
- [CanPrint row](/docs/props/row/can-print)
- [CanPrint col](/docs/props/col/can-print)
- [onBeforeExport event](/docs/events/on-before-export)
- [onExportFinish event](/docs/events/on-export-finish)


### Since

|product|version|desc|
|---|---|---|
|excel|0.0.0|Feature added|
|excel|0.0.8|`reqHeader` Feature added|
