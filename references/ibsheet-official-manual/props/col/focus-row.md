---
KEY: focusRow
KIND: column-property
PATH: props/col/focus-row
ALIAS_EN: cursor, focus, row, displayed, cell, clicked, structured, div
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/focus-row
---
# FocusRow ***(col)***
> The "cursor focus row" displayed when a cell is clicked is structured as a DIV object floating above a Table object.

> Sets the design of the "cursor focus row" displayed when a specific cell has focus.

> Set by connecting reserved characters with the "," delimiter.

> By default, it is configured as "Border, Background".

###
![FocusRow](/assets/imgs/focusRow1.png "FocusRow default")
<!-- IMAGE: Screenshot/Example Image - FocusRow -->

[Default `FocusRow`]

![FocusRow](/assets/imgs/focusRow2.png "FocusRow default")
<!-- IMAGE: Screenshot/Example Image - FocusRow -->

[When set to `Background` without `border`]

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Border`|Uses the border of the cursor focus DIV (.IBFocusRowBorder)|
|`Background`|Uses the background color of the cursor focus DIV (.IBFocusRowBackground)|
|`Color`|Applies background-color to the Table object without using the cursor focus DIV (may cause performance degradation, excludes focus cell) (.IBColorFocused)|
|`Class`|Follows the design defined in the .IBClassFocused class in the css/default(theme)/main.css file. (excludes focus cell)|

### Example
```javascript
// Show only the border for the focus row when the column receives focus, without background color
options.Cols = [
    ...
    {Type: "Text", Name: "EM_DC", FocusRow: "Border" ...},
    ...
];
```
### Read More
- [FocusRow row](/docs/props/row/focus-row)
- [FocusRow cell](/docs/props/cell/focus-row)
<!--!
- `[Private]` [FocusCell row](/docs/props/row/focus-cell)
!-->
- [FocusCell col](./focus-cell)
- [FocusCell cell](/docs/props/cell/focus-cell)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
