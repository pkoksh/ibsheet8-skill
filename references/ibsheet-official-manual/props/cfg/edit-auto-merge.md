---
KEY: editAutoMerge
KIND: config-property
PATH: props/cfg/edit-auto-merge
ALIAS_EN: whether, automatically, merge, cells, editing, changing, cell, values
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/edit-auto-merge
---
# EditAutoMerge ***(cfg)***

> Sets whether to automatically merge cells when editing (changing cell values, adding rows, etc.) while using value-based merge options configured with (cfg)[DataMerge](./data-merge) or (cfg)[HeaderMerge](./header-merge).

> When this property is set to true, the merge logic is executed every time a cell is edited, which may slow down the sheet.

> <mark>This feature does not work in SearchMode:0(FastLoad).</mark>


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Does not perform merging. (`default`)|
|`1(true)`|Performs merging.|


### Example
```javascript
options = {
    Cfg :{
      EditAutoMerge: false,  // Do not merge when editing values.
    }
};
```

### Read More
- [DataMerge cfg](./data-merge)
- [HeaderMerge cfg](./header-merge)
- [addRow method](/docs/funcs/core/add-row)
- [addRows method](/docs/funcs/core/add-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.5|Modified to apply cell merge when adding rows|
