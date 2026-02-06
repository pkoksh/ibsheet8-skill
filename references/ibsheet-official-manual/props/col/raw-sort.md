---
KEY: rawSort
KIND: column-property
PATH: props/col/raw-sort
ALIAS_EN: whether, apply, format, sorting, column, rawsort, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/raw-sort
---
# RawSort ***(col)***

> Sets whether to apply Format when sorting the column.

> Does not apply to [CustomFormat](./custom-format).

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Sorting with the column's [Type](/docs/appx/type) and `Format` applied (`default`)|
|`1`|Sorting based on raw data without `Format` applied
For [Enum](./enum) type, sorts by `Key`|
|`2`|For [Enum](./enum) type, sorts by the input order (array order) of [Enum](./enum) and [EnumKeys](./enum-keys)|


### Example
```javascript
// Sort a specific Enum column by Key
options.Cols = [
    ...
    {Type: "Enum", Name: "Position", RawSort: 1, Enum: "|President|Director|Manager|Assistant Manager|Staff", EnumKeys: "|AA|BB|CC|DD|EE" ...},
    ...
];
```

### Read More
- [CanSort col](./can-sort)
- [CustomFormat col](./custom-format)
- [Enum col](./enum)
- [EnumKeys col](./enum-keys)
- [NumberSort col](./number-sort)
- [Type appendix](/docs/appx/type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
