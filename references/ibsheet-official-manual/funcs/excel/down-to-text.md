---
KEY: downToText
KIND: method
PATH: funcs/excel/down-to-text
ALIAS: sheet.downToText, downToText()
ALIAS_EN: downloads, sheet, contents, txt, file, csv, down, text
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/excel/down-to-text
---
# down2Text ***(method)***

> Downloads the sheet's contents as a `txt` file or `csv` file.

> This function sends the sheet's contents to the `Down2Text.jsp` file, and the file creates the actual `txt file (or csv)` and sends it to the client.

> Therefore, to use this function, for Java Server Module, `Down2Text.jsp` along with the `ibsheet8-1.0.x.jar` file and `apache POI library` are required, and for .NET Server Module, `Down2Text.aspx` along with the `IBSheet8-4.0.dll` file and `Syncfusion library dll` are required.
> **To use this feature, the `/plugins/ibsheet-excel.js` file provided with the distribution must be included.**
>
> The path to the `Down2Text.jsp` file must be set through the Cfg `Export` property.

> Instead of setting the `Export`attribute every time a sheet is created, [IBSheet.CommonOptions](/docs/static/common-options) you can set it commonly for all sheets in the attribute.

> To summarize, the following steps are required.

**Java Server Module**

1. Add `ibsheet8-1.0.x.jar` file and `Common library(POI jar)` to WEB-INF/lib.
2. `/plugins/ibsheet-excel.js` file must be included in the page.
3. Set the path to the `Down2Text.jsp` file through the `Cfg` `Export` property when creating a sheet.

**.NET Server Module**

1. Add `IBSheet8-4.0.dll` file and `Common library(Syncfusion dll)` to bin or reference.
2. `/plugins/ibsheet-excel.js` file must be included in the page.
3. Set the path to the `Down2Text.aspx` file through the `Cfg` `Export` property when creating a sheet.

### Syntax
```javascript
void down2Text( param );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|fileName|`string`|Optional|Downloaded filename. If no extension is set, it downloads as a `txt` file.|
|rowDelim|`string`|Optional|Row delimiter for text files (default line break string: `"\r\n"`)
|colDelim|`string`|Optional|Column delimiter for txt download (`default: \t (tab character)`), for csv download (`default: ,(comma)`). The default delimiter changes according to the uploaded file.
|downRows|`string`|Optional|Downloaded row index (connected with delimiter "\|" ex: "1\|3\|4\|5\|7")|
|downCols|`string`|Optional|Downloaded column Name (connected with delimiter "\|" ex: "amt\|qty1\|qty2\|qty3\|years")|
|downHeader|`boolean`|Optional|Whether to include header row in download
`0(false)`:Do not include header row in download
`1(true)`:Include header row in download (`default`)|
|downSum|`boolean`|Optional|Whether to include total row in download
`0(false)`:Do not include total row in download
`1(true)`:Include total row in download (`default`)|
|downTreeHide|`boolean`|Optional|When using tree, whether to include collapsed rows in download.
`0(false)`:Exclude collapsed rows (child nodes) from download target (`default`)
`1(true)`:Include collapsed rows (child nodes) in download target|
|reqHeader|`object`|Optional|Sets user-specified header information in the server transmission header.|
|downloadEncoding|`string`|Optional|Specifies the encoding format of the downloaded text file. When set to UTF-8(BOM), the text file is downloaded in UTF-8 encoding with BOM inserted. (`default: "txt: UTF-8, csv: EUC-KR"`)|
|extendParam|`string`|Optional|When there is content that must be sent to the server, it is connected as `GET` method `QueryString` and sent together to the server.
 (ex: `sheet.down2Excel({extendParam: "sido=Seoul&sigungu=Gwanak-gu"}`)|
|extendParamMethod|`string`|Optional|Sets whether to send `extendParam` content via `GET` or `POST`. (`default: "GET"`)|
|useXhr|`boolean`|Optional|Download file using xhr communication.
`0(false)`:xhr communication not used (`default`)
`1(true)`:xhr communication used|
<!--!
|`[Private]` downCombo|`string`|Optional|Sets the format for downloading `Enum` type select items using `Enum` property and `EnumKeys` property.
 `TEXT`: Downloaded using `Enum` property. (`default`)
 `CODE`: Downloaded using `EnumKeys` property.|
!-->

### Return Value
***none***

### Example
```javascript
//1. Download with text extension
sheet.down2Text({fileName:"yearsProfit.txt"});


//2. Download with csv extension
sheet.down2Text({fileName:"yearsProfit.csv", colDelim:","});
```

### Notes when setting downloadEncoding

![downloadEncoding_utf_8](/assets/imgs/downloadencoding_utf_8.png "downloadEncoding_utf_8")
<!-- IMAGE: Screenshot/Example Image - downloadEncoding_utf_8 -->

When setting `downloadEncoding` to `UTF-8` and downloading a csv file, Korean characters may appear broken when opening with Excel. 

To prevent broken Korean characters when opening with Excel while applying `UTF-8` encoding, set `downloadEncoding` to `UTF-8(BOM)` (available with server module version 1.1.18 or later).

### Regarding default encoding for csv download

From Excel plugin version 1.0.21 onwards, the default encoding format for csv download was changed from EUC-KR to UTF-8(BOM). 

Since this encoding format is supported from server module version 1.1.18 onwards, when using Excel plugin version 1.0.21 and the down2Text feature, you must either upgrade the server module to version 1.1.18 or later, or separately set the downloadEncoding option to a value other than UTF-8(BOM).

### Read More
- [AutoExcelMode cfg](/docs/props/cfg/auto-excel-mode)
- [down2Excel method](./down-to-excel)
- [exportData method](/docs/funcs/core/export-data)
- [loadText method](./load-text)
- [onBeforeExport event](/docs/events/on-before-export)
- [onExportFinish event](/docs/events/on-export-finish)

### Since

|product|version|desc|
|---|---|---|
|excel|0.0.0|Feature added|
|excel|0.0.8|`reqHeader` Feature added|
|servermodule|1.1.18|`downloadEncoding: UTF-8(BOM)` setting added|
|excel|1.0.21|Default encoding format for csv download changed from `EUC-KR` to `UTF-8(BOM)`|
