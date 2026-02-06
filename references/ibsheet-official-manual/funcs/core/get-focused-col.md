---
KEY: getFocusedCol
KIND: method
PATH: funcs/core/get-focused-col
ALIAS: sheet.getFocusedCol, getFocusedCol()
ALIAS_EN: returns, column, name, currently, focused, cell, sheet, getfocusedcol
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-focused-col
---
# getFocusedCol ***(method)***

> Returns the column name of the currently focused cell in the sheet.

### Syntax
```javascript
string getFocusedCol();
```

### Return Value
***string*** : column name

### Example
```javascript
//Returns the column name of the currently focused cell.
var row = sheet.getFocusedCol();
```

### Read More

- [getFocusedRow method](./get-focused-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
