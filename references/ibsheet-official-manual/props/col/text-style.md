---
KEY: textStyle
KIND: column-property
PATH: props/col/text-style
ALIAS_EN: font, weight, style, variant, text, decoration, specified, column
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/text-style
---
# TextStyle ***(col)***

> Sets `font-weight, font-style, font-variant, text-decoration` for the text of the specified column as a number.

> Numbers can be added together to apply multiple properties simultaneously.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`1`| Bold|
|`2`| Italic|
|`4`| Underline|
|`8`| Strike|
|`16`| Overline|
|`32`| Small Caps|


### Example
```javascript
// Display text of a specific column as italic with underline.
options.Cols = [
    ...
    {TextStyle: 6, Header: "Department", Type: "Text", Name: "Dept" ...},
    ...
];
```

### Read More
- [TextColor col](./text-color)
- [TextSize col](./text-size)
- [TextFont col](./text-font)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
