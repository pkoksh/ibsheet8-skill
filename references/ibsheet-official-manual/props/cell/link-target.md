---
KEY: linkTarget
KIND: cell-property
PATH: props/cell/link-target
ALIAS_EN: cell, link, property, target, window, navigate, clicked, linktarget
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/link-target
---
# LinkTarget ***(cell)***

> When the cell has a [Link](./link) property, sets the `target Window` to navigate to when clicked.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Target Window to navigate to when clicked (_blank, _parent, _self, _top, specific window name)|


### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "LinkTarget", "_self");


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSLinkTarget"] = "_blank";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSLinkTarget":"_parent" , ...}
    ]
}
```

### Read More
- [Link cell](./link)
- [LinkBase cell](./link-base)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
