---
KEY: getSaveString
KIND: method
PATH: funcs/core/get-save-string
ALIAS: sheet.getSaveString, getSaveString()
ALIAS_EN: extracts, changed, content, within, sheet, added, deleted, moved
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-save-string
---
# getSaveString ***(method)***
> Extracts the changed content within the sheet (`Added`, `Changed`, `Deleted`, `Moved`) as a querystring format string.

> After sending the extracted data to the server, the result must be reflected on the sheet using [acceptChangedData](/docs/funcs/core/accept-changed-data) or [applySaveResult](/docs/funcs/core/apply-save-result).

> For details related to the server response (JSON) structure, refer to [dataStructure](/docs/dataStructure/saving-structure).

### Syntax
```javascript
string getSaveString( saveMode, col, urlEncode, delim, queryMode, validRequired, prefix, showAlert, saveAttr, saveExtraAttr );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|saveMode|`number`|Optional|Data extraction by status 
`0`:All data
`1`:All data with `Deleted` excluded only
`2`:Modified data(`Added`,`Changed`,`Deleted`) (`default`)
`3`:Modified data(`Added`,`Changed`,`Deleted`)+Moved data(`Moved`)|
|col|`string`|Optional|Save reference column column name
When specifying a specific column, row status(`Added`,`Changed`,`Deleted`)the row status is ignored and saving is based on the presence of data in the specified column.|
|urlEncode|`boolean`|Optional|Whether to encode the composed string (encodes string with encodeURIComponent)
 **`default` varies depending on `queryMode`** 
`0(false)`:`queryMode:0 (default)`
`1(true)`:`queryMode:1/2 (default)`|
|delim|`string`|Optional|Specifies the delimiter between data when queryMode value is 2. (`default : "\|"`)|
|queryMode|`number`|Optional|Configure data structure sent to the server
**`0`:Sent in json structure**
ex)
Data={
"data":[
{"STATUS":"Added","ColName1":"John Doe","ColName2":25},
{"STATUS":"Changed","ColName1":"Jane Doe","ColName2":18}
]}
*However when **reqHeader** property {"Content-Type":"application/json"} is added, the front "Data=" is removed and only pure json format is sent to the server*
**`1`:QueryString structure sent** (`default`)
ex)
STATUS=Added&ColName1=John Doe&ColName2=25&STATUS=Changed&ColName1=Jane Doe&ColName2=18
**`2`:Based on column data QueryString structure sent**
ex)
STATUS=Added\|Changed&ColName1=John Doe\|Jane Doe&ColName2=25\|18|
|validRequired|`boolean`|Optional|Whether to validate required data input fields ([Required col](/docs/props/col/required) setting applied columns).
`0(false)`:Do not validate required input fields
`1(true)`:Validate required input fields (`default`)
**`Validation` failure result specification:** 
 1. When validation error occurs: 
 - Code: `IBS010`, Message: `RequiredError`|
|prefix|`string`|Optional|String to prepend before column names.
Can be used to send multiple sheets to one server in the format sheetid_colName.
ex) `sheet_saName=John Doe&sheet_saId=839212` format queryString is created
(`default : ""`)|
|showAlert|`boolean`|Optional|When `validRequired`, `validSize`, `validEditMask`, `validResultMask` is set,
whether to display a message when validation fails.
`0(false)`:Do not display message (`default`)
`1(true)`:Display message
![Table](/assets/imgs/doSaveRequired1.png "Table")
<!-- IMAGE: Sheet/Table View - Table -->
![Warning dialog](/assets/imgs/doSaveRequired2.png "Warning dialog")
<!-- IMAGE: Screenshot/Example Image - Warning dialog -->
The displayed message uses the content defined in the message file (e.g., `ko.js`, etc.).
(EditMaskError, SizeError, RequiredError, ResultMaskError)|
|saveAttr|`string`|Optional|When you want to extract cell attribute values together, configure in Name+propertyname format.
When extracting multiple attributes, use "," as delimiter.
ex) `"sNameColor,sNoCanEdit"`|
|saveExtraAttr|`boolean`|Optional|When data not defined with (col)[Name](/docs/props/col/name) in the sheet is loaded through [doSearch](/docs/funcs/core/do-search) or [loadSearchData](/docs/funcs/core/load-search-data) function, whether to extract that data as well when this function is called.
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

When `validRequired`, `validSize`, `validEditMask`, `validResultMask` properties are set when calling `getSaveString`, validation is performed for these options, and the following `Code` and `Message` are returned according to the validation result.

| Code | Message         | Description |
|------| --------------- |-------------|
| `IBS010` |RequiredError| Validation error for required input items when `validRequired` is set |
| `IBS040` |SizeError | Size validation error when `validSize` is set |
| `IBS050` |EditMaskError | EditMask validation error when `validEditMask` is set |
| `IBS060` |ResultMaskError| ResultMask validation error when `validResultMask` is set |

### Return Value
**String**
```json
// When processed properly (querystring form)
"sa_name=John Doe&sa_id=02712&sa_dept=031&..."

// When there are no save (Added, Changed, Deleted) targets
""

// When validation error occurs with validRequired set
"RequiredError|IBS010|error triggered row id|error triggered column Name"
```
<!--| result | Description |
|------|-------------|
|sa_name=John Doe&sa_id=02712&sa_dept=031&...| When processed properly (querystring form) |
|""| When there are no save (Added, Changed, Deleted) targets |
|RequiredError\|IBS010\|error triggered row id\|error triggered column Name| When validation error occurs with `validRequired` set |-->

### Example
```javascript
// Extract only data with column name CHK column checked.
// Also extract the Checked property of the AA column along with the data.
var saveStr = sheet.getSaveString({col:"CHK",saveAttr:"AAChecked"});
$.ajax({
    url:"sheetSaveWorx.do",
    data:saveStr,
    success:function(data){
    // Processing when save succeeds
        sheet.acceptChangedData();
    }
})
```

### Read More

- [getSaveJson method](./get-save-json)
- [acceptChangedData method](./accept-changed-data)
- [Required col](/docs/props/col/required)
- [ValidCheck cfg](/docs/props/cfg/valid-check)
- [ValidateMessage cfg](/docs/props/cfg/validate-message)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.4|`saveAttr` Feature added|
|core|8.1.0.32|`saveExtraAttr` Feature added|
|core|8.3.0.24|`validSize`, `validEditMask`, `validResultMask` Feature added|
