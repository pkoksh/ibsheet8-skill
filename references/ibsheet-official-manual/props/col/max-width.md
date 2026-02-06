---
KEY: maxWidth
KIND: column-property
PATH: props/col/max-width
ALIAS_EN: maximum, column, width, expanded, user, adjusts, mouse, drag
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/max-width
---
# MaxWidth ***(col)***
> Sets the maximum column width that can be expanded when the user adjusts the column width using mouse drag.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Maximum column width (in pixels)|


### Example
```javascript
// Set the maximum width of a specific column to 120px.
options.Cols = [
    ...
    {Type: "Date", Name: "em_date", MaxWidth: 120, ...},
    ...
];
```

### Read More
- [Width col](./width)
- [MinWidth col](./min-width)
- [RelWidth col](./rel-width)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
