---
KEY: indent
KIND: column-property
PATH: props/col/indent
ALIAS_EN: indentation, left, right, side, cell, depending, text, alignment
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/indent
---
# Indent ***(col)***

> Sets indentation on the left or right side of the cell depending on the text alignment ([Align](./align)).

> When a number is entered, padding is created as input value * 10 px.
### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Padding amount (input value * 10px)|


### Example
```javascript
// Create about 20px padding on the left side of a specific column
options.Cols = [
    ...
    {Type: "Text", Name: "Description", Align: "Left", Indent: 2, Width: 100 ...},
    ...
];
```

### Read More
- [Align col](./align)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
