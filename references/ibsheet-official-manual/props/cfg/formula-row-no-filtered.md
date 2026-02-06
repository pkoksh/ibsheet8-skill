---
KEY: formulaRowNoFiltered
KIND: config-property
PATH: props/cfg/formula-row-no-filtered
ALIAS_EN: whether, exclude, rows, hidden, filtering, summary, row, calculation
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/formula-row-no-filtered
---
# FormulaRowNoFiltered ***(cfg)***

> Sets whether to exclude rows hidden by filtering from the summary row calculation.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Include in calculation. (`default`)|
|`1(true)`|Exclude from calculation.|


### Example
```javascript
options.Cfg = {
    FormulaRowNoFiltered: true // Excludes rows hidden by filtering from the summary calculation.
};
```

### Read More
- [ShowFilter cfg](./show-filter)
- [showFilterRow method](/docs/funcs/core/show-filter-row)
- [FormulaRow col](/docs/props/col/formula-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.6|Feature added|
