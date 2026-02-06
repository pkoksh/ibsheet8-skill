---
KEY: onBeforeSave
KIND: event
PATH: events/on-before-save
ALIAS_EN: event, fires, collecting, data, send, server, save, dosave
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-before-save
---
# onBeforeSave ***(event)***
> Event that fires after collecting data to send when the server data save [doSave](/docs/funcs/core/do-save) method is called.

> Called after the [onSave](./on-save) event fires.

> Returning `1(true)` in this event stops the save operation.

### Syntax
```javascript
    onBeforeSave : function(paramObject) {

    }
or
    sheet.bind("onBeforeSave" , function(paramObject) {});
```

### Parameters

| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object containing the changed data|
|source|`object`|Object containing the properties set on the sheet|
|source.params|`string`|Data changes to be sent to the server (available when using [doSave](/docs/funcs/core/do-save) with `queryMode: 1, 2`)|
|source.data|`string`|Data changes to be sent to the server (available when using [doSave](/docs/funcs/core/do-save) with `queryMode: 0`)|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onBeforeSave:function(evtParam){
        // If the data to be sent to the server contains forbidden word 1 or forbidden word 2, do not execute Ajax communication.
        if (source.Params.indexOf("forbidden1") > -1 || source.Params.indexOf("forbidden2") > -1) {
            return true;
        }
    }
}
```

### Read More
- [doSave method](/docs/funcs/core/do-save)
- [onSave event](./on-save)
- [onAfterSave event](./on-after-save)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.19|`source.data` added|
