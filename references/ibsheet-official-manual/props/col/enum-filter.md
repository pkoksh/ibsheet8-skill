---
KEY: enumFilter
KIND: column-property
PATH: props/col/enum-filter
ALIAS_EN: displays, input, field, filtering, dropdown, list, editing, enum
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/enum-filter
---
# EnumFilter ***(col)***
> Displays an input field for filtering the dropdown list when editing an [Enum](/docs/appx/type.md) type cell.

> Only [Enum](/enum.md) items containing the string entered in the field are displayed in the dropdown list.


> This feature is case-sensitive based on the [CaseSensitive](./case-sensitive) setting.

> Cannot be used together with the [EnumMenu](./enum-menu) property.

 

<!--[EnumFilter](/assets/imgs/EnumFilter.gif "EnumFilter")
-->

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`boolean`|Whether to display the filter field in the dropdown list|

### Example
```javascript
options.Cols = [
  {
    Type: "Enum",
    Name: "relation",
    Enum: "|Direct Ascendant|Direct Descendant|Spouse|Child",
    EnumKeys: "|A0|A1|B0|C0",
    EnumFilter: true
  },
];
```

### Read More
- [Enum col](./enum)
- [EnumKeys col](./enum-keys)
- [EnumMenu col](./enum-menu)
- [CaseSensitive col](./case-sensitive)
- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.48|Feature added|
