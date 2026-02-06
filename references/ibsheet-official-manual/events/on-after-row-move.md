---
KEY: onAfterRowMove
KIND: event
PATH: events/on-after-row-move
ALIAS_EN: event, called, moving, row, within, sheet, onafterrowmove
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-after-row-move
---
# onAfterRowMove ***(event)***
> Event called when moving a row within the same sheet.

> Called when using drag and drop or the [moveRow](/docs/funcs/core/move-row) method.

### Syntax
```
    onAfterRowMove : function(paramObject) {

    }
or
    sheet.bind("onAfterRowMove" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the row to be moved is located|
|row|`object`|[Data row object](/docs/appx/row-object) of the row to be moved|
|oldparent|`object`|Parent object of the row to be moved ([data row object](/docs/appx/row-object) or [page object](/docs/appx/page-object))|
|oldnext|`object`|[Data row object](/docs/appx/row-object) of the next row after the row to be moved|

### Return
***number***

### Example
```javascript
options.Events = {
    onAfterRowMove:function(evtParam){
        alert("Moving row " + evtParam.row.id + ".");
    }
}
```

### Read More

- [onStartDrag event](./on-start-drag)
- [onEndDrag event](./on-end-drag)
- [moveRow method](/docs/funcs/core/move-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
