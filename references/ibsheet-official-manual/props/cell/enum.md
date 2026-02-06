---
KEY: enum
KIND: cell-property
PATH: props/cell/enum
ALIAS_EN: items, displayed, cell, type, docs, appx, enum, radio
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/enum
---
# Enum ***(cell)***
> Sets the items to be displayed when the cell [Type](/docs/appx/type) is `Enum` or `Radio`.

> The first character is set as the delimiter.

> You can set the actual values of `items` through the [EnumKeys](./enum-keys) property.

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
|`string`|A string with the first character as the delimiter (e.g., "#CEO#VP#Senior Director#Director#Manager#Dept Head#Deputy Manager#Section Chief#Assistant Manager#Senior Staff#Staff")|



### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Enum", "|CEO|Director|Deputy Manager|Section Chief|Assistant Manager|Staff");


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSEnum"] = "|Adult|Youth|Child|Infant";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {..., "CLSEnum":"|Male|Female", ...}
    ]
}
```

### Read More
- [EnumKeys cell](./enum-keys)
- [Related cell](./related)
- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
