---
KEY: signFontStyle
KIND: column-property
PATH: props/col/sign-font-style
ALIAS_EN: numeric, columns, int, float, types, you, apply, text
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/sign-font-style
---
# SignFontStyle ***(col)***

> In numeric columns (Int, Float types), you can set and apply Text properties for positive, negative, and 0 values as described in the appendix [Format](/docs/appx/format).

> Takes priority over Col's Text properties ([TextColor](./text-color), [TextFont](./text-font), [TextSize](./text-size), [TextStyle](./text-style)).

> The delimiter for positive, negative, and 0 uses the string set as `ValueSeparator` in the `locale/*.js` file.



> **<mark>Note</mark> : Since SignFontStyle applies properties based on data, the Text properties are applied to the Cell.** 

> **<mark>Note</mark> : When setting a value to empty, '', or null, the previously applied property value is maintained.** 



### Type
`object`

### Options
|Name|Type|Required|Description|
|-----|-----|-----|-----|
|`TextColor`|`string`|Optional|Sets the text color ([TextColor](./text-color)) to apply based on data for positive, negative, and 0 values in the specified numeric column.
e.g.) "SignFontStyle": {"TextColor": "red;blue;orange", ...}|
|`TextFont`|`string`|Optional|Sets the text font ([TextFont](./text-font)) to apply based on data for positive, negative, and 0 values in the specified numeric column.
e.g.) "SignFontStyle": {TextFont: "Gulim, Helvetica;Malgun Gothic;Times New Roman", ...}|
|`TextSize`|`string`|Optional|Sets the text size ([TextSize](./text-size)) to apply based on data for positive, negative, and 0 values in the specified numeric column.
e.g.) "SignFontStyle": {TextSize: "12px;15px;5px", ...}|
|`TextStyle`|`string`|Optional|Sets the text style ([TextStyle](./text-style)) to apply as a number based on data for positive, negative, and 0 values in the specified numeric column.
e.g.) "SignFontStyle": {TextStyle: "5;2;8", ...}|

### Example
```javascript
options.Cols = [
    ...
    // Apply Text properties for positive, negative, and 0 values in the IntData column which is a numeric column
    {Type: "Int", Name: "IntData", SignFontStyle: {TextColor: "red;blue;yellow", TextFont: "Gulim;Malgun Gothic;Helvetica", TextSize: "15px;10em;11pt", TextStyle: "1,2,4"} ...},
    ...
];

// Apply SignFontStyle to IntData column, maintain existing TextColor for positive and negative (same as creation settings: red for positive, blue for negative), apply aqua for text color when 0
sheet.setAttribute("", "IntData", "SignFontStyle", {TextColor: ";;aqua"});
```


### Read More
- [TextColor col](./text-color)
- [TextFont col](./text-font)
- [TextSize col](./text-size)
- [TextStyle col](./text-style)
- [SignFontStyle cell](/docs/props/cell/sign-font-style)


### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.19|Feature added|
