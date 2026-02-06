---
KEY: setCurrentStyle
KIND: method
PATH: funcs/core/set-current-style
ALIAS: sheet.setCurrentStyle, setCurrentStyle()
ALIAS_EN: changes, current, sheet, theme, style, related, information, header
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-current-style
---
# setCurrentStyle ***(method)***
> Changes the current sheet's theme and style-related information for `Header` and `Row` Def settings through a string.

### Syntax
```javascript
boolean setCurrentStyle( info );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|info|`string`|Required|current sheet column appliedand desired style information|

### Return Value
***boolean***

### Example
```javascript
var info = '{"HeaderColor":"#1d1d1b","HeaderTextSize":"14","HeaderTextColor":"#efe6e6","AlternateColor":"#dfdfe2","RowColor":"#f6f6ee","RowTextSize":"12","RowTextColor":"#211c1c","Theme":"IB"}' // Same format as the result obtained from getCurrentStyle

sheet.setCurrentStyle( info );
```

### Read More
- [Understanding Row structure getting started](/docs/start/row)
- [getCurrentStyle method](./get-current-Style)
- [AlternateColor row](/docs/props/row/alternate-color.md)
- [Color row](/docs/props/row/color.md)
- [TextColor row](/docs/props/row/text-color.md)
- [TextSize row](/docs/props/row/text-size.md)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.18|Feature added|
