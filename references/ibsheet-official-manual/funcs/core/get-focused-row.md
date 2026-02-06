---
KEY: getFocusedRow
KIND: method
PATH: funcs/core/get-focused-row
ALIAS: sheet.getFocusedRow, getFocusedRow()
ALIAS_EN: returns, data, row, object, docs, appx, currently, focused
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-focused-row
---
# getFocusedRow ***(method)***

> Returns the [data row object](/docs/appx/row-object) of the currently focused cell (or row) in the sheet.

### Syntax
```javascript
object getFocusedRow();
```

### Return Value
***row object*** : [data row object](/docs/appx/row-object)

### Example
```javascript
//Returns the data row object of the currently focused cell.
var row = sheet.getFocusedRow();
```

### Read More

- [getFocusedCol method](./get-focused-col)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
