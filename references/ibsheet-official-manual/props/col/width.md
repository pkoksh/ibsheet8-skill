---
KEY: width
KIND: column-property
PATH: props/col/width
ALIAS_EN: column, width, pixels, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/width
---
# Width ***(col)***
> Sets the column width in pixels.

> Refers to the column width at the initial creation of the sheet object.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Column width (in pixels)|


### Example
```javascript
// Set the width of a specific column to 85px.
options.Cols = [
    ...
    {Type: "Text", Name: "EMPID", Width: 85, ...},
    ...
];
```

### Read More
- [MaxWidth col](./max-width)
- [MinWidth col](./min-width)
- [RelWidth col](./rel-width)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
