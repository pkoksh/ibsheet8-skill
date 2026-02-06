---
KEY: levelMark
KIND: config-property
PATH: props/cfg/level-mark
ALIAS_EN: tree, structure, you, specify, separator, display, downloading, excel
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/level-mark
---
# LevelMark ***(cfg)***

> In a tree structure, you can specify the tree separator to display when downloading to Excel using [exportData](/docs/funcs/core/export-data) or [down2Excel](/docs/funcs/excel/down-to-excel). 

> By default, tree separators are supported when downloading tree structures to Excel or text. 

> If you do not want to use tree separators, you can disable them by setting `LevelMark: ""`.

### Type
`string`

### Example
```javascript
options.Cfg = {
    LevelMark: "#" // Change tree separator.
};
options.Cfg = {
    LevelMark: "" // Do not use tree separator.
};
```

### Read More
- [exportData method](/docs/funcs/core/export-data)
- [down2Excel method](/docs/funcs/excel/down-to-excel)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.6|Feature added|
|excel, servermodule|1.1.11, 1.1.35|Applied to down2Excel|
