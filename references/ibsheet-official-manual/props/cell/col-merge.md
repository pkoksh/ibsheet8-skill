---
KEY: colMerge
KIND: cell-property
PATH: props/cell/col-merge
ALIAS_EN: whether, include, column, executing, value, based, merging, datamerge
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/col-merge
---
# ColMerge ***(Cell)***

> Sets whether to include the column when executing value-based merging ([DataMerge](/docs/props/cfg/DataMerge), [HeaderMerge](/docs/props/cfg/HeaderMerge)) in the header area.

> Must be set on <b>all cells</b> in the header area corresponding to the column to be excluded from/included in merging.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Does not include the column when merging. |
|`1(true)`|Includes the column when merging. |

### Example
```javascript
options.Cfg = {
    IgnoreHeaderColMerge: false, // Apply ColMerge property to the header area as well.
};

options.Cols = [
    ...
    { Header: [{ Value: "Dept1", ColMerge:0 }, { Value: "Dept2", ColMerge:0 }, { Value: "Dept3", ColMerge:0 },{ Value: "Dept4", ColMerge:0 }],
    Type:"Text", Name:"Dept", ColMerge:false, Width:100 ...},
    ...
];
```

### Read More

- [RowMerge row](/docs/props/row/RowMerge)
- [ColMerge col](/docs/props/col/ColMerge)
- [DataMerge cfg](/docs/props/cfg/DataMerge)
- [HeaderMerge cfg](/docs/props/cfg/HeaderMerge)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
