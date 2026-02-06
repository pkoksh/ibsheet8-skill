---
KEY: indent
KIND: cell-property
PATH: props/cell/indent
ALIAS_EN: indentation, left, right, side, cell, depending, text, alignment
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/indent
---
# Indent ***(cell)***

> Sets the indentation on the left or right side of the cell depending on the text alignment ([Align](./align)).

> When entering a number, padding is created as input value * 10px.
### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Padding amount (input value * 10px)|


### Example
```javascript
// Create approximately 20px padding on a specific cell
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Indent", 2);
```

### Read More
- [Align cell](./align)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
