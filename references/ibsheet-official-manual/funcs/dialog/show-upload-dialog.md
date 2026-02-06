---
KEY: showUploadDialog
KIND: method
PATH: funcs/dialog/show-upload-dialog
ALIAS: sheet.showUploadDialog, showUploadDialog()
ALIAS_EN: dialog, allows, option, selection, uploading, excel, files, showuploaddialog
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/dialog/show-upload-dialog
---
# showUploadDialog ***(method)***
> A dialog that allows option selection when uploading Excel files.

> Among the data loaded in the popup, users can modify partial data.

> Through the checkboxes on the left side, partial rows can be excluded from the data loaded in the popup.

> Not only Excel but also `txt, csv` files can be uploaded, and for `txt` files the column delimiter can be directly selected by the user.

> Also, the `colCount` setting can cause performance issues, so the default value is set to 20.

> The master header's values are displayed in the upload sheet Head in the form of `value/value..`. 

> For example, if `Header` is set to `["Campaign","Start Date"], ["Season","Start Date"]`, then `Enum` is expressed as `"Campaign"/"Start Date", "Season"/"Start Date"`. 

> The master sheet's columns are loaded and `Head - Enum` is created, allowing desired column position swapping. For required items, (required) is appended next to the name.

> For error records, the cell background turns yellow and upload is not performed. The minimum values for width and height are set as default values. 

> <mark>This function requires the `"/plugins/ibsheet-dialog.js"` file to be included.</mark>

###
![download](/assets/imgs/showuploaddialog_recent.png)
<!-- IMAGE: Screenshot/Example Image - download -->

### Syntax
```javascript
void showUploadDialog( uploadType, width, height, name, colCount );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|uploadType|`text`|Required|File type to upload (`'excel'`, `'txt'`, `'csv'`)|
|width|`number`|Optional|Dialog width (`default: 700`)|
|height|`number`|Optional|Dialog height (`default: 400`)|
|name|`string`|Optional|Dialog sheet name (`default: "excelUploadSheet_"+ sheetid`)|
|colCount|`number`|Optional|When the actual Excel file has more columns than needed, only the required number of columns are loaded (`default: 20`)|


### Return Value
***none***

### Example
```javascript
//Create excel upload dialog
sheet.showUploadDialog("excel");

//Create txt upload dialog
sheet.showUploadDialog("txt");

//Object format
sheet.showUploadDialog({
  uploadType:"excel",
  colCount: 25
});
```
### Read More
- [showDialog static](/docs/static/show-dialog)
- [Dialog appendix](/docs/appx/dialog)
- [loadExcel method](/docs/funcs/excel/load-excel)
- [loadText method](/docs/funcs/excel/load-text)
- [showDownloadDialog method](./show-download-dialog)

### Since

|product|version|desc|
|---|---|---|
|dialog|0.0.2|Feature added and modified to support `Cfg.MultiRecord` feature when uploading sheet|
