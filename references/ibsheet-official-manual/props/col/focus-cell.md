---
KEY: focusCell
KIND: column-property
PATH: props/col/focus-cell
ALIAS_EN: defines, design, focus, cell, specific, column, receives, focuscell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/focus-cell
---
# FocusCell ***(col)***
> Defines the design of the "focus cell" when a specific column receives focus.

> Set by connecting reserved characters with the "," delimiter.

> By default, it is configured as `"Border,Class"`.

###
```css
 .IBColorFocusedCell{background-color:#FFFFDD;}
 .IBClassFocusedCell{background-color:#DDDDDD;}
```
When classes are defined as above, the appearance is as follows:

|Setting value|Appearance|
|---|---|
|Default setting (Border,Class)|![FocusCell](/assets/imgs/FocusCell3.png "Focused cell appearance")
<!-- IMAGE: Screenshot/Example Image - FocusCell -->|
|Class only|![FocusCell](/assets/imgs/FocusCell2.png "Focused cell appearance")
<!-- IMAGE: Screenshot/Example Image - FocusCell -->|
|Border,Color setting|![FocusCell](/assets/imgs/FocusCell1.png "Focused cell appearance")
<!-- IMAGE: Screenshot/Example Image - FocusCell -->|

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Border`|Applies a border to the focused cell|
|`Color`|Applies the color defined in the IBColorFocusedCell class in the css/default(theme)/main.css file as the background color of the focused cell's td tag (may cause performance degradation)|
|`Class`|Follows the design defined in the IBClassFocusedCell class in the css/default(theme)/main.css file.|

### Example
```javascript
// Show only the cell border when the column receives focus
options.Cols = [
    ...
    {Type: "Text", Name: "EM_DC", FocusRow: "", FocusCell: "Border" ...},
    ...
];
```

### Read More
<!--!
- `[Private]` [FocusCell row](/docs/props/row/focus-cell)
!-->
- [FocusCell cell](/docs/props/cell/focus-cell)
- [FocusRow row](/docs/props/row/focus-row)
- [FocusRow col](./focus-row)
- [FocusRow cell](/docs/props/cell/focus-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
