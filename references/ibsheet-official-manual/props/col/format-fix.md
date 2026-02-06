---
KEY: formatFix
KIND: column-property
PATH: props/col/format-fix
ALIAS_EN: feature, extracts, data, format, applied, string, calling, save
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/format-fix
---
# FormatFix ***(col)***

> A feature that extracts data as a `Format`-applied string when calling save functions ([getSaveJson](/docs/funcs/core/get-save-json), [getSaveString](/docs/funcs/core/get-save-string), [doSave](/docs/funcs/core/do-save)). 

> The output is the same as the value output by [getString](/docs/funcs/core/get-string).

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Original data output when calling save functions (`default`)|
|`1(true)`|`Format`-applied data output (same as `getString`)|


### Example
```javascript
// The Money column outputs data identical to getString
options.Cols = [
    {Type: "Int", Name: "Money", Align: "Center", Format: "#,### won", FormatFix: true},
    {Type: "Float", Name: "Grow", Align: "Center", Format: "#,##0.##%"}
    ...
];
```

### Read More
- [doSave method](/docs/funcs/core/do-save)
- [getSaveJson method](/docs/funcs/core/get-save-json)
- [getSaveString method](/docs/funcs/core/get-save-string)
- [getString method](/docs/funcs/core/get-string)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|Feature added|
