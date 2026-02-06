---
KEY: 1dataStructure
KIND: data-structure
PATH: dataStructure/1data-structure
ALIAS_EN: data, structure
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/dataStructure/1data-structure
---
# Data Structure ***(data structure)***
Defines the format of the `search response structure` returned from the server during search operations.


## Data format when creating a sheet
```javascript
//Data structure when creating through the data property in IBSheet.create()
IBSheet.create({
    id:"sheet", // id of the sheet to create
    el:"sheetDiv", // Dom object or id where the sheet will be created
    options: options, // Properties of the sheet to be created
    // Data for the sheet to be created
    data: [
            {"sa_name":"John","sa_no":"940154","sa_dept":"A021"},
            {"sa_name":"Jane","sa_no":"950757","sa_dept":"B022"}
        ]
});
```
<!--## doSearch or loadSearchData Method data structure-->
## Basic data structure
- This is the data structure used when binding data with the `doSearch` function or `loadSearchData` function.
- The server response data has the `Data` property at the top level, and the `Data` property contains an array of objects, each representing an item.
```js
// Data structured as an array inside the Data property
{"Data":
    [
        {"sa_name":"John","sa_no":"940154","sa_dept":"A021"},
        {"sa_name":"Jane","sa_no":"950757","sa_dept":"B022"}
    ]
}
```

## Applying Row property and Cell property within search data (Important)
- You can specify properties such as editability, color, etc. for each `data row (Row)`, and search for desired data based on these properties.
- Property values that can be applied to `data rows (Row)` can be found in Properties >> Row in the documentation.
```js
// Apply Row property content along with data inside the search data
{"Data":
    [
        //Display row 1 color in red
        {"sa_name":"John","sa_no":"940154",...      , Color:"#FF8888"},
        //Set row 2 to non-editable
        {"sa_name":"Jane","sa_no":"950757",...      , CanEdit:0}
    ]
}
```
- You can specify properties such as editability, color, etc. for each `data cell (Cell)`, and search for desired data based on these properties.
- Property values that can be applied to `cells (Cell)` can be found in Properties >> Cell in the documentation.
```js
// Apply Cell features by setting in "columnName+Cell Property" format inside the search data
{"Data":
    [
        //Set text color for the sn_id cell in row 1
        {"sn_id":"209321","lot":"k0923123",  sn_idTextColor:"#FF0000"},
        //Set the lot cell in row 2 to non-editable
        {"sn_id":"209327","lot":"r2019283",   lotCanEdit:0},
        //Set different items for the pos column (Enum type) for this cell only in row 3
        {"pos":"A02", posEnum: "|Seongnam|Bucheon|Gwangmyeong|Hwaseong", posEnumKeys: "|A00|A01|A02|A03"}
    ]
}
```
## Applying JSON Events within search data
- You can set events on each `data cell (Cell)`, and search for desired data based on these properties.
- Events that can be applied to `cells (Cell)` can be found in Properties >> Event in the documentation.
```js
// JSON events can be included in search data.
{"Data":
    [
        //Call sawonPop() function when the sa_name column value in row 1 is modified
        {"sa_name":"John",sa_nameOnChange:"sawonPop"},
        //Row 2 has no event
        {"sa_name":"Jane"}
    ],
}
```
Search data returned from the server can be checked through the [onReceiveData](/docs/events/on-receive-data), [onBeforeDataLoad](/docs/events/on-before-data-load), and [onDataLoad](/docs/events/on-data-load) events.


## Data and result structure
- When the server response includes the `IO` property, `result` and `message` are passed as parameters to the `onBeforeDataLoad` and `onDataLoad` events during the search process.
- The `Result` value is used as a criterion for determining search `success/failure`. Values `0` or greater indicate `normal` search, and `negative` values less than 0 are treated as `errors` during search.
- The `Message` value is a description message for the `Result`.
- When the search result is **normal** (`Result >= 0`), it is not displayed on the screen by default.

  If you want to display a message upon successful search, you can handle it directly in the `onDataLoad` event.
- When the search result is an **error** (`Result < 0`), IBSheet automatically displays an error message.
```js
// Data structured as an array inside the Data property
{"Data":
    [
        {"sa_name":"John","sa_no":"940154","sa_dept":"A021"},
        {"sa_name":"Jane","sa_no":"950757","sa_dept":"B022"}
    ],
  "IO": {"Result": 0, "Message": "Search successful"}
}
```
| Result | Description| Message(ko, en.js)|
| --   | -- |-- |
|  0   |  Search successful  ||
|  -1  | When an empty URL is called (e.g., sheet.doSearch(""))  |URL value is empty.
(ResultErrEmptyURL)|
|  -3  | When the request URL is incorrect or results cannot be received due to network errors (404, 500 errors, etc.)  |URL value is incorrect.
(ResultErrBadURL)|
|  -5  | When the response result is empty  |No response from URL.
(ResultErrEmptyResponse)|
|  -6  | Connection timeout ((cfg)Timeout exceeded) |Connection timed out.
(ResultErrRequestTimeout)|
|  -7  | Invalid data format (data error) |Data format is incorrect.
(ResultErrBadDataFormat)|
|  Other | User-defined code
Content defined in `IO` can be checked in the `result` and `message` parameters of `onBeforeDataLoad` and `onDataLoad` ||

### Read More
- [doSearch method](/docs/funcs/core/do-search)
- [loadSearchData method](/docs/funcs/core/load-search-data)
- [getChangedData method](/docs/funcs/core/get-changed-data)
- [onReceiveData](/docs/events/on-receive-data)
- [onBeforeDataLoad](/docs/events/on-before-data-load)
- [onDataLoad](/docs/events/on-data-load)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
