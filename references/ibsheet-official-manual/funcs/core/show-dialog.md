---
KEY: showDialog
KIND: method
PATH: funcs/core/show-dialog
ALIAS: sheet.showDialog, showDialog()
ALIAS_EN: creates, layer, popup, dialog, form, specific, cell, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/show-dialog
---
# showDialog ***(method)***

> Creates a layer popup in dialog form above a specific cell of the sheet.
> For detailed dialog configuration methods, please refer to [appendix DialogReference](/docs/appx/dialog).

### Syntax
```javascript
object showDialog( row, col, dialog, pos, always );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|Required|[Data row object](/docs/appx/row-object) at the position to display the dialog|
|col|`string`|Required|Column name at the position to display the dialog|
|dialog|`object`|Required|Initialization settings for the `dialog` ([appendix DialogReference](/docs/appx/dialog))|
|pos|`object`|Optional|Position offset of the dialog to be displayed ([appendix PositionReference](/docs/appx/position))|
|always|`boolean`|Optional|Behavior when a dialog is already open for the cell
`0(false)`:Toggle dialog open/close (`default`)
`1(true)`:Do not close|

### Return Value
***dialog object*** dialog object

### Example
```javascript
//Open a simple form dialog at the first row.
var opt = {
    row : sheet.getFirstVisibleRow(),
    col : "EMP_NM",
    dialog : {
        "Modal":1,
    "Body":"<div>Severance pay settlement is complete. Do you want to proceed?</div>"
      +"<div><button type='button' onclick='func_process(1)'>Continue</button>"
            +"<button type='button' onclick='func_process(0)'>Cancel</button></div>"
    }
};
sheet.showDialog(opt);

function func_process(b){
    if(b){
    //Continue
        document.forms[0].submit();
    }else{
        //Cancel
        sheet.Dialog.close();
    }
}
```

### Read More
- [showDialog static](/docs/static/show-dialog)
- [Dialog appendix](/docs/appx/dialog)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
