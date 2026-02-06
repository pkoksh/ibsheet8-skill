---
KEY: color
KIND: row-property
PATH: props/row/color
ALIAS_EN: background, color, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/color
---
# Color ***(row)***

> Sets the background color of a row.

> The row color is affected by background colors based on the row state.

> rgb(255,255,255) becomes transparent.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|HEX format (ex:#FF00F0)
rgb format (ex:rgb(244,200,40)|

### Example

```javascript
//Set the background color of a specific row to gray.
var row = sheet.getRowById("AR11");
row["Color"] = "#ADADAD";
sheet.refreshRow(row);


//Set the background color of a specific row to yellow in the loaded data.
{"data":[
    ...
    {"Color":"#FFFF00","ColName1":"Value1","ColName2":"Value2", ...},
    ...
]}
```

### Read More
- [AlternateColor row](./alternate-color)
- [TextColor row](./text-color)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
