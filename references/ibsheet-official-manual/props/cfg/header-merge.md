---
KEY: headerMerge
KIND: config-property
PATH: props/cfg/header-merge
ALIAS_EN: whether, merge, cells, header, area, based, cell, values
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/header-merge
---
# HeaderMerge ***(cfg)***

> Sets whether and how to merge cells in the header area based on cell values when creating the sheet.

> The option descriptions are the same as [DataMerge](./data-merge).

> After sheet creation, you can dynamically change the header area merge using the [setAutoMerge](/docs/funcs/core/set-auto-merge) method.

> Takes priority over [Span cell](/docs/props/cell/span) and [RowSpan cell](/docs/props/cell/row-span).

### Type
`number`

### Options
|Value|Description|
|-----|-----|
| `0` | No merge (`default`)|
| `1` | Column-based merge|
| `2` | Row-based merge|
| `3` | Column-first merge|
| `4` | Row-first merge|
| `5` | Column-first all-direction merge|
| `6` | Row-first all-direction merge|

### Example
```javascript
options = {
    Cfg :{
        HeaderMerge: 0,  // Does not perform cell merge in the header area when creating the sheet.
    }
};
```

### Try it
- [0 by default with setAutoMerge](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/Merge/)

### Read More
- [Span cell](/docs/props/cell/span)
- [RowSpan cell](/docs/props/cell/row-span)
- [DataMerge cfg](./data-merge)
- [PrevColumnMerge cfg](./prev-column-merge)
- [setAutoMerge method](/docs/funcs/core/set-auto-merge)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
