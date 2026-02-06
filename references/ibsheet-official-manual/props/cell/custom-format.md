---
KEY: customFormat
KIND: cell-property
PATH: props/cell/custom-format
ALIAS_EN: defines, masking, original, data, customformat, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/custom-format
---
# CustomFormat ***(cell)***
> Defines masking for the original data.

> A user-defined format available <mark>when [Type](/docs/appx/type) is `Text` or `Lines`</mark>, and user-declared custom format functions can also be specified.

> The reserved words available in `CustomFormat` are as follows:
> |Value|Description|
> |-----|-----|
> |`#`|Character(number) displayed as-is|
> |`*`| Character(number) replaced with *(asterisk)|
> |`PostNo` | Postal code |
> |`IdNo` | National ID number (last 6 digits replaced with *(asterisk)) |
> |`IdNoMask` | National ID number (full text) |
> |`SaupNo` | Business registration number |
> |`CardNo` | Card number |
> |`PhoneNo` | Phone number |

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Various format setting strings based on the column Type|


### Example
```javascript
// Define national ID number format
{
    data:[
        {... , "CLSCustomFormat":"IdNoMask" , ...}
    ]
}

// Apply business number and national ID number masking
{
    data:[
        {... , "CLSCustomFormat":"SaupNo|IdNo" , ...}
    ]
}
```

### Read More
- [Format appendix](/docs/appx/format)
- [Format cell](./format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
