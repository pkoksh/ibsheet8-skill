---
KEY: exportDataConfig
KIND: config-property
PATH: props/cfg/export-data-config
ALIAS_EN: common, arguments, exportdata, docs, funcs, core, export, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/export-data-config
---
# ExportDataConfig ***(cfg)***

> Sets common arguments for when the [exportData](/docs/funcs/core/export-data) function is called.

> If set in the Cfg property of [CommonOptions (static)](/docs/static/common-options), you can configure default properties for [exportData](/docs/funcs/core/export-data) function calls across all pages.

### Type
`object`

### Options
|Value|Description|
|-----|-----|
|`object`|Same as the arguments passed to the [exportData](/docs/funcs/core/export-data) function (when the same property is set on individual pages, the page-level value takes effect.)|

### Example
```javascript
options.Cfg  = {
  // Set default properties for Excel download across all pages
  ExportDataConfig: {
    "sheetDesign":0,
    "merge":1
  }
};
```

### Read More
- [exportData method](/docs/funcs/core/export-data)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.26|Feature added|
