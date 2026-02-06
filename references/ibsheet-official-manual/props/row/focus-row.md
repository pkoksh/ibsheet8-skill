---
KEY: focusRow
KIND: row-property
PATH: props/row/focus-row
ALIAS_EN: cursor, focus, row, displayed, clicking, data, cell, composed
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/focus-row
---
# FocusRow ***(row)***
> The "cursor focus row" displayed when clicking a data cell is composed of a DIV object floating above a Table object.

> Sets the design of the "cursor focus row" to be displayed when a specific row has focus.

> Set by connecting reserved characters with the delimiter ",".

> By default, it is configured as "Border, Background".

###
![FocusRow](/assets/imgs/focusRow1.png "FocusRow default")
<!-- IMAGE: Screenshot/Example Image - FocusRow -->

[**Normal FocusRow**]

![FocusRow](/assets/imgs/focusRow2.png "FocusRow default")
<!-- IMAGE: Screenshot/Example Image - FocusRow -->

[**When set to Background without border**]



### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Border`|Use border for the cursor focus DIV (.IBFocusRowBorder)|
|`Background`|Use background color for the cursor focus DIV (.IBFocusRowBackground) |
|`Color`|Apply background-color to the Table object without using the cursor focus DIV (may cause performance degradation, focus cell is excluded) (.IBColorFocused) |
|`Class`|Follows the design defined in the .IBClassFocused class in the css/default(theme)/main.css file. (focus cell is excluded)|


### Example
```javascript
//Modify the focus row design for a specific row to show only background color without border.
var row = sheet.getRowById("AR55");
row["FocusRow"] = "Background";

//Modify the focus row design for all rows to follow the design defined in the .IBClassFocused class.
options.Def = {
  Row : {
    FocusRow: "Class"
  }
};
```

### Read More
- [FocusRow col](/docs/props/col/focus-row)
- [FocusRow cell](/docs/props/cell/focus-row)
<!--!
- `[Private]` [FocusCell row](./focus-cell)
!-->
- [FocusCell col](/docs/props/col/focus-cell)
- [FocusCell cell](/docs/props/cell/focus-cell)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
