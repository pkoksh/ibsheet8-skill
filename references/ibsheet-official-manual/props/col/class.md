---
KEY: class
KIND: column-property
PATH: props/col/class
ALIAS_EN: custom, css, class, name, apply, column, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/class
---
# Class ***(col)***

> Sets a custom CSS class name to apply to the column.

> For `Type : "Button"`, the Class property is not applied due to its internal structure, so you should use the [AddClass](./add-class) property.


> **<mark>Caution</mark> : CSS applied via Class will not be reflected in the design when downloading to Excel.**

> **<mark>Caution</mark> : If CSS applied via Class is not reflected, please check through the browser's developer tools whether there is any CSS information that takes priority over the applied Class.**

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
// Apply "RedBold" class to a specific column
options.Cols = [
    ...

    {Type: "Text", Name: "Dept", Class: "RedBold", Width: 100 ...},
    ...
];
```

### Read More
- [AddClass col](./add-class)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
