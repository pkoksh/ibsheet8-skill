---
KEY: applySaveResult
KIND: method
PATH: funcs/core/apply-save-result
ALIAS: sheet.applySaveResult, applySaveResult()
ALIAS_EN: processes, sheet, modification, content, based, result, json, returned
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/apply-save-result
---
# applySaveResult ***(method)***

> Processes the sheet's modification content based on the result (JSON) returned after saving to the server.

> For **success** responses (`Result >= 0`), the state is reset via [acceptChangedData](./accept-changed-data).

> For **failure** responses (`Result < 0`), a warning message is displayed based on the value.

> Regardless of the `Result` value, the [onAfterSave](/docs/events/on-after-save) event is always triggered.


### Syntax
```javascript
boolean applySaveResult( result, message, response, files );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|result|`number`|Required|Server response result (Refer to the `result` parameter value of the [onAfterSave](/docs/events/on-after-save) event.)|
|message|`string`|Optional|Message string to pass to the [onAfterSave](/docs/events/on-after-save) event|
|response|`object`|Optional|Response object of ajax communication (passed to the [onAfterSave](/docs/events/on-after-save) event)|
|files|`array`|Optional|File data saved after ajax communication for `file` type saving (used with the `formData` argument of [getSaveJson](./get-save-json))|


### Return Value
***boolean*** : Whether the function operated normally. (Returns `false` if the argument values are invalid and could not be executed)

### Example
```javascript

$.ajax({
    url:"saveDO.do",
    data: param,
    dataType:"json",
    success:function(data){
        var result = data.IO.Result;
        var message  = data.IO.Message;
        // Apply the save result to the sheet.
        sheet.applySaveResult(result, message);
    }
})
```

### Read More
- [dataStructure](/docs/dataStructure/saving-structure)
- [appeptChangedData method](./accept-changed-data)
- [doSave method](./do-save)
- [getSaveJson method](./get-save-json)
- [getSaveString method](./get-save-string)
- [onAfterSave event](/docs/events/on-after-save)
- [Required col](/docs/props/col/required)
- [ValidateMessage cfg](/docs/props/cfg/validate-message)
- [ValidCheck cfg](/docs/props/cfg/valid-check)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.5|files feature added|
