---
KEY: onAfterSave
KIND: event
PATH: events/on-after-save
ALIAS_EN: event, fires, server, responds, sending, changed, content, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-after-save
---
# onAfterSave ***(event)***
> Event that fires when the server responds after sending changed content from the sheet to the server.

> Returning `1(true)` in this event can suppress the error message displayed in the sheet when save fails (due to server code 404 or 500 errors). 


### Syntax
```
    onAfterSave : function(paramObject) {

    }
or
    sheet.bind("onAfterSave" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object that sent the changed content to the server|
|result |`number`|**Server response message**
`0`:Success
`-3`:When the request URL is wrong or the result was not received due to network errors
`-5`:When the response result is empty
`-6`:Connection timeout ((cfg)Timeout exceeded)
`-7`:Invalid data format (mostly data issues)
`Other`:User-defined code|
|message|`string`|Message received from the server|
|response|`object`|Server response object (XMLHttpRequest object)|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onAfterSave: function(evtParam) {
        // When the server response is 'success'
        if (evtParam.result == 0) {
            evtParam.sheet.showMessageTime({message: "Successfully saved.", time: 1000});
        }
    }
}
```

### Read More

- [doSave method](/docs/funcs/core/do-save)
- [onSave event](./on-save)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.17|`return` behavior added|
