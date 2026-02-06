---
KEY: doSave
KIND: method
PATH: funcs/core/do-save
ALIAS: sheet.doSave, doSave()
ALIAS_EN: extracts, changed, contents, sheet, sends, server, reflects, response
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/do-save
---
# doSave ***(method)***

> Extracts the changed contents in the sheet and sends them to the server, then reflects the server's response JSON content in the sheet.

> Before sending to the server, [onBeforeSave](/docs/events/on-before-save) event triggers, and when the server response arrives, [onAfterSave](/docs/events/on-after-save) event is triggered.

> For details related to the server response (JSON) structure, refer to [dataStructure](/docs/dataStructure/saving-structure).

### Syntax
```javascript
void doSave( url , param , saveMode , col , urlEncode , delim ,  queryMode , reqHeader , request , sync, validRequired, saveAttr, useLevel ,questCallback, timeout, traditional, saveExtraAttr );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|---|
|url|`string`|Required|URL to call in ajax|
|param|`string` \| `object`|Optional|Parameters to send to the server|
|saveMode|`number`|Optional|Data extraction by status 
`0`:All data
`1`:All data excluding `Deleted` only
`2`:Modified data(`Added,Changed,Deleted`) (`default`)
`3`:Modified data(`Added,Changed,Deleted`)+Moved data(`Moved`)|
|col|`string`|Optional|Save reference column name
When specifying a specific column, the row status(`Added,Changed,Deleted`) is ignored and saving is based on the presence of data in the specified column.|
|urlEncode|`boolean`|Optional|Whether to encode the sheet data 
 **`default` varies by `queryMode`** 
`0(false)`:`queryMode:0 (default)`
`1(true)`:`queryMode:1/2 (default)`
|
|delim|`string`|Optional|Specifies the delimiter between data when queryMode value is 2 (`default: "\|"`)|
|queryMode|`number`|Optional|Configure data structure sent to the server
**`0`:Sent in json structure**
ex)
Data={
"data":[
{"STATUS":"Added","ColName1":"John Doe","ColName2":25},
{"STATUS":"Changed","ColName1":"Jane Doe","ColName2":18}
]}
*However, when the **reqHeader** property {"Content-Type":"application/json"} is added, the preceding "Data=" is removed and only pure json format is sent to the server*
**`1`:Sent in QueryString structure** (`default`)
ex)
STATUS=Added&ColName1=John Doe&ColName2=25&STATUS=Changed&ColName1=Jane Doe&ColName2=18
**`2`:Sent in column-based data QueryString structure**
ex)
STATUS=Added\|Changed&ColName1=John Doe\|Jane Doe&ColName2=25\|18|
|reqHeader|`object`|Optional|Content to add to the request header when sending (ex) {key1:value1, key2:value2})
When a [Type](/docs/props/col/type) file cell's value has been modified, even if reqHeader is set to Content-Type:application/json, it is sent as form data.|
|quest|`boolean`|Optional|Whether to use confirm message when saving
`0(false)`:Do not use confirm message (`default`)
`1(true)`:Use confirm message
![Warning dialog](/assets/imgs/quest.png "Warning dialog")
<!-- IMAGE: Screenshot/Example Image - Warning dialog -->|
|sync|`boolean`|Optional|Whether to save synchronously
`0(false)`:Asynchronous mode (`default`)
`1(true)`:Synchronous mode|
|validRequired|`boolean`|Optional|Validates required data input fields (columns configured with Required). When validation fails, a message is displayed and edit mode is activated.
`0(false)`:Do not validate required input fields
`1(true)`:Validate required input fields (`default`)
![Table](/assets/imgs/doSaveRequired1.png "Table")
<!-- IMAGE: Sheet/Table View - Table -->
![Warning dialog](/assets/imgs/doSaveRequired2.png "Warning dialog")
<!-- IMAGE: Screenshot/Example Image - Warning dialog -->|
|saveAttr|`string`|Optional|When you want to extract cell attribute values together, configure in Name+propertyname format
When extracting multiple attributes, use "," as delimiter
ex) "sNameColor,sNoCanEdit"|
|useLevel|`boolean`|Optional|When using the Tree feature, whether to include each row's Level(Depth) value in extracted data
`0(false)`:Level value not included in data
`1(true)`:Level value included in data (`default`)
Calculated starting from the top-level node at 1, and "tLEVEL" is added to the row data.
"tLEVEL" can be changed in each message file (ex: ko.js) under "TreeLevelName".
In a sheet using the Tree feature, if this property is `0(false)` with `saveMode:0, queryMode:0`, the extracted data will have a hierarchical structure.
When using `saveMode` to extract partial data instead of all data, the data will not have a hierarchical structure and all `"tLEVEL"` values become 1.|
|questCallback|`function`|Optional|Callback function for Ok and Cancel when using confirm message (`quest:true`)
 Ok(OK) : `{result:1}` 
 Cancel(Cancel) : `{result:2}` |
|timeout|`number`|Optional|Maximum wait time for server communication (unit: seconds, `default: 60`)|
|traditional|`boolean`|Optional|Configure param structure sent to the server
`param: {"data": [1, 2]}` Set when sending array structure params
**`0(false)`:Send including []** (`default`)
ex) `data[]=1&data[]=2`
**`1(true)`:Send without []**
ex) `data=1&data=2`
|
|saveExtraAttr|`boolean`|Optional|When data not defined with (col)[Name](/docs/props/col/name) in the sheet is loaded through [doSearch](/docs/funcs/core/do-search) or [loadSearchData](/docs/funcs/core/load-search-data) function, whether to send that data to the server when saving.
Extracted based on the keyset of the first row of loaded data.
`0(false)`:Data not defined with (col)[Name](/docs/props/col/name) is not included when sending to server (`default`)
`1(true)`:Data not defined with (col)[Name](/docs/props/col/name) is included when sending to server|
|validSize|`boolean`|Optional|Whether to validate Size setting ([Size col](/docs/props/col/size)).
`0(false)`:Do not validate size (`default`)
`1(true)`:Validate size|
|validEditMask|`boolean`|Optional|Whether to validate EditMask setting ([EditMask col](/docs/props/col/edit-mask)).
`0(false)`:Do not validate EditMask (`default`)
`1(true)`:Validate EditMask|
|validResultMask|`boolean`|Optional|Whether to validate ResultMask setting ([ResultMask col](/docs/props/col/result-mask)).
`0(false)`:Do not validate ResultMask (`default`)
`1(true)`:Validate ResultMask|

### Return Value
***none***

### Example
```javascript
// Since there are many arguments, it is recommended to use json format
sheet.doSave({
  url:"./insaAppMain.do",
  param:"dept_cd=031&position_cd=A0",
  request:1,
  quest:1,
  questCallback:function (evt) {
    if (evt.result == 2) {
      alert("has been cancelled.");
    }
  }
});
```

### Read More
- [Required col](/docs/props/col/required)
- [dataStructure appendix](/docs/appx/data-structure)
- [onBeforeSave event](/docs/events/on-before-save)
- [onAfterSave event](/docs/events/on-after-save)
- [getSaveJson method](./get-save-json)
- [getSaveString method](./get-save-string)
- [Timeout cfg](/docs/props/cfg/timeout)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.4|`saveAttr`, `useLevel` Feature added|
|core|8.0.0.5|`timeout` Feature added
`reqHeader` description added(`file` type related)|
|core|8.0.0.7|`traditional` Feature added|
|core|8.1.0.32|`saveExtraAttr` Feature added|
|core|8.3.0.24|`validSize`, `validEditMask`, `validResultMask` Feature added|
