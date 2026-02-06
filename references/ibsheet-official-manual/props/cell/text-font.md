---
KEY: textFont
KIND: cell-property
PATH: props/cell/text-font
ALIAS_EN: font, family, specific, cell, textfont
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/text-font
---
# TextFont ***(cell)***
> Sets the `font-family` of a specific cell.

> When specifying multiple fonts or fonts with spaces, use `single(')/double quotation(")`.
### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Font family|

### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "TextFont", "Dotum");


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSTextFont"] = "'Nanum Gothic'";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSTextFont":"Gulim" , ...}
    ]
}
```

### Read More
- [TextStyle cell](/docs/props/cell/text-style)
- [TextColor cell](/docs/props/cell/text-color)
- [TextSize cell](/docs/props/cell/text-size)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
