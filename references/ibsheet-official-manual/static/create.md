---
KEY: create
KIND: static-member
PATH: static/create
ALIAS_EN: creates, sheet, object, specified, location, create, static
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/static/create
---
# create ***(static)***

> Creates a sheet object at the specified location.

> When a sheet object is created, it is added (pushed) to the `IBSheet` object in array format.



- The sheet's width/height is determined by the <mark>size of the 'el' element</mark>.
- If the width/height of the 'el' element is not defined, the <mark>width is set to 100% and the height to 800px</mark>.
- When using the sync property set to 1, the sheet cannot be accessed in the format window[id] in the onRenderFirstFinish event. (Only accessible via evtParam.sheet)

### Syntax
```javascript
object IBSheet.create(id, el, options, data, sync);
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|id|`string`|Required|`id` of the sheet object (the `id` specified here is created as a `property` on the `window` object [global variable]|
|el|`string`|Required|`id` of the div element where the sheet object will be created (the sheet object is created inside this element)|
|[options](/docs/appx/init-structure)|`object`|Required|`json object` containing initialization information|
|data|`array[object]`|Optional|`Data array` to be loaded simultaneously with creation|
|sync|`boolean`|Optional|Creates the sheet synchronously
`0(false)`: Asynchronous mode (`default`)
`1(true)`: Synchronous mode|

### Return Value
***object***

### Example
```javascript
var opt = {
        // Definition for each column (set column name, Type, Format, etc.)
        Cols:[
            {Header: {Value: "Name"}, Name: "sa_nm", Type: "Text"},
            {Header: {Value: "Employee Number" }, Name: "sa_id", Type: "Text", Align: "center"},
            {Header: {Value: "Department"}, Name: "sa_dept", Type: "Enum",
                Enum: "|Management Support|General Affairs|HR|Design|Construction 1|Construction 2", EnumKeys: "|01|02|03|04|05|06"},
            {Header: {Value: "Position"}, Name: "sa_position", Type: "Enum",
                Enum: "|CEO|Senior Managing Director|Director|General Manager|Deputy General Manager|Manager|Assistant Manager|Staff", EnumKeys: "|A1|A2|A3|B0|B1|C4|C5|C6"},
            {Header: {Value: "Hire Date"}, Name: "sa_enterdate", Type: "Date",Width:100, Format: "yyyy/MM/dd"},
            {Header: {Value: "Remarks"}, Name: "sa_desc", Type: "Lines"}
        ]
    };
var dataArr = [
    {sa_nm: "Hong Gildong", sa_id: "9821450", sa_dept: "04", sa_position: "B0", sa_enterdate: "19980305", sa_desc: ""},
    {sa_nm: "Kim Hanguk", sa_id: "9510427", sa_dept: "01", sa_position: "A3", sa_enterdate: "19890317", sa_desc: ""}
];

// Create sheet object
IBSheet.create({
    id: "sheet", // ID of the sheet to create
    el: "sheetDiv", // DOM object or id where the sheet will be created
    options: opt, // Properties of the sheet to be created
    data: dataArr, // Static data for the sheet to be created
    sync: 1 // Create sheet synchronously (asynchronous sheet creation)
});

// Set html element for el
IBSheet.create({
    "id": "sheet", // Sheet object name (not used in SPA)
    "el": document.querySelector("div.part1 .gridarea"), // HTML element where the sheet will be created
    "options": opt, // Initialization options
    "data": dataArr// Initial data
});
```
### Read More
 - [IBSheet.CommonOptions static](./common-options)
 - [IBSheet.onBeforeCreate static](./on-before-create)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.1.0.45|sync feature added|
