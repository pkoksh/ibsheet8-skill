---
KEY: downToExcelConfig
KIND: config-property
PATH: props/cfg/down-to-excel-config
ALIAS_EN: common, arguments, down, excel, docs, funcs, function, called
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/down-to-excel-config
---
# Down2ExcelConfig ***(cfg)***

> Sets common arguments for when the [down2Excel](/docs/funcs/excel/down-to-excel) function is called.

> If set in the Cfg property of [CommonOptions (static)](/docs/static/common-options), you can configure default properties for [down2Excel](/docs/funcs/excel/down-to-excel) function calls across all pages.

### Type
`object`

### Options
|Value|Description|
|-----|-----|
|`object`|Same as the arguments passed to the [down2Excel](/docs/funcs/excel/down-to-excel) function (when the same property is set on individual pages, the page-level value takes effect.)|



### Example
```javascript
options.Cfg  = {
  // Set default properties for Excel download across all pages
  Down2ExcelConfig: {
    "sheetDesign":0,
    "merge":1
  }
};
```

### Read More
- [down2Excel method](/docs/funcs/excel/down-to-excel)
- [CommontOptions static](/docs/static/common-options)

### Since

|product|version|desc|
|---|---|---|
|excel|0.0.0|Feature added|
