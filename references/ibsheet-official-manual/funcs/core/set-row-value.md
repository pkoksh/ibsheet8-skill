---
KEY: setRowValue
KIND: method
PATH: funcs/core/set-row-value
ALIAS: sheet.setRowValue, setRowValue()
ALIAS_EN: data, per, row, basis, setrowvalue, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-row-value
---
# setRowValue ***(method)***
> Sets data on a per-row basis.

> Data extracted with [getRowValue](/docs/funcs/core/get-row-value) can be set on a per-row basis.


### Syntax
```javascript
object setRowValue( row, data, render, noCalc );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|Required|Target row to set data on|
|data|`object`|Required|Data in JSON format|
|render|`boolean`|Optional|Whether to immediately reflect on screen (`default : true`)
If this feature is set to `0(false)`, you must execute `rerender()` for screen reflection.
`0(false)` : Not reflected
`1(true)` : Immediately reflected |
|calc|`boolean`|Optional|Whether to calculate formulas (`default : true`)
 If this feature is set to `0(false)`, you must execute `calculate()` for formula calculation.
`0(false)` : Not reflected
`1(true)` : Immediately reflected |


### Return Value

***none***

### Example
```javascript
// ================================
// Example: Overwriting row data
// ================================

// Retrieve the 5th row (row object ID is AR5.)
var row = sheet.getRowById("AR5");

// Extract AR5 row's data in JSON format
var data = sheet.getRowValue(row);

// Retrieve the 1st row (row object ID is AR1.)
var targetRow = sheet.getRowById("AR1");

// Overwrite AR1 row's data with AR5 row's values
sheet.setRowValue(targetRow, data);

// ================================
// Example: Updating specific row data with JSON
// ================================

const data = {
  name: "John Doe",
  dept: "General Affairs Dept.",
  salary: 3500000,
  bonus: 500000
};

// Partially update ID "AR1" row data in JSON format
// Column values not included in the JSON object are maintained as-is without being changed.
var targetRow = sheet.getRowById("AR1");
sheet.setRowValue(targetRow, data);

// ================================
// Example: Batch changing multiple header column values
// ================================

//Retrieve the top row
const hr = sheet.getRowById("Header");

sheet.setRowValue({
  row: hr,
  data: {
    SalesToday: "Sales",
    SalesSum: "Sales",
    CostToday: "Cost",
    CostSum: "Cost"
  },
  calc: false
});

// Re-apply merge according to header text changes
sheet.setAutoMerge( {headerMerge:2});
```

### Read More

- [getRowValue](/docs/funcs/core/get-row-value)
- [setValue](/docs/funcs/core/set-value)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.25|Feature added|
|core|8.3.0.45|`render` argument added|
|core|8.3.0.46|`calc` argument added|
