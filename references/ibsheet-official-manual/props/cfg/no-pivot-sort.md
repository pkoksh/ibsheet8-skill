---
KEY: noPivotSort
KIND: config-property
PATH: props/cfg/no-pivot-sort
ALIAS_EN: determines, whether, source, sheet, data, sorting, creating, pivot
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/no-pivot-sort
---
# NoPivotSort ***(cfg)***

> Determines whether to use source sheet data sorting when creating a pivot sheet.

> When sorting is used, data is sorted in the order of the row information being calculated.



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Use source data sorting for pivot sheet creation (`default`)|
|`1(true)`|Do not use source data sorting for pivot sheet creation|


### Example
```javascript
options = {
  "Cfg":{
    "NoPivotSort": 1,  // Do not sort source sheet
  }
};
```

### Read More
- [UsePivot cfg](./use-pivot)
- [makePivotTable method](/docs/funcs/core/make-pivot-table)
- [switchPivotSheet method](/docs/funcs/core/switch-pivot-sheet)
- [clearFilter method](/docs/funcs/core/clear-filter)
- [setFilter method](/docs/funcs/core/set-filter)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.12|Feature added|
