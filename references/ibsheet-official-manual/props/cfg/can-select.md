---
KEY: canSelect
KIND: config-property
PATH: props/cfg/can-select
ALIAS_EN: whether, row, cell, selection, possible, canselect, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/can-select
---
# CanSelect ***(cfg)***

> Sets whether row or cell selection is possible. 

> Focusing on a cell and selecting a cell can work differently. 

> Cells and rows in different areas can be selected separately from the focused row or cell, and this operates according to the `CanSelect` property.

> To select rows by default without selecting cells and columns, you can set `SelectingCells: 0`. 

> The default value is `1(true)`.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Row or cell selection not allowed|
|`1(true)`|Row or cell selection allowed (`default`)|


### Example
```javascript
options.Cfg = {
  "CanSelect": true,          // Enable sheet selection
  "SelectingCells": 0,     // Individual cell selection not allowed
};
```

### Read More
- [SelectingCells cfg](./selecting-cells)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
