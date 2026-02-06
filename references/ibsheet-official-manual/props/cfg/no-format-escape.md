---
KEY: noFormatEscape
KIND: config-property
PATH: props/cfg/no-format-escape
ALIAS_EN: whether, output, characters, html, tags, column, col, docs
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/no-format-escape
---
# NoFormatEscape ***(cfg)***

> Sets whether to output the &, < characters used as HTML tags in the column ([Col](/docs/props/col/format), [Cell](/docs/props/cell/format)) [Format](/docs/appx/format) as-is. 

> When this property is not set, text columns default to `0(false)`, and lines / number / date types default to `1(true)`.  

> When set to `0(false)`, &, < characters are output as-is, and when set to `1(true)`, HTML tags can be used in column `(Col, Cell) Format`.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|**&, <** characters are output as-is (`default: text columns`)|
|`1(true)`|Use `HTML tags` (`default: lines, number, date columns`)|


### Example
```javascript
options.Cfg = {
    NoFormatEscape: true,        // Use HTML tags in (cell, col)Format
    ...
};
```

### Read More
- [Format appendix](/docs/appx/format)
- [Format col](/docs/props/col/format)
- [Format cell](/docs/props/cell/format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
