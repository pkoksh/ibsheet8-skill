---
KEY: mergeHeightAdjust
KIND: config-property
PATH: props/cfg/merge-height-adjust
ALIAS_EN: features, affect, cell, height, htmlprefix, docs, props, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/merge-height-adjust
---
# MergeHeightAdjust ***(cfg)***

> When using features that affect cell height such as [HtmlPrefix](/docs/props/col/html-prefix) or [HtmlPostfix](/docs/props/col/html-postfix), adjusts the height of merged areas when layout breakage occurs in merge areas or the sheet.

> When this property is set to true, it checks the merge information within the sheet, which may slow down the sheet depending on the amount of merge information.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Do not adjust height of merged rows (`default`)|
|`1(true)`|Adjust height of merged rows|

### Example
```javascript
options.Cfg = {
  MergeHeightAdjust: 1 // Adjust the height of merged areas
};
```

### Read More
- [HtmlPrefix row](/docs/props/row/html-prefix)
- [HtmlPrefix col](/docs/props/col/html-prefix)
- [HtmlPrefix cell](/docs/props/cell/html-prefix)
- [HtmlPostfix row](/docs/props/row/html-postfix)
- [HtmlPostfix col](/docs/props/col/html-postfix)
- [HtmlPostfix cell](/docs/props/cell/html-postfix)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.3|Feature added|
