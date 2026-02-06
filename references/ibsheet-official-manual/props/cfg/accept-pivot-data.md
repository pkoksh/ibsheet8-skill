---
KEY: acceptPivotData
KIND: config-property
PATH: props/cfg/accept-pivot-data
ALIAS_EN: columns, data, values, pivot, sheet, acceptpivotdata, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/accept-pivot-data
---
# AcceptPivotData ***(cfg)***

> Sets the columns that can be used as data values in the pivot sheet.

> Multiple column names can be specified by connecting with `","`.

### Type
`string`


### Example
```javascript
options.Cfg = {
    UsePivot: true, // Whether to use pivot
    AcceptPivotData: "sAge,sPeriod,sSalary,sBonus"
};
```

### Read More
- [UsePivot cfg](./use-pivot)
- [PivotFunc cfg](./pivot-func)
- [AcceptPivotCols cfg](./accept-pivot-cols)
- [AcceptPivotRows cfg](./accept-pivot-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
