---
KEY: getFirstVisibleRow
KIND: method
PATH: funcs/core/get-first-visible-row
ALIAS: sheet.getFirstVisibleRow, getFirstVisibleRow()
ALIAS_EN: returns, topmost, row, visible, getfirstvisiblerow, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-first-visible-row
---
# getFirstVisibleRow ***(method)***

> Returns the topmost row with `Visible` set to `1`.

> When using the tree feature, if the row argument is provided, returns the first visible child row among the child rows of that row.

### Syntax
```javascript
object getFirstVisibleRow( row );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|Optional|[data row object](/docs/appx/row-object)|


### Return Value
***row object*** : [data row object](/docs/appx/row-object)

### Example
```javascript
//AR12rowof first childrow return.
var fchildrow = sheet.getFirstVisibleRow("AR12");
```

### Read More
- [getFirstRow method](./get-first-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
