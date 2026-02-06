---
KEY: addClass
KIND: cell-property
PATH: props/cell/add-class
ALIAS_EN: css, class, name, apply, button, cell, column, type
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/add-class
---
# AddClass ***(cell)***
> Sets the CSS class name to apply to a button cell when the column Type is `Button` and the `Button` property value is `Button`.

> **<mark>Note</mark>** : CSS applied via Class **will not be reflected in the design when downloading to Excel.**

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|CSS class name to assign to the column|

### Example
```css
<style>
/* Use !important for CSS priority */
.MYBTN{color:#FF0000 !important; font-weight:700 !important;}
</style>
```
```javascript
//1. Set property via method
sheet.setAttribute(sheet.getRowById("AR99"), "EDate", "AddClass", "MYBTN");


//2. Set property by directly accessing the object (assuming column name is CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSAddClass"] = "MYBTN";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Set property within loaded data (assuming column name is CLS)
{
    data:[
        {... , "CLSAddClass":"MYBTN" , ...}
    ]
}
```
### Try it
- [Demo of addClass](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Col/AddClassFormula/)

### Read More
- [Button col](/docs/props/col/button)
- [ButtonText col](/docs/props/col/button-text)
- [UseButton cfg](/docs/props/cfg/use-button)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
