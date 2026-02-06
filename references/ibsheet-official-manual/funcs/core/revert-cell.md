---
KEY: revertCell
KIND: method
PATH: funcs/core/revert-cell
ALIAS: sheet.revertCell, revertCell()
ALIAS_EN: reverts, changed, content, specific, cell, initially, loaded, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/revert-cell
---
# revertCell ***(method)***
> Reverts the changed content of a specific cell to the initially loaded value.

### Syntax
```javascript
void revertCell( row, col, render );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|Required|[data row object](/docs/appx/row-object)|
|col |`string`|Required|column name|
|render |`boolean`|Optional|whether immediately reflect on screen
If this feature is set to `0(false)`, you must execute `rerender()` at the end of the operation for it to be reflected on screen.
`0(false)`:Not reflected (`default`)
`1(true)`:Immediately reflected|

### Return Value
***none***

### Example
```javascript
// Reverts the content (value) of a specific cell to the initially loaded value.
sheet.revertCell( sheet.getFirstVisibleRow(), "EMT_DESC", true );
```

### Read More

- [revertRow method](./revert-row)
- [refreshRow method](./refresh-row)
- [refreshCell method](./refresh-cell)
- [renderBody method](./render-body)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
