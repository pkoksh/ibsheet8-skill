---
KEY: selectionSummary
KIND: config-property
PATH: props/cfg/selection-summary
ALIAS_EN: criteria, showing, cell, count, sum, average, values, area
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/selection-summary
---
# SelectionSummary ***(cfg)***
> Sets the criteria for showing the cell count and sum/average values of the area selected through dragging (or keyboard).

> The position where the summary information is displayed must be set with `Layout:["SummaryLabel"]` in the [InfoRowConfig](/docs/props/cfg/info-row-config) property.


> **<mark>Caution</mark>: This feature cannot be used in MultiRecord structure sheets.**

> If `EmptyCell` is not set, cells with **no value** are ignored in the selected cell count and average calculations.

> Note that **no value** here means there is no data for that cell at the time of search. If retrieved data is deleted or 0 is entered, it is included in the calculation.

### Type
`object`

### Options
|Value|Type|Description|
|----------|-----|---|
|`Mode`|`string`|Set whether to include empty cells in calculation (`EmptyCell`), whether to include deleted rows in calculation (`DelRow`), and whether to calculate all non-adjacent selected areas (`AllRange`) connected with the delimiter "\|" 
(ex: "Mode":"EmptyCell\|DelRow\|AllRange") Default is `""`(none included)|
|`Align`|`string`|Alignment of summary information (`Set one of Left, Center, Right`, default `Left`)|
|`Width`|`number`|Size of the summary information area (number in pixel units, default `350`)|
|`SumFormat`|`string`|Format setting for sum value display (`default: "#,##0.00"`)|
|`AvgFormat`|`string`|Format setting for average value display (`default: "#,##0.00"`)|

![selectionSummary](/assets/imgs/selectionSummary.png "selectionSummary")
<!-- IMAGE: Screenshot/Example Image - selectionSummary -->

### Example
```javascript
options.Cfg = {
    InfoRowConfig: { // Display sum or count information Row
        "Visible": true,
        "Layout": ["Count", "SummaryLabel"],
    },
    SelectionSummary:{
        "Mode": "DelRow",
        "Width": 500,
        "SumFormat": "#,##0",
        "AvgFormat": "#,##0.##"
    }
};
```

### Read More
- [InfoRowConfig cfg](/docs/props/cfg/info-row-config)
- [setInfoRow method](/docs/funcs/core/set-info-row)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.13|Mode `AllRange` feature added|
|core|8.0.0.26|`SumFormat`, `AvgFormat` feature added|
