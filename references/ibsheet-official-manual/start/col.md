---
KEY: col
KIND: guide
PATH: start/col
ALIAS_EN: dividing, sheet, vertically, separated, left, center, right, areas
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/start/col
---
# Understanding Column (Col) Structure

> When dividing the sheet vertically, it is separated into the `Left`, `Center`, and `Right` areas (Sections).

> Each area can have its own scroll independently, and movement between areas is also possible.

## Column Creation

When creating a sheet, you can create as many columns as desired by defining features for each column in `LeftCols, Cols, RightCols`. 

However, **the SEQ column is always created automatically, and if no column with Name: "SEQ" is explicitly configured, it is created in a Hidden state in LeftCols.**
 You can view the hidden `SEQ column` with [sheet.showCol('SEQ');](/docs/funcs/core/show-col).

Features for frequently used columns can be applied uniformly to multiple columns through [Extend](/docs/props/col/extend).


```javascript
var options =
{
    "Cfg": {        // Global feature settings (cfg property)
        "LeftCanResize": 1, "LeftWidth": 100, "RightCanResize": 1, "RightWidth": 100
    },

    LeftCols: [     // Left area (LeftSection) fixed column settings (col property)
        {"Header": "NO", "Type": "Int", "Name": "SEQ", "Width": 50},
        {"Header": "Select", "Type": "Bool", "CanEdit": 1,"Name": "chk", "Width": 50},
        {"Header": "Year", "Name": "Year", "Type": "Text", "Align": "Center", "Width": 70}
    ],

    Cols: [         // Center area
        {"Header": "Revenue", "Name": "revenue", "Type": "Int", "Width": 120, "Format": "#,### million won"},
        {"Header": "Cost of Revenue", "Name": "revenueOrg", "Type": "Int", "Width": 120, "Format": "#,### million won"},
        {"Header": "SG&A Expenses", "Name": "salesMgr", "Type": "Int", "Width": 120, "Format": "#,### million won"},
        {"Header": "Operating Income", "Name": "oprIncome", "Type": "Int", "Width": 120, "Format": "#,### million won", Formula: "revenue-revenueOrg-salesMgr", Color: "#DEDEDE"}
    ],

    RightCols: [    // Right area (RightSection) fixed column settings (col property)
        {"Header": "Financial Loss", "Name": "finloss", "Type": "Int", "Width": 120, "Format": "#,### million won"},
        {"Header": "Corporate Tax", "Name": "corpTax", "Type": "Int", "Width": 120, "Format": "#,### million won"},
        {"Header": "Net Income", "Name": "INCOME", "Type": "Int", "Width": 120, "Format": "#,### million won", Formula: "oprIncome-finloss-corpTax", Color: "#DEDEDE"}
    ]
};
```
![Section](/assets/imgs/section2.png "section")
<!-- IMAGE: Screenshot/Example Image - Section -->

[`Left, Center, Right areas`]

The width for each area is set through [LeftWidth](/docs/props/cfg/left-width) and [RightWidth](/docs/props/cfg/right-width) in `Cfg`.

However, if the sheet width is large enough that a horizontal scrollbar is not needed, these settings are ignored.

The areas are originally adjacent to each other, and to allow users to manually resize the areas, set [LeftCanResize](/docs/props/cfg/left-can-resize) and [RightCanResize](/docs/props/cfg/right-can-resize) in `Cfg`.

## Changing Column Features

You can check settings, modify features, or add features to already created columns.
```javascript
var col = sheet.Cols["finloss"];    // Get column object with Name "finloss"

// Check the color set on the column
console.log(col["Color"]);

// Change column properties
col["TextColor"] = "#FF0000";       // Define color on the column
col["CanSelect"] = 0;               // Disable selection on the column (not selected when dragging)
sheet.rerender();                   // Apply changes
```
However, when directly accessing and changing column property values as shown above, the sheet may not detect the changes, which could cause unexpected issues. Therefore, it is recommended to use the [getAttribute](/docs/funcs/core/get-attribute) or [setAttribute](/docs/funcs/core/set-attribute) functions whenever possible.


## Using the **Extend** Feature for Frequently Used Column Types

You can define commonly used column features in a project, such as Date columns in "yyyy-MM-dd" format or Float columns in currency format like "$ 12.33", and use those predefined settings across individual screens.



[`The ibsheet-common.js file contains IB_Preset with common feature definitions.`]
```javascript
var IB_Preset = {
  "YMD": {Type: "Date", Width: 110, Align: "Center", Format: "yyyy-MM-dd",  DataFormat: "yyyyMMdd", EditFormat: "yyyyMMdd"},
  "YM": {Type: "Date", Width: 90, Align: "Center", Format: "yyyy-MM", DataFormat: "yyyyMM", EditFormat: "yyyyMM"},
  "USD":{Type: "Float", Width: 100, Format: "$ #,###.##"},
   ....
};
```
[Sheet initialization syntax for each page]
```javascript
var options = {
    Cols:[
        /// Apply predefined Type, Format, and other settings through Extend
        {Header: "Overseas Income", Name: "Income", Extend: IB_Preset.USD},
        {Header: "Acquisition Date", Name: "ICDate", Extend: IB_Preset.YMD}
    ]
}

```

### Read More
- [LeftWidth cfg](/docs/props/cfg/left-width)
- [RightWidth cfg](/docs/props/cfg/right-width)
- [LeftCanResize cfg](/docs/props/cfg/left-can-resize)
- [RightCanResize cfg](/docs/props/cfg/right-can-resize)
- [Extend col](/docs/props/col/extend)
- [showCol method](/docs/funcs/core/show-col)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
