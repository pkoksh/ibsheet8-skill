---
KEY: getByDataFormat
KIND: config-property
PATH: props/cfg/get-by-data-format
ALIAS_EN: executing, getvalue, docs, funcs, core, value, method, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/get-by-data-format
---
# GetByDataFormat ***(cfg)***
> When executing the [getValue](/docs/funcs/core/get-value) method, if the cell type is `Date`, returns the value in the `DataFormat` format set on the cell.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Returns the cell value. (For `Date` type, in timestamp format)|
|`1(true)`|Returns the value in the `DataFormat` format. (`default`)|

### Example
```javascript
// Returns values matching DateFormat for all Date type columns when using getValue.
options.Cfg = {
    GetByDataFormat: true
};
```

### Read More
- [getValue method](/docs/funcs/core/get-value)
- [setValue method](/docs/funcs/core/set-value)
- [DataFormat col](/docs/props/col/data-format)
- [DataFormat cell](/docs/props/cell/data-format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.1|Feature added|
