---
KEY: getCurrentStyle
KIND: method
PATH: funcs/core/get-current-style
ALIAS: sheet.getCurrentStyle, getCurrentStyle()
ALIAS_EN: method, retrieves, current, sheet, def, settings, including, theme
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-current-style
---
# getCurrentStyle ***(method)***
> A method that retrieves the current sheet's Def settings including theme, background color, text color, Alternate color, and text size information as a string.

> Does not include default values for properties other than the theme.

### Syntax
```javascript
string getCurrentStyle();
```

### Return Value
***string current sheet's Def settings including background color, text color, Alternate color, and text size information value***

### Example
```javascript
// Returns a string containing column information of the current sheet
sheet.getCurrentStyle();
```

### Read More
- [Understanding Row structure getting started](/docs/start/row)
- [setCurrentStyle method](./set-current-style)
- [AlternateColor row](/docs/props/row/alternate-color.md)
- [Color row](/docs/props/row/color.md)
- [TextColor row](/docs/props/row/text-color.md)
- [TextSize row](/docs/props/row/text-size.md)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.18|Feature added|
