---
KEY: initPivotData
KIND: config-property
PATH: props/cfg/init-pivot-data
ALIAS_EN: column, data, values, pivot, sheet, initpivotdata, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/init-pivot-data
---
# InitPivotData ***(cfg)***

> Sets the column(s) to use as data values in the pivot sheet.

> Multiple column names can be specified by connecting them with `","`.

### Type
`string`


### Example
```javascript
options.Cfg = {
    UsePivot: true, // Whether to use pivot
    InitPivotData: "sSalary,sBonus" // Set columns for value calculation
};
```

### Read More
- [UsePivot cfg](./use-pivot)
- [PivotFunc cfg](./pivot-func)
- [InitPivotCols cfg](./init-pivot-cols)
- [InitPivotRows cfg](./init-pivot-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.6|Feature added|
|dialog|8.0.0.4|Feature added|
