---
KEY: canFocus
KIND: cell-property
PATH: props/cell/can-focus
ALIAS_EN: whether, cell, receive, focus, click, keyboard, navigation, canfocus
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/can-focus
---
# CanFocus ***(cell)***
> Sets whether the cell can receive focus through click or keyboard navigation.

> Cells set to `CanFocus:0(false)` cannot be focused by clicking, and will be skipped when navigating with the Tab key.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Focus entry not allowed|
|`1(true)`|Focus entry allowed (`default`)|



### Example
```javascript
// Prevent a specific cell from receiving focus
var ROW = sheet.getRowById("AR10");
ROW["CLSCanFocus"] = 0;
```

### Read More
- [CanFocus row](/docs/props/row/can-focus)
- [CanFocus col](/docs/props/col/can-focus)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
