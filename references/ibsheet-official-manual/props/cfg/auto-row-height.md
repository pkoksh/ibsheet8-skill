---
KEY: autoRowHeight
KIND: config-property
PATH: props/cfg/auto-row-height
ALIAS_EN: option, enables, sheets, searchmode, docs, props, cfg, search
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/auto-row-height
---
# AutoRowHeight ***(cfg)***

> This option enables sheets in [SearchMode:0](/docs/props/cfg/search-mode) to work with automatic line wrapping where each row can have different heights.

> This is only available when columns use column types `Lines`, `Html`, `Img`, `Button` or column properties [Wrap](/docs/props/col/wrap), [HtmlPrefix](/docs/props/col/html-prefix), [HtmlPostfix](/docs/props/col/html-postfix), [TextSize](/docs/props/col/text-size), `HtmlPrefixFormula`, `HtmlPostfixFormula`, `TextSizeFormula`, or the `TextSize` property of [SignFontStyle](/docs/props/col/sign-font-style).


> **<mark>Caution</mark> : Once a sheet is created with the condition `AutoRowHeight: false`, even if you change the settings to match `AutoRowHeight: true` and perform a [rerender](/docs/funcs/core/rerender), the `AutoRowHeight` option value will not change. Dynamically changing this property in the source code may cause internal conflicts within the sheet.**


### Type
`boolean`


### Options
|Value|Description|
|-----|-----|
|`0(false)`|Auto row height adjustment feature disabled (`default`)|
|`1(true)`|Auto row height adjustment feature enabled in SearchMode:0 mode (if conditions are not met, it is changed to `false` and the sheet is created)|


### Example
```javascript
options.Cfg{
   // Enable auto row height feature in SearchMode:0 sheet
   SearchMode: 0,
   AutoRowHeight: true
   ...
};
```

### Try it
- [True](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/AutoRowHeight-true/)

### Read More
- [SearchMode cfg](/docs/props/cfg/search-mode)
- [Wrap col](/docs/props/col/wrap)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.27|Feature added|
|core|8.3.0.19|Added `TextSize` support for `SignFontStyle` property|
