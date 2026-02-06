---
KEY: tip
KIND: row-property
PATH: props/row/tip
ALIAS_EN: displays, tooltip, mouse, cursor, hovers, row, tip
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/tip
---
# Tip ***(row)***

> Displays a tooltip when the mouse cursor hovers over a row.

> Through settings, you can configure whether to use the tooltip and what content to display in the tooltip.

###
![Tip](/assets/imgs/tip.png "Using Tip")
<!-- IMAGE: Screenshot/Example Image - Tip -->

### Type
`mixed`( `boolean` \| `string`)

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Tooltip disabled|
|`1(true)`|Tooltip enabled|
|`string`|Sets the content to be displayed in the tooltip|

### Example
```javascript
//Change the content displayed in the tooltip when hovering over row 55.
var row = sheet.getRowById("AR55");
row["Tip"] = "This transaction has been completed.";


//Remove the tooltip feature for some rows in the loaded data.
{"data":[
    {"Tip": 0, "ColName1": "Value1", "ColName2": "Value2", ...},
    ...
]}
```

### Read More
- [TipClass row](./tip-class)
- [TipPosition row](./tip-position)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
