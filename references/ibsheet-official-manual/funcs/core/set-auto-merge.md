---
KEY: setAutoMerge
KIND: method
PATH: funcs/core/set-auto-merge
ALIAS: sheet.setAutoMerge, setAutoMerge()
ALIAS_EN: merges, cells, value, one, cell, based, given, criteria
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-auto-merge
---
# setAutoMerge ***(method)***

> Merges cells with the same value into one cell based on the given criteria.

> Merge is not performed for `SEQ` columns.

> Columns divided into different sections are not merged with each other.

> When the value of a merged cell is changed, only the value of the cell positioned at the first row and first column of the merged cell area is changed.

> To change the value of the entire merged cell, the [MergeCellsMatch](/docs/props/cfg/merge-cells-match) property must be used.

> For details on the `dataMerge, headerMerge, headMerge, footMerge` arguments, refer to [DataMerge](/docs/props/cfg/data-merge). For details on the `prevColumnMerge` argument, refer to [PrevColumnMerge](/docs/props/cfg/prev-column-merge).


### Syntax
```javascript
void setAutoMerge( dataMerge, headerMerge, prevColumnMerge, fixPrevColumnMerge, headMerge, footMerge, headPrevColumnMerge, footPrevColumnMerge );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|dataMerge|`number`|Optional|Criteria to apply when merging cells in the data area
`0`:No merge (`default`)
`1`:Column-based merge
`2`:Row-based merge
`3`:Column-priority merge
`4`:Row-priority merge
`5`:Column-priority four-directional merge
`6`:Row-priority four-directional merge|
|headerMerge|`number`|Optional|Criteria to apply when merging cells in the header area
`0`:No merge (`default`)
`1`:Column-based merge
`2`:Row-based merge
`3`:Column-priority merge
`4`:Row-priority merge
`5`:Column-priority four-directional merge
`6`:Row-priority four-directional merge|
|prevColumnMerge|`number`|Optional|Whether to merge cells based on the previous column
`0`:Previous column merge feature not used for entire area (`default`)
`1`:Use previous column merge feature for data area only
`2`:Use previous column merge feature for header area only
`3`:Use previous column merge feature for both data and header areas
|
|fixPrevColumnMerge|`string`|Optional|`Name` of the column to be the base of merge (`default: 0`)|
|headMerge|`number`|Optional|Criteria to apply when merging cells in the `Head` area
`0`:No merge (`default`)
`1`:Column-based merge
`2`:Row-based merge
`3`:Column-priority merge
`4`:Row-priority merge
`5`:Column-priority four-directional merge
`6`:Row-priority four-directional merge|
|footMerge|`number`|Optional|Criteria to apply when merging cells in the `Foot` area
`0`:No merge (`default`)
`1`:Column-based merge
`2`:Row-based merge
`3`:Column-priority merge
`4`:Row-priority merge
`5`:Column-priority four-directional merge
`6`:Row-priority four-directional merge|
|headPrevColumnMerge|`boolean`|Optional|Whether to merge cells based on the previous column in the `Head` fixed row area
`0(false)`:Do not use previous column-based cell merge in the `Head` fixed row area (`default`)
`1(true)`:Use previous column-based cell merge in the `Head` fixed row area|
|footPrevColumnMerge|`boolean`|Optional|Whether to merge cells based on the previous column in the `Foot` fixed row area
`0(false)`:Do not use previous column-based cell merge in the `Foot` fixed row area (`default`)
`1(true)`:Use previous column-based cell merge in the `Foot` fixed row area|

### Return Value
***none***

### Example
```javascript
// Perform column-based merge on data area, row-based merge on header area.
sheet.setAutoMerge( {dataMerge:1, headerMerge:2, prevColumnMerge:0, fixPrevColumnMerge: 'sPolicy'} );
```

### Try it

- [Demo of setAutoMerge](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/Merge/)

### Read More
- [DataMerge cfg](/docs/props/cfg/data-merge)
- [HeaderMerge cfg](/docs/props/cfg/header-merge)
- [PrevColumnMerge cfg](/docs/props/cfg/prev-column-merge)
- [FixPrevColumnMerge cfg](/docs/props/cfg/fix-prev-column-merge)
- [setAutoMergeCancel method](./set-auto-merge-cancel)
- [MergeCellsMatch](/docs/props/cfg/merge-cells-match)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.15|`fixPrevColumnMerge` added|
|core|8.2.0.14|`headMerge`, `footMerge`, `headPrevColumnMerge`, `footPrevColumnMerge` added|
