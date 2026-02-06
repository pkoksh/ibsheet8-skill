---
KEY: canResize
KIND: column-property
PATH: props/col/can-resize
ALIAS_EN: whether, column, width, changed, canresize, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/can-resize
---
# CanResize ***(col)***

> Sets whether the column width can be changed.

> Users can change the column width by dragging between columns in the header area. This sets whether to allow this feature.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|User column width change disabled|
|`1(true)`|User column width change enabled (`default`)|


### Example
```javascript
// Disable width adjustment for a specific column
options.Cols = [
    ...
    {Type: "Date", Name: "kDate", Width: 110, CanResize: 0 ...},
    ...
];
```

### Read More
- [CanMove col](./can-move)
- [CanSort col](./can-sort)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
