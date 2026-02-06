---
KEY: enumDisabled
KIND: cell-property
PATH: props/cell/enum-disabled
ALIAS_EN: whether, items, configured, enum, property, selectable, enumdisabled, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/enum-disabled
---
# EnumDisabled ***(cell)***
> Sets whether items configured through the [Enum](./enum) property are selectable or not.

> The first character is set as the delimiter. 


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|A string with the first character as the delimiter (e.g., "#1#0")|

### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "EnumDisabled", "|1|0|0|0|0|1|0|1|1|0|0");


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSEnumDisabled"] = "|1|0|0|0";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {..., "CLSEnumDisabled":"|1|0", ...}
    ]
}
```

### Read More
- [Enum cell](./enum)
- [EnumKeys cell](./enum-keys)
- [EnumMenu cell](./enum-menu)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.16|Feature added|
