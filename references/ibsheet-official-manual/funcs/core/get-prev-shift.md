---
KEY: getPrevShift
KIND: method
PATH: funcs/core/get-prev-shift
ALIAS: sheet.getPrevShift, getPrevShift()
ALIAS_EN: navigation, method, data, row, object, docs, appx, target
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-prev-shift
---
# getPrevShift ***(method)***
> A navigation method that can be used with [data row object](/docs/appx/row-object) as the target.

> Searches for and returns the [data row object](/docs/appx/row-object) positioned the specified number of rows before the reference [data row object](/docs/appx/row-object).


### Syntax
```javascript
object getPrevShift( row, cnt );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|Required|Reference [data row object](/docs/appx/row-object) for the search|
|cnt|`number`|Optional|Number of rows to navigate from the reference|


### Return Value
***row object*** : [data row object](/docs/appx/row-object)

### Example
```javascript
// Check the row positioned 7 rows above the AR55 row.
var row = sheet.getRowById("AR55");
var nrow = sheet.getPrevShift(row,7);
```

### Read More
- [getNextShift method](./get-next-shift)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
