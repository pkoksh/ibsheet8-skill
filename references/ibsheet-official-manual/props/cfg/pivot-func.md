---
KEY: pivotFunc
KIND: config-property
PATH: props/cfg/pivot-func
ALIAS_EN: function, deriving, data, values, pivot, sheet, pivotfunc, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/pivot-func
---
# PivotFunc ***(cfg)***

> Sets the function to use when deriving data values for the pivot sheet. 

> If multiple data columns are set through [AcceptPivotData cfg](./accept-pivot-data), `PivotFunc` must also be set to the same count. Use `,(comma)` as the separator.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|Sum|Sets the pivot sheet cell value by summing the source data row cell values. (`default`)|
|Count|Sets the pivot sheet cell value by counting the number of source data row cells.|
|Max|Sets the pivot sheet cell value to the maximum value among the source data row cell values.|
|Min|Sets the pivot sheet cell value to the minimum value among the source data row cell values.|

### Example
```javascript
options.Cfg = {
    UsePivot: true, // Whether to use pivot
    PivotFunc: "Count,Sum" // DataType to set for each when PivotDataCol has 2 items. Separator is ,(comma)
};
```

### Read More
- [UsePivot cfg](./use-pivot)
- [PivotFormat cfg](./pivot-format)
- [AcceptPivotRows cfg](./accept-pivot-rows)
- [AcceptPivotCols cfg](./accept-pivot-cols)
- [AcceptPivotData cfg](./accept-pivot-data)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.1.0.46|`Max`, `Min` feature added|
|core|8.2.0.15|`PivotFunc` improved to apply per data item|
