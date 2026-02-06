---
KEY: sheetPaste
KIND: config-property
PATH: props/cfg/sheet-paste
ALIAS_EN: feature, permission, prompt, appear, copy, sheetpaste, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/sheet-paste
---
# SheetPaste ***(cfg)***

> This is an `IE`-only feature. When set, the permission prompt does not appear when using the copy feature.

> The default value is `0(false)`, and in IE, the copy feature uses `execCommand('copy')`.

> When using the value `1(true)`, the sheet's internal copy feature is used. 

> However, if you want to turn off the permission prompt while using `execCommand('copy')`, you can allow permissions in the security settings of Internet Options.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Uses execCommand('copy'). (permission prompt) (`default`)|
|`1(true)`|Uses the sheet's internal copy feature. (no permission prompt)|

### Example

```
options.Cfg = {
    SheetPaste: true              // Uses the sheet's internal copy feature.
};
```



### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|Feature added|
