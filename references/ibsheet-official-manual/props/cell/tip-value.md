---
KEY: tipValue
KIND: cell-property
PATH: props/cell/tip-value
ALIAS_EN: text, display, tooltip, cell, content, matches, specific, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/tip-value
---
# Tip+Value ***(cell)***

> Sets the text to display as a tooltip when the cell's content matches a specific value.

> For example, you can set TipY:"You have selected", TipN:"You have cancelled." by combining Tip with the Value as the property name to configure the displayed text.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|String to display in the tooltip|

### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "TipAA", "Please check the review criteria.");
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "TipBB", "Please check the progress rate.");


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSY"] = "Selected";
ROW["CLSN"] = "Cancelled";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLS0":"Rejected","CLS1":"Under Review","CLS2":"In Progress","CLS3":"Completed", ...}
    ]
}
```

### Read More
- [Tip cell](./tip-value)
- [TipPosition cell](./tip-position)
- [TipClass cell](./tip-class)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
