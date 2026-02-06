---
KEY: format
KIND: column-property
PATH: props/col/format
ALIAS_EN: defines, masked, data, original, format, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/format
---
# Format ***(col)***
> Defines the masked data for the original data.

> Regardless of the original data, displays data with an applied mask to the user.

> `Format` can be defined in various ways depending on the column [Type](./type).

> **For detailed information, please refer to [Format](/docs/appx/format) in Chapter 7 appendix.**

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Various format strings depending on the column `Type`|


### Example
```javascript
// Define a date format
options.Cols = [
    ...
    {Type: "Date", Name: "sa_enterDate", Format: 'MM-dd-yyyy' ...},
    ...
];
```

### Read More
- [Format appendix](/docs/appx/format)
- [EditFormat col](./edit-format)
- [DataFormat col](./data-format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
