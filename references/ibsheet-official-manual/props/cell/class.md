---
KEY: class
KIND: cell-property
PATH: props/cell/class
ALIAS_EN: custom, css, class, name, apply, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/class
---
# Class ***(cell)***

> Sets the custom CSS class name to apply to a cell.


> **<mark>Note</mark> : CSS applied via Class will not be reflected in the design when downloading to Excel.**

> **<mark>Note</mark> : If CSS applied via Class is not being reflected, please check through your browser's developer tools whether there is CSS information that takes priority over your applied Class.**

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|CSS class name to apply to the column|


### Example
```css
<style>
.RedBold{color:#FF0000!important;font-weight:700!important;}
</style>
```
```javascript
// Apply "RedBold" class to a specific cell
var ROW = sheet.getRowById("AR10");
ROW["CLSClass"] = "RedBold";
// Reflect changes
sheet.refreshCell({row:ROW, col:"CLS"});
```

### Read More



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
