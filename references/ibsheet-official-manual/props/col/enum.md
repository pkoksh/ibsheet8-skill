---
KEY: enum
KIND: column-property
PATH: props/col/enum
ALIAS_EN: items, display, type, docs, appx, enum, radio, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/enum
---
# Enum ***(col)***
> Sets the items to display when [Type](/docs/appx/type) is `Enum` or `Radio`.

> The first character is set as the delimiter.

> The actual values of items can be set through the [EnumKeys](./enum-keys) property.

###
![Enum type](/assets/imgs/enum1.png "Enum")
<!-- IMAGE: Screenshot/Example Image - Enum type -->
[Figure 1]

![Radio type](/assets/imgs/radioEnum.png "Radio")
<!-- IMAGE: Screenshot/Example Image - Radio type -->
[Figure 2]



### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|String with the first character as delimiter (ex:"#President#Vice President#Executive Director#Director#Board Member#Department Head#Deputy Head#Manager#Assistant Manager#Senior Staff#Staff")|



### Example
```javascript
// Set items for an Enum column
options.Cols = [
    ...
    {Type: "Enum", Name: "relation", Enum: "|Direct Ascendant|Direct Descendant|Spouse|Child" ...},
    or
    {Type: "Enum", Name: "relation", Enum: "#Direct Ascendant#Direct Descendant#Spouse#Child" ...},
    ...
];
```

### Read More
- [EnumFilter col](./enum-filter)
- [EnumKeys col](./enum-keys)
- [IconAlign col](./icon-align)
- [MenuHSeparator cfg](/docs/props/cfg/menu-h-separator)
- [Range col](./range)
- [Related col](./related)
- [ShowImage cfg](/docs/props/cfg/showImage)
- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
