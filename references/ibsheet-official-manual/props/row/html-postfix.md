---
KEY: htmlPostfix
KIND: row-property
PATH: props/row/html-postfix
ALIAS_EN: inserts, desired, html, tag, text, string, cell, entire
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/html-postfix
---
# HtmlPostfix ***(row)***

> Inserts a desired HTML tag after the text string of each cell in the entire row.

> This property is rarely used at the row level; it is usually used at the `Col` or `Cell` level.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Desired HTML tag|


### Example
```javascript
//Add a specific icon at the end of each cell title in the header row.
options.Def.Header = {"HtmlPostfix": '<i class="fas fa-apple-alt"></i>'};
```

### Read More
- [HtmlPrefix row](./html-prefix)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
