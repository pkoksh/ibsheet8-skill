---
KEY: htmlPostfix
KIND: cell-property
PATH: props/cell/html-postfix
ALIAS_EN: inserts, desired, html, tag, cell, text, string, htmlpostfix
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/html-postfix
---
# HtmlPostfix ***(cell)***

> Inserts a desired HTML tag after the cell's text string.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Desired HTML tag|


### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "HtmlPostfix", "<i class='fas fa-apple-alt'></i>");


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSHtmlPostfix"] = "abbr";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSHtmlPostfix":"<div class='btn'>time</div>" , ...}
    ]
}
```

### Read More
- [HtmlPrefix cell](./html-prefix)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
