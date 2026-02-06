---
KEY: enumDisabled
KIND: column-property
PATH: props/col/enum-disabled
ALIAS_EN: whether, items, configured, enum, property, non, selectable, enumdisabled
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/enum-disabled
---
# EnumDisabled ***(col)***
> Sets whether items configured through the [Enum](./enum) property are non-selectable.

> The first character is set as the delimiter. 


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|String with the first character as delimiter (ex:"#1#0")|

### Example
```javascript
// Set the non-selectable status of items in an Enum column
options.Cols = [
  {
    "Header": "Category",
    "Type": "Enum",
    "Name": "Category1",
    "Enum": "|Home/Living|Business/Management|Language/Dictionary|Comics/Light Novel|Fiction/Poetry/Drama|Children|History|Art|Humanities|Self-Help|Natural Science",
    "EnumKeys": "|A0|A1|A2|A3|A4|A5|A7|A8|A9|A10|A11",
    "EnumDisabled": "|1|0|0|0|0|1|0|1|1|0|0"
  }
];
```

### Read More
- [Enum col](./enum)
- [EnumKeys col](./enum-keys)
- [EnumMenu col](./enum-menu)


### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.16|Feature added|
