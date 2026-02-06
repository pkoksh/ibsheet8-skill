---
KEY: align
KIND: column-property
PATH: props/col/align
ALIAS_EN: horizontal, text, alignment, align, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/align
---
# Align ***(col)***

> Sets the horizontal text alignment.

> When used in a tree or group, `Align` does not apply to the data area of the column designated as the reference (**the column where the tree collapse/expand icon is displayed**). 

> For vertical alignment, refer to the [VAlign](./v-align) property.
### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Left`|Left-align text|
|`Center`|Center-align text|
|`Right`|Right-align text|


### Example
```javascript
// Set text alignment to center for specific columns
options.Cols = [
    {Type: "Int", Name: "Seq", Align: "Center", Width: 70, ...},
    {Type: "Date", Name: "enterDate", Align: "Center", Width: 120, ...},
    {Type: "Text", Name: "sa_Nm", Align: "Center", Width: 100, ...},
    ...
];
```

### Read More
- [VAlign col](./v-align)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
