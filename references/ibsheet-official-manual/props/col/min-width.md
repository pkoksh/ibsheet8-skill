---
KEY: minWidth
KIND: column-property
PATH: props/col/min-width
ALIAS_EN: minimum, column, width, pixels, minwidth, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/min-width
---
# MinWidth ***(col)***
> Sets the minimum column width in pixels.

> Prevents the column from being reduced below the specified size when the user adjusts the column width by dragging.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Minimum column width (in pixels)|


### Example
```javascript
// Set the minimum width of a specific column to 110px.
options.Cols = [
    ...
    {Type: "Enum", Name: "DeptNm", MinWidth: 110, ...},
    ...
];
```

### Read More
- [Width col](./width)
- [MaxWidth col](./max-width)
- [RelWidth col](./rel-width)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
