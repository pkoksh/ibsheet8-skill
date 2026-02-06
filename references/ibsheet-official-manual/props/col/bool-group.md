---
KEY: boolGroup
KIND: column-property
PATH: props/col/bool-group
ALIAS_EN: whether, group, cells, together, within, column, type, docs
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/bool-group
---
# BoolGroup ***(col)***
> Sets whether to group cells together within a column with [Type](/docs/appx/type) `Bool`.

> The number you enter becomes the group index, and only one cell among cells with the same value can be checked (like radio buttons, when one is checked, the others are automatically unchecked).

> Therefore, when setting `BoolGroup` on a column, the entire column has the same `BoolGroup` value, so only one cell in the entire column can be checked.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Group index to bundle together like radio buttons|

### Example
```javascript
// Allow only a single cell to be checked within the column
options.Cols = [
    ...
    {Type: "Bool", Name: "st1", BoolGroup: 1, ...},
    ...
];
```

### Read More
- [BoolGroup cell](/docs/props/cell/bool-group)
- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
