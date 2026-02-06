---
KEY: showSortDialog
KIND: method
PATH: funcs/dialog/show-sort-dialog
ALIAS: sheet.showSortDialog, showSortDialog()
ALIAS_EN: opens, dialog, window, allows, setting, sheet, sort, order
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/dialog/show-sort-dialog
---
# showSortDialog ***(method)***

> Opens a dialog window that allows setting the sheet's sort order.

> When the confirm button is clicked, sorting is performed in the order set in the dialog.

> <mark>This function requires the `"/plugins/ibsheet-dialog.js"` file to be included.</mark>

> Detailed modifications to the dialog can be made through the `ibsheet-dialog.js` file.

###
![download](/assets/imgs/showSortDialog.png)
<!-- IMAGE: Screenshot/Example Image - download -->

### Syntax
```javascript
object showSortDialog( width, height, headerIndex, name, excludeHideCol, useOptions );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|width|`number`|Optional|Dialog window width (`default: 600`)|
|height|`number`|Optional|Dialog window height (`default: 200`)|
|headerIndex|`number`|Optional|When the header row has multiple lines, which header row to display as the dialog's reference column cell value
(`default: all header row titles are connected with "/" delimiter and displayed`)|
|name|`string`|Optional|Dialog name (`default: "sortSheet_" + sheetid`)|
|excludeHideCol|`boolean`|Optional|Whether to process hidden columns
 When set to `true`, hidden columns are not shown in the reference column cell 
`0(false)`:Include hidden columns when outputting the dialog (`default`)
`1(true)`:Exclude hidden columns when outputting the dialog|
|useOptions|`boolean`|Optional|Whether to display additional option setting columns for sorting
When set to `true`, columns for setting [NumberSort](/docs/props/col/number-sort), [RawSort](/docs/props/col/raw-sort), [CaseSensitive](/docs/props/col/case-sensitive) are shown. 
`0(false)`:Additional option setting columns for sorting are hidden when outputting the dialog (`default`)
`1(true)`:Additional option setting columns for sorting are visible when outputting the dialog|

### Return Value
***none***

### Example
```javascript
// Open sort dialog
sheet.showSortDialog(600, 400);

// Object method
sheet.showSortDialog({
  width: 600,
  height: 400,
 excludeHideCol: 1, // Do not use hidden columns as reference columns
 useOptions: 1 // Use additional option feature
});
```

### Read More
- [showDialog static](/docs/static/show-dialog)
- [Dialog appendix](/docs/appx/dialog)
- [NumberSort col](/docs/props/col/number-sort)
- [RawSort col](/docs/props/col/raw-sort)
- [CaseSensitive col](/docs/props/col/case-sensitive)

### Since

|product|version|desc|
|---|---|---|
|dialog|0.0.8|Feature added|
