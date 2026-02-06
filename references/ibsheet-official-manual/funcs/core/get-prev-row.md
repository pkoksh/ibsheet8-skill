---
KEY: getPrevRow
KIND: method
PATH: funcs/core/get-prev-row
ALIAS: sheet.getPrevRow, getPrevRow()
ALIAS_EN: returns, row, immediately, specified, getprevrow, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-prev-row
---
# getPrevRow ***(method)***
> Returns the row immediately above the specified row.

> specified row first rowwhen set to `null` return.


### Syntax
```javascript
object getPrevRow( row );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|Required|[data row object](/docs/appx/row-object)|


### Return Value
***row object*** : [data row object](/docs/appx/row-object)

### Example
```javascript
//AR55row's aboverow check.
var row = sheet.getRowById("AR55");
var nrow = sheet.getPrevRow(row);
```

### Read More
- [getNextRow method](./get-next-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
