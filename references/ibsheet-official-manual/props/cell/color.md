---
KEY: color
KIND: cell-property
PATH: props/cell/color
ALIAS_EN: background, color, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/color
---
# Color ***(cell)***

> Sets the background color of the cell.

> The color is affected by the background color based on state.

> rgb(255,255,255) becomes transparent.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|HEX format (e.g., #FF00F0)
rgb format (e.g., rgb(244,200,40)|

### Example

```javascript
// Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSColor":"#ADADAD" , ...}
    ]
}
```

### Read More
- [TextColor cell](./text-color)
- [TextStyle cell](./text-style)
- [TextSize cell](./text-size)
- [TextFont cell](./text-font)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
