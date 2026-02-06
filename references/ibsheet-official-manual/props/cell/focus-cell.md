---
KEY: focusCell
KIND: cell-property
PATH: props/cell/focus-cell
ALIAS_EN: defines, design, focused, cell, specific, receives, focus, focuscell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/focus-cell
---
# FocusCell ***(cell)***
> Defines the design of the focused cell when a specific cell receives focus.

> Set using reserved words connected by the "," delimiter.

> By default, it consists of "Border, Color".

###
```css
 .IBColorFocusedCell{background-color:#FFFFDD;}
 .IBClassFocusedCell{background-color:#DDDDDD;}
```
When classes are defined as above, the appearance is as follows:

|Setting Value|Appearance|
|---|---|
|Default setting (Border,Color)|![FocusCell](/assets/imgs/FocusCell1.png "Focused cell appearance")
<!-- IMAGE: Screenshot/Example Image - FocusCell -->|
|Class only|![FocusCell](/assets/imgs/FocusCell2.png "Focused cell appearance")
<!-- IMAGE: Screenshot/Example Image - FocusCell -->|
|Border,Class setting|![FocusCell](/assets/imgs/FocusCell3.png "Focused cell appearance")
<!-- IMAGE: Screenshot/Example Image - FocusCell -->|

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Border`|Applies border to the focused cell|
|`Color`|Applies the color defined in the IBColorFocusedCell class in css/default(theme)/main.css as background color to the td tag of the focused cell (may cause performance degradation)|
|`Class`|Follows the design defined in the IBClassFocusedCell class in css/default(theme)/main.css.|

### Example
```javascript
// Show only the background color when focus enters the cell.
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "FocusCell", "Class");
```

### Read More
<!--!
- [`Private`] [FocusCell row](/docs/props/row/focus-cell)
!-->
- [FocusCell col](/docs/props/col/focus-cell)
- [FocusRow cell](./focus-row)
- [FocusRow row](/docs/props/row/focus-row)
- [FocusRow col](/docs/props/col/focus-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
