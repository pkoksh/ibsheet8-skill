---
KEY: onRenderFirstFinishAll
KIND: static-member
PATH: static/on-render-first-finish-all
ALIAS_EN: type, event, fires, sheets, declared, ibsheet, object, created
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/static/on-render-first-finish-all
---
# onRenderFirstFinishAll ***(static)***

> A type of event that fires after all sheets declared in the `IBSheet` object have been created.

> Write the tasks to be processed after all sheets have been created in this function. 


### Syntax
```javascript
IBSheet.onRenderFirstFinishAll = function(obj){
    ...
};
```

### Parameters
| Name | Type | Description |
|----------|----|----|
|sheet|`object`|The last created sheet object|

### Return Value
***None***

### Example
```javascript
var data = [
    {"chgrDptNm": "Strategic Planning", "taskId": "100201", "actnEndTm": "190000", "ordr": "1", "preTaskId": "100200"},
    {"chgrDptNm": "Execution Budget", "taskId": "100204", "actnEndTm": "170000", "ordr":"2", "preTaskId": "100200"}
];

IBSheet.onRenderFirstFinishAll = function(obj){
    // Tasks to process after all sheets have been created
    obj.sheet.loadSearchData(data);
};
```

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|Feature added|
