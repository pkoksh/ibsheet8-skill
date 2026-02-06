---
KEY: htmlPrefix
KIND: row-property
PATH: props/row/html-prefix
ALIAS_EN: inserts, desired, html, tag, text, string, cell, entire
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/html-prefix
---
# HtmlPrefix ***(row)***

> Inserts a desired HTML tag before the text string of each cell in the entire row.

> This property is rarely used at the row level; it is usually used at the `Col` or `Cell` level.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Desired HTML tag|


### Example
```javascript
//Add a specific icon to each cell in the header row.
options.Def.Header = {"HtmlPrefix": '<i class="far fa-angry"></i>'};
```

### Read More
- [HtmlPostfix row](./html-postfix)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
