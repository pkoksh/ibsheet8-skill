---
KEY: recordRowSpan
KIND: column-property
PATH: props/col/record-row-span
ALIAS_EN: number, rows, merge, downward, based, specific, row, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/record-row-span
---
# RecordRowSpan ***(col)***
> Sets the number of rows to merge downward based on a specific row in a sheet using the multi-record ([MultiRecord](/docs/props/cfg/multi-record)) feature.

> Can only be used when [Spanned](/docs/props/col/spanned):`1` is set on the col. 

> Similar to `RowSpan` in an HTML Table object. 

> When using the multi-record ([MultiRecord](/docs/props/cfg/multi-record)) feature set to `2`, you can use [Header](/docs/props/col/header) in `object` format and set the number of rows to merge downward based on a specific row through `Header.RecordRowSpan`.



> **<mark>Note</mark> : Columns that are merged and hidden due to `RecordRowSpan` settings will not function correctly if `Name` is set on them.**



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Number of rows to merge downward within the column|



### Example
```javascript
options.Cfg = {
   MultiRecord: 1  // Set as multi-record dedicated sheet
   ...
};

// Column settings when using multi-record feature (1D array -> 2D array)
options.Cols = [
    // First data row (DataRow)
    [
        {Header: "A", Name: "colA", Type: "Text", Width: 100},
        {Header: "B", Name: "colB", Type: "Image", Width: 100, RecordRowSpan: 3},
        {Header: "C", Name: "colC", Type: "Int", Width: 100},
        {Header: "D", Name: "colD", Type: "Float", Width: 100}
    ],
    // Second data row (DataRow)
    [
        {Header: "E", Name: "colE", Type: "Text", Width: 100},
        {Header: "B"},
        {Header: "F", Name: "colF", Type: "Enum", Width: 100},
        {Header: "G", Name: "colG", Type: "Date", Width: 100}
    ],
    // Third data row (DataRow)
    [
        {Header: "H", Name: "colH", Type: "Text", Width: 100},
        {Header: "B"},
        {Header: "I", Name: "colI", Type: "Text", Width: 100},
        {Header: "J", Name: "colJ", Type: "Text", Width: 100},
    ]
];
```

### Read More
- [Span cell](/docs/props/cell/span)
- [Spanned col](/docs/props/col/spanned)
- [RecordColSpan col](/docs/props/col/record-col-span)
- [MultiRecord cfg](/docs/props/cfg/multi-record)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
