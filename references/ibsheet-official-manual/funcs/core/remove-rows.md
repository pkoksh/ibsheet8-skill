---
KEY: removeRows
KIND: method
PATH: funcs/core/remove-rows
ALIAS: sheet.removeRows, removeRows()
ALIAS_EN: specified, multiplerows, delete, removerows, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/remove-rows
---
# removeRows ***(method)***
> specified multiplerows Delete . 

> When wanting to delete multiple rows, it is better to use `removeRows` instead of `removeRow`.

### Syntax
```javascript
void removeRow( rows );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|rows|`array[object]`|Required|Deletewant to rows|

### Return Value
***none***

### Example
```javascript
// checkapplied rows remove .
var rows = sheet.getRowsByChecked("chk");
sheet.removeRows(rows);
```

### Read More
- [removeRow method](./remove-row)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|Feature added|
