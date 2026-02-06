---
KEY: textSize
KIND: cell-property
PATH: props/cell/text-size
ALIAS_EN: font, size, specified, cell, textsize
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/text-size
---
# TextSize ***(cell)***
> Sets the font size of the specified cell.

> `px, pt, em` units can be used, and if no unit is specified, px is used by default.
### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|A string consisting of a size number and unit (e.g.: 25px)|

### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "TextSize", "12pt");


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSTextSize"] = "20px";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSTextSize": "22px", ...}
    ]
}
```

### Read More
- [TextStyle cell](./text-style)
- [TextColor cell](./text-color)
- [TextFont cell](./text-font)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
