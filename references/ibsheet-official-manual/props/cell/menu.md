---
KEY: menu
KIND: cell-property
PATH: props/cell/menu
ALIAS_EN: context, menu, display, right, clicking, specific, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/menu
---
# Menu ***(cell)***
> Sets the context menu to display when right-clicking on a specific cell.

> Please refer to Chapter 7 [Menu appendix](/docs/appx/menu) for details.

### Type
`mixed`( `object` \| `string` )

### Options
|Value|Description|
|-----|-----|
|`string`|Specifies a context menu string using the first character as a delimiter (e.g.: @Save@Temp Save@Cancel or *Submit*Cancel)|
|`object`|[See Menu Object configuration link](/docs/appx/menu)

### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Menu", "|Proceed|Cancel");


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSMenu"] = "|Pending|Approve|Final Approve";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSMenu":"|Domestic|Overseas" , ...}
    ]
}
```

### Read More
- [Menu appendix](/docs/appx/menu)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
