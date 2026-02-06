---
KEY: showDownloadDialog
KIND: method
PATH: funcs/dialog/show-download-dialog
ALIAS: sheet.showDownloadDialog, showDownloadDialog()
ALIAS_EN: opens, dialog, window, downloading, sheet, contents, excel, text
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/dialog/show-download-dialog
---
# showDownloadDialog ***(method)***

> Opens a dialog window for downloading the sheet's contents in Excel or Text format.

> This feature requires `Cfg.Export.Url` `jsp(aspx)` file path to be set.

> <mark>This function requires the `"/plugins/ibsheet-dialog.js"` file to be included.</mark>

> Detailed modifications to the dialog can be made through the `ibsheet-dialog.js` file.

<!--!


> **<mark>Note</mark>: Not supported with the [UseSpreadSheet](/docs/props/cfg/use-spread-sheet) feature.**
!-->

### Detailed Description
> The same feature is available when calling `sheet.showDownloadDialog()`.

> Using the `rowchk` argument, when set to `1(default)` a row selection column is created, when set to `0` no row selection column is created. 

> The `title` argument allows you to input a desired title name. When not provided, the default title name "File Download" is used. 

> The `title` can use `HTML tags`. ex) `Internal Regular Employee Support List` 

> When `downParams.downCols` value is set to `"Visible"`, only columns with `Visible:1` are displayed in the dialog.


![download](/assets/imgs/DownloadDialog.png)
<!-- IMAGE: Screenshot/Example Image - download -->

### Syntax
```javascript
void showDownloadDialog(width, height, name, rowchk, title, downParams);
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|width|`number`|Optional|Dialog window width (`default: 700`)|
|height|`number`|Optional|Dialog window height (`default: 400`)|
|name|`string`|Optional|Dialog sheet name (`default: "excelDownloadSheet_" + sheetid`)|
|rowchk|`number`|Optional|Row selection column feature usage (`default: 1`)|
|title|`string`|Optional|Dialog title (`default: "File Download"`)|
|downParams|`object`|Optional|All [down2Excel](/docs/funcs/excel/down-to-excel) arguments are available
|

### Return Value
***none***

### Example
```javascript
// Open download dialog
sheet.showDownloadDialog(600, 400);

// Object method
sheet.showDownloadDialog({
  width: 600,
  height: 400,
  name: "excelDownSheet",
  downParams: {
  titleText:"||2020 April Transportation\r\n|||||||John Doe",
    userMerge:"0,2,1,4",
    downCols:"Visible"
  }
});
```

### Read More
- [showDialog static](/docs/static/show-dialog)
- [Dialog appendix](/docs/appx/dialog)
- [down2Excel method](/docs/funcs/excel/down-to-excel)
- [down2Text method](/docs/funcs/excel/down-to-text)
- [showUploadDialog method](./show-upload-dialog)

### Since

|product|version|desc|
|---|---|---|
|dialog|0.0.0|Feature added|
|dialog|0.0.2|Modified to support `Cfg.MultiRecord` feature when downloading sheet|
|dialog|0.0.3|Name changed from `showExcelDownloadDialog` to `showDownloadDialog`|
|dialog|0.0.5|Changed displayed columns when `downParams.downCols` value is set to `"Visible"`|
