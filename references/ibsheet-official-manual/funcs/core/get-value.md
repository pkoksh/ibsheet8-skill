---
KEY: getValue
KIND: method
PATH: funcs/core/get-value
ALIAS: sheet.getValue, getValue()
ALIAS_EN: retrieves, value, specific, cell, delimiters, removed, getvalue, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-value
---
# getValue ***(method)***
> Retrieves the value of a specific cell with delimiters removed.

### Syntax
```javascript
mixed getValue( row, col );
```

### Parameters
|Name|Type|Required| Description |
|----|----|--------|-------------|
|row |`object`|Required|[data row object](/docs/appx/row-object)|
|col |`string`|Required|column name|

### Return Value
***mixed ( `number` \| `string` )*** : Returns the value according to the cell's type

### Example
```javascript
var r = sheet.getFirstRow();
//Extract in yyyyMMdd format without delimiters
var sdate = sheet.getValue( r , "StartDate" );
var edate = sheet.getValue({row:r,col:"EndDate"});
```

### Read More
- [getString method](./get-string)
- [setString method](./set-string)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
