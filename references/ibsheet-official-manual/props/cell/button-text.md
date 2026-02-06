---
KEY: buttonText
KIND: cell-property
PATH: props/cell/button-text
ALIAS_EN: button, docs, props, cell, property, value, html, text
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/button-text
---
# ButtonText ***(cell)***
> When the [Button](/docs/props/cell/button) property value is `Button` or `Html`, sets the text to display on the cell button.

> When the `Button property` value is `Button`, the set text is displayed as a \<u> or \<button> tag, 
and when it is `Html`, HTML text like Input is interpreted and displayed in the cell.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|String to be placed in the button|

### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "ButtonText", "Confirm");


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSButtonText"] = "<span class='spBtn'>Complete</spn>";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {..., "CLSButtonText":"Pending" , ...}
    ]
}
```

### Read More
- [Button cell](/docs/props/cell/button)
- [UseButton cfg](/docs/props/cfg/use-button)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
