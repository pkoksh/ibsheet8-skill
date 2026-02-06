---
KEY: dragCopy
KIND: config-property
PATH: props/cfg/drag-copy
ALIAS_EN: whether, change, row, status, source, sheet, moving, rows
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/drag-copy
---
# DragCopy ***(cfg)***

> Sets whether to change the row status of the source sheet when moving rows between two sheets.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Row in the source sheet changes to `Deleted` status when drag-moved (`default`)|
|`1(true)`|Row in the source sheet remains unchanged when drag-moved|


### Example
```javascript
options.Cfg = {
   "DragCopy": true       // No status change in the source sheet when moving rows via mouse drag
};
```

### Read More
- [CanDrag cfg](/docs/props/cfg/can-drag)
- [CanDrag row](/docs/props/row/can-drag)
- [onEndDrag event](/docs/events/on-end-drag)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
