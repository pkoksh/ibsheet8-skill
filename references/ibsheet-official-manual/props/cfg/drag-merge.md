---
KEY: dragMerge
KIND: config-property
PATH: props/cfg/drag-merge
ALIAS_EN: dragging, merged, cell, selects, whether, target, first, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/drag-merge
---
# DragMerge ***(cfg)***

> When dragging a merged cell, selects whether to target only the first row or all rows of the merged area.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Only the first row of the merged area in the dragged cell (`default`)|
|`1(true)`|All rows of the merged area in the dragged cell|

### Example
```javascript
options.Cfg = {
    "DragMerge": true
};
```

### Read More

- [CanDrag cfg](./can-drag)
- [DragObject cfg](./drag-object)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.26|Feature added|
