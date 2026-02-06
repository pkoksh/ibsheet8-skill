---
KEY: tipPosition
KIND: cell-property
PATH: props/cell/tip-position
ALIAS_EN: position, size, alignment, tooltip, object, tipposition, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/tip-position
---
# TipPosition ***(cell)***

> Sets the position, size, and alignment of the tooltip object.


### Type
`object`

### Options
|Value|Description|
|-----|-----|
|`X`|X-axis offset position of the tooltip|
|`Y`|Y-axis offset position of the tooltip|


### Example

```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "TipPosition", {X:0, Y:-20});


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSTipPosition"] = {X:-30};
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSTipPosition": {Y:210}, ...}
    ]
}
```

### Read More
- [Tip cell](./tip)
- [TipClass cell](./tip-class)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
