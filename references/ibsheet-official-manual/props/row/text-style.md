---
KEY: textStyle
KIND: row-property
PATH: props/row/text-style
ALIAS_EN: font, weight, style, variant, text, decoration, specified, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/text-style
---
# TextStyle ***(row)***

> Sets `font-weight, font-style, font-variant, text-decoration` for the text of a specified row using numbers.

> You can apply multiple properties simultaneously by adding the numbers together.


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
//Modify a specific row's text to be bold with strikethrough.
var row = sheet.getRowById("AR33");
row["TextStyle"] = 9;
sheet.refreshRow(row);

//Display italic with underline for a specific row in the loaded data.
{"data":[
    {"TextStyle": 6, "ColName1": "Value1", "ColName2": "Value2", ...},
    ...
]}
```

### Read More
- [TextColor row](./text-color)
- [TextSize row](./text-size)
- [TextFont row](./text-font)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
