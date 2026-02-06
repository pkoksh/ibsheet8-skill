---
KEY: getNextSiblingVisibleRow
KIND: method
PATH: funcs/core/get-next-sibling-visible-row
ALIAS: sheet.getNextSiblingVisibleRow, getNextSiblingVisibleRow()
ALIAS_EN: tree, group, returns, visible, row, level, parent, getnextsiblingvisiblerow
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-next-sibling-visible-row
---
# getNextSiblingVisibleRow ***(method)***

> When using tree or group, returns the visible (`Visible:1`) row below at the same level with the same parent.

> Returns `null` if there is no visible row at the same level within the same parent.

### Syntax
```javascript
object getNextSiblingVisibleRow( row );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|Required|[data row object](/docs/appx/row-object)|


### Return Value
***row object*** : [data row object](/docs/appx/row-object)

### Example
```javascript
// Get the visible row below at the same level as the selected row.
var frow = sheet.getFocusedRow()
var crow = sheet.getNextSiblingVisibleRow(frow);
```
### Read More
- [getPrevSiblingVisibleRow method](./get-prev-sibling-visible-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
