---
KEY: savingStructure
KIND: data-structure
PATH: dataStructure/saving-structure
ALIAS_EN: saving, data, structure
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/dataStructure/saving-structure
---
# Saving Data Structure ***(saving structure)***
Defines the `response data format` that should be returned from the server after calling the server for save operations.


## Saving Data Structure
- The JSON structure sent from the server to the client (sheet) is as follows.
- The `Result` value is used as a criterion for determining save `success/failure`. Values `0` or greater indicate `normal` save, and `negative` values less than 0 are treated as `errors` during saving.
- The `Message` value is a description message for the `Result`, and this value is passed as `result` and `message` parameters to the [onAfterSave](/docs/events/on-after-save) event.
- When the save result is **normal** (`Result >= 0`), rows in `added/modified` status return to `loaded` status, and rows in `deleted` status are `removed` from the sheet. 

If a message display is needed upon successful save, it can be handled directly in the [onAfterSave](/docs/events/on-after-save) event.
- When the save result is **failure** (`Result < 0`), the `existing status is maintained` and the [doSave](/docs/funcs/core/do-save) function terminates.

```javascript
// Response structure to send from server to sheet
//Success
{
"IO": {
    "Result" : 0 ,
    "Message" : "Saved successfully."
 }
}

//Failure
{
"IO": {
    "Result" : -100,
    "Message" : "Error details..."
  }
}
```
- If the returned value does not have properties like `IO` or `Result`, it is processed according to the following criteria.


|Returned result|Server status|Processing type|
|-|-|-|
|`IO` does not contain `Result`|200|Treated as success. [onAfterSave](/docs/events/on-after-save) event returns result as 0|
|Result is completely empty|200|Treated as failure. [onAfterSave](/docs/events/on-after-save) event returns result as -5|
|Error occurred on server|400 or above|Treated as failure. [onAfterSave](/docs/events/on-after-save) event returns result as -3|

- If `IO.Result` is a **failure** code (`Result < 0`) and `Message` exists, the content is displayed as an error message.
- If `Message` is absent, it is displayed as `Unknown error`.

|Result|Description| Message(ko, en.js) |
|----------|----|---|
|0|Normal||
|-3|When the request URL is incorrect or results cannot be received due to network errors (404, 500 errors, etc.)|URL address cannot be found.
(ResultErrNotFound)|
|-5|When the response result is empty|No response from URL.
(ResultErrEmptyResponse)|
|-6|Connection timeout ((cfg)Timeout exceeded)|Connection timed out.
(ResultErrRequestTimeout)|
|-7|Invalid data format (data error)|Data format is incorrect.
ResultErrBadDataFormat)|
|Other|User-defined code
Content defined in `IO` can be checked in the `result` and `message` parameters of `onAfterSave`||

- The result returned from the server during save operations can be checked through the [onAfterSave](/docs/events/on-after-save) event.


### Read More
- [acceptChangedData method](/docs/funcs/core/accept-changed-data)
- [applySaveResult method](/docs/funcs/core/apply-save-result)
- [doSave method](/docs/funcs/core/do-save)
- [getSaveString method](/docs/funcs/core/get-save-string)
- [getSaveJson method](/docs/funcs/core/get-save-json)
- [onAfterSave event](/docs/events/on-after-save)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
