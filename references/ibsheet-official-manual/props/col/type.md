---
KEY: type
KIND: column-property
PATH: props/col/type
ALIAS_EN: represents, data, type, held, cell, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/type
---
# Type ***(col)***

> Represents the data type held by a cell.

> Must be declared when creating a column.

> Types such as general text, numbers (integer, float), checkbox, and dropdown list exist.

> For details, refer to [Type appendix](/docs/appx/type).

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Predefined strings such as `Text, Int, Float, Date, Bool, Enum`, etc.|


### Example
```javascript
// Set the type of specific columns.
options.Cols = [
    {Type: "Int", Name: "Seq", Width: 70, ...},
    {Type: "Date", Name: "enterDate", Width: 120, ...},
    {Type: "Text", Name: "sa_Nm", Width: 100, ...},
    ...
];
```

### Read More
- [Type appendix](/docs/appx/type)
- [Type cell](/docs/props/cell/type)
- [getType method](/docs/funcs/core/get-type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
