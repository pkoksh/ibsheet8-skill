---
KEY: dragObject
KIND: config-property
PATH: props/cfg/drag-object
ALIAS_EN: selects, display, mouse, cursor, dragging, row, dragobject, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/drag-object
---
# DragObject ***(cfg)***

> Selects what to display at the mouse cursor when dragging a row.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Nothing is displayed|
|`1`|Row DOM object (`default`)|
|`2`|Message containing the number of rows|

### Example
```javascript
options.Cfg = {
    DragObject: 2
};
```

### Read More

- [CanDrag cfg](./can-drag)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
