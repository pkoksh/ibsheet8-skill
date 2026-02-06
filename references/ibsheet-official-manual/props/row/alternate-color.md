---
KEY: alternateColor
KIND: row-property
PATH: props/row/alternate-color
ALIAS_EN: color, displayed, even, rows, setting, different, background, colors
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/alternate-color
---
# AlternateColor ***(row)***

> Sets the color to be displayed on even rows when setting different background colors for odd and even rows to improve readability.

> This property is affected by the [Alternate](/docs/props/cfg/alternate) property.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|HEX format (ex: #FF00F0)
rgb format (ex: rgb(244,200,40)|

### Example
```javascript
//Set the background color of even rows in the data area to gray.
options.Def.Row = {"AlternateColor": "#DEDEDE"};
```

### Read More
- [Alternate cfg](/docs/props/cfg/alternate)
- [AlternateClass row](./alternate-class)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
