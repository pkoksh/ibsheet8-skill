---
KEY: export
KIND: config-property
PATH: props/cfg/export
ALIAS_EN: ibsheet, export, import, data, xlsx, txt, files, functions
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/export
---
# Export ***(cfg)***

> `IBSheet` can export or import data as `xlsx, txt` files through functions such as [down2Excel()](/docs/funcs/excel/down-to-excel) or [down2Text()](/docs/funcs/excel/down-to-text).

> These operations send the sheet contents to the server side when the function is called, and the server parses the content in the provided `jsp (or aspx)` file to return the file to the client side or load the file contents into the sheet.

> Therefore, to use such functions, you must specify the `Url` for the server-side `jsp module (or aspx)` through this property.

> Only the `Url` property is required; all other properties are optional.


### Type
`object`

### Info
|Name|Type|Description|
|---------|----|-----------|
|Url|`string`|Path to the server module `jsp (Down2Excel.jsp, LoadExcel.jsp, etc.)` file (`required`)
When specifying the directory where the `Down2Excel.jsp` file is located via `Url`, it calls `Down2Excel.jsp` on top of that URL.|
|Down2ExcelUrl|`string`|Forcefully specifies the `URL` to connect to when calling the [down2Excel](/docs/funcs/excel/down-to-excel) function
When this property is set, the `Url` property above is ignored and the `URL` specified by this property is called.|
|LoadExcelUrl|`string`|Forcefully specifies the `URL` to connect to when calling the [loadExcel](/docs/funcs/excel/load-excel) function
When this property is set, the `Url` property above is ignored and the `URL` specified by this property is called.|
|DirectLoadExcelUrl|`string`|Forcefully specifies the `URL` to connect to when calling the [directLoadExcel](/docs/funcs/excel/direct-load-excel) function
When this property is set, the `Url` property above is ignored and the `URL` specified by this property is called.|
|Down2TextUrl|`string`|Forcefully specifies the `URL` to connect to when calling the [down2Text](/docs/funcs/excel/down-to-text) function
When this property is set, the `Url` property above is ignored and the `URL` specified by this property is called.|
|LoadTextUrl|`string`|Forcefully specifies the `URL` to connect to when calling the [loadText](/docs/funcs/excel/load-text) function
When this property is set, the `Url` property above is ignored and the `URL` specified by this property is called.|
|Down2PdfUrl|`string`|Forcefully specifies the `URL` to connect to when calling the [down2Pdf](/docs/funcs/excel/down-to-pdf) function
When this property is set, the `Url` property above is ignored and the `URL` specified by this property is called.|
|down2HwpxUrl|`string`|Forcefully specifies the `URL` to connect to when calling the [down2Hwpx](/docs/funcs/excel/down-to-hwpx) function
When this property is set, the `Url` property above is ignored and the `URL` specified by this property is called.|
|Ext|`string`|Specifies the extension of the server file when setting the `Url` path.
e.g.) `"aspx"` or `"jsp"` (`default: "jsp"`)|
|FilePath|`string`|When using [File](/docs/appx/file-type-upload) type, you can set the file storage path for the retrieved data.
Priority is [Path](/docs/props/cell/path) > `FilePath`.|
<!--!
|Down2HmlUrl|`string`|Forcefully specifies the `URL` to connect to when calling the [down2Hml](/docs/funcs/excel/down-to-hml) function
When this property is set, the `Url` property above is ignored and the `URL` specified by this property is called.|
|DirectDown2ExcelUrl|`string`|Forcefully specifies the `URL` to connect to when calling the [directDown2Excel](/docs/funcs/excel/direct-down-to-excel) function
When this property is set, the `Url` property above is ignored and the `URL` specified by this property is called.|
|`[Private, not working]` Relative|`boolean`|Whether to use relative path. `false: Actual address (absolute path)` / `true: Relative path based on ibsheet.js`|
|`[Private, not working]` Method|`string`|Specifies the communication method when accessing the address. `POST/GET (default: "GET")`|
|`[Private, not working]` Param|`object`|Sets the parameters for data to be sent or received (`object type`)|
|`[Private, not working]` Params|`string`|Sets the parameters for data to be sent or received (`string type`)|
|`[Private, not working]` Header|`object`|Sets custom header information for HTTP headers|
!-->

### Example
```javascript
options.Cfg.Export = {
   Url: '/IBSheet/jsp/',   // Server module path for downloading sheet data as Excel
   FilePath: '/IBSheet/file/' // File type column storage path
};

// When calling the Down2Excel function, the actual URL called is "/IBSheet/jsp/Down2Excel.jsp".
```

### Read More

- [down2Excel method](/docs/funcs/excel/down-to-excel)
- [loadExcel method](/docs/funcs/excel/load-excel)
- [down2Text method](/docs/funcs/excel/down-to-text)
- [loadText method](/docs/funcs/excel/load-text)
- [directDown2Excel method](/docs/funcs/excel/direct-down-to-excel)
- [directLoadExcel method](/docs/funcs/excel/direct-load-excel)
- [down2Hwpx method](/docs/funcs/excel/down-to-hwpx)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|excel|0.0.11|Added `Ext` feature|
|excel|8.1.0.85|Added `down2Hwpx` feature|
