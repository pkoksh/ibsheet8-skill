---
KEY: getMouseRow
KIND: method
PATH: funcs/core/get-mouse-row
ALIAS: sheet.getMouseRow, getMouseRow()
ALIAS_EN: returns, row, object, currently, mouse, cursor, getmouserow, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-mouse-row
---
# getMouseRow ***(method)***
> Returns the row object currently under the mouse cursor.

### Syntax
```javascript
object getMouseRow();
```

### Return Value
***row Object*** : [data row object](/docs/appx/row-object)

### Example
```javascript
var eRow = sheet.getMouseRow();
```

### Read More
- [getMouseCol method](./get-mouse-col)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
