---
KEY: enumKeys
KIND: column-property
PATH: props/col/enum-keys
ALIAS_EN: values, items, configured, enum, property, enumkeys, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/enum-keys
---
# EnumKeys ***(col)***
> Sets the values for items configured through the [Enum](./enum) property.

> The first character is set as the delimiter.

> When this property is set, the value set in `EnumKeys` is transmitted to the server during data retrieval or saving.


> **<mark>Caution</mark> : EnumKeys must be a unique key per [Enum](./enum); duplicate values should not be used.** 

> **<mark>Caution</mark> : For columns with [Type](/docs/appx/type) `Radio`, [Enum](./enum) and `EnumKeys` must have the same length for the check behavior to work correctly.** 


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|String with the first character as delimiter (ex:"#01#02#03#04")|

### Example
```javascript
// Set items for an Enum column
options.Cols = [
    ...
    {Type: "Enum", Name: "relation", Enum: "|Direct Ascendant|Direct Descendant|Spouse|Child",EnumKeys: "|A0|A1|B0|C0" ...},
    ...
];
```

### Read More
- [Enum col](./enum)
- [EnumFilter col](./enum-filter)
- [MenuHSeparator cfg](/docs/props/cfg/menu-h-separator)
- [Related col](./related)
- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
