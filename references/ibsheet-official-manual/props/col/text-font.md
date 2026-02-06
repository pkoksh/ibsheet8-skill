---
KEY: textFont
KIND: column-property
PATH: props/col/text-font
ALIAS_EN: font, family, specific, column, textfont, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/text-font
---
# TextFont ***(col)***

> Sets the `font-family` for a specific column.

> When specifying multiple fonts or fonts with spaces, use `single(')/double quotation(")` to specify them.
### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Font family|

### Example
```javascript
// Change the font family of a specific column.
options.Cols = [
    ...
    {
        TextFont: "Dotum",
        Header: "Department",
        Type: "Text",
        Name: "Dept"
    },
    ...
];
```

### Read More
- [TextStyle col](./text-style)
- [TextColor col](./text-color)
- [TextSize col](./text-size)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
