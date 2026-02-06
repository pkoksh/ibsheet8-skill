---
KEY: prevColumnMergeMode
KIND: config-property
PATH: props/cfg/prev-column-merge-mode
ALIAS_EN: option, criteria, merging, cells, searchmode, docs, props, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/prev-column-merge-mode
---
# PrevColumnMergeMode ***(cfg)***
> An option that sets the criteria for merging cells in [SearchMode:2](/docs/props/cfg/search-mode). 

> In [SearchMode:2](/docs/props/cfg/search-mode), all merged `Rows` are drawn in one Table, so performance issues may occur when there are many merged cells. 

> When `PrevColumnMergeMode:1` is set, rendering is divided into page units based on [PageLength](/docs/props/cfg/page-length), improving sheet performance. 



###
**`PrevColumnMergeMode:0(default)`** 

![prevColumnMergeMode:0](/assets/imgs/prevColumnMergemode0.png)
<!-- IMAGE: Screenshot/Example Image - prevColumnMergeMode:0 --> 

**`PrevColumnMergeMode:1, PageLength:10`** 

![prevColumnMergeMode:1](/assets/imgs/prevColumnMergemode1.png)
<!-- IMAGE: Screenshot/Example Image - prevColumnMergeMode:1 --> 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`| Merge all cells with the same value (`default`)|
|`1(true)`| Merge cells divided by page units |

### Example
```javascript
options = {
    Cfg: {
      PrevColumnMergeMode: 1,  // Merge cells divided by page units.
      ...
    }
};
```

### Read More
- [SearchMode cfg](/docs/props/cfg/search-mode)
- [DataMerge cfg](/docs/props/cfg/data-merge)
- [setAutoMerge method](/docs/funcs/core/set-auto-merge)
- [PageLength cfg](/docs/props/cfg/page-length)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.11|Feature added|
|core|8.0.0.12|Default changed (1 -> 0)|
