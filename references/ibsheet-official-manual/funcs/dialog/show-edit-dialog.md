---
KEY: showEditDialog
KIND: method
PATH: funcs/dialog/show-edit-dialog
ALIAS: sheet.showEditDialog, showEditDialog()
ALIAS_EN: displays, contents, single, row, dialog, column, format, showeditdialog
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/dialog/show-edit-dialog
---
# showEditDialog ***(method)***

> Displays the contents of a single row as a dialog in column format.

> Values can be modified within the dialog, but `Formula` and `Related` (relational Enum) do not work.

> (It is recommended to use this as a quick review/verification purpose within the dialog.)

> <mark>This function requires the `"/plugins/ibsheet-dialog.js"` file to be included.</mark>

> Detailed modifications to the dialog can be made through the `ibsheet-dialog.js` file.

###
![download](/assets/imgs/showEditDialog.png)
<!-- IMAGE: Screenshot/Example Image - download -->

### Syntax
```javascript
object showEditDialog( row, width, height, headerIndex, name, excludeHideCol, nav );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|Required|[Data row object](/docs/appx/row-object) to display as a dialog
|width|`number`|Optional|Dialog window width (`default: 700`)|
|height|`number`|Optional|Dialog window height (`default: 400`)|
|headerIndex|`number`|Optional|When the header row has multiple lines, which header row to display as the dialog title
(`default: all header row titles are connected with "/" delimiter and displayed`)|
|name|`string`|Optional|Dialog name (`default: "editSheet_" + sheetid`)|
|excludeHideCol|`boolean`|Optional|Whether to process hidden columns
`0(false)`:Include hidden columns when outputting the dialog (`default`)
`1(true)`:Exclude hidden columns when outputting the dialog|
|nav|`boolean`|Optional|Whether to use navigation feature
`0(false)`:Navigation feature not used (`default`)
`1(true)`:Navigation feature used|

### Return Value
***none***

### Example
```javascript
// Open dialog when a specific column's cell is clicked
options.Events = {
  onClick:function(evtParam){
    if(evtParam.col == "DetailBtn"){
      sheet.showEditDialog(evtParam.row);
      return true;
    }
  }
}

// Object method
sheet.showEditDialog({row: sheet.getFocusedRow(), width: 700, height: 700});
```

### Read More
- [showDialog static](/docs/static/show-dialog)
- [Dialog appendix](/docs/appx/dialog)

### Since

|product|version|desc|
|---|---|---|
|dialog|0.0.0|Feature added|
|dialog|0.0.8|`excludeHideCol` Feature added|
|dialog|0.0.10|`nav` Feature added|
