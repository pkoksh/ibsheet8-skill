---
KEY: calculate
KIND: method
PATH: funcs/core/calculate
ALIAS: sheet.calculate, calculate()
ALIAS_EN: executes, formula, calculations, sheet, according, row, calcorder, docs
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/calculate
---
# calculate ***(method)***

> Executes the `Formula` calculations set on the sheet according to [Row.CalcOrder](/docs/props/row/calc-order).

> In some cases, you can set only the rows that need to be calculated to `1` via the [CanFormula row](/docs/props/row/can-formula) attribute and set the remaining rows to `0`, then calculate using this function.


### Syntax
```javascript
void calculate( render, calconly, fixedonly );
```

### Parameters


|Name|Type|Required|Description|
|----------|-----|---|----|
|render |`boolean`|Optional|Whether to immediately reflect on screen
If this feature is set to `0(false)`, you must execute `rerender()` at the end of the operation for it to be reflected on screen.
`0(false)`:Not reflected
`1(true)`:Immediately reflected (`default`)|
|calconly|`boolean`|Optional|Whether to calculate only rows where `Row.CanFormula = 1`
`0(false)`:Calculate all rows (`default`)
`1(true)`:Calculate only rows where `Row.CanFormula = 1`|
|fixedonly |`boolean`|Optional|Whether to calculate only `Fixed` rows (`Header, Filter, FormulaRow`)
`0(false)`:Calculate all rows (`default`)
`1(true)`:Calculate only `Fixed` rows (`Header, Filter, FormulaRow`)|

### Return Value
***none***

### Example
```javascript
//Execute all Formulas and reflect the results.
sheet.calculate( true, false );
```

### Read More

- [Formaula appendix](/docs/appx/formula)
- [CanFormula row](/docs/props/row/can-formula)
- [CalcOrder row](/docs/props/row/calc-order)
<!--!
- `[Private]` [onAfterCalculate event](/docs/events/on-after-calculate)
- `[Private]` [onBeforeCalculate event](/docs/events/on-before-calculate)
- `[Private]` [onCalculateCell event](/docs/events/on-calculate-cell)
!-->

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.8|`render` argument `default` value changed (`false -> true`)|
|core|8.0.0.11|`fixedonly` added|
