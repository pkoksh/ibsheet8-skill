---
KEY: switchPivotSheet
KIND: method
PATH: funcs/core/switch-pivot-sheet
ALIAS: sheet.switchPivotSheet, switchPivotSheet()
ALIAS_EN: switches, pivot, table, result, sheet, original, data, according
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/switch-pivot-sheet
---
# switchPivotSheet ***(method)***

> Switches between the pivot table result sheet and the original data sheet according to the pivot argument.



### Syntax
```javascript
void switchPivotSheet(pivot);
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|pivot|`number`|Optional|Select original table or pivot table (`default: 0`)|


### Return Value
***none***

### Example
```javascript
// Switch to the original data sheet of the pivot table
pivotSheet_sheet.switchPivotSheet(0);

// Switch to the pivot table
pivotSheet_sheet.switchPivotSheet(1);

// Remove the pivot table and switch to the original sheet
sheet.PivotSheet.dispose();
sheet.PivotSheet.switchPivotSheet();
delete sheet.PivotSheet;
```

### Read More
- [showPivotDialog method](/docs/funcs/dialog/show-pivot-dialog)
- [makePivotTable method](./make-pivot-table)
<!--!
- `[Private]` [clearPivotSheet method](/docs/funcs/dialog/clear-pivot-sheet)
!-->

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
