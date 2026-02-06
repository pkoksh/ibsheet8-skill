---
KEY: uncheck
KIND: column-property
PATH: props/col/uncheck
ALIAS_EN: there, multiple, columns, type, docs, appx, bool, features
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/uncheck
---
# Uncheck ***(col)***
> When there are multiple columns with [Type](/docs/appx/type) `Bool`, there are features that allow only one cell to be checked within a row ([Radio property](./radio)) or only one cell to be checked within a column ([BoolGroup property](./bool-group)). When using such features, this sets whether to allow unchecking by clicking again on a checked state.


###
![Radio](/assets/imgs/radio.png "Only one can be selected in the same row")
<!-- IMAGE: Screenshot/Example Image - Radio -->

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Does not allow unchecking|
|`1(true)`|Allows unchecking (`default`)|




### Example
```javascript
// Set so that once checked, unchecking is not possible within the group
options.Cols = [
    ...
    {Type: "Bool", Name: "st1", Radio: 1, Uncheck: 0 ...},
    {Type: "Bool", Name: "st2", Radio: 1, Uncheck: 0 ...},
    {Type: "Bool", Name: "st3", Radio: 1, Uncheck: 0 ...},
    {Type: "Bool", Name: "st4", Radio: 1, Uncheck: 0 ...},
    {Type: "Bool", Name: "st5", Radio: 1, Uncheck: 0 ...},
    ...
];
```

### Read More
- [Radio col](./radio)
- [BoolGroup col](./bool-group)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
