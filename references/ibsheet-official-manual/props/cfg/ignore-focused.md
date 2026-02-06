---
KEY: ignoreFocused
KIND: config-property
PATH: props/cfg/ignore-focused
ALIAS_EN: sheet, positions, focus, first, visible, row, column, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/ignore-focused
---
# IgnoreFocused ***(cfg)***

> The sheet positions the focus on the first visible row and first column after data retrieval. 

> Setting this property to `1(true)` prevents the sheet from acquiring focus after retrieval. 



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Bring focus to the first row and column after retrieval (`default`)|
|`1(true)`|Do not bring focus after retrieval|


### Example
```javascript
options.Cfg = {
    IgnoreFocused: true,        // Prevent bringing focus after retrieval.
};
```

### Read More
- [Focus method](/docs/funcs/core/focus)
- [onFocus event](/docs/events/on-focus)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
