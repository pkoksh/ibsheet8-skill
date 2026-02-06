---
KEY: getEditRow
KIND: method
PATH: funcs/core/get-edit-row
ALIAS: sheet.getEditRow, getEditRow()
ALIAS_EN: returns, row, object, currently, edited, geteditrow, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-edit-row
---
# getEditRow ***(method)***
> Returns the row object currently being edited.

### Syntax
```javascript
object getEditRow();
```

### Return Value
***row Object*** : [data row object](/docs/appx/row-object)

### Example
```javascript
var eRow = sheet.getEditRow();
```

### Read More
- [getEditCol method](./get-edit-col)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
