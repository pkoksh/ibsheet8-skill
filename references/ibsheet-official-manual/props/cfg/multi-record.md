---
KEY: multiRecord
KIND: config-property
PATH: props/cfg/multi-record
ALIAS_EN: feature, displays, one, data, record, across, multiple, rows
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/multi-record
---
# MultiRecord ***(cfg)***

> A feature that displays one data record across multiple rows in the sheet.

> In a regular sheet, even if there are multiple headers, data is represented as one row per retrieved data (record). This feature allows it to be displayed across multiple rows.

> Therefore, there are feature restrictions as follows. (Other features work the same as the default sheet behavior.)

> * `Subtotal cannot be used`
> * `Group cannot be used`
> * `Tree cannot be used`
> * `Auto merge cannot be used (merging is only possible with RecordRowSpan and RecordColSpan at creation time)`
> * `Dynamic area merging cannot be used (merging is only possible with RecordRowSpan and RecordColSpan at creation time)`
> * `Column move is not possible`
> * `Caution when using Visible property at creation time (recommended to create it in the last column at creation time)`
> * `hideCol/showCol is not possible (dynamic column visibility control is not possible)`
> * `Dynamic column add/delete is not possible (only Cols defined at sheet creation can be used)`
> * `Cell/column-level selection is not possible (only row-level selection is possible)`
> * `Cell/column-level copy/paste is not possible (row-level copy/paste is possible)`
> * `SelectionSummary feature cannot be used`
> * `Excel download/upload and row copy/paste process all columns in a single line (shape is not maintained)`
> * `doPrint printing processes all columns in a single line (shape is not maintained)`
> * `down2Pdf download processes all columns in a single line (shape is not maintained)`
> * `Width is applied based on the width of the topmost row among multiple header rows; Width property does not work for rows other than the topmost row`
> * `RelWidth does not work for dummy columns with RecordColSpan set, and Width does not change dynamically`
> * `Def.Header.SortIcons: 1 (show all sort icons feature) cannot be used`
> * `LeftCols/RightCols and Type:"Lines" cannot be used together`
> * `Filter dialog ((Cfg) UseFilterDialog) cannot be used`
> * `Column paging ((Cfg) ColPage) cannot be used`


> Additional feature restrictions when using `MultiRecord:2` are as follows.
> * `Header Hover cannot be used` (works like [HoverScope](/docs/props/cfg/hover-scope):`1`)
> * `Header Sort cannot be used`
> * `Separate merge for data and header is supported (merge can be configured with Header.RecordRowSpan and Header.RecordColSpan)`
> * `RecordHColSpan and RecordHColTitle cannot be used`


### Type
`numbewr`

### Options
|Value|Description|
|-----|-----|
|`0`|MultiRecord feature disabled (`default`)|
|`1`|MultiRecord feature enabled|
|`2`|MultiRecord feature enabled, supports separate merge for data and header by setting header in Object format (`Header.RecordRowSpan`, `Header.RecordColSpan`)|


### Example
```javascript
options.Cfg = {
    MultiRecord: 1 // Set as a MultiRecord dedicated sheet
    ...
};

// Column configuration when using MultiRecord (1D array -> 2D array)
options.Cols = [
    // First unit data row (DataRow)
    [
       {Header: "A", Name: "colA", Type:"Text", Width: 100},
       {Header: "B", Name: "colB", Type:"Image", Width: 100, RecordRowSpan: 3},
       {Header: "C", Name: "colC", Type:"Int", Width: 100},
       {Header: "D", Name: "colD", Type:"Float", Width: 100}
    ],
    // Second unit data row (DataRow)
    [
       {Header: "E", Name: "colE", Type:"Text", Width: 100},
       {Header: "B"},
       {Header: "F", Name: "colF", Type:"Enum", Width: 100},
       {Header: "G", Name: "colG", Type:"Date", Width: 100}
    ],
    // Third unit data row (DataRow)
    [
       {Header: "H", Name: "colH", Type:"Text", Width: 100},
       {Header: "B"},
       {Header: "I", Name: "colI", Type:"Text", Width: 100, RecordColSpan: 2},
       {Header: "I", Width: 120} // Dummy column
    ]
];

// Data when using MultiRecord (same as before)
data = [
   {colA: "data1_A", colB: "data1_B", colC: 0, colD: 0.0, colE: "data1_E", colF: "code1" ,colG: "20191017", colH: "data1_H", colI: "data1_I"},
   {colA: "data2_A", colB: "data2_B", colC: 1, colD: 1.0, colE: "data2_E", colF: "code2" ,colG: "20191101", colH: "data2_H", colI: "data2_I"},
];
```

### Read More
- [RecordRowSpan col](/docs/props/col/record-row-span)
- [RecordColSpan col](/docs/props/col/record-col-span)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.4|Excel upload/download dialog support|
|core|8.3.0.52|`2` option added|
