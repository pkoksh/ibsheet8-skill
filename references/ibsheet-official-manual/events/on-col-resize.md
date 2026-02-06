---
KEY: onColResize
KIND: event
PATH: events/on-col-resize
ALIAS_EN: event, called, column, width, changed, oncolresize
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-col-resize
---
# onColResize ***(event)***
> Event called when the column width is changed.

> Called when the column size is changed by user click or by using the [setColWidth](/docs/funcs/core/set-col-width) method.

> If [RelWidth](/docs/props/col/rel-width) is set for all columns, changing the size of some columns will trigger this event for all columns.


### Syntax

```
    onColResize : function(paramObject) {

    }
or
    sheet.bind("onColResize" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object that sent changed content to the server|
|col|`string`|Column name of the column whose width was changed|

### Return
***none***

### Example
```javascript
options.Events = {
    onColResize:function(evtParam){
        alert("The width of the "+evtParam.col+" column in the sheet has been changed.");
    }
}
```

### Read More

- [onAfterColResize event](./on-after-col-resize)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
