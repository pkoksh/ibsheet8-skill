---
KEY: getSaveJson
KIND: method
PATH: funcs/core/get-save-json
ALIAS: sheet.getSaveJson, getSaveJson()
ALIAS_EN: extracts, changed, content, within, sheet, added, deleted, moved
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-save-json
---
# getSaveJson ***(method)***
> Extracts the changed content within the sheet (`Added`, `Changed`, `Deleted`, `Moved`) as a JSON format object.

> After sending the extracted data to the server, the result must be reflected on the sheet using [acceptChangedData](/docs/funcs/core/accept-changed-data) or [applySaveResult](/docs/funcs/core/apply-save-result).

> For details related to the server response (JSON) structure, refer to [dataStructure](/docs/dataStructure/saving-structure).

### Syntax
```javascript
object getSaveJson( saveMode, col, validRequired, showAlert, saveAttr, useLevel, formData, saveExtraAttr, rows, validSize, validEditMask, validResultMask );
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
|validRequired|`boolean`|Optional|Whether to validate required data input fields ([Required col](/docs/props/col/required) setting applied columns).
`0(false)`:Do not validate required input fields
`1(true)`:Validate required input fields (`default`)|
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
|useLevel|`boolean`|Optional|When using the Tree feature, whether to include each row's Level (Depth) value in extracted data. (default: `1(true)`)

Calculated starting from 1 for the top-level node, and `"tLEVEL"` is added to the row data.
`"tLEVEL"` can be changed to a different name in each message file (ex: `ko.js`) via `"TreeLevelName"`.
When this property is set to `0(false)` and `saveMode:0` in a sheet using the Tree feature, the extracted data will have a hierarchical structure.
When extracting partial data (not all data) using `saveMode`, the data will not have a hierarchical structure and all `"tLEVEL"` values become 1.|
|formData|`boolean`|Optional|Whether to extract save data as Form Data. (default: `0(false)`)

***Used when saving File type data***|
|saveExtraAttr|`boolean`|Optional|When data not defined with (col)[Name](/docs/props/col/name) in the sheet is loaded through [doSearch](/docs/funcs/core/do-search) or [loadSearchData](/docs/funcs/core/load-search-data) function, whether to extract that data as well when this function is called.
Extracted based on the keyset of the first row of loaded data.
`0(false)`:Data not defined with (col)[Name](/docs/props/col/name) is not included when sending to server (`default`)
`1(true)`:Data not defined with (col)[Name](/docs/props/col/name) is included when sending to server|
|rows|`array[object]`|Optional| Extracts information for rows entered as [data row object](/web-service/manuals/ibsheet8/-/wikis/docs/appx/row-object) array. (default: `null`)|
|validSize|`boolean`|Optional|Whether to validate Size setting ([Size col](/docs/props/col/size)).
`0(false)`:Do not validate size (`default`)
`1(true)`:Validate size|
|validEditMask|`boolean`|Optional|Whether to validate EditMask setting ([EditMask col](/docs/props/col/edit-mask)).
`0(false)`:Do not validate EditMask (`default`)
`1(true)`:Validate EditMask|
|validResultMask|`boolean`|Optional|Whether to validate ResultMask setting ([ResultMask col](/docs/props/col/result-mask)).
`0(false)`:Do not validate ResultMask (`default`)
`1(true)`:Validate ResultMask|

When `validRequired`, `rows`, `validSize`, `validEditMask`, `validResultMask` properties are set when calling `getSaveJson`, validation is performed for these options, and the following `Code` and `Message` are returned according to the validation result.

| Code | Message         | Description |
|------| --------------- |-------------|
| `IBS000` |NoTargetRows | When there are no save target (`Added`, `Changed`, `Deleted`) rows |
| `IBS010` |RequiredError| Validation error for required input items when `validRequired` is set |
| `IBS020` |InvalidRows | When specified `rows` are not valid or there are no processing targets |
| `IBS040` |SizeError | Size validation error when `validSize` is set |
| `IBS050` |EditMaskError | EditMask validation error when `validEditMask` is set |
| `IBS060` |ResultMaskError| ResultMask validation error when `validResultMask` is set |

### Return Value
**JSON format object**
```json
// When processed properly
{
    "data":[
        {"id":"AR1","ColName1":"12345","ColName2":"ABCDE" ...},
        {"id":"AR4","ColName1":"76411","ColName2":"HIJKL" ...},
        ...
    ]
}

// When validRequired error occurs
{
    "Message":"RequiredError",
    "Code":"IB010",
  "row": error triggered row object,
  "col": error triggered column Name,
    "data":[]
}

// When entered row object in rows is not valid
{
    "Message":"InvalidRows",
    "Code":"IB020",
    "data":[]
}
```


### Example
```javascript
// Extract each column's modified data and the Color property value of the DESC column.
var saveJson = sheet.getSaveJson({saveMode:2, saveAttr:"DESCColor"});
$.ajax({
        type: 'post'
        ,async: true
        ,dataType: 'json'
        ,headers: {"X-Requested-With":"XMLHttpRequest"}
        ,contentType: "application/json; charset=utf-8"
        ,url: "/xgs/manage/sys/sawonTelSave.do"
        ,data: JSON.stringify(saveJson)
        , success: function(data) {
            // Reflect save result
            sheet.acceptChangedData();
        }
        , error: function(data, status, err) {
      alert('Communication with server failed.');
        }
});
```

### Read More

- [acceptChangedData method](./accept-changed-data)
- [applySaveResult method](./apply-save-result)
- [doSave method](./do-save)
- [getSaveString method](./get-save-string)
- [Required col](/docs/props/col/required)
- [ValidateMessage cfg](/docs/props/cfg/validate-message)
- [ValidCheck cfg](/docs/props/cfg/valid-check)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.4|`saveAttr`,`useLevel` Feature added|
|core|8.0.0.5|`formData` Feature added|
|core|8.1.0.32|`saveExtraAttr` Feature added|
|core|8.1.0.43|`rows` Feature added|
|core|8.3.0.24|`validSize`, `validEditMask`, `validResultMask` Feature added|
