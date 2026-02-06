---
KEY: span
KIND: cell-property
PATH: props/cell/span
ALIAS_EN: number, cells, merge, right, specific, cell, span
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/span
---
# Span ***(cell)***
> Sets the number of cells to merge to the right from a specific cell.

> The `row` must have [Spanned](/docs/props/row/spanned):`1` set in order to use this. 

> Similar to ColSpan in HTML Table objects. 

> [DataMerge cfg](/docs/props/cfg/data-merge) and [HeaderMerge cfg](/docs/props/cfg/header-merge) take priority.

> Dynamic merging is possible using the [setMergeRange method](/docs/funcs/core/set-merge-range).



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Number of cells to merge to the right within the row|



### Example
```javascript
// Spanned must be configured.
options.Def.Row = {Spanned: 1};

// Apply property within loaded data (column name: CLS)
{
    data:[
        // Merge 3 cells to the right
        {... ,CLSSpan: 3 ...}
    ]
}
```

### Read More
- [DataMerge cfg](/docs/props/cfg/data-merge)
- [HeaderMerge cfg](/docs/props/cfg/header-merge)
- [RowSpan cell](./row-span)
- [Spanned row](/docs/props/row/spanned)
- [setMergeRange method](/docs/funcs/core/set-merge-range)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
