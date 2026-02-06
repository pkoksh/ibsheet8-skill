---
KEY: inEditMode
KIND: config-property
PATH: props/cfg/in-edit-mode
ALIAS_EN: timing, editing, begins, sheet, ineditmode, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/in-edit-mode
---
# InEditMode ***(cfg)***

> Sets the timing for when editing begins in the sheet.

> Generally, editing starts when double-clicking the cell you want to edit, or pressing F2 or Enter when the cell has focus. 

> Pressing Esc while in edit mode ends the editing state.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|- When clicking an already focused cell
- When pressing Enter or F2 key
- When double-clicking an unfocused cell
|
|`1`|- When clicking a cell
- When pressing Enter or F2 key in focus state|
|`2`|- When clicking an already focused cell
- When pressing Enter or F2 key
- When double-clicking an unfocused cell
- When typing in focus state
(`default`)|
|`3`|- When double-clicking an already focused cell
- When pressing Enter or F2 key
- When typing in focus state
|


### Example
```javascript
options.Cfg = {
    InEditMode: 1,        // Switch to edit mode immediately on click
    ...
};
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
