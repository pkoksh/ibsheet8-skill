---
KEY: getPrevVisibleRow
KIND: method
PATH: funcs/core/get-prev-visible-row
ALIAS: sheet.getPrevVisibleRow, getPrevVisibleRow()
ALIAS_EN: returns, previous, visible, row, passed, argument, getprevvisiblerow, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-prev-visible-row
---
# getPrevVisibleRow ***(method)***

> Returns the previous visible row above the row passed as an argument.



### Syntax
```javascript
object getPrevVisibleRow( row );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|Required|[data row object](/docs/appx/row-object)|


### Return Value
***row object*** : [data row object](/docs/appx/row-object)

### Example
```javascript
// Gets the row immediately above the focused row.
var frow = sheet.getFocusedRow();
var crow = sheet.getPrevVisibleRow(frow);
```
### Read More
- [getPrevSiblingVisibleRow method](./get-prev-sibling-visible-row)
- [getNextSiblingVisibleRow method](./get-next-sibling-visible-row)
- [getNextVisibleRow method](./get-next-visible-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|Feature added|
