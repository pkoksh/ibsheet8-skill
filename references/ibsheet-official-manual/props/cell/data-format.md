---
KEY: dataFormat
KIND: cell-property
PATH: props/cell/data-format
ALIAS_EN: formatting, data, loaded, cells, type, docs, appx, date
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/data-format
---
# DataFormat ***(cell)***

> Sets the formatting of data to be loaded for cells with [Type](/docs/appx/type) `Date`.

> In other words, it sets the format of data fetched from or sent to the server.

> For example, if the date in the loaded data is "25012017", then `DataFormat` should be set to "ddMMyyyy", and if the data is "20171225", it should be set to "yyyyMMdd".

> When modified content from the sheet is sent to the server, the string is transmitted in the format changed through this property.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Predefined strings such as yyyyMMdd|

### Example
```javascript
//1. Change the DataFormat of a specific cell via method
sheet.setAttribute(sheet.getRowById("AR99"), "EDate", "DataFormat", "yyyyMMdd");
// Verify changes (data extracted in the modified format)
var json = sheet.getSaveJson();

//2. Change DataFormat by directly accessing the object (change CLS column DataFormat to "yyyyMMddHHmm")
var ROW = sheet.getRowById("AR10");
ROW["CLSDataFormat"] = "yyyyMMddHHmm";
// Verify changes (data extracted in the modified format)
var json = sheet.getSaveJson();


//3. Change DataFormat within loaded data
{
    data:[
        {... ,"CLS":"12312018" "CLSFormat":"MMddyyyy" , ...}
    ]
}
```

### Read More
- [Format cell](./format)
- [EditFormat cell](./edit-format)
- [Format appendix](/docs/appx/format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
