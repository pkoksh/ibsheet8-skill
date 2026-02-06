---
KEY: fixPrevColumnMerge
KIND: config-property
PATH: props/cfg/fix-prev-column-merge
ALIAS_EN: feature, merges, rows, vertical, merge, based, merged, range
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/fix-prev-column-merge
---
# FixPrevColumnMerge ***(cfg)***

> A feature that merges rows (vertical merge) based on the merged range of a reference column for each column.

> Only applies to columns with an `Index` greater than the reference column. 

> (cfg)[DataMerge](/docs/props/cfg/data-merge) and (cfg)[HeaderMerge](/docs/props/cfg/header-merge) options must be configured for this to work properly.

> Even if [PrevColumnMerge](/docs/props/cfg/prev-column-merge) is declared, this property takes priority. 

> After sheet creation, you can dynamically change the merge using the [setAutoMerge](/docs/funcs/core/set-auto-merge) method.


###
**When set to the `Policy Project` column, merges based on the reference column's merge range regardless of the preceding column** 

![prevColumnMergeMode:0](/assets/imgs/fixprevColumnMerge1.png)
<!-- IMAGE: Screenshot/Example Image - prevColumnMergeMode:0 --> 


![prevColumnMergeMode:0](/assets/imgs/fixprevColumnMerge2.png)
<!-- IMAGE: Screenshot/Example Image - prevColumnMergeMode:0 -->

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Name of the column to set as the reference for row merging|

### Example
```javascript
options = {
    Cfg: {
      FixPrevColumnMerge : 'sPolicy',  // Sets whether to merge cells based on the preceding column when creating the sheet.
      ...
    }
};
```

### Read More
- [HeaderMerge cfg](/docs/props/cfg/header-merge)
- [DataMerge cfg](/docs/props/cfg/data-merge)
- [PrevColumnMerge method](/docs/props/cfg/prev-column-merge)
- [ColMerge col](/docs/props/col/col-merge)
- [setAutoMerge method](/docs/funcs/core/set-auto-merge)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.15|Feature added|
