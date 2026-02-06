---
KEY: selectingCells
KIND: config-property
PATH: props/cfg/selecting-cells
ALIAS_EN: whether, individual, cell, selection, range, possible, effect, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/selecting-cells
---
# SelectingCells ***(cfg)***

> Sets whether individual cell selection or cell range selection is possible, and the effect of cell selection on row and column selection.

> When the option is set to `1` or higher, it is affected by the `Selected` property values per **Row, Col, Cell**.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Individual cell selection not possible. Selection only possible at row level|
|`1`|Selection possible at cell, row/column level (`default`) 
When no cells in the Row are selected, Row has `Selected = 0` 
When all cells in the Row are selected, Row has `Selected = 1` 
When only some cells in the Row are selected, Row has `Selected = 2`. However, individual cells must be set to `Selected = 1` |
|`2`|Only individual cells can be selected. When all cells in the Row are selected, Row does not have `Selected = 1`. 
When no cells in the Row are selected, Row has `Selected = 0` 
When only some cells in the Row are selected, Row has `Selected = 2`. However, individual cells must be set to `Selected = 1` |
|`3`|Individual cells and row/column selections can be made independently
When no cells in the Row are selected and Row is not selected: Row's `Selected = 0` 
When no cells in the Row are selected and Row is selected: Row's `Selected = 1` 
When some cells in the Row are selected and Row is not selected: Row's `Selected = 2`. However, individual cells must be set to `Selected = 1` 
When some or all cells in the Row are selected and Row is selected: Row's `Selected = 3`|
|`4`|When selecting the `SEQ` column, operates as `SelectingCells:0`. When selecting other columns, operates as `SelectingCells:1`.|


### Example
```javascript
options.Cfg = {
  SelectingCells: 0,     // Individual cell selection not possible
  ...
};
```

### Read More
- [CanSelect cfg](./can-select)
- [Selected row](/docs/props/row/selected)
- [Selected col](/docs/props/col/selected)
- [Selected cell](/docs/props/cell/selected)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
