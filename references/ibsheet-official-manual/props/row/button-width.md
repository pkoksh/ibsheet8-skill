---
KEY: buttonWidth
KIND: row-property
PATH: props/row/button-width
ALIAS_EN: type, col, docs, props, button, value, row, property
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/button-width
---
# ButtonWidth ***(row)***
> When [Type col](/docs/props/col/type) is [Button col](/docs/props/col/button) and the value of the [Button row](./button) property is `Button`, sets the width of the button object created in the cell.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Width of the button tag (in pixels)|

### Example
```javascript
//Set the indentation level of a specific row to 2.
var rows = sheet.getDataRows();
rows[3]["ButtonWidth"] = "16px";
sheet.refreshRow(rows[3]);
```

### Read More
- [Type col](/docs/props/col/type)
- [Button col](/docs/props/col/button)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
