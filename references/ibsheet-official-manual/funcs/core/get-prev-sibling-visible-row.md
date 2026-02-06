---
KEY: getPrevSiblingVisibleRow
KIND: method
PATH: funcs/core/get-prev-sibling-visible-row
ALIAS: sheet.getPrevSiblingVisibleRow, getPrevSiblingVisibleRow()
ALIAS_EN: tree, group, returns, visible, row, level, parent, getprevsiblingvisiblerow
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-prev-sibling-visible-row
---
# getPrevSiblingVisibleRow ***(method)***
> When using tree or group, returns the visible (`Visible:1`) row above at the same level with the same parent.

> Returns `null` if there is no visible row at the same level within the same parent.


### Syntax
```javascript
object getPrevSiblingVisibleRow( row );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|Required|[data row object](/docs/appx/row-object)|


### Return Value
***row object*** : [data row object](/docs/appx/row-object)

### Example
```javascript
// Return the visible row above at the same level as the currently selected row
var row = sheet.getFocusedRow();
var crow = sheet.getPrevSiblingVisibleRow(row);
```

### Read More
- [getNextSiblingVisibleRow method](./get-next-sibling-visible-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
