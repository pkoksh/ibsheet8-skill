---
KEY: canFormula
KIND: row-property
PATH: props/row/can-formula
ALIAS_EN: whether, formula, operates, row, canformula
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/can-formula
---
# CanFormula ***(row)***

> Sets whether `Formula` operates on a row.

> When set to `0(false)`, calculations will not be performed even if there are changes in cell values with `Formula` configured.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|`Formula` does not operate|
|`1(true)`|`Formula` can operate|


### Example
```javascript
//Do not perform Formula for all data rows.
//(You can write CanFormula for specific rows separately, then perform Formula only when needed through the (method)calculate() function.)
options.Def.Row = {CanFormula: 0};

or

//Allow Formula for all data rows.
options.Def.Row = {CanFormula: 1};
... sheet creation ...



//Perform Formula only on specific rows at a certain point after loading.
sheet.getRowById("AR3")["CanFormula"] = 1;
sheet.getRowById("AR5")["CanFormula"] = 1;

//Calculate the formula.
sheet.calculate(1, 1);
```

### Read More

- [CalcOrder row](./calc-order)
- [calculate method](/docs/funcs/core/calculate)
- [Formula appendix](/docs/appx/formula)
<!--!
- `[Private]` [onAfterCalculate event](/docs/events/on-after-calculate)
- `[Private]` [onBeforeCalculate event](/docs/events/on-before-calculate)
- `[Private]` [onCalculateCell event](/docs/events/on-calculate-cell)
!-->

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
