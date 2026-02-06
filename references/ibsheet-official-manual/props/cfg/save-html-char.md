---
KEY: saveHtmlChar
KIND: config-property
PATH: props/cfg/save-html-char
ALIAS_EN: saving, dosave, querymode, saved, without, converted, namecode, savehtmlchar
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/save-html-char
---
# SaveHTMLChar ***(cfg)***
> When saving with `doSave (queryMode: 0)`, `<, >, &` are saved as-is without being converted to `NameCode`.
> **Caution: Using this option may cause XSS (Cross-Site Scripting) issues, so please use with care.**

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
| `0(false)` | `<, >, &` are converted to `&lt;`, `&gt;`, `&amp;` respectively before transmission (`default`)|
| `1(true)` | `<, >, &` characters are transmitted as-is|

### Example
```javascript
options.Cfg = {
    SaveHTMLChar: 1   // Transmit <, >, & as-is to server
};

sheet.doSave({url})
```

### Read More
- [doSave method](/docs/funcs/core/do-save)
- [UnescapeHTML col](/docs/props/col/unescape-html)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.22|Feature added|
