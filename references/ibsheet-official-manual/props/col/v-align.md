---
KEY: vAlign
KIND: column-property
PATH: props/col/v-align
ALIAS_EN: vertical, alignment, text, within, cell, valign, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/v-align
---
# VAlign ***(col)***

> Sets the vertical alignment of text within a cell.

> For horizontal alignment, refer to the [Align](./align) property.
### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Top`|Align text to the top|
|`Middle`|Align text to the middle|
|`Bottom`|Align text to the bottom|


### Example
```javascript
// Set the text of a specific column to top alignment
options.Cols = [
    ...
    {Type: "Text", Name: "Description", VAlign: "Top", Width: 100, ...},
    ...
];
```

### Read More
- [Align col](./align)
- [VAlign row](/docs/props/row/v-align)
- [VAlign cell](/docs/props/cell/v-align)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
