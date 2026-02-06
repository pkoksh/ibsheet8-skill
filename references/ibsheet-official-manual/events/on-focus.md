---
KEY: onFocus
KIND: event
PATH: events/on-focus
ALIAS_EN: event, called, cell, sheet, focused, onfocus
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-focus
---
# onFocus ***(event)***
> Event called when a cell in the sheet is focused.


### Syntax

```
    onFocus : function(paramObject) {

    }
or
    sheet.bind("onFocus" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object containing the focused cell|
|row|`object`|[Data row object](/docs/appx/row-object) where the focused cell is located|
|col|`string`|Column name where the focused cell is located|
|orow|`object`|[Data row object](/docs/appx/row-object) where the previously focused cell was located|
|ocol|`string`|Column name where the previously focused cell was located|
|rect|`array[object]`|Focused area when multiple cells are focused|
|orect|`array[object]`|Area when multiple cells were previously focused|

### Return
***none***


### Example
```javascript
options.Events = {
    onFocus:function(evtParam){
        alert("The value of the currently focused cell is "+evtParam.sheet.getValue({row :evtParam.row, col: evtParam.col})+".");
    }
}
```

### Read More
- [focus method](/docs/funcs/core/focus)
- [onBeforeFocus event](/docs/events/on-before-focus)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
