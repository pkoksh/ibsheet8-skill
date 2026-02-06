---
KEY: getFirstRow
KIND: method
PATH: funcs/core/get-first-row
ALIAS: sheet.getFirstRow, getFirstRow()
ALIAS_EN: checks, topmost, row, getfirstrow, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-first-row
---
# getFirstRow ***(method)***

> Checks the topmost row.

> When using the tree feature, if the row argument is set, returns the first child row of that row.

### Syntax
```javascript
object getFirstRow( row );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|Optional|[data row object](/docs/appx/row-object)|


### Return Value
***row object*** : [data row object](/docs/appx/row-object)

### Example
```javascript
// Get the topmost row.
var frow = sheet.getFirstRow();
```

### Read More
- [getFirstVisibleRow method](./get-first-visisble-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
