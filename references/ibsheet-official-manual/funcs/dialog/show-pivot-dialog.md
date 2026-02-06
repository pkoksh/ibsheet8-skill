---
KEY: showPivotDialog
KIND: method
PATH: funcs/dialog/show-pivot-dialog
ALIAS: sheet.showPivotDialog, showPivotDialog()
ALIAS_EN: opens, dialog, checking, pivot, data, showpivotdialog, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/dialog/show-pivot-dialog
---
# showPivotDialog ***(method)***

> Opens a dialog for checking pivot data.

> After setting the columns for pivot data creation by dragging them to the right, clicking the pivot Table creation button dynamically creates a pivot sheet at the original sheet's position.

> <mark>This function requires the `"/plugins/ibsheet-dialog.js"` file to be included.</mark>

> **<mark>Note</mark> : When using the pivot dialog, the filter dialog ([UseFilterDialog (cfg)](/docs/props/cfg/use-filter-dialog)) cannot be used.**

###
![pivotdialog](/assets/imgs/showPivotDialog.png)
<!-- IMAGE: Screenshot/Example Image - pivotdialog -->

### Syntax
```javascript
object showPivotDialog(width, height, name, pivotParams, useStorage);
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|width|`number`|Optional|Dialog window width (`default: 500`)|
|height|`number`|Optional|Dialog window height (`default: 600`)|
|name|`string`|Optional|Dialog name (`default: "pivotDialog_" + sheetid`)|
|pivotParams|`object`|Optional|Uses [makePivotTable method](/docs/funcs/core/make-pivot-table) options
 (`format`, `callback`, `hideTotal` available)|
|useStorage|`boolean`|Optional|Whether to enable the pivot creation information save feature (`default: 0(false)`)
To use this feature, [StorageSession](/docs/props/cfg/storage-session) must be set 
`0(false)`:Pivot creation information save feature not displayed (`default`)
`1(true)`:Pivot creation information save feature displayed|


### Return Value
***none***

### Example
```javascript
//Open pivot dialog
sheet.showPivotDialog();

//Object method
sheet.showPivotDialog({ width: 700, height: 700 });

sheet.showPivotDialog({
      width: 700,
      height: 700,
      pivotParams: {
    format: '#,### Won',
        callback: function (evt) {
          var dataRows = evt.sheet.getDataRows();

          for (var i = 0; i < dataRows.length; i++) {
            if (evt.sheet.getValue(dataRows[i], 'SUMsSalary') > 20000000) {
              evt.sheet.setAttribute(dataRows[i], 'SUMsSalary', 'TextColor', '#FF0000', 1);
              evt.sheet.setAttribute(dataRows[i], 'MainCol', 'Color', '#FF0000', 1);
              evt.sheet.setAttribute(dataRows[i], 'MainCol', 'TextColor', '#FFFFFF', 1);
            } else { evt.sheet.setAttribute(dataRows[i], 'SUMsSalary', 'TextColor', '#0000FF', 1); }
          }
        }
      },
      useStorage: true
    });
```

### Read More
- [makePivotTable method](/docs/funcs/core/make-pivot-table)
- [switchPivotSheet method](/docs/funcs/core/switch-pivot-sheet)
- [showDialog static](/docs/static/show-dialog)
- [Dialog appendix](/docs/appx/dialog)
- [StorageSession cfg](/docs/props/cfg/storage-session)

### Since

|product|version|desc|
|---|---|---|
|dialog|0.0.0|Feature added|
|dialog|0.0.6|`showType` Feature added|
|dialog|0.0.7|`pivotParams` Feature added|
|dialog|0.0.8|Feature name changed (`createPivotDialog` -> `showPivotDialog`)|
|dialog|0.0.11|`useStorage` Feature added|
|dialog|1.0.29|`showPivotDialog` `pivotType` related feature improved|
|dialog|1.0.39|`pivotParams` `hideTotal` parameter Feature added|
