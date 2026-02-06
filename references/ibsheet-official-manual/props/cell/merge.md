---
KEY: merge
KIND: cell-property
PATH: props/cell/merge
ALIAS_EN: feature, displays, values, cells, row, within, single, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/merge
---
# Merge ***(cell)***
> A feature that displays values from other cells in the same row within a single cell.

> It is only visually displayed; the actual cell values are managed separately.

> The `row` must have the [Spanned](/docs/props/row/spanned) property set to `1` for this to work.


###
![Merge property](/assets/imgs/Merge.png "Merge property")
<!-- IMAGE: Screenshot/Example Image - Merge property -->
[Set as empinfoMerge:"empno,empNm,pstnGbn"]


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Column names (multiple can be specified using "," as delimiter)|

### Example
```javascript
// Spanned must be configured.
options.Def.Row = {Spanned: 1};

// Display values from empno, empNm, pstnGbn columns in the empinfo column
opyiond.Def.Row["empinfo"] = {"Merge": "empno,empNm,pstnGbn"}

```
### Read More
- [Span cell](./span)
- [Spanned row](/docs/props/row/spanned)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
