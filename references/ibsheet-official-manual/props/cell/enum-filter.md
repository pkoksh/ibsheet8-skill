---
KEY: enumFilter
KIND: cell-property
PATH: props/cell/enum-filter
ALIAS_EN: editing, enum, docs, appx, type, cell, displays, input
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/enum-filter
---
# EnumFilter ***(cell)***
> When editing an [Enum](/docs/appx/type.md) type cell, displays an input field that allows filtering of the dropdown list.

> Only [Enum](/enum.md) items containing the entered string are displayed in the dropdown list.


> This feature distinguishes between uppercase and lowercase based on the [CaseSensitive](./case-sensitive) setting.

> Cannot be used together with the [EnumMenu](./enum-menu) property.

 

![EnumFilter](/assets/imgs/EnumFilter.gif "EnumFilter")
<!-- IMAGE: Screenshot/Example Image - EnumFilter -->


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`boolean`| Whether to display the filter field in the dropdown list |

### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "EnumFilter", true);

//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSEnumFilter"] = true;

//3. Apply property within loaded data (column name: CLS)
{
  data: [
    {
      "CLS": "A0"
      "CLSEnumFilter": true
    }
  ]
}
```

### Read More
- [Enum cell](./enum)
- [EnumKeys cell](./enum-keys)
- [EnumMenu cell](./enum-menu)
- [CaseSensitive cell](./case-sensitive)
- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.48|Feature added|
