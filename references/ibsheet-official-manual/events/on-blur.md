---
KEY: onBlur
KIND: event
PATH: events/on-blur
ALIAS_EN: event, called, sheet, loses, cell, focus, onblur
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-blur
---
# onBlur ***(event)***
> Event called when the sheet loses cell focus.


### Syntax

```
    onBlur : function(paramObject) {

    }
or
    sheet.bind("onBlur" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object that lost focus|
|orow|`object`|[Data row object](/docs/appx/row-object) where the cell that was focused before losing focus is located|
|ocol|`string`|Column name where the cell that was focused before losing focus is located|
|orect|`array[object]`|Area when multiple cells were focused before losing focus|

### Return
***none***


### Example
```javascript
options.Events = {
    onBlur:function(evtParam){
        alert("The sheet has lost focus. The value of the previously focused cell is "+evtParam.sheet.getValue({row :evtParam.orow, col: evtParam.ocol}+".")));
    }
}
```

### Read More

- [blur method](/docs/funcs/core/blur)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
