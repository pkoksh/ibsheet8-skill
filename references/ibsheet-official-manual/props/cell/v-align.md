---
KEY: vAlign
KIND: cell-property
PATH: props/cell/v-align
ALIAS_EN: vertical, alignment, text, within, cell, valign
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/v-align
---
# VAlign ***(cell)***

> Sets the vertical alignment of text within the cell.

> For horizontal alignment, please refer to the [Align](./align) property.

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
// Set text alignment of a specific cell to top
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "VAlign", "Top", 1);
```

### Read More
- [Align cell](./align)
- [VAlign row](/docs/props/row/v-align)
- [VAlign col](/docs/props/col/v-align)


### Since
|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
