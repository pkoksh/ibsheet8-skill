---
KEY: textColor
KIND: cell-property
PATH: props/cell/text-color
ALIAS_EN: text, color, specified, cell, textcolor
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/text-color
---
# TextColor ***(cell)***
> Sets the text color for the specified cell.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|HEX format (e.g.: #FF00F0)
rgb format (e.g.: rgb(244,200,40)|

### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "TextColor", "#FF0000");


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSTextColor"] = "#AD4499";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSTextColor": "#0000FF", ...}
    ]
}
```

### Read More
- [TextStyle cell](./text-style)
- [TextSize cell](./text-size)
- [TextFont cell](./text-font)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
