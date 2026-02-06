---
KEY: onRenderFirstFinish
KIND: event
PATH: events/on-render-first-finish
ALIAS_EN: event, called, sheet, first, created, rendered, fires, once
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-render-first-finish
---
# onRenderFirstFinish ***(event)***
> Event called when the sheet is **first** created and rendered. **(Fires only once)**

> If the sheet creation function (IBSheet.create) is called without data, you can insert data into the sheet in the onRenderFirstFinish event.

### Syntax

```
    onRenderFirstFinish : function(paramObject) {

    }
or
    sheet.bind("onRenderFirstFinish" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Initially created sheet object|

### Return
***none***


### Example
```javascript
var data = [
    {"chgrDptNm":"Strategic Planning","taskId":"100201","actnEndTm":"190000","ordr":"1","preTaskId":"100200"},
    {"chgrDptNm":"Execution Budget","taskId":"100204","actnEndTm":"170000","ordr":"2","preTaskId":"100200"}
];

options.Events = {
    onRenderFirstFinish: function(evtParam){
        // Load data into the sheet.
        evtParam.sheet.loadSearchData(data);
    }
}
```

### Read More

- [render method](/docs/funcs/core/render)
- [loadSearchData method](/docs/funcs/core/load-search-data)
- [doSearch method](/docs/funcs/core/do-search)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
