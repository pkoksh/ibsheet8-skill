---
KEY: selected
KIND: cell-property
PATH: props/cell/selected
ALIAS_EN: selects, cell, checks, whether, selected
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/selected
---
# Selected ***(cell)***

> Selects a cell or checks whether it is selected.

> This can be used when the [SelectingCells](/docs/props/cfg/selecting-cells) property value is not `0(false)`.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Deselect cell|
|`1(true)`|Select cell|

### Example
```javascript
// Select a specific cell
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Selected", 1);
```

### Read More
- [Selected row](/docs/props/row/selected)
- [SelectingCells cfg](/docs/props/cfg/selecting-cells)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
