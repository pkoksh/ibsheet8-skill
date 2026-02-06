---
KEY: relWidth
KIND: column-property
PATH: props/col/rel-width
ALIAS_EN: relative, width, column, relwidth, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/rel-width
---
# RelWidth ***(col)***
> Sets the relative width of a column.

> Sets the relative width between columns, similar to setting the column width as a percentage.

> For example, assuming the sheet size is 1000px and there are 5 columns each with a width of 100px, if one column has `RelWidth: 1`, that column will have a width of 600px.

> If two columns have `RelWidth: 1`, both columns will each have 300px.

> If two columns have the `RelWidth` property set, with one set to `RelWidth: 1` and the other set to `RelWidth: 2`, the column with `RelWidth: 1` will have a width of 200px, and the column with `RelWidth: 2` will have a width of 400px. 

> **Note: Since relative widths are being set, if the total width of configured columns is larger than the overall sheet width, the width of columns with `RelWidth` set may become smaller or 0. Therefore, it is recommended to always use `minWidth` to specify a minimum width.**

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Relative ratio for the remaining width|


### Example
```javascript
// Set a specific column to occupy all remaining area
options.Cols = [
    ...
    {Type: "Date", Name: "em_date", RelWidth: 1, MinWidth: 100, ...},
    ...
];
```

### Try it
- [Set to 1](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Col/RelWidth-1/)

### Read More
- [Width col](./width)
- [MinWidth col](./min-width)
- [MaxWidth col](./max-width)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
