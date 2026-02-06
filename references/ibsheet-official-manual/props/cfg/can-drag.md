---
KEY: canDrag
KIND: config-property
PATH: props/cfg/can-drag
ALIAS_EN: whether, rows, moved, mouse, drag, candrag, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/can-drag
---
# CanDrag ***(cfg)***

> Sets whether rows can be moved by mouse drag.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Row move by mouse drag not allowed (`default`)|
|`1(true)`|Row move by mouse drag allowed|


### Example
```javascript
options.Cfg = {
   "CanDrag": true       // Enable row move by mouse drag
};
```

### Try it
- [True](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/CanDrag-true/)

### Read More

- [CanDrag row](/docs/props/row/can-drag)
- [DragCell cfg](./drag-cell)
- [DragObject cfg](./drag-object)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
