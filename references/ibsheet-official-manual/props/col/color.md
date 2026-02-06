---
KEY: color
KIND: column-property
PATH: props/col/color
ALIAS_EN: background, color, column, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/color
---
# Color ***(col)***

> Sets the background color of the column.

> The column color is affected by the background color based on the state.

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
// Set the background color of a specific column to "#ADADAD"
options.Cols = [
    ...
    {Type: "Text", Name: "Dept", Color: "#ADADAD", Width: 100 ...},
    ...
];
```

### Read More
- [TextColor col](./text-color)
- [TextStyle col](./text-style)
- [TextSize col](./text-size)
- [TextFont col](./text-font)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
