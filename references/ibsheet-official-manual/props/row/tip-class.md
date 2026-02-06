---
KEY: tipClass
KIND: row-property
PATH: props/row/tip-class
ALIAS_EN: design, tooltip, object, applying, desired, css, class, tipclass
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/tip-class
---
# TipClass ***(row)***

> Sets the design of the tooltip object by applying a desired `CSS class`.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|CSS class name to apply to the tooltip object|

### Example
```css
<style>
    .RedBold{color:red;font-weight:700;}
    .deepblue{color:#020079;}
</style>
```
```javascript

//Set the class to use when displaying a tooltip for a specific row.
var row = sheet.getRowById("AR55");
row["TipClass"] = "RedBold";


//Set the tooltip class for some rows in the loaded data.
{"data":[
    {"TipClass":"deepblue","ColName1":"Value1","ColName2":"Value2", ...},
    ...
]}
```

### Read More
- [Tip row](./tip)
- [TipPosition row](./tip-position)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
