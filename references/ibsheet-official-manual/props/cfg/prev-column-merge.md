---
KEY: prevColumnMerge
KIND: config-property
PATH: props/cfg/prev-column-merge
ALIAS_EN: feature, merges, rows, vertically, based, merged, range, left
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/prev-column-merge
---
# PrevColumnMerge ***(cfg)***

> A feature that merges rows (vertically) based on the merged range of the left column of each column during row merge.

> (cfg)[DataMerge](/docs/props/cfg/data-merge) and (cfg)[HeaderMerge](/docs/props/cfg/header-merge) options must be set for proper operation.

> After sheet creation, merging can be dynamically changed using the [setAutoMerge](/docs/funcs/core/set-auto-merge) method.


> **<mark>Caution</mark>: When using subtotals ([makeSubTotal (method)](/docs/funcs/core/make-sub-total)), the value set in this option is ignored and operates as `PrevColumnMerge : 1`.**


###
![prevColumnMerge](/assets/imgs/prevColumnMerge_base.png "prevColumnMerge")
<!-- IMAGE: Screenshot/Example Image - prevColumnMerge --> 

Columns with a (col)[ColMerge](/docs/props/col/col-merge) value of 0 are excluded from the search range. (If the left column has ColMerge:0, it skips that column and merges based on the next left column)

![prevColumnMerge](/assets/imgs/prevColumnMerge_colMerge.png "prevColumnMerge")
<!-- IMAGE: Screenshot/Example Image - prevColumnMerge --> 


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`| Do not use previous column merge feature for the entire area (`default`)|
|`1`| Use previous column merge feature for the data area only|
|`2`| Use previous column merge feature for the header area only|
|`3`| Use previous column merge feature for both data and header areas|

### Example
```javascript
options = {
    Cfg: {
      PrevColumnMerge: 1,  // Sets whether to merge cells based on the previous column at sheet creation.
      ...
    }
};
```

### Try it
- [0 by default with setAutoMerge](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/Merge/)

### Read More
- [HeaderMerge cfg](/docs/props/cfg/header-merge)
- [DataMerge cfg](/docs/props/cfg/data-merge)
- [ColMerge col](/docs/props/col/col-merge)
- [setAutoMerge method](/docs/funcs/core/set-auto-merge)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
