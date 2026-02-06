---
KEY: usePivot
KIND: config-property
PATH: props/cfg/use-pivot
ALIAS_EN: whether, current, sheet, data, pivot, usepivot, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/use-pivot
---
# UsePivot ***(cfg)***

> Sets whether to use the current sheet as a data sheet for a pivot sheet.

> When this option is set, rows for configuring columns to be used as rows, columns, and data of the pivot sheet, and rows for controls such as creating/deleting pivots are added to the [Solid](/docs/appx/solid) area.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Do not use pivot (`default`)|
|`1(true)`|Use pivot|

### Example
```javascript
options.Cfg = {
    UsePivot: true              // Whether to use pivot
};
```

### Read More
- [PivotFormat cfg](./pivot-format)
- [PivotFunc cfg](./pivot-func)
- [AcceptPivotRows cfg](./accept-pivot-rows)
- [AcceptPivotCols cfg](./accept-pivot-cols)
- [AcceptPivotData cfg](./accept-pivot-data)
- [Solid appendix](/docs/appx/solid)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
