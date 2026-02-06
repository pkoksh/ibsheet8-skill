---
KEY: initPivotCols
KIND: config-property
PATH: props/cfg/init-pivot-cols
ALIAS_EN: column, values, reference, columns, pivot, sheet, initpivotcols, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/init-pivot-cols
---
# InitPivotCols ***(cfg)***

> Sets the column(s) to use as values for the reference columns in the pivot sheet.

> Multiple column names can be specified by connecting them with `","`.

### Type
`string`


### Example
```javascript
options.Cfg = {
    UsePivot: true, // Whether to use pivot
    InitPivotCols: "sTeam,sPosition" // Set horizontal reference columns
};
```

### Read More
- [UsePivot cfg](./use-pivot)
- [PivotFunc cfg](./pivot-func)
- [InitPivotRows cfg](./init-pivot-rows)
- [InitPivotData cfg](./init-pivot-data)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.6|Feature added|
|dialog|8.0.0.4|Feature added|
