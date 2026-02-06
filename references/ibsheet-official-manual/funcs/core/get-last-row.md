---
KEY: getLastRow
KIND: method
PATH: funcs/core/get-last-row
ALIAS: sheet.getLastRow, getLastRow()
ALIAS_EN: checks, bottommost, row, getlastrow, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-last-row
---
# getLastRow ***(method)***

> Checks the bottommost row.

> When using the tree feature, if the row argument is set, returns the last child row of that row.

### Syntax
```javascript
object getLastRow( row );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|Optional|[data row object](/docs/appx/row-object)|


### Return Value
***row object*** : [data row object](/docs/appx/row-object)

### Example
```javascript
// Get the bottommost row.
var lrow = sheet.getLastRow();
```

### Read More
- [getLastVisibleRow method](./get-last-visible-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
