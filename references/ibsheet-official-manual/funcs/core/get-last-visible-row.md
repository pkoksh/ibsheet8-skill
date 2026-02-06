---
KEY: getLastVisibleRow
KIND: method
PATH: funcs/core/get-last-visible-row
ALIAS: sheet.getLastVisibleRow, getLastVisibleRow()
ALIAS_EN: checks, last, visible, row, property, getlastvisiblerow, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-last-visible-row
---
# getLastVisibleRow ***(method)***

> Checks the last visible row (`Visible: 1`) property.

> When using the tree feature, if the row argument is set, returns the last visible child row of that row.

### Syntax
```javascript
object getLastVisibleRow( row );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|Optional|[data row object](/docs/appx/row-object)|


### Return Value
***row object*** : [data row object](/docs/appx/row-object)

### Example
```javascript
// Get the last visible row.
var lrow = sheet.getLastVisibleRow();
```

### Read More
- [getLastRow method](./get-last-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
