---
KEY: tip
KIND: cell-property
PATH: props/cell/tip
ALIAS_EN: whether, display, tooltip, mouse, cursor, hovers, cell, configures
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/tip
---
# Tip ***(cell)***

> Sets whether to display a tooltip when the mouse cursor hovers over the cell, and configures the content to be displayed.

> By default, HTML tags can be used to display detailed content, but if the cfg [StandardTip](/docs/props/cfg/standard-tip) value is `1(true)`, the browser's built-in tooltip is used, which cannot render HTML tags.

### Type
`mixed`( `boolean` \| `string` )

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Do not use tooltip|
|`1(true)`|Use tooltip|
|`string`|Set the content to display in the tooltip|

### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Tip", 0);


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSTip"] = 1;
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSTip":"Please enter the task start date and end date." , ...}
    ]
}
```

### Read More
- [Tip+Value cell](./tip-value)
- [TipClass cell](./tip-class)
- [StandardTip cfg](/docs/props/cfg/standard-tip)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
