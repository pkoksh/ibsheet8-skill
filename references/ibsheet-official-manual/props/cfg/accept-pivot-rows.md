---
KEY: acceptPivotRows
KIND: config-property
PATH: props/cfg/accept-pivot-rows
ALIAS_EN: columns, reference, row, values, pivot, sheet, acceptpivotrows, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/accept-pivot-rows
---
# AcceptPivotRows ***(cfg)***

> Sets the columns that can be used as reference row values in the pivot sheet.

> Multiple column names can be specified by connecting with `","`.

### Type
`string`


### Example
```javascript
options.Cfg = {
    UsePivot: true, // Whether to use pivot
    AcceptPivotRows: "sDept,sTeam,sPosition,sName,sGender,sAgeRange,sAddr,sAge,sPeriod"
};
```

### Read More
- [UsePivot cfg](./use-pivot)
- [PivotFunc cfg](./pivot-func)
- [AcceptPivotCols cfg](./accept-pivot-cols)
- [AcceptPivotData cfg](./accept-pivot-data)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
