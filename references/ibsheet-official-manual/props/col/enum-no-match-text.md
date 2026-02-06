---
KEY: enumNoMatchText
KIND: column-property
PATH: props/col/enum-no-match-text
ALIAS_EN: replacement, text, apply, cell, enumstrictmode, enumnomatchtext, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/enum-no-match-text
---
# EnumNoMatchText ***(col)***
> Sets the replacement text to apply to the cell when `EnumStrictMode` is set to 1.

> This option can only be used with `EnumStrictMode` : 1.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Sets the replacement text to display in the cell when using `EnumStrictMode`: 1|

### Example
```javascript
options.Cols = [
    // EnumStrictMode setting
    {
        "Header": "Enum1",
        "Type": "Enum",
        "MinWidth": 80,
        "Name": "sEnum",
        "ColMerge": 0,
        "Align": "Center",
        "Enum": "|Korea|China|Japan",
        "EnumKeys": "|KOR|CHA|JAP",
        "EnumStrictMode" : 1,
        "EnumNoMatchText" : "Replacement text",
        "RelWidth": 1
     }
];

var data = [
    // Since the data below does not exist in Enum or EnumKeys, "Replacement text" will be displayed in the cell.
    {sEnum: "USA"},
    ...
];
```

### Read More
- [EnumStrictMode](/docs/props/col/enum-strict-mode)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.26|Feature added|
