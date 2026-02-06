---
KEY: noColor
KIND: cell-property
PATH: props/cell/no-color
ALIAS_EN: ignores, background, color, applied, cell, nocolor
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/no-color
---
# NoColor ***(cell)***

> Ignores the background color applied to the cell.

> Background colors for odd/even rows ([AlternateColor](/docs/props/row/alternate-color)), status (added/modified/deleted), selection, and non-editable columns are ignored.
 Background color set via the [Color](./color) property can also be prevented from being applied.

> The priority order for `NoColor` is cell \> column \> row.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Feature disabled (`default`)|
|`1`|Ignore all background colors (but apply background color set via the Class property)|
|`2`|Ignore only status and selection colors|
|`3`|When `Color` is set, ignore status, `AlternateColor`, and non-editable colors, and always apply the `Color` value

### Example
```javascript
// Set a specific cell to ignore all background colors
var ROW = sheet.getRowById("AR10");
ROW["CLSNoColor"] = 1;
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});
```
### Read More
- [Alternate cfg](/docs/props/cfg/alternate)
- [Color cell](./color)
- [AlternateColor row](/docs/props/row/alternate-color)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.2.0.14|Added `NoColor: 3` behavior|
