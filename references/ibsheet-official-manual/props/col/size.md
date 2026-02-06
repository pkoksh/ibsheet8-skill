---
KEY: size
KIND: column-property
PATH: props/col/size
ALIAS_EN: maximum, number, characters, entered, column, size, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/size
---
# Size ***(col)***
> Sets the maximum number of characters that can be entered in a column. 

> When [cfg.UnicodeByteMode](/docs/props/cfg/unicode-byte-mode) is set, input is restricted by calculating the byte count of Korean characters.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Maximum number of characters that can be entered|


### Example
```javascript
// Allow up to 10 characters in the CarName column
options.Cols = [
    ...
    {Type: "Text", Size: 10, Name: "CarName", Width: 120 ...},
    ...
];
```


### Read More
- [Size cell](/docs/props/cell/size)
- [SizeIgnoreDecimalSep col](/docs/props/col/size-ignore-decimal-sep)
- [UnicodeByteMode cfg](/docs/props/cfg/unicode-byte-mode)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
