---
KEY: textColor
KIND: column-property
PATH: props/col/text-color
ALIAS_EN: text, color, specified, column, textcolor, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/text-color
---
# TextColor ***(col)***

> Sets the text color for the specified column.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|HEX format (e.g.: #FF00F0)
rgb format (e.g.: rgb(244,200,40))|

### Example
```javascript
// Display text of a specific column in blue.
options.Cols = [
    ...
    {TextColor: "#0000FF", Header: "Department", Type: "Text", Name: "Dept" ...},
    ...
];
```

### Read More
- [TextStyle col](./text-style)
- [TextSize col](./text-size)
- [TextFont col](./text-font)
- [Color col](./color)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
