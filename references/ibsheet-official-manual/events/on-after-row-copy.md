---
KEY: onAfterRowCopy
KIND: event
PATH: events/on-after-row-copy
ALIAS_EN: event, called, copying, row, copyrow, docs, funcs, core
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-after-row-copy
---
# onAfterRowCopy ***(event)***
> Event called after copying a row ([copyRow](/docs/funcs/core/copy-row),[copyRows](/docs/funcs/core/copy-rows)) in the sheet (before rendering).

> When copying multiple rows through [copyRow](/docs/funcs/core/copy-row), the event fires for each row.


### Syntax
```
    onAfterRowCopy : function(paramObject) {

    }
or
    sheet.bind("onAfterRowCopy" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|row|`object`|[Data row object](/docs/appx/row-object) created by copying
At the time the event fires, the created row has not yet been added to the sheet, so it does not have an `index`.|
|source|`object`|Original [data row object](/docs/appx/row-object) that was copied|
<!--!
|`[Private]` empty|`boolean`|Whether to also copy the data from the original data row object 
Private reason: There is no code in the core to pass this parameter|
!-->
### Return
***none***


### Example
```javascript
options.Events = {
    onAfterRowCopy:function(evtParam){
        if(evtParam.source.Deleted === true) {
            alert("Deleted rows cannot be copied.");
        }
    }
}
```

### Read More
- [copyRow method](/docs/funcs/core/copy-row)
- [copyRows method](/docs/funcs/core/copy-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|