---
KEY: rowMerge
KIND: row-property
PATH: props/row/row-merge
ALIAS_EN: whether, merge, row, executing, value, based, merging, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/row-merge
---
# RowMerge ***(row)***

> Sets whether to `merge the row` when executing value-based merging in the data area/header area ([DataMerge](/docs/props/cfg/data-merge), [HeaderMerge](/docs/props/cfg/header-merge)).


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Do not include the row in merge targets.|
|`1(true)`|Include the row in merge targets. (`default`)|

### Example
```javascript
//Do not merge a specific row.
var row = sheet.getFirstVisibleRow();
row["RowMerge"] = false;
sheet.setAutoMerge( {dataMerge: 1, headerMerge: 0, prevColumnMerge: 0} );

// Do not merge the first header row.
var header = sheet.getHeaderRows()[0];
header["RowMerge"] = false;
```

### Read More
- [ColMerge col](/docs/props/col/col-merge)
- [ColMerge cell](/docs/props/cell/col-merge)
- [DataMerge cfg](/docs/props/cfg/data-merge)
- [HeaderMerge cfg](/docs/props/cfg/header-merge)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
