---
KEY: noCalculate
KIND: row-property
PATH: props/row/no-calculate
ALIAS_EN: whether, specific, row, included, subtotal, total, calculations, nocalculate
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/no-calculate
---
# NoCalculate ***(row)***
> Sets whether a specific row is included in subtotal or total calculations.

> When set to `1(true)`, the row is excluded from subtotal or total calculations.

> When dynamically adding the property and then changing a cell value, the subtotal is recalculated excluding `NoCalculate: 1(true)` rows.


> **<mark>Note</mark>: Using [refreshRow](/docs/funcs/core/refresh-row) on the subtotal row does not trigger subtotal recalculation.**

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Included in subtotal/total calculation (`default`)|
|`1(true)`|Excluded from subtotal/total calculation|


### Example
```javascript
// Specific rows are not included in subtotal/total calculations.
{"data":[
    ...
    {"NoCalculate":1,"ColName1":"Value1","ColName2":"Value2", ...},
    ...
]}
```

### Read More
- [makeSubTotal method](/docs/funcs/core/make-sub-total)
- [setFormulaRow method](/docs/funcs/core/set-formula-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|Feature added|
