---
KEY: htmlPrefix
KIND: cell-property
PATH: props/cell/html-prefix
ALIAS_EN: inserts, desired, html, tag, cell, text, string, htmlprefix
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/html-prefix
---
# HtmlPrefix ***(cell)***

> Inserts a desired HTML tag before the cell's text string.



### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Desired HTML tag|


### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "HtmlPrefix", "<i class='fas fa-apple-alt'></i>");


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSHtmlPrefix"] = "abbr";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSHtmlPrefix":"<div class='btn'>time</div>" , ...}
    ]
}

```

### Read More
- [HtmlPostfix cell](./html-postfix)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
