---
KEY: recordHColSpan
KIND: column-property
PATH: props/col/record-h-col-span
ALIAS_EN: number, columns, merge, right, based, specific, header, column
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/record-h-col-span
---
# RecordHColSpan ***(col)***
> Sets the number of columns to merge to the right based on a specific header column in a sheet using the multi-record ([MultiRecord](/docs/props/cfg/multi-record)) feature, when [RecordRowSpan](/docs/props/col/record-row-span) is set to 2 or more and [RecordColSpan](/docs/props/col/record-col-span) is not set.

> In this case, since one header is divided for use, the data is displayed as a single cell. (i.e., a feature to only split the header visually)

> Can only be used when [Spanned](/docs/props/row/spanned):`1` is set on the `row`. 

> Similar to `ColSpan` in an HTML Table object.


> **<mark>Note</mark> : The multi-record header merge feature using `Header.RecordRowSpan`, `Header.RecordColSpan`, etc. in the overall sheet initial settings can never be used together with this feature.**

> **<mark>Note</mark> : When using this property, `Name` must be declared in the column information or in the column information of the upper data unit at the same position.**

> **<mark>Note</mark> : When [MultiRecord](/docs/props/cfg/multi-record) is set to `2`, this property cannot be used.**



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Number of columns to merge to the right within the header row|



### Example
```javascript
options.Cfg = {
   MultiRecord: 1  // Set as multi-record dedicated sheet
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
- [RowSpan cell](/docs/props/cell/row-span)
- [Spanned row](/docs/props/row/spanned)
- [RecordRowSpan col](/docs/props/col/record-row-span)
- [RecordColSpan col](/docs/props/col/record-col-span)
- [RecordHColTitle col](/docs/props/col/record-h-col-title)
- [MultiRecord cfg](/docs/props/cfg/multi-record)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
