---
KEY: getString
KIND: method
PATH: funcs/core/get-string
ALIAS: sheet.getString, getString()
ALIAS_EN: retrieves, cell, value, format, applied, string, getstring, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-string
---
# getString ***(method)***
> Retrieves the cell value as a format-applied string.

### Syntax
```javascript
string getString( row, col);
```

### Parameters


|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|Required|[data row object](/docs/appx/row-object)|
|col |`string`|Required|column name|

### Return Value
***string*** : Returns the cell value according to the applied format

### Example
```javascript
var r5 = sheet.getRowById("AR5");
//format yyyy/MM/dd case '2015/12/31' formas extract
var sdata = sheet.getString(r5, "StartDate");
```

### Read More

- [setString method](./set-string)
- [setValue method](./set-value)
- [getValue method](./get-value)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
