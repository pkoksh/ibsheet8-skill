---
KEY: dataMerge
KIND: config-property
PATH: props/cfg/data-merge
ALIAS_EN: whether, merge, cells, data, area, based, cell, values
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/data-merge
---
# DataMerge ***(cfg)***

> Sets whether and how to merge cells in the data area based on cell values when creating the sheet.

> After sheet creation, you can also dynamically change the data area merge using the setAutoMerge method.

> When using the [setValue](/docs/funcs/core/set-value) method on a sheet with DataMerge configured, if you pass 0 as the render argument, merging will not be applied in the data area. To apply merge visually, you need to call the [rerender](/docs/funcs/core/rerender) method.

> Takes priority over [Span](/docs/props/cell/span) and [RowSpan](/docs/props/cell/row-span).

> **To exclude a specific column from vertical merging, set the [ColMerge](/docs/props/col/col-merge) property value to 0(false) when creating that column.**

> **Similarly, to exclude a specific column from horizontal merging, set the [RowMerge](/docs/props/row/row-merge) property value to 0(false) when creating that column.**


> **<mark>Caution</mark> : When using subtotals ([makeSubTotal (method)](/docs/funcs/core/make-sub-total)), the value set for this option is ignored and it operates as `DataMerge: 1`.**

> When using this feature in a tree, only the `DataMerge: 1` function is supported and no other merge-related features are supported. When used, auto-merge occurs only within the same level.


### Type
`number`

### Options
|Value|Description| |
|-----|-----|----|
|`0`|No merge (`default`) |Merging is not applied.
![option0](/assets/imgs/dataMerge0.png "option0")
<!-- IMAGE: Screenshot/Example Image - option0 -->|
|`1`|Column-based merge|For each column, merges rows when the previous or next row has the same value.
![option1](/assets/imgs/dataMerge1.png "option1")
<!-- IMAGE: Screenshot/Example Image - option1 -->|
|`2`|Row-based merge|For each row, merges columns when the previous or next column has the same value.
![option2](/assets/imgs/dataMerge2.png "option2")
<!-- IMAGE: Screenshot/Example Image - option2 -->|
|`3`|Column-first merge|Performs column-based merge (a) first, then executes row-based merge (b) on unmerged cells.
![option3](/assets/imgs/dataMerge3.png "option3")
<!-- IMAGE: Screenshot/Example Image - option3 -->|
|`4`|Row-first merge|Performs row-based merge (b) first, then executes column-based merge (a) on unmerged cells.
![option4](/assets/imgs/dataMerge4.png "option4")
<!-- IMAGE: Screenshot/Example Image - option4 -->|
|`5`|Column-first all-direction merge|Performs column-based merge while also merging adjacent columns with the same values.
![option5](/assets/imgs/dataMerge5.png "option5")
<!-- IMAGE: Screenshot/Example Image - option5 -->|
|`6`|Row-first all-direction merge|Performs row-based merge while also merging adjacent rows with the same values.
![option6](/assets/imgs/dataMerge6.png "option6")
<!-- IMAGE: Screenshot/Example Image - option6 -->|


### Example
```javascript
options = {
    "Cfg" :{
      "DataMerge":1,  // Merges cells in the data area by column when creating the sheet.
    }
};
```

### Try it
- [0 by default with setAutoMerge](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/Merge/)

### Read More
- [Span cell](/docs/props/cell/span)
- [RowSpan cell](/docs/props/cell/row-span)
- [ColMerge col](/docs/props/col/col-merge)
- [RowMerge row](/docs/props/row/row-merge)
- [HeaderMerge cfg](./header-merge)
- [PrevColumnMerge cfg](./prev-column-merge)
- [setAutoMerge method](/docs/funcs/core/set-auto-merge)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.8|Added `DataMerge` feature for tree (only `mode:1` is supported)|
