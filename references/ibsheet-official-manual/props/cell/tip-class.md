---
KEY: tipClass
KIND: cell-property
PATH: props/cell/tip-class
ALIAS_EN: applies, desired, css, class, tooltip, object, configure, design
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/tip-class
---
# TipClass ***(cell)***

> Applies a desired CSS class to the tooltip object to configure its design.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Class name to apply to the tooltip object|

### Example
```css
<style>
    .RedBold{color:red;font-weight:700;}
    .deepblue{color:#020079;}
</style>
```
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "TipClass", "RedBold");


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSTipClass"] = "deepblue";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSTipClass": "RedBold", ...}
    ]
}
```

### Read More
- [Tip cell](./tip)
- [Tip+Value cell](./tip-value)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
