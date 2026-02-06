---
KEY: noColor
KIND: row-property
PATH: props/row/no-color
ALIAS_EN: ignores, default, applied, background, color, row, nocolor
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/no-color
---
# NoColor ***(row)***

> Ignores the default applied background color of a row.

> The background color for odd/even rows ([AlternateColor](./alternate-color)), status (added, modified, deleted), and selection colors are ignored, and background color through the `Color` property can also be prevented from being applied. 

> You can set `NoColor` on [FormulaRow](/docs/props/col/formula-row) to ignore the background color of that row. 

> The priority order for `NoColor` application is cell \> column \> row.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Feature disabled (`default`)|
|`1`|Ignore all background colors (but apply background color set through Class property)|
|`2`|Ignore only status and selection colors
|`3`|When `Color` is set, ignore status and `AlternateColor` colors, and apply `Color`

### Example
```javascript
//Prevent background color change for a specific row.
var row = sheet.getRowById("AR11")
row["NoColor"] = 1;
sheet.refreshRow(row);

//Restrict the background color change feature of FomulaRow.
sheet.FormulaRow.NoColor = 2;
sheet.refreshRow(sheet.FormulaRow);
//Can also be declared as follows:
options.Def.FormulaRow = {NoColor: 2};

//Restrict the status-based background color change feature for data rows.
options.Def.Header = {"NoColor":2};
```
### Read More
- [Alternate cfg](/docs/props/cfg/alternate)
- [Color row](./color)
- [AlternateColor row](./alternate-color)
- [FormulaRow col](/docs/props/col/formula-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.2.0.14|`NoColor: 3` behavior added|
