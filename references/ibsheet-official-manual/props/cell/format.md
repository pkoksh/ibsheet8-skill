---
KEY: format
KIND: cell-property
PATH: props/cell/format
ALIAS_EN: defines, masked, data, original, format, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/format
---
# Format ***(cell)***
> Defines masked data for the original data.

> Displays data with a mask applied to the user regardless of the original data.

> [Format](/docs/appx/format) can be defined in various ways depending on the column Type. For more details, please refer to [Format](/docs/appx/format) in Chapter 7 appendix.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Various format setting strings based on the column Type|


### Example
```javascript
// Define date format
{
    data:[
        {... , "CLSFormat":"dd.MM.yyyy" , ...}
    ]
}
```

### Read More
- [Format appendix](/docs/appx/format)
- [EditFormat cell](./edit-format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
