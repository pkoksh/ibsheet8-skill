---
KEY: class
KIND: row-property
PATH: props/row/class
ALIAS_EN: custom, css, class, cell, contained, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/class
---
# Class ***(row)***

> Sets a `custom CSS class` on each cell contained in the row.


> **<mark>Note</mark>: CSS applied through Class is not reflected in the design when downloading to Excel.**

> **<mark>Note</mark>: If CSS applied through Class is not being reflected, please use the browser's developer tools to check if there is CSS information being applied with higher priority than your Class.**

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Class name specified in CSS|

### Example
```css
<style>
.rowAlert {font-weight:700;animation:blinkingText 1s infinite;}
@keyframes blinkingText{
0%{     color: #FF0000;    }
50%{     color: #FF0000;    }
80%{    color:transparent;  }
100%{   color: #FF0000;    }
}
.subTitle{color:#EDEDED!important;background-color:#666666!important;}
</style>
```
```javascript
// Change text in a specific row to red and blinking.
var row = sheet.getRowById("AR11")
row["Class"] = "rowAlert";
sheet.refreshRow(row);

// Change the title and background color of the header row.
options.Def.Header = {"Class": "subTitle"};
```

### Read More
- [AlternateClass row](./alternate-class)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
