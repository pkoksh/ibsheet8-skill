---
KEY: pasteStrictMode
KIND: config-property
PATH: props/cfg/paste-strict-mode
ALIAS_EN: whether, allow, pasting, type, matching, data, clipboard, contents
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/paste-strict-mode
---
# PasteStrictMode ***(cfg)***

> Sets whether to allow pasting only type-matching data when pasting clipboard contents to the sheet via `ctrl+v`.

> Strictly checks whether the value is numeric when pasting to `Int` and `Float` type columns.

> Thousands separator commas are allowed.

> When using `ibsheet-common.js (1.0.14-20241219-14)`, the default value is set to `1(true)`.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Do not strictly validate numeric data (`default`)|
|`1(true)`|Skip pasting if data is not numeric.|


### Example
```javascript
options.Cfg = {
    PasteStrictMode: 1
};
```

### Read More
[onAfterPaste event](/docs/events/on-after-paste)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.13|Feature added|
