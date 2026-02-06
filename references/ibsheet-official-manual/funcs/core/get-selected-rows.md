---
KEY: getSelectedRows
KIND: method
PATH: funcs/core/get-selected-rows
ALIAS: sheet.getSelectedRows, getSelectedRows()
ALIAS_EN: returns, selected, row, objects, getselectedrows, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-selected-rows
---
# getSelectedRows ***(method)***
> Returns selected row objects.

> Depending on the type argument, can extract rows selected by cell unit or rows selected by entire row.

> Through the attr argument, can extract only rows with a specific attribute among selected rows.

### Syntax
```javascript
object getSelectedRows( type , attr );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|type|`number`|Optional|`0`:Extract all selected by row or cell (`default`)
`1`:Extract only row-unit selections
`2`:Extract only cell-unit selections|
|attr|`string`|Optional|Property name to check|

### Return Value
***array[row object]*** : Selected [data row object](/docs/appx/row-object) (array form)

### Example
```javascript
// Select partial rows
sheet.setAttribute(sheet.getRowById("AR5"), null, "Selected", 1, 1);
sheet.setAttribute(sheet.getRowById("AR10"), "RENTFEE", "Selected", 1, 1);
// Select partial area
sheet.selectRange(sheet.getRowById("AR6"),"CARNO",sheet.getRowById("AR8"),"PROMOCODE");
// Change row's Edit property
sheet.setAttribute(sheet.getRowById("AR7"), null, "CanEdit", 0, 1);


// Extract selected rows (Selected=1)
var rows = sheet.getSelectedRows(1); //["AR5" , "AR10"]

// Extract selected cells
var rows = sheet.getSelectedRows(2); //["AR6" , "AR7" , "AR8"]

// Extract all selected cells and rows
var rows = sheet.getSelectedRows(0); //["AR5" , "AR6" , "AR7" , "AR8" , "AR10"]

// Extract data row objects with CanEdit=1 among selected cells and rows
var rows = sheet.getSelectedRows(0, "CanEdit"); //["AR5" , "AR6" , "AR8" , "AR10"]
```

### Read More
- [getSelectedRanges method](./get-selected-ranges)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
