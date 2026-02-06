---
KEY: mergeCellsMatch
KIND: config-property
PATH: props/cfg/merge-cells-match
ALIAS_EN: editing, merged, data, modifies, entire, area, mergecellsmatch, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/merge-cells-match
---
# MergeCellsMatch ***(cfg)***

> When editing merged data, modifies the data of the entire merged area. 

> Also applies when changing values through [setValue](/docs/funcs/core/set-value). 

> [onBeforeChange](/docs/events/on-before-change) and [onAfterChange](/docs/events/on-after-change) are triggered for each cell whose value has changed.

> This feature only works in merge areas using automatic merge ([DataMerge](/docs/props/cfg/data-merge)).

> `Caution` When modifying data through copy-paste (ctrl+c/ctrl+v), it must be used on a cell-by-cell basis.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|When editing a merged cell, only the first cell's value is changed (`default`)|
|`1(true)`|When editing a merged cell, the values of the entire merged area are changed|

### Example
```javascript
options.Cfg = {
    MergeCellsMatch: true
};
```

### Read More
- [DataMerge Cfg](/docs/props/cfg/data-merge)
- [setValue Method](/docs/funcs/core/set-value)
- [onBeforeChange Event](/docs/events/on-before-change)
- [onAfterChange Event](/docs/events/on-after-change)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|Feature added|
|core|8.1.0.49|Feature applied to value changes through copy-paste|
