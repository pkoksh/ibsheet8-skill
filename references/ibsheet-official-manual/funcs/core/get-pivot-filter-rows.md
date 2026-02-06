---
KEY: getPivotFilterRows
KIND: method
PATH: funcs/core/get-pivot-filter-rows
ALIAS: sheet.getPivotFilterRows, getPivotFilterRows()
ALIAS_EN: function, retrieves, original, sheet, rows, compose, specific, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-pivot-filter-rows
---
# getPivotFilterRows ***(method)***

> A function that retrieves the original sheet's rows that compose a specific cell's data in the pivot sheet.

> <mark>**Note: This API removes the original sheet's filter content. The original sheet's filter content may change when using this API.**</mark>

### Syntax
```javascript
object getPivotFilterRows( row, col );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|Required|[data row object](/docs/appx/row-object)|
|col |`string`|Required|column name|


### Return Value
***array[row object]*** : Array of filtered original sheet [data row object](/docs/appx/row-object)s

### Example

```js
var focusRow = pivotSheet_sheet.getFocusedRow();
var focusCol = pivotSheet_sheet.getFocusedCol();

// Retrieve the rows that compose the pivot data
var datas = pivotSheet_sheet.getPivotFilterRows(focusRow, focusCol);
```

### Read More

- [makePivotTable method](./make-pivot-table)
- [switchPivotSheet method](./switch-pivot-sheet)
- [ClickPivotFilter](/docs/props/cfg/click-pivot-filter)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.28|Feature added|
