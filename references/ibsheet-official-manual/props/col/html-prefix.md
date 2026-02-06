---
KEY: htmlPrefix
KIND: column-property
PATH: props/col/html-prefix
ALIAS_EN: inserts, desired, html, tag, text, string, cell, column
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/html-prefix
---
# HtmlPrefix ***(col)***

> Inserts a desired `HTML tag` before the text string of each cell in the column.



### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Desired `HTML tag`|


### Example
```javascript
// Add an icon image before the column text
options.Cols = [
    ...
    {Type: "Text", Name: "sa_nm", HtmlPrefix:' <i class="fas fa-apple-alt"></i>'},
    ...
];
```

### Read More
- [HtmlPostfix col](./html-postfix)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
