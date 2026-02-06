---
KEY: acceptEnters
KIND: cell-property
PATH: props/cell/accept-enters
ALIAS_EN: configures, behavior, enter, key, pressed, editing, cell, lines
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/accept-enters
---
# AcceptEnters ***(cell)***

> Configures the behavior when the `Enter key` is pressed during editing in a cell with `Lines` type. 



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Finishes value change and exits edit mode.|
|`1`|A line break character is inserted and editing continues.
To finish editing, press `Ctrl or Shift or Alt + Enter` or press the `Tab key`.|
|`2`|Finishes value change and exits edit mode. 
You can insert a line break by pressing `Ctrl or Shift or Alt + Enter`.|
|`3`|Both `Ctrl or Shift or Alt + Enter` and `Enter` insert a line break character.
To finish editing, press the `Tab key` or click another cell with the mouse.|


### Example
```javascript
// Set Enter key to act as line break during editing in a Lines cell
sheet.setAttribute(sheet.getRowById("AR99"), "DESC", "AcceptEnters", 1);
```

### Read More
- [EnterMode cfg](/docs/props/cfg/enter-mode)
- [AcceptEnters col](/docs/props/col/accept-enters)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
