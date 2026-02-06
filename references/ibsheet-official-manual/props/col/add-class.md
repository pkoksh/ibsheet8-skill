---
KEY: addClass
KIND: column-property
PATH: props/col/add-class
ALIAS_EN: css, class, name, apply, button, column, type, property
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/add-class
---
# AddClass ***(col)***

> Sets the CSS class name to apply to a button when the column Type is `Button` and the `Button` property value is `Button`.

> **<mark>Caution</mark>** : CSS applied via Class **will not be reflected in the design when downloading to Excel.**

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|CSS class name to apply to the column|


### Example
```css
<style>
/*Using !important for CSS priority*/
.RedBold{color:#FF0000 !important; font-weight:700 !important;}
</style>
```
```javascript
// Apply "RedBold" class to a specific column
options.Cols = [
    ...
    // Apply CSS class to a button column
    {Type: "Button", Button: "Button", Name: "Dept", AddClass: "RedBold", Width: 100 ...},
    ...
];
```
### Try it
- [Demo of AddClass](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Col/AddClass)

### Read More
- [Button col](/docs/props/col/button)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
