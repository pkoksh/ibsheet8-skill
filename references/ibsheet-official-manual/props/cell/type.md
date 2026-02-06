---
KEY: type
KIND: cell-property
PATH: props/cell/type
ALIAS_EN: refers, data, type, cell, holds
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/type
---
# Type ***(cell)***

> Refers to the data type that the cell holds.

> Types such as general text, numbers (integer, float), checkbox, and dropdown list exist.

> For details, please refer to the [Type appendix](/docs/appx/type).

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Predefined strings such as `Text,Int,Float,Date,Bool,Enum`, etc.|


### Example
```javascript
//1. Change the type of a specific cell via method
sheet.setAttribute(sheet.getRowById("AR99"), "AMT", "Type", "Float");


//2. Change type by directly accessing the object (change type of CLS column to "Date")
var ROW = sheet.getRowById("AR10");
ROW["CLSType"] = "Date";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Change type within loaded data
{
    data:[
        {... "CLS":"20171225", "CLSType": "Date", ...}
    ]
}
```

### Read More
- [Type appendix](/docs/appx/type)
- [Type col](/docs/props/col/type)
- [getType method](/docs/funcs/core/get-type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
