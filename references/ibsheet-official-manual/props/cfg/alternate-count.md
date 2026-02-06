---
KEY: alternateCount
KIND: config-property
PATH: props/cfg/alternate-count
ALIAS_EN: applies, alternatecolor, docs, props, row, alternate, color, background
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/alternate-count
---
# AlternateCount ***(cfg)***

> Applies [AlternateColor](/docs/props/row/alternate-color) background color for the number of rows defined by `AlternateCount` within the row interval set by [Alternate](./alternate).  

> For example, if `Alternate: 5` and `AlternateCount: 2`, the highlight is applied only to the last 2 rows within every 5-row interval.

###
![AlternateCount](/assets/imgs/alternateCount.png "AlternateCount")
<!-- IMAGE: Screenshot/Example Image - AlternateCount -->

[When set to `Alternate: 5, AlternateCount: 2`]



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Number of last rows to apply highlight within each `alternate` row interval (`default: 1`)|


### Example
```javascript
options["Cfg"] = {
  Alternate:5,
  AlternateCount:2
};
```

### Read More
- [AlternateColor row](/docs/props/row/alternate-color)
- [Alternate cfg](./alternate)
- [AlternateStart cfg](./alternate-start)
- [AlternateType cfg](./alternate-type)


### Since
|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
