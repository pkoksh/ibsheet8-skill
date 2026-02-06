---
KEY: setMergeRange
KIND: method
PATH: funcs/core/set-merge-range
ALIAS: sheet.setMergeRange, setMergeRange()
ALIAS_EN: merges, span, specific, area, single, cell, setmergerange, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-merge-range
---
# setMergeRange ***(method)***
> Merges (`span`) a specific area into a single cell.

> Merges in a rectangular form from the start cell (`row1, col1`) to the end cell (`row2, col2`).

> `row2` must be positioned below `row1`, and `col2` must be positioned to the right of `col1`.

> **This feature is not properly supported with [SearchMode](/docs/props/cfg/search-mode):0 due to structural issues where the merge state is not maintained during scrolling.** 


###
![merge](/assets/imgs/setMergeRange.png "Merge a specific area")
<!-- IMAGE: Screenshot/Example Image - merge -->



### Syntax
```javascript
void setMergeRange( row1, col1, row2, col2 );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row1 |`object`|Required|Merge start [data row object](/docs/appx/row-object)|
|col1 |`string`|Required|Merge start column name|
|row2 |`object`|Required|Merge end [data row object](/docs/appx/row-object)|
|col2 |`string`|Required|Merge end column name|

### Return Value
***none***

### Example
```javascript
// Merge from AR2 row to AR4 row, from deptCd column to empNm column
sheet.setMergeRange( sheet.getRowById("AR2"), "deptCd", sheet.getRowById("AR4"), "empNm");
```

### Read More
- [setMergeCancel method](./set-merge-cancel)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
