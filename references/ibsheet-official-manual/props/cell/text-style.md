---
KEY: textStyle
KIND: cell-property
PATH: props/cell/text-style
ALIAS_EN: font, weight, style, variant, text, decoration, specified, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/text-style
---
# TextStyle ***(cell)***

> Sets `font-weight, font-style, font-variant, text-decoration` for the text in the specified cell using numbers.

> Multiple properties can be applied simultaneously by adding the numbers together.


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
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "TextStyle", 4);

//1-1 Apply multiple properties to a specific cell (column name: CLS, Bold + Italic)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "TextStyle", 1 + 2);

//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSTextStyle"] = 5;
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSTextStyle":8 , ...}
    ]
}
```

### Read More
- [TextColor cell](./text-color)
- [TextSize cell](./text-size)
- [TextFont cell](./text-font)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
