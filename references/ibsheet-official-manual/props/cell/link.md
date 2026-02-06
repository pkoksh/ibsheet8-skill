---
KEY: link
KIND: cell-property
PATH: props/cell/link
ALIAS_EN: wraps, cell, data, tag, url, href, attribute, link
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/link
---
# Link ***(cell)***

> Wraps the cell data with an \<a> tag and sets the URL for the href attribute.

> You can use the [LinkBase](./link-base) and [LinkTarget](./link-target) properties together to set a relative path or the target window when clicked.

> **This option only works when CanEdit is set to 0.**

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|URL to navigate to when clicked|


### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Link", "./cbt/exam02.do");


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSLink"] = "/cbs/recalcSum.do";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSLink":"/abs/endPointJ.do" , ...}
    ]
}
```

### Read More
- [LinkBase cell](./link-base)
- [LinkTarget cell](./link-target)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
