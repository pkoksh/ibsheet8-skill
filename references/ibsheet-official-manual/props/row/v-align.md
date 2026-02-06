---
KEY: vAlign
KIND: row-property
PATH: props/row/v-align
ALIAS_EN: vertical, text, alignment, entire, row, valign
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/v-align
---
# VAlign ***(row)***

> Sets the vertical text alignment for the entire row.

> For horizontal alignment, refer to the [Align](./align) property.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Top`|Top-align text (Top, TOP, top allowed)|
|`Middle`|Middle-align text (Middle, MIDDLE, middle allowed)|
|`Bottom`|Bottom-align text (Bottom, BOTTOM, bottom allowed)

### Example
```javascript
//Top-align text for a specific row.
var row = sheet.getFirstVisibleRow();
row["VAlign"] = "Top";
sheet.refreshRow(row);

//Bottom-align text for the footer row.
options.Def.Footer = {"VAlign": "Bottom"};
```

### Read More
- [Align row](./align)
- [VAlign col](/docs/props/col/v-align)
- [VAlign cell](/docs/props/cell/v-align)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
