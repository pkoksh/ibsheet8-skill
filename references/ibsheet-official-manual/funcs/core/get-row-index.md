---
KEY: getRowIndex
KIND: method
PATH: funcs/core/get-row-index
ALIAS: sheet.getRowIndex, getRowIndex()
ALIAS_EN: data, row, object, docs, appx, index, returns, getrowindex
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-row-index
---
# getRowIndex ***(method)***
> [data row object](/docs/appx/row-object)of index returns.

> index `1`starting from.

> [Visible](/docs/props/row/visible):0 Row index returndoes not not.


### Syntax
```javascript
number getRowIndex( row );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|Required|[data row object](/docs/appx/row-object)|


### Return Value
***number*** : rowof index

### Example
```javascript
//AR5 rowof index OK.
var row = sheet.getRowById("AR5");
var idx = sheet.getRowIndex(row);
```

### Read More
- [getRowById method](./get-row-by-id)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
