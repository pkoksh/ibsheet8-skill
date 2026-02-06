---
KEY: trueValue
KIND: column-property
PATH: props/col/true-value
ALIAS_EN: bool, type, columns, true, false, values, default, truevalue
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/true-value
---
# TrueValue ***(col)***

> `Bool type` columns can only have `1(true)/0(false)` values by default.

> However, in case the values stored in the database are separate values other than `1(true)/0(false)`, you can set the value corresponding to `1(true)` through this property.

> The value set through this property is used when retrieving data ([doSearch](/docs/funcs/core/do-search), [loadSearchData](/docs/funcs/core/load-search-data), etc.) or saving ([doSave](/docs/funcs/core/do-save), [getSaveJson](/docs/funcs/core/get-save-json), etc.).

> This property value is only used when exchanging data with the server; when checking the cell value through `getValue()`, it returns `1(true)/0(false)`.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Value corresponding to `1(true)` (checked) for a `Bool type` column|


### Example
```javascript
// Set the values exchanged with the server for a Bool Type column to Y/N
options.Cols = [
    {
        Type: "Bool",
        Name: "ConfirmYN",
        Align: "Center",
        Width: 70,
        TrueValue: "Y",
        FalseValue: "N"
    },
    ...
];
```

### Try it
- [Set to "Y" With Set to "N" by FalseValue](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Col/TrueValue-FalseValue/)

### Read More
- [FalseValue col](./false-value)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
