---
KEY: indent
KIND: row-property
PATH: props/row/indent
ALIAS_EN: text, indentation, entire, row, indent
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/indent
---
# Indent ***(row)***

> Sets the text indentation for the entire row.

> For left-aligned cells, indentation is applied from the left edge; for right-aligned cells, from the right edge.

> One indentation unit is `10px`.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Indentation level (in 10px units)|

### Example
```javascript
//Set the indentation level of a specific row to 2.
var row = sheet.getRowById("AR11");
row["Indent"] = 2;
sheet.refreshRow(row);

//Set the indentation of all data rows to 1.
options.Def.Row = {"Indent": 1};
```

### Read More
- [Align row](./align)
- [Align col](/docs/props/col/align)
- [Align cell](/docs/props/cell/align)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
