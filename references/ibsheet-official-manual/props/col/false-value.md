---
KEY: falseValue
KIND: column-property
PATH: props/col/false-value
ALIAS_EN: bool, type, columns, accept, true, false, values, default
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/false-value
---
# FalseValue ***(col)***

> `Bool type` columns can only accept `1(true)/0(false)` values by default.

> However, in case the values stored in the database are not `1(true)/0(false)` but separate values, this property is used to set the value corresponding to `0(false)`.

> The value set through this property is used when retrieving data ([doSearch](/docs/funcs/core/do-search), [loadSearchData](/docs/funcs/core/load-search-data), etc.) or saving ([doSave](/docs/funcs/core/do-save), [getSaveJson](/docs/funcs/core/get-save-json), etc.).

> This property value is only used when exchanging data with the server; when checking the cell value through the [getValue](/docs/funcs/core/get-value) function, it returns `1(true)/0(false)`.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Value corresponding to `0(false)` (unchecked) for a `Bool type` column|


### Example
```javascript
// Set the values exchanged with the server to Y/N for a Bool Type column
options.Cols = [
    ...
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
- [Set to "N" With Set to "Y" by TrueValue](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Col/TrueValue-FalseValue/)

### Read More
- [TrueValue col](./true-value)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
