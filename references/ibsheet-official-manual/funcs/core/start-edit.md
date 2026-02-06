---
KEY: startEdit
KIND: method
PATH: funcs/core/start-edit
ALIAS: sheet.startEdit, startEdit()
ALIAS_EN: enters, cell, edit, mode, startedit, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/start-edit
---
# startEdit ***(method)***
> Enters the cell's edit mode.

> The specified cell shows a flickering cursor and enters the edit state.
> If `row, col` arguments are not set, the currently focused cell enters the edit state.

### Syntax
```javascript
void startEdit( row, col, empty, valid );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|row |`object`|Optional|[data row object](/docs/appx/row-object) to edit|
|col |`string`|Optional|Column name to edit|
|empty |`boolean`|Optional|Whether to clear the existing cell value when editing starts
`0(false)`:Maintain the existing cell value when editing starts (`default`)
`1(true)`:Remove the existing cell value when editing starts|
|vaild |`boolean`|Optional|Check whether the cell is editable
(Does not actually enable the cell's edit state, but only checks whether the edit state can be enabled and returns the result. Returns `0(false)` if already in edit state)
`0(false)`:Do not check whether the cell is editable (`default`)
`1(true)`:Check whether the cell is editable|

### Return Value
***none***

### Example
```javascript
// Start editing
sheet.startEdit({ empty:1 });
```

### Read More

- [endEdit method](./end-edit)
- [onStartEdit event](/docs/events/on-start-edit)
- [onShowEdit event](/docs/events/on-show-edit)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
