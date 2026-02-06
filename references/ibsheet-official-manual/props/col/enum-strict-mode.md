---
KEY: enumStrictMode
KIND: column-property
PATH: props/col/enum-strict-mode
ALIAS_EN: values, enum, enumkeys, ignored, data, retrieval, setting, enumstrictmode
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/enum-strict-mode
---
# EnumStrictMode ***(col)***
> Values not set in `Enum, EnumKeys` are ignored during data retrieval, but setting `EnumStrictMode` to `1` 

> allows values not set in the configuration to be applied to cells.

###
![EnumStrictMode](/assets/imgs/EnumStrictModes.png "EnumStrictMode")
<!-- IMAGE: Screenshot/Example Image - EnumStrictMode -->

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Values not set in `Enum, EnumKeys` are not applied to cells. (`default`)|
|`1`|Values not set in `Enum, EnumKeys` are applied to cells.|
|`2`|Values not set in `Enum, EnumKeys` are applied to cells, and the value is added to the Enum list.|

### Example
```javascript
options.Cols = [
    ...
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
        "RelWidth": 1
     },
    // EnumStrictMode not set
     {
        "Header": "Enum2",
        "Type": "Enum",
        "MinWidth": 80,
        "Name": "aEnum",
        "ColMerge": 0,
        "Align": "Center",
        "Enum": "|Korea|China|Japan",
        "EnumKeys": "|KOR|CHA|JAP",
        "RelWidth": 1
      },
    ...
];

var data = [
    {sEnum: "USA", aEnum: "USA"},
    ...
];
```

### Read More
- [Enum col](/docs/props/col/enum)
- [EnumKeys col](/docs/props/col/enum-keys)
- [Menu appendix](/docs/appx/menu)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.3|Feature added|
|core|8.2.0.26|`EnumStrictMode : 2` added|
