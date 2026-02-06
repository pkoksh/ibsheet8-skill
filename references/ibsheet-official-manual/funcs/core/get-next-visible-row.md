---
KEY: getNextVisibleRow
KIND: method
PATH: funcs/core/get-next-visible-row
ALIAS: sheet.getNextVisibleRow, getNextVisibleRow()
ALIAS_EN: returns, next, visible, row, passed, argument, getnextvisiblerow, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-next-visible-row
---
# getNextVisibleRow ***(method)***

> Returns the next visible row below the row passed as an argument.



### Syntax
```javascript
object getNextVisibleRow(row);
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|Required|[data row object](/docs/appx/row-object)|


### Return Value
***row object*** : [data row object](/docs/appx/row-object)

### Example
```javascript
// Gets the row immediately below the focused row.
var frow = sheet.getFocusedRow();
var crow = sheet.getNextVisibleRow(frow);
```
### Read More
- [getPrevSiblingVisibleRow method](./get-prev-sibling-visible-row)
- [getNextSiblingVisibleRow method](./get-next-sibling-visible-row)
- [getPrevVisibleRow method](./get-prev-visible-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|Feature added|
