---
KEY: colMerge
KIND: column-property
PATH: props/col/col-merge
ALIAS_EN: property, whether, automatically, merge, vertically, adjacent, cells, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/col-merge
---
# ColMerge ***(col)***

> This property sets whether to `automatically merge` vertically adjacent cells with the same value within the specified column.

> When set to 0, the column is excluded from [(Cfg)PrevColumnMerge](/docs/props/cfg/prev-column-merge) (merge based on previous column) targets.

> This property only affects merging in the data area and does not affect merging in the header area.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Does not merge the column. (Also excluded from previous column merge targets)|
|`1(true)`|Includes the column in merge targets. (`default`)|

### Example
```javascript
options.Cols = [
    ...

    {Type: "Text", Name: "Dept", ColMerge: 0, Width: 100 ...},
    ...
];
```

### Read More

- [RowMerge row](/docs/props/row/row-merge)
- [ColMerge cell](/docs/props/cell/col-merge)
- [PrevColumnMerge cfg](/docs/props/cfg/prev-column-merge)
- [DataMerge cfg](/docs/props/cfg/data-merge)
- [HeaderMerge cfg](/docs/props/cfg/header-merge)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
