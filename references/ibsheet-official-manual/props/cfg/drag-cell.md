---
KEY: dragCell
KIND: config-property
PATH: props/cfg/drag-cell
ALIAS_EN: whether, drag, cell, level, dragcell, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/drag-cell
---
# DragCell ***(cfg)***

> Sets whether to drag at the cell level.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Row-level dragging (`default`)|
|`1(true)`|Cell-level dragging|


### Example
```javascript
options.Cfg = {
   "CanDrag": true, // Enable movement via mouse drag
   "DragCell": true // Enable cell-level drag
};
```

### Read More

- [CanDrag cfg](/docs/props/cfg/can-drag)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.27|Feature added|
