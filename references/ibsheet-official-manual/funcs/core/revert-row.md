---
KEY: revertRow
KIND: method
PATH: funcs/core/revert-row
ALIAS: sheet.revertRow, revertRow()
ALIAS_EN: reverts, changed, content, specific, row, initially, searched, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/revert-row
---
# revertRow ***(method)***
> Reverts the changed content of a specific row to the initially searched value.

> When using `render:0` to not immediately reflect on screen and then calling `rerender` to reflect on screen, if `Formula` calculations need to be reflected, the `calculate` function must be called first.

### Syntax
```javascript
void revertRow( row, render );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|Required|[data row object](/docs/appx/row-object)|
|render |`boolean`|Optional|whether immediately reflect on screen
If this feature is set to `0(false)`, you must execute `rerender()` at the end of the operation for it to be reflected on screen.
`0(false)`:Not reflected (`default`)
`1(true)`:Immediately reflected|

### Return Value
***none***

### Example
```javascript
// Revert all cell content (values) of a specific row to the initially searched value.
sheet.revertRow( row, true );
```

### Read More

- [revertCell method](./revert-cell)
- [refreshCell method](./refresh-cell)
- [renderBody method](./render-body)
- [rerender method](./rerender)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
