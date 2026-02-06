---
KEY: recordHColTitle
KIND: column-property
PATH: props/col/record-h-col-title
ALIAS_EN: title, header, column, recordhcolspan, docs, props, col, record
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/record-h-col-title
---
# RecordHColTitle ***(col)***
> Sets the title of the header column where [RecordHColSpan](/docs/props/col/record-h-col-span) is set in a sheet using the multi-record ([MultiRecord](/docs/props/cfg/multi-record)) feature.

> **Operates independently of data and is not sent to the server.**

> **<mark>Note</mark> : When [MultiRecord](/docs/props/cfg/multi-record) is set to `2`, this property cannot be used.**




### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Title of the header column where [RecordHColSpan](/docs/props/col/record-h-col-span) is set|



### Example
```javascript
options.Cfg = {
   MultiRecord: 1 // Set as multi-record dedicated sheet
   ...
};

// Column settings when using multi-record feature (1D array -> 2D array)
Cols: [
   // First data row (DataRow)
   [
      { "Header": "Head Office", Name: "HeadOffice", "Width": 60, RecordRowSpan: 3, RecordHColSpan: 5, RecordHColTitle: "Organization" },
      { "Header": "Laboratory", Name: "Laboratory", "Width": 60, RecordRowSpan: 3 },
      { "Header": "Branch 1", Name: "BranchOffice1", "Width": 60, RecordRowSpan: 3 },
      { "Header": "Branch 2", Name: "BranchOffice2", "Width": 60, RecordRowSpan: 3 },
      { "Header": "Other", Name: "sEtc", "Width": 60, RecordRowSpan: 3 }
   ],

   // Second data row (DataRow)
   [
      { "Header": "Head Office", RecordHColSpan: 2, RecordHColTitle: "Affiliate 1" },
      { "Header": "Laboratory" },
      { "Header": "Branch 1", RecordHColSpan: 2, RecordHColTitle: "Affiliate 2" },
      { "Header": "Branch 2" },
      { "Header": "Other" }
   ],

   // Third data row (DataRow)
   [
      { "Header": "Head Office" },
      { "Header": "Laboratory" },
      { "Header": "Branch 1" },
      { "Header": "Branch 2" },
      { "Header": "Other" }
   ]
];
```

### Read More
- [RowSpan cell](./row-span)
- [Spanned row](/docs/props/row/spanned)
- [RecordRowSpan col](/docs/props/col/record-row-span)
- [RecordColSpan col](/docs/props/col/record-col-span)
- [RecordHColSpan col](/docs/props/col/record-h-col-span)
- [MultiRecord cfg](/docs/props/cfg/multi-record)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
