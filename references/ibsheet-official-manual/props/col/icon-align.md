---
KEY: iconAlign
KIND: column-property
PATH: props/col/icon-align
ALIAS_EN: icon, property, displays, button, checkbox, left, side, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/icon-align
---
# IconAlign ***(col)***
> When using the [Icon](./icon) property that displays a button (or checkbox) on the left side of a cell, sets the position of the button.

> By default, it is displayed on the left side of the cell, but it can also be displayed on the right side.




### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Left`|Display `Icon` on the left side of the cell (`default`)|
|`Right`|Display `Icon` on the right side of the cell|


### Example
```javascript
options.Cols = [
    ...
    // Display the Enum button on the right side of the cell
    {Type: "Enum", Name: "brnSaleAmt", IconAlign: "Right", Enum: "|President|Director|Deputy Director|Manager", EnumKeys: "|AA|BB|CC|DD" ...},
    ...
];
```

### Read More
- [Icon col](./icon)
- [IconWidth cell](../cell/icon-width)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.4|Feature added|
