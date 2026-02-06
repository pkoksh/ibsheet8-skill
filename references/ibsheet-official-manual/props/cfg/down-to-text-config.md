---
KEY: downToTextConfig
KIND: config-property
PATH: props/cfg/down-to-text-config
ALIAS_EN: common, arguments, down, text, docs, funcs, excel, function
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/down-to-text-config
---
# Down2TextConfig ***(cfg)***

> Sets common arguments for when the [down2Text](/docs/funcs/excel/down-to-text) function is called.

> If set in the Cfg property of [CommonOptions (static)](/docs/static/common-options), you can configure default properties for [down2Text](/docs/funcs/excel/down-to-text) function calls across all pages.

### Type
`object`

### Options
|Value|Description|
|-----|-----|
|`object`|Same as the arguments passed to the [down2Text](/docs/funcs/excel/down-to-text) function (when the same property is set on individual pages, the page-level value takes effect.)|



### Example
```javascript
options.Cfg  = {
  // Set default properties for text download across all pages
  "Down2TextConfig":{
    "downHeader": 0,
    "downSum": 0
  }
};
```

### Read More
- [down2Text method](/docs/funcs/excel/down-to-text)
- [CommontOptions static](/docs/static/common-options)

### Since

|product|version|desc|
|---|---|---|
|excel|0.0.0|Feature added|
