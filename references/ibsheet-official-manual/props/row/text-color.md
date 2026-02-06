---
KEY: textColor
KIND: row-property
PATH: props/row/text-color
ALIAS_EN: text, color, specified, row, textcolor
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/text-color
---
# TextColor ***(row)***

> Sets the text color of a specified row.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|HEX format (ex:#FF00F0)
rgb format (ex:rgb(244,200,40)|

### Example
```javascript
//Set the text color of a specific row to red.
var row = sheet.getRowById("AR33");
row["TextColor"] = "#FF0000";
sheet.refreshRow(row);

//Display text in blue for a specific row in the loaded data.
{"data":[
    ...
    {"TextColor": "#0000FF", "ColName1": "Value1", "ColName2": "Value2", ...},
    ...
]}
```

### Read More
- [TextStyle row](./text-style)
- [TextSize row](./text-size)
- [TextFont row](./text-font)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
