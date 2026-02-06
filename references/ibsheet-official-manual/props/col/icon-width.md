---
KEY: iconWidth
KIND: column-property
PATH: props/col/icon-width
ALIAS_EN: icon, property, displays, button, left, side, cell, width
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/icon-width
---
# IconWidth ***(col)***
> When using the [Icon](./icon) property that displays a button on the left side of a cell, sets the width of the button area when using a custom image. 

> The width is set in pixel units.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Width of the button on the left side of the cell.|


### Example
```javascript
options.Cols = [
    ...
    // Add an image button on the left side of the cell
    {Type: "Text", Name: "brnSaleAmt", Icon: "Icon", IconSrc: "/pcd/img/popIcon.png", IconWidth: 15, Width: 120 ...},
    ...
];
```

### Read More
- [Icon col](./icon)
- [IconSrc col](./icon-src)
- [IconWidth cell](../cell/icon-width)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
