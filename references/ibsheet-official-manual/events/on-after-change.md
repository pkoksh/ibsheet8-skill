---
KEY: onAfterChange
KIND: event
PATH: events/on-after-change
ALIAS_EN: event, called, cell, value, modified, user, input, onafterchange
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-after-change
---
# onAfterChange ***(event)***
> Event called after a cell value has been modified by user input.

> Not called when modified through a `method`.

> Not called when modified with the same value as the existing value.

### Syntax

```
    onAfterChange : function(paramObject) {

    }
or
    sheet.bind("onAfterChange" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the value change occurred|
|row |`object`|[Data row object](/docs/appx/row-object)|
|col |`string`|Column name|
|val |`number` \| `string` \| `object`|Changed value

### Return
***none***|


### Example
```javascript
options.Events = {
    onAfterChange:function(evtParam){
        // Event logic after value modification.
        alert("The cell value has been changed to " + evtParam.val + ".");
    }
}
```

### Read More

- [onBeforeChange event](./on-before-change)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
