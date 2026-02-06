---
KEY: getMergeRange
KIND: method
PATH: funcs/core/get-merge-range
ALIAS: sheet.getMergeRange, getMergeRange()
ALIAS_EN: checks, merged, area, rowspan, span, based, specific, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-merge-range
---
# getMergeRange ***(method)***
> Checks the merged area (RowSpan, Span) based on a specific cell.

> Returns the merge start cell (top-left cell) and end cell (bottom-right cell) based on the specified cell as an array.


### Syntax
```javascript
array getMergeRange( row, col);
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|Required|[data row object](/docs/appx/row-object) as merge reference|
|col |`string`|Required|Column name as merge reference|

### Return Value
***object (array[])*** : Returns an array created in the order of merge start row, merge start column, merge end row, merge end column

[start [data row object](/docs/appx/row-object), start column name, end [data row object](/docs/appx/row-object), end column name]

*For cells that are not merged, the start row and end row returned are the same as the row entered as parameter, and likewise the start column and end column are the same as the col entered as parameter.*

### Example
```javascript
// When the area around the AR2 row, deptCd column is merged, return the merge area
var mergeArr = sheet.getMergeRange( sheet.getRowById("AR2"), "deptCd");

var mergeStartRow = mergeArr[0]; // merge start row
var mergeStartCol = mergeArr[1]; // merge start column
var mergeEndRow = mergeArr[2]; // merge end row
var mergeEndCol = mergeArr[3]; // merge end column
```

### Read More
- [setMergeRange method](./set-merge-range)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|Feature added|
