---
KEY: mergeVisibleDom
KIND: config-property
PATH: props/cfg/merge-visible-dom
ALIAS_EN: whether, merge, visible, area, searchmode, docs, props, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/merge-visible-dom
---
# MergeVisibleDom ***(cfg)***

> Sets whether to merge only the visible area in [SearchMode](/docs/props/cfg/search-mode):0. 

> When used together with [MergeCellsMatch Cfg](/docs/props/cfg/merge-cells-match), it can automatically change data values for merged cells in areas that are not visible.
<!-- This feature only works in merge areas using automatic merge ([DataMerge](/docs/props/cfg/data-merge)). 
 -->

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|When auto-merging, merge values of the entire merge area|
|`1(true)`|When auto-merging, merge only up to the visible cell area (`default`)|

### Example
```javascript
options.Cfg = {
    MergeVisibleDom: false
};
```

### Read More
- [DataMerge Cfg](/docs/props/cfg/data-merge)
- [MergeCellsMatch Cfg](/docs/props/cfg/merge-cells-match)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.26|Feature added|
