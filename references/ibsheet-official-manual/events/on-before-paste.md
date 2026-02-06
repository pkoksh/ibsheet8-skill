---
KEY: onBeforePaste
KIND: event
PATH: events/on-before-paste
ALIAS_EN: fires, paste, operation, via, ctrl, performed, within, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-before-paste
---
# onBeforePaste ***(event)***
> Fires before a paste operation via `ctrl+v` is performed within the sheet.

> You can modify the content or position to be pasted by modifying the contents of `cols, pastedtext`.

> Returning `1(true)` in the event stops the paste operation.


### Syntax

```
    onBeforePaste : function(paramObject) {

    }
or
    sheet.bind("onBeforePaste" , function(paramObject) {});
```

### Parameters

| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|cols|`array[string]`|Array of `colName` where paste will be performed (modifiable)|
|pastedtext|`array[string]`|Content to be pasted into each row (modifiable)|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onBeforePaste:function(evtParam){
        //If the content to be pasted contains a resident registration number pattern [######-#######], replace the last 6 digits with '*'
        var pasteArr = evtParam.pastedtext;
        for(var i = 0; i < pasteArr.length; i++){
            pasteArr[i] = pasteArr[i].replace(/([0-9]{6}\-[0-9]{1})[0-9]{6}/g, "$1"+"******")
        }
    }
}
```

### Read More
- [PasteFocused cfg](/docs/props/cfg/paste-focused)
- [CanCopyPaste col](/docs/props/col/can-copy-paste)
- [onAfterPaste event](./on-after-paste)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
