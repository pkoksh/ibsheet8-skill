---
KEY: loadTextConfig
KIND: config-property
PATH: props/cfg/load-text-config
ALIAS_EN: common, arguments, passed, calling, loadtext, docs, funcs, excel
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/load-text-config
---
# LoadTextConfig ***(cfg)***

> Sets common arguments passed when calling the [loadText](/docs/funcs/excel/load-text) function.

> By setting it in the Cfg property of [CommonOptions (static)](/docs/static/common-options), you can configure default properties for the [loadText](/docs/funcs/excel/load-text) function call across all screens.

### Type
`object`

### Options
|Value|Description|
|-----|-----|
|`object`|Same as the arguments passed to the [loadText](/docs/funcs/excel/load-text) function (when the same property is set on individual screens, the screen-level setting takes precedence.)|



### Example
```javascript
options.Cfg  = {
  // Set default properties for text upload across all screens
  LoadTextConfig: {
    "append": 1
  }
};
```

### Read More
- [loadText method](/docs/funcs/excel/load-text)
- [CommontOptions static](/docs/static/common-options)

### Since

|product|version|desc|
|---|---|---|
|excel|0.0.0|Feature added|
