---
KEY: addFormula
KIND: method
PATH: funcs/core/add-formula
ALIAS: sheet.addFormula, addFormula()
ALIAS_EN: adds, formula, specific, row, column, cell, addformula, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/add-formula
---
# addFormula ***(method)***

> Adds a formula to a specific row, column, or cell.

> If `row` and `col` are not specified, the formula is added to all data.

> When using this feature, [CanFormula](/docs/props/row/can-formula) is automatically set to true.

> Formulas set in [CalcOrder](/docs/props/row/calc-order) are added sequentially.

> For details, refer to Chapter 7 [Formula appendix](/docs/appx/formula).
<!--!
> `[Private description]` If [CalcOrder](/docs/props/row/calc-order) is set in def, it is added to def; if set in the row object, it is added to the row object.
!-->

### Syntax
```javascript
boolean addFormula( formula, row, col, attr, render );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|formula|`function` \| `string`|Required|Formula to add|
|row |`object` \| `array[object]`|Optional|[Data row object](/docs/appx/row-object) or array of [data row objects](/docs/appx/row-object)|
|col |`string`|Optional|Column name|
|attr|`string`|Optional|Attribute name of [attribute + Formula](/docs/props/col/attribute-formula) to add|
|render|`boolean`|Optional|Whether to immediately reflect on screen
If this feature is set to `0(false)`, you must execute `rerender()` at the end of the operation for it to be reflected on screen.
`0(false)`:Not reflected
`1(true)`:Immediately reflected (`default`)|

### Return Value
***boolean*** : Whether the function operated normally. (Returns false if the argument values are invalid and could not be executed)

### Example
```javascript
// Dynamically add a Formula after adding a column
sheet.addCol( "IntData", 0, -1, {Type:"Int",Header:"Added Int Column",Width:200,CanEdit:1}, true);

var colorFormula = function (param) {
    if (param.Row && param.Row["IntData"] === 0) {
        return "#FFD9FA"
    }
}
// Change the background color of data rows based on a condition
sheet.addFormula(colorFormula, "", "", "Color");

////////////////////////////////////////////
var Formula = function (param) {
    if (param.Row["IntData"] > 100) {
        return true
    } else {
        return false
    }
}
// Change checkbox column check based on the value of IntData
sheet.addFormula(Formula, "", "CheckData", "", true);

////////////////////////////////////////////
// Change the value of the TextData column in the first row of the sheet to the sum of IntData and FloatData columns
sheet.addFormula("IntData + FloatData", sheet.getFirstRow(), "TextData", "", true);
```

### Read More
- [Formula appendix](/docs/appx/formula)
- [CanFormula Row](/docs/props/row/can-formula)
- [CalcOrder Row](/docs/props/row/calc-order)
- [attribute+Formula col](/docs/props/col/attributeformula)
- [FormulaRow col](/docs/props/col/formula-row)
- [Formula col](/docs/props/col/formula)
- [attribute+Formula cell](/docs/props/cell/attribute-formula)
- [calculate method](/docs/funcs/core/calculate)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.4|Feature added|
