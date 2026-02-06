---
KEY: sizeIgnoreDecimalSep
KIND: column-property
PATH: props/col/size-ignore-decimal-sep
ALIAS_EN: entered, string, numeric, excludes, digit, group, separator, decimal
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/size-ignore-decimal-sep
---
# SizeIgnoreDecimalSep ***(col)***
> When the entered string is numeric, excludes the digit group separator and decimal separator characters from the maximum character count set for the column.

> In the locale message files (ko.js, en.js, etc.), the digit group separator is set as `Format.GroupSeparator` and the decimal separator is set as `Format.DecimalSeparator`.

> **<mark>Note</mark> : The `Size` property must be set on the Col or Cell for this feature to work.**



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`boolean`|Determines if the entered data is numeric using the digit group separator and decimal separator, and if the data is numeric, whether to exclude separator characters from the maximum character count
(`Int`, `Float` type: `default:1(true)`, other types: `default:0(false)`)
Digit group separator (`Format.GroupSeparator`) characters used worldwide: `,`, `.`, ` `, `'`
Decimal separator (`Format.DecimalSeparator`) characters used worldwide: `,`, `.`|


### Example
```javascript
// Allow up to 10 characters in the FloatData column, exclude separators from character limit when data is numeric
options.Cols = [
    ...
    {Type: "Text", Size: 10, SizeIgnoreDecimalSep: true, Name: "FloatData", Width: 120 ...},
    ...
];
```


### Read More
- [Size col](/docs/props/col/size)
- [UnicodeByteMode cfg](/docs/props/cfg/unicode-byte-mode)


### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.15|Feature added|
