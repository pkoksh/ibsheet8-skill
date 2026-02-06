---
KEY: getUserData
KIND: method
PATH: funcs/core/get-user-data
ALIAS: sheet.getUserData, getUserData()
ALIAS_EN: returns, data, ibsheet, create, function, called, getuserdata, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-user-data
---
# getUserData ***(method)***

> Returns the data set when the IBSheet.create function was called.

> If there is no data value, the searched data is returned.

> Modified data is not reflected in the extraction.


### Syntax
```javascript
object getUserData();
```

### Return Value
***array*** : The data array initialized when creating the sheet

### Example
```javascript
IBSheet.create({
  id: 'sheet', // ID of the sheet to create
  el: 'sheetDiv', // DOM object ID where the sheet will be created
  options: options, // Properties of the sheet to create
    data: [{
        "ItemNo": 59993940,
    "Title": "Study Skills Reading Method",
        "Price": 14850,
    "Author": "Seungpil Choi",
    "Publisher": "BookGuru",
        "Category1": "A0",
        "Category2": "AA1",
        "Category3": "AAB0"
        }
   ] // Initial data for the sheet to create
});

//Retrieve the data set during sheet initialization.
var data = sheet.getUserData();
//Returned data
[{
    "ItemNo": 59993940,
  "Title": "Study Skills Reading Method",
    "Price": 14850,
  "Author": "Seungpil Choi",
  "Publisher": "BookGuru",
    "Category1": "A0",
    "Category2": "AA1",
    "Category3": "AAB0"
]
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
