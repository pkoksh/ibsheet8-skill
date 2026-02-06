---
KEY: loadExcelConfig
KIND: config-property
PATH: props/cfg/load-excel-config
ALIAS_EN: common, arguments, passed, calling, loadexcel, docs, funcs, excel
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/load-excel-config
---
# LoadExcelConfig ***(cfg)***

> Sets common arguments passed when calling the [loadExcel](/docs/funcs/excel/load-excel) function.

> By setting it in the Cfg property of [CommonOptions (static)](/docs/static/common-options), you can configure default properties for the [loadExcel](/docs/funcs/excel/load-excel) function call across all screens.

### Type
`object`

### Options
|Value|Description|
|-----|-----|
|`object`|Same as the arguments passed to the [loadExcel](/docs/funcs/excel/load-excel) function (when the same property is set on individual screens, the screen-level setting takes precedence.)|



### Example
```javascript
options.Cfg  = {
  // Set default properties for Excel upload across all screens
  LoadExcelConfig: {
    "append": 1,
    "mode": "HeaderSkip"
  }
};
```

### Read More
- [loadExcel method](/docs/funcs/excel/load-excel)
- [CommontOptions static](/docs/static/common-options)

### Since

|product|version|desc|
|---|---|---|
|excel|0.0.0|Feature added|
