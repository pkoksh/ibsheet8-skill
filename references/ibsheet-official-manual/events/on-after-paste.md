---
KEY: onAfterPaste
KIND: event
PATH: events/on-after-paste
ALIAS_EN: fires, paste, operation, via, ctrl, performed, within, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-after-paste
---
# onAfterPaste ***(event)***
> Fires after a paste operation via `ctrl+v` has been performed within the sheet.


### Syntax

```
    onAfterPaste : function(paramObject) {

    }
or
    sheet.bind("onAfterPaste" , function(paramObject) {});
```

### Parameters

| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|pasteError|`array`|Information about cells where paste failed|

### Return
***none***

### Example
```javascript
options.Events = {
    onAfterPaste:function(evtParam){
        //Fires after the paste operation has been performed
    }
}
```

### Read More
- [PasteFocused cfg](/docs/props/cfg/paste-focused)
- [CanCopyPaste col](/docs/props/col/can-copy-paste)
- [onBeforePaste event](./on-before-paste)


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.73|Feature added|
|core|8.2.0.12|`pasteError` parameter added|
