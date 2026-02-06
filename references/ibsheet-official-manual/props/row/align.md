---
KEY: align
KIND: row-property
PATH: props/row/align
ALIAS_EN: text, alignment, entire, row, align
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/align
---
# Align ***(row)***

> Sets the text alignment for the entire row.

> When used in a tree or group, the data area of the column designated as the reference column (**the column where the tree collapse/expand icon is displayed**) is not affected by `Align`. 

> Generally used for header rows rather than data rows.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Left`|Left-align text (Left, LEFT, left allowed)|
|`Center`|Center-align text (Center, CENTER, center allowed)|
|`Right`|Right-align text (Right, RIGHT, right allowed)

### Example
```javascript
// Center-align text for a specific row.
var row = sheet.getFirstVisibleRow();
row["Align"] = "Center";
sheet.refreshRow(row);

// Center-align text for all header rows.
options.Def.Header = {"Align": "CENTER"};
```

### Read More
- [Align col](/docs/props/col/align)
- [Align cell](/docs/props/cell/align)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
