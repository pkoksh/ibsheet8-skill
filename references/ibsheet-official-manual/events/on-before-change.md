---
KEY: onBeforeChange
KIND: event
PATH: events/on-before-change
ALIAS_EN: event, called, cell, value, modified, user, input, onbeforechange
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-before-change
---
# onBeforeChange ***(event)***
> Event called before a cell value is modified by user input.

> Not called for modifications through `method`.

> Also fires when the value is modified to the same value as the existing value.

> `return Value`: When a value is returned, the returned content is set to the cell regardless of the user's input. 

> `return null`: The value entered by the user is applied.

### Syntax

```
    onBeforeChange : function(paramObject) {

    }
or
    sheet.bind("onBeforeChange" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the value change occurred|
|row |`object`|[Data row object](/docs/appx/row-object)|
|col |`string`|Column name|
|val |`number` \| `string` \| `object`|Value to be changed to|
|oldval|`number` \| `string` \| `object`|Value before the change|
<!--!
|`[Private]` error|`object`|[Event error object](/docs/appx/event-error)|
!-->

### Return Value
***string***

### Example
```javascript
options.Events = {
    onBeforeChange:function(evtParam){
        // Event logic before value modification.
        if(evtParam.col == "AMT" && evtParam.val > 2000){
            alert("The maximum allowed value is 2000.");
            return evtParam.oldval;
        } else {
            return null;
        }
    }
}
```

### Read More

- [onAfterChange event](./on-after-change)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
