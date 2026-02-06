---
KEY: acceptPivotCols
KIND: config-property
PATH: props/cfg/accept-pivot-cols
ALIAS_EN: columns, reference, column, values, pivot, sheet, acceptpivotcols, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/accept-pivot-cols
---
# AcceptPivotCols ***(cfg)***

> Sets the columns that can be used as reference column values in the pivot sheet.

> Multiple column names can be specified by connecting with `","`.

### Type
`string`


### Example
```javascript
options.Cfg = {
    UsePivot: true, // Whether to use pivot
    AcceptPivotCols: "sDept,sTeam,sPosition,sName,sGender,sAgeRange,sAddr,sAge,sPeriod"
};
```

### Read More
- [UsePivot cfg](./use-pivot)
- [PivotFunc cfg](./pivot-func)
- [AcceptPivotRows cfg](./accept-pivot-rows)
- [AcceptPivotData cfg](./accept-pivot-data)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
