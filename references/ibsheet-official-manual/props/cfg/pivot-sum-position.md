---
KEY: pivotSumPosition
KIND: config-property
PATH: props/cfg/pivot-sum-position
ALIAS_EN: position, total, row, pivoting, pivotsumposition, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/pivot-sum-position
---
# PivotSumPosition ***(cfg)***

> Sets the position of the total row when pivoting.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Bottom - Footer area (`default`)|
|`1(true)`|Top - Header area|

### Example
```javascript
options.Cfg = {
    UsePivot: true, // Whether to use pivot
    PivotSumPosition: true
};
```

### Read More
- [UsePivot cfg](./use-pivot)
- [AcceptPivotRows cfg](./accept-pivot-rows)
- [AcceptPivotData cfg](./accept-pivot-data)
- [AcceptPivotCols cfg](./accept-pivot-cols)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|Feature added|
