---
KEY: textSize
KIND: row-property
PATH: props/row/text-size
ALIAS_EN: text, size, specified, row, textsize
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/text-size
---
# TextSize ***(row)***

> Sets the text size of a specified row.

> You can use `px, pt, em` units. If no unit is specified, it defaults to px.
### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|A string consisting of a size number and unit (ex: 25px)|

### Example
```javascript
//Set the text size of a specific row to 1.2em.
var row = sheet.getRowById("AR33");
row["TextSize"] = "1.2em";
sheet.refreshRow(row);

//Set the text size to 27px for a specific row in the loaded data.
{"data":[
    ...
    {"TextSize": "27px", "ColName1": "Value1", "ColName2": "Value2", ...},
    ...
]}
```

### Read More
- [TextStyle row](./text-style)
- [TextColor row](./text-color)
- [TextFont row](./text-font)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
