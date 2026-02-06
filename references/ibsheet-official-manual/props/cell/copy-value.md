---
KEY: copyValue
KIND: cell-property
PATH: props/cell/copy-value
ALIAS_EN: value, copied, clipboard, via, ctrl, instead, cell, original
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/copy-value
---
# CopyValue ***(cell)***

> Sets the value to be copied to the clipboard via `Ctrl+C (or Ctrl+X)` instead of the cell's original value.

> This is particularly useful for cells that are non-editable, such as Html type or button cells.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Text to be placed in the clipboard when copying|


### Example
```javascript
// Set a specific column so that different text is copied instead of the original data
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "CopyValue", "Copy not allowed field");
```

### Read More
- [SortValue cell](./sort-value)
- [FilterValue cell](./filter-value)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
