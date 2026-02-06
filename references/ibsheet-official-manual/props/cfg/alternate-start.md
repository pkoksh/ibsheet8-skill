---
KEY: alternateStart
KIND: config-property
PATH: props/cfg/alternate-start
ALIAS_EN: starting, row, position, within, interval, alternate, cfg, applying
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/alternate-start
---
# AlternateStart ***(cfg)***

> Sets the starting row position within the row interval set by [Alternate cfg](./alternate) for applying [AlternateColor](/docs/props/row/alternate-color).  

> `0` refers to the first row of the interval.
> For example, if [Alternate](./alternate): 5, [AlternateCount](./alternate-count): 2, and AlternateStart: 0, 

> the `AlternateColor` is displayed on the top 2 rows within every 5-row interval on the screen.


###
![AlternateStart](/assets/imgs/alternateCount.png "AlternateStart")
<!-- IMAGE: Screenshot/Example Image - AlternateStart -->

[When set to `Alternate: 5, AlternateCount: 2`]

![AlternateStart](/assets/imgs/alternateStart.png "AlternateStart")
<!-- IMAGE: Screenshot/Example Image - AlternateStart -->

[When set to `Alternate: 5, AlternateCount: 2, AlternateStart: 0`]


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Row position where highlight starts within each [Alternate](./alternate) row interval
(`default :  (cfg)Alternate - (cfg)AlternateCount`)|


### Example
```javascript
options["Cfg"]  = {
     Alternate:5, AlternateCount:2, AlternateStart:0
};
```

### Read More
- [Alternate cfg](./alternate)
- [AlternateCount cfg](./alternate-count)
- [AlternateType cfg](./alternate-type)
- [AlternateColor row](/docs/props/row/alternate-color)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
