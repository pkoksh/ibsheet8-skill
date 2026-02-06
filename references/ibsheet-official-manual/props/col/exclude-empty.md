---
KEY: excludeEmpty
KIND: column-property
PATH: props/col/exclude-empty
ALIAS_EN: whether, include, empty, values, calculating, averages, counts, etc
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/exclude-empty
---
# ExcludeEmpty ***(col)***
> Sets whether to include 0 or empty values when calculating averages, counts, etc. in [FormulaRow](/docs/props/col/formula-row) and subtotal/cumulative rows.


###
> **Applicable features**

> [makeSubTotal](/docs/funcs/core/make-sub-total) subtotal/cumulative average/count

> [FormulaRow](/docs/props/col/formula-row) average/count/minimum

> [GroupSubTotal](/docs/props/col/group-sub-total) average/count/minimum


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Include 0 or empty values (`default`)|
|`1(true)`|Exclude 0 or empty values|

### Example
```javascript
options.Cols = [
    ...
    {Type: "Int", Name: "Pvt_TSum", ExcludeEmpty: 1, ...},
    ...
];
```

### Read More
- [makeSubTotal method](/docs/funcs/core/make-sub-total)
- [FormulaRow col](/docs/props/col/formula-row)
- [UseGroupSubTotal cfg](/docs/props/cfg/use-group-sub-total)
- [GroupSubTotal col](/docs/props/col/group-sub-total)


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.45|Feature added|
|core|8.1.0.46|Empty value inclusion added|
|core|8.1.0.49|Cumulative calculation bug fix **(please use from this version onwards.)**|
