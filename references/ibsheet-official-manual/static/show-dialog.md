---
KEY: showDialog
KIND: static-member
PATH: static/show-dialog
ALIAS_EN: creates, dialog, layer, popup, provided, sheet, showdialog, static
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/static/show-dialog
---
# showDialog ***(static)***

> Creates a dialog (layer popup) provided by the sheet.

### Syntax
```javascript
object IBSheet.showDialog(dialog, pos);
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|dialog|`object`|Required|Initialization settings for the `dialog` (Refer to [Dialog appendix](/docs/appx/dialog))|
|pos|`object`|Optional|Position where the menu will be displayed (Refer to [Position appendix](/docs/appx/position))|

### Return Value
***object*** : Dialog object

### Example
```javascript
// Display a dialog like an alert in the center of the screen.
var dlg = {
  "Head": "IBSheet Warning",
  "Body": "<div>The selected date is after the deadline. Please select again.</div>",
  "Modal": 1,
  "CloseClick": 1,
  "MinHeight": 50
};
IBSheet.showDialog(
  dlg ,
  {"Align":"center, middle", "Width":document.body.clientWidth, "Height":document.body.clientHeight}
);
```
### Read More

- [showDialog method](/docs/funcs/core/show-dialog)
- [showDownloadDialog method](/docs/funcs/dialog/show-download-dialog)
- [showEditDialog method](/docs/funcs/dialog/show-edit-dialog)
- [showFindDialog method](/docs/funcs/dialog/show-find-dialog)
- [showPivotDialog method](/docs/funcs/dialog/show-pivot-dialog)
- [showUploadDialog method](/docs/funcs/dialog/show-upload-dialog)
- [Dialog appendix](/docs/appx/dialog)
- [Position appendix](/docs/appx/position)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
