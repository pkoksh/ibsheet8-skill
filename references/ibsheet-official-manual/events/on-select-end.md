---
KEY: onSelectEnd
KIND: event
PATH: events/on-select-end
ALIAS_EN: event, fires, point, mouse, drag, selection, completed, onselectend
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-select-end
---
# onSelectEnd ***(event)***
> Event that fires at the point when mouse drag selection is completed.

> When selecting via API, you can control whether the `onSelectEnd` event fires through the API's `ignoreEvent` parameter.

### Syntax

```
    onSelectEnd : function(paramObject) {

    }
or
    sheet.bind("onSelectEnd" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|range|`object`|Double array of selected areas 

[Start [data row object](/docs/appx/row-object), start column name, end [data row object](/docs/appx/row-object), end column name, start row index, start column index, number of selected rows, number of selected columns]|
|rows|`array[object]`|Array of row objects in the selected area [data row object](/docs/appx/row-object)|
|cols|`array[string]`|`colName` array of the selected area|

### Return
***none***


### Example
```javascript
options.Events = {
    onSelectEnd:function(evtParam){
        // You can check the information of the selected areas.
        console.log("SelectedRows:", evtParam.rows, "SelectedCols", evtParam.cols);
    }
}
```

### Read More

- [selectRange method](/docs/funcs/core/select-range)
- [getSelectedRanges method](/docs/funcs/core/get-selected-range)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.10|Feature added|
