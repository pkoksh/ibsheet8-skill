---
KEY: getRowByIndex
KIND: method
PATH: funcs/core/get-row-by-index
ALIAS: sheet.getRowByIndex, getRowByIndex()
ALIAS_EN: index, based, onas, data, row, object, docs, appx
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-row-by-index
---
# getRowByIndex ***(method)***
> index based onas [data row object](/docs/appx/row-object) check.

> index `1`starting from

> Hidden rows are excluded from the index calculation.

### Syntax
```javascript
object getRowByIndex( index );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|index|`number`|Required|row index(1starting from)|


### Return Value
***row object*** : [data row object](/docs/appx/row-object)

### Example
```javascript
//5th indexrow's data row object gets.
var rowObj = sheet.getRowByIndex(5);
```

### Read More
- [getRowById method](./get-row-by-id)
- [getRowIndex method](./get-row-index)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
