---
KEY: getRowTop
KIND: method
PATH: funcs/core/get-row-top
ALIAS: sheet.getRowTop, getRowTop()
ALIAS_EN: checks, coordinate, value, within, data, rows, getrowtop, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-row-top
---
# getRowTop ***(method)***
> Checks the y-coordinate value within data rows.

> Returns `0` for the topmost row.


### Syntax
```javascript
number getRowTop( row );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|Required|[data row object](/docs/appx/row-object)|

### Return Value
***number*** : y-coordinate of the row based on the top of the data area (pixel unit)

### Example
```javascript
// Get the RowTop value of the selected row.
var w = sheet.getRowTop( sheet.getFocusedRow() );
```

### Read More
- [getBodyHeight method](./get-body-height)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
