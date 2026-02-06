---
KEY: onShowEdit
KIND: event
PATH: events/on-show-edit
ALIAS_EN: event, called, retrieve, value, display, edit, mode, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-show-edit
---
# onShowEdit ***(event)***
> Event called to retrieve the value to display in edit mode when cell editing starts.

> You can return a value to use instead of the value that would normally be shown when entering edit mode.

### Syntax

```
    onShowEdit : function(paramObject) {

    }
or
    sheet.bind("onShowEdit" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where edit mode has started|
|row|`object`|[Data row object](/docs/appx/row-object) of the cell where edit mode has started|
|col|`string`|Column name of the cell where edit mode has started|
|val|`string`|Value to be shown in edit mode|

### Return
***string***

### Example
```javascript
options.Events = {
    onShowEdit:function(evtParam){
        // You can set the initial value for edit mode.
        return 1;
    }
}
```

### Read More

- [onStartEdit event](./on-start-edit)
- [onEndEdit event](./on-end-edit)
- [onAfterEdit event](./on-after-edit)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
