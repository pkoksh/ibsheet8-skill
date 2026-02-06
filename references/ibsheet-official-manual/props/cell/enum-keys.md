---
KEY: enumKeys
KIND: cell-property
PATH: props/cell/enum-keys
ALIAS_EN: values, items, configured, enum, property, enumkeys, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/enum-keys
---
# EnumKeys ***(cell)***
> Sets the values for items configured through the [Enum](./enum) property.

> The first character is set as the delimiter.

> When this property is set, the values set in `EnumKey` are transmitted to the server during actual loading and saving.


> **<mark>Note</mark> : EnumKeys must have a unique key per [Enum](./enum); duplicate values must not be used.** 

> **<mark>Note</mark> : In columns with [Type](/docs/appx/type) `Radio`, the lengths of [Enum](./enum) and `EnumKeys` must be the same for check behavior to work correctly.** 



### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|A string with the first character as the delimiter (e.g., "#01#02#03#04")|

### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute( sheet.getRowById("AR99") , "CLS" , "EnumKeys" ,"|01|02|03|04");


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSEnumKeys"] = "@A1@B0@B1@C1";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSEnumKeys":"#AA#ED#K9" , ...}
    ]
}
```

### Read More
- [Enum cell](./enum)
- [Related cell](./related)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
