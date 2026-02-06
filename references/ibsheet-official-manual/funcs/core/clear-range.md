---
KEY: clearRange
KIND: method
PATH: funcs/core/clear-range
ALIAS: sheet.clearRange, clearRange()
ALIAS_EN: clears, values, specific, area, within, sheet, clearrange, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/clear-range
---
# clearRange ***(method)***

> Clears the values of a specific area within the sheet.

> Clears the values from the cell at row1, col1 to the cell at row2, col2 as set in the `range` argument.

### Syntax
```javascript
void clearRange( range );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|range|`array`|Required|Array specifying the area to clear values within the sheet
 [ row1, col1, row2, col2 ]
 row1 : [Data row object](/docs/appx/row-object) of the cell at the start of the area
 col1 : Column name of the cell at the start of the area
 row2 : [Data row object](/docs/appx/row-object) of the cell at the end of the area
 col2 : Column name of the cell at the end of the area|


### Return Value
***none***

### Example
```javascript
//Clears all values from the first row to the focused row, from the CUST_CD column to the ORDER_DATE column.
sheet.clearRange([sheet.getFirstVisibleRow(), "CUST_CD", sheet.getFocusedRow(), "ORDER_DATE"])
```

### Read More

- [setValue method](./set-value)
- [setString method](./set-string)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
