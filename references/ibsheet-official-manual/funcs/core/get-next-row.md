---
KEY: getNextRow
KIND: method
PATH: funcs/core/get-next-row
ALIAS: sheet.getNextRow, getNextRow()
ALIAS_EN: returns, row, immediately, specified, getnextrow, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-next-row
---
# getNextRow ***(method)***

> Returns the row immediately below the specified row.

> last rowwhen set to `null` return.


### Syntax
```javascript
object getNextRow( row );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|Required|[data row object](/docs/appx/row-object)|


### Return Value
***row object*** :  [data row object](/docs/appx/row-object)

### Example
```javascript
//AR5rowof  row OK.
var row = sheet.getRowById("AR55");
var nrow = sheet.getNextRow(row);
```

### Read More
- [getPrevRow method](./get-prev-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
