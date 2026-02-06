---
KEY: canExport
KIND: column-property
PATH: props/col/can-export
ALIAS_EN: whether, column, downloaded, canexport, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/can-export
---
# CanExport ***(col)***

> Sets whether the column can be downloaded.

> You can set whether to include the column when the user downloads to Excel/text.

> When used together with `downCols` from Export APIs ([down2Excel](/docs/funcs/excel/down-to-excel), [exportData](/docs/funcs/core/export-data), etc.), `downCols` has higher priority.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Download disabled|
|`1(true)`|Download enabled (`default`)|


### Example
```javascript
// Block download for a specific column
options.Cols = [
    ...
    { Type: "Int", Name: "Rank_Sales", CanExport: 0 ... },
    ...
];
```

### Read More
- [down2Excel method](/docs/funcs/excel/down-to-excel)
- [exportData method](/docs/funcs/core/export-data)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
