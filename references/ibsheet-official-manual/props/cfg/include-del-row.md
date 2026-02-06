---
KEY: includeDelRow
KIND: config-property
PATH: props/cfg/include-del-row
ALIAS_EN: whether, include, deleted, rows, docs, props, row, calculation
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/include-del-row
---
# IncludeDelRow ***(cfg)***

> Sets whether to include deleted rows ([Deleted](/docs/props/row/deleted): 1) in the calculation of subtotals/cumulative totals ([makeSubTotal](/docs/funcs/core/make-sub-total)) / grand totals ([FormulaRow](/docs/props/col/formula-row)). 

> The property is set in bitwise operation format. Setting to 3 configures both option 1 and option 2.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Do not include deleted rows in calculation. (`default`)|
|`1`|Include deleted rows in subtotal/cumulative total calculation|
|`2`|Include deleted rows in grand total calculation|

### Example
```javascript
options.Cfg = {
   ...
   "IncludeDelRow": 3 // Include deleted rows in both subtotal/cumulative total and grand total calculations
   ...
};
```

### Read More
- [makeSubTotal method](/docs/funcs/core/make-sub-total)
- [FormulaRow col](/docs/props/col/formula-row)
- [Deleted row](/docs/props/row/deleted)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.11|Feature added|
