---
KEY: onSheetFocus
KIND: event
PATH: events/on-sheet-focus
ALIAS_EN: event, called, sheet, receives, focus, onsheetfocus
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-sheet-focus
---
# onSheetFocus ***(event)***
> Event called when the sheet receives focus.


### Syntax

```
    onSheetFocus : function(paramObject) {

    }
or
    sheet.bind("onSheetFocus" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object that received focus|

### Return
***none***


### Example
```javascript
options.Events = {
    onSheetFocus:function(evtParam){
        alert("The currently focused sheet is "+evtParam.sheet.id+".");
    }
}
```

### Read More
- [onFocus event](/docs/events/on-focus)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|Feature added|
