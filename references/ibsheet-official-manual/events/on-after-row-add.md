---
KEY: onAfterRowAdd
KIND: event
PATH: events/on-after-row-add
ALIAS_EN: event, called, new, row, added, rendered, sheet, onafterrowadd
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-after-row-add
---
# onAfterRowAdd ***(event)***
> Event called after a new row has been added and rendered in the sheet.

> Called when using the [addRows](/docs/funcs/core/add-rows) method that adds multiple rows, not the single row addition ([addRow](/docs/funcs/core/add-row)).

<!--!
> `[Private note]` Called from addRows and copyRows. 

!-->

### Syntax
```
    onAfterRowAdd : function(paramObject) {

    }
or
    sheet.bind("onAfterRowAdd" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|row|`object`|[Data row object](/docs/appx/row-object) added to the sheet|

### Return
***none***

### Example
```javascript
options.Events = {
    onAfterRowAdd:function(evtParam){
        // You can set initial values here when adding a row.
        // Since this event is called after rendering, you need to render when changing values.
        evtParam.sheet.setValue({row:evtParam.row,col:"sTitle",val:"None",render:1});
        evtParam.sheet.setValue({row:evtParam.row,col:"sAudience",val:0,render:1});
        evtParam.sheet.setValue({row:evtParam.row,col:"sPlace",val:"TBD",render:1});
    }
}
```

### Read More
- [addRows method](/docs/funcs/core/add-rows)
- [copyRows method](/docs/funcs/core/copy-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
