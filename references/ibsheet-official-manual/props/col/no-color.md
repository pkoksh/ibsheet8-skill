---
KEY: noColor
KIND: column-property
PATH: props/col/no-color
ALIAS_EN: ignores, default, background, color, applied, column, nocolor, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/no-color
---
# NoColor ***(col)***

> Ignores the default background color applied to the column.

> Ignores the background color for odd/even rows ([AlternateColor](/docs/props/row/alternate-color)), status (added, modified, deleted) and selection colors, and can also prevent background colors set through the [Color](./color) property from being applied. 

> The priority order for `NoColor` is cell \> column \> row.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Feature disabled (`default`)|
|`1`|Ignore all background colors (but apply background colors set through the Class property)|
|`2`|Ignore only status and selection colors|
|`3`|When `Color` is set, ignore status and `AlternateColor` colors and apply the `Color` color|

### Example
```javascript
// Set a specific column to ignore all background colors
options.Cols = [
    ...
    {Type: "Text", Name: "Dept", NoColor: 1, Width: 100 ...},
    ...
];
```
### Read More
- [Alternate cfg](/docs/props/cfg/alternate)
- [Color col](./color)
- [AlternateColor row](/docs/props/row/alternate-color)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.2.0.14|`NoColor: 3` behavior added|
