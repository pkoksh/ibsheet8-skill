---
KEY: unescapeHtml
KIND: column-property
PATH: props/col/unescape-html
ALIAS_EN: feature, converts, html, escape, characters, amp, retrieved, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/unescape-html
---
# UnescapeHTML ***(col)***

> A feature that converts HTML escape characters (`&gt;`, `&amp;`, `&lt;`) in retrieved data back to their original characters (<, &, >).

> Applicable column types: `Text`, `Lines`
### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Retrieves characters as-is (`default`)|
|`1(true)`|Retrieves characters with unescape processing|


### Example
```javascript
// Process HTML unescape on characters coming in during retrieval
options.Cols = [
  ...
  {
    Type: "Text",
    Name: "TextData",
    Width: 110,
    UnescapeHTML: 1
    ...
  },
  ...
];
```

### Read More
- [SaveHTMLChar cfg](/docs/props/cfg/save-html-char)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.24|Feature added|
