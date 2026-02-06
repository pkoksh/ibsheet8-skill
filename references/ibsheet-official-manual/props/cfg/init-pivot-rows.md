---
KEY: initPivotRows
KIND: config-property
PATH: props/cfg/init-pivot-rows
ALIAS_EN: column, values, reference, rows, pivot, sheet, initpivotrows, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/init-pivot-rows
---
# InitPivotRows ***(cfg)***

> Sets the column(s) to use as values for the reference rows in the pivot sheet.

> Multiple column names can be specified by connecting them with `","`.

### Type
`string`


### Example
```javascript
options.Cfg = {
    UsePivot: true, // Whether to use pivot
    InitPivotRows: "sDept" // Set vertical reference columns
};
```

### Read More
- [UsePivot cfg](./use-pivot)
- [PivotFunc cfg](./pivot-func)
- [InitPivotCols cfg](./init-pivot-cols)
- [InitPivotData cfg](./init-pivot-data)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.6|Feature added|
|dialog|8.0.0.4|Feature added|
