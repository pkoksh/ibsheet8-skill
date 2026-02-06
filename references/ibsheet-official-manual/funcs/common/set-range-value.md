---
KEY: setRangeValue
KIND: method
PATH: funcs/common/set-range-value
ALIAS: sheet.setRangeValue, setRangeValue()
ALIAS_EN: uses, setvalue, setstring, change, cell, values, within, range
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/common/set-range-value
---
# setRangeValue ***(method)***

> Uses setValue or setString to change cell values within a range at once. 


### Syntax
```javascript
void setRangeValue( val, startRow, startCol, endRow, endCol, colSeparator, rowSeparator, type );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|val|`mixed`|Optional|Value to set|
|startRow|`object`|Optional|Starting data row object for batch value change|
|startCol|`object`|Optional|Starting column name for batch value change|
|endRow|`object`|Optional|Ending data row object for batch value change|
|endCol|`object`|Optional|Ending column name for batch value change|
|colSeparator|`object`|Optional|Column separator to use when using column separators|
|rowSeparator|`object`|Optional|Row separator to use when using row separators|
|type|`object`|Optional|Whether to use setValue or setString. 1: use setValue, 2: use setString|

### Return Value
***none***

### Example
```javascript
// Changes the values of all cells in the range from AR1 row to AR3 row, Col1 to Col2 columns to 'Apple'.
sheet.setRangeValue("Apple", sheet.getRowById("AR1"), "Col1", sheet.getRowById("AR3"), "Col2",);
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
