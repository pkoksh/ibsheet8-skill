---
KEY: onSave
KIND: event
PATH: events/on-save
ALIAS_EN: event, fires, dosave, function, called, onsave
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-save
---
# onSave ***(event)***
> Event that fires when the doSave() function is called.

> Fires before the data collection process for saving begins.

> Returning `1(true)` stops the save process without executing the next event ([onBeforeSave](./on-before-save)).

### Syntax

```
    onSave : function(paramObject) {

    }
or
    sheet.bind("onSave" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object that will send the changed content to the server|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onSave:function(evtParam){
        var changes = evtParam.sheet.getChangedData();
        if (changes.indexOf("forbidden word") > -1) {
            alert("Invalid string is included. Save is cancelled.");
            return true;
        }
    }
}
```

### Read More

- [doSave method](/docs/funcs/core/do-save)
- [onBeforeSave event](./on-before-save)
- [onAfterSave event](./on-after-save)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
