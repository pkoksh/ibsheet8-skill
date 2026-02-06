---
KEY: calcMergeMode
KIND: config-property
PATH: props/cfg/calc-merge-mode
ALIAS_EN: feature, allows, merged, cells, calculated, single, data, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/calc-merge-mode
---
# CalcMergeMode ***(cfg)***
> This feature allows merged cells to be calculated as a single data value when using [makeSubTotal](/docs/funcs/core/make-sub-total) or [FormulaRow](/docs/props/col/formula-row).

> ~~Caution: When used in SearchMode:0 mode, subtotal values may have errors~~ (Improved in version 8.0.0.8) 


> When changing cell values through user input or [setValue](/docs/), [MergeCellsMatch](/docs/props/cfg/merge-cells-match) or [EditAutoMerge](/docs/props/cfg/edit-auto-merge) must be set according to the [SearchMode](/docs/props/cfg/search-mode). 

> 1. `SearchMode:0/3`: Setting `MergeCellsMatch:1` enables accurate value calculation even when editing values
> 2. `SearchMode:1/2`: Setting `EditAutoMerge:1` or `MergeCellsMatch:1` enables accurate value calculation even when editing values

###
[When CalcMergeMode: 0 is set] 

![Download](/assets/imgs/nonCalcMergeMode.png)
<!-- IMAGE: Screenshot/Example Image - Download --> 


[When CalcMergeMode: 1 is set] 

![Download](/assets/imgs/CalcMergeMode.png)
<!-- IMAGE: Screenshot/Example Image - Download --> 


### Type
`number`

### Options
|Value|Description|
|-----|------|
|`0`|When using subtotal or FormulaRow, merged cells are calculated per row value (`default`)|
|`1`|When calculating subtotal, merged cells are calculated as a single value (applies to [makeSubTotal](/docs/funcs/core/make-sub-total) only)|
|`2`|When calculating FormulaRow, merged cells are calculated as a single value (applies to [FormulaRow](/docs/props/col/formula-row) only)|
|`3`|When calculating FormulaRow and subtotal, merged cells are calculated as a single value (applies to both)|

### Example
```javascript
options.Cfg = {CalcMergeMode: 1};
sheet.makeSubTotal({...});
```

### Read More
- [makeSubTotal method](/docs/funcs/core/make-sub-total)
- [FormulaRow col](/docs/props/col/formula-row)
- [SearchMode](/docs/props/cfg/search-mode)
- [EditAutoMerge](/docs/props/cfg/edit-auto-merge)
- [MergeCellsMatch](/docs/props/cfg/merge-cells-match)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|Feature added|
|core|8.0.0.8|Fixed to work in SearchMode:0|
|core|8.0.0.11|CalcMergeMode: 2/3 added|
