---
KEY: rowSpan
KIND: cell-property
PATH: props/cell/row-span
ALIAS_EN: number, cells, merge, downward, specific, cell, rowspan
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/row-span
---
# RowSpan ***(cell)***
> Sets the number of cells to merge downward from a specific cell.

> The `col` must have [Spanned](/docs/props/col/spanned):`1` set in order to use this. 

> Similar to RowSpan in HTML Table objects.

> [DataMerge cfg](/docs/props/cfg/data-merge) and [HeaderMerge cfg](/docs/props/cfg/header-merge) take priority.

> Dynamic merging is possible using the [setMergeRange method](/docs/funcs/core/set-merge-range).


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Number of cells to merge downward within the column|



### Example
```javascript
// Spanned must be configured.
options.Def.Col = {Spanned: 1};


// Apply property within loaded data (column name: CLS)
{
    data:[
        // Merge 3 cells downward
        {... ,CLSRowSpan: 3 ...}
    ]
}
```

### Read More
- [Span cell](./span)
- [Spanned col](/docs/props/col/spanned)
- [DataMerge cfg](/docs/props/cfg/data-merge)
- [HeaderMerge cfg](/docs/props/cfg/header-merge)
- [setMergeRange method](/docs/funcs/core/set-merge-range)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
