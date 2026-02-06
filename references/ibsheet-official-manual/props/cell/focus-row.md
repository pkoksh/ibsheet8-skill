---
KEY: focusRow
KIND: cell-property
PATH: props/cell/focus-row
ALIAS_EN: cursor, focus, row, displayed, cell, clicked, consists, div
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/focus-row
---
# FocusRow ***(cell)***
> The "cursor focus row" displayed when a cell is clicked consists of a DIV object floating above the Table object.

> Sets the design of the "cursor focus row" to be displayed when a specific cell has focus.

> Set using reserved words connected by the "," delimiter.

> By default, it consists of "Border, Background".

###
![FocusRow](/assets/imgs/focusRow1.png "FocusRow default")
<!-- IMAGE: Screenshot/Example Image - FocusRow -->

[Default FocusRow]

![FocusRow](/assets/imgs/focusRow2.png "FocusRow default")
<!-- IMAGE: Screenshot/Example Image - FocusRow -->

[When set to Background without border]



### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Border`|Use border for the cursor focus DIV (.IBFocusRowBorder)|
|`Background`|Use background color for the cursor focus DIV (.IBFocusRowBackground) |
|`Color`|Do not use cursor focus DIV; instead apply background-color to the Table object (may degrade performance, excluding focused cell) (.IBColorFocused) |
|`Class`|Follows the design defined in the .IBClassFocused class in css/default(theme)/main.css. (excluding focused cell)|

### Example
```javascript
// Use only background color for the focus row when focus enters the cell
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "FocusRow", "Background");
```

### Read More
- [FocusRow row](/docs/props/row/focus-row)
- [FocusRow col](/docs/props/col/focus-row)
<!--!
- `[Private]` [FocusCell row](/docs/props/row/focus-cell)
!-->
- [FocusCell col](/docs/props/col/focus-cell)
- [FocusCell cell](./focus-cell)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
