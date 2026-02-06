---
KEY: textFont
KIND: row-property
PATH: props/row/text-font
ALIAS_EN: font, family, specific, row, textfont
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/text-font
---
# TextFont ***(row)***

> Sets the `font-family` of a specific row.

> When specifying multiple fonts or fonts with spaces in their names, use `single(')/double quotation("")` marks.
### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Font family|

### Example
```javascript
//Change the font of a specific row.
var row = sheet.getRowById("AR33");
row["TextFont"] = '"Times New Roman", "Gungsuh", "Helvetica"';
sheet.refreshRow(row);

//Change the font for a specific row in the loaded data.
{"data":[
    ...
    {"TextFont": "Gulim", "ColName1": "Value1", "ColName2": "Value2", ...},
    ...
]}
```

### Read More
- [TextStyle row](./text-style)
- [TextColor row](./text-color)
- [TextSize row](./text-size)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
