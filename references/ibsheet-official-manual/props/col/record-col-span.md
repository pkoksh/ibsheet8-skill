---
KEY: recordColSpan
KIND: column-property
PATH: props/col/record-col-span
ALIAS_EN: number, columns, merge, right, based, specific, column, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/record-col-span
---
# RecordColSpan ***(col)***
> Sets the number of columns to merge to the right based on a specific column in a sheet using the multi-record ([MultiRecord](/docs/props/cfg/multi-record)) feature.

> Can only be used when [Spanned](/docs/props/row/spanned): `1` is set on the `row`. 

> Similar to `ColSpan` in an HTML Table object.

> When using the multi-record ([MultiRecord](/docs/props/cfg/multi-record)) feature set to `2`, you can use [Header](/docs/props/col/header) in `object` format and set the number of columns to merge to the right based on a specific column through `Header.RecordColSpan`.


> **<mark>Note</mark> : Columns that are merged and hidden due to `RecordColSpan` settings will not function correctly if `Name` is set on them.**


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Number of columns to merge to the right within the row|



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
        {Header: "B", Name: "colB", Type: "Image", Width: 100},
        {Header: "C", Name: "colC", Type: "Int", Width: 100},
        {Header: "D", Name: "colD", Type: "Float", Width: 100}
    ],
    // Second data row (DataRow)
    [
        {Header: "E", Name: "colE", Type: "Text", Width: 100},
        {Header: "F", Name: "colF", Type: "Text", Width: 100},
        {Header: "G", Name: "colG", Type: "Enum", Width: 100},
        {Header: "H", Name: "colH", Type: "Date", Width: 100}
    ],
    // Third data row (DataRow)
    [
        {Header: "I", Name: "colI", Type: "Text", Width: 100},
        {Header: "J", Name: "colJ", Type: "Text", Width: 100, RecordColSpan: 3},
        {Header: "J", Width: 50},
        {Header: "J", Width: 120}
    ]
];
```

### Read More
- [RowSpan cell](./row-span)
- [Spanned row](/docs/props/row/spanned)
- [RecordRowSpan col](/docs/props/col/record-row-span)
- [MultiRecord cfg](/docs/props/cfg/multi-record)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
