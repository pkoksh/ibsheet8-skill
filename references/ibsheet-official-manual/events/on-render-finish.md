---
KEY: onRenderFinish
KIND: event
PATH: events/on-render-finish
ALIAS_EN: event, occurs, sheet, rendered, onrenderfinish
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-render-finish
---
# onRenderFinish ***(event)***

> Event that occurs after the sheet is rendered.

> The event fires in the following cases:

1. Sheet initialization
1. Data retrieval
1. Screen size changes (e.g., Ctrl + mouse wheel)
1. When using subtotal rows
1. Grouping
1. `removeAll`
1. `rerender`
1. `revertData`
1. `reload`
1. `makeSubTotal`
1. `removeSubTotal`
1. `setFixedCols, setFixedLeft, setFixedRight, setFixedTop`
1. `setFormulaRow`
1. `setInfoRow`
1. `setSize`
1. `setTheme`
1. `setFormulaRowPosition`
1. `setLocale`
1. `updateClientPaging`
1. `setCurrentInfo`
1. When changing `Width` or `Visible` via `setAttribute`

### Syntax

```
    onRenderFinish : function(paramObject){

    }
or
    sheet.bind("onRenderFinish" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Rendered sheet object|

### Return
***none***


### Example
```javascript
options.Events = {
    onRenderFinish:function(evtParam){
        // After sheet rendering, enter value 12345 in the "sPerson" column of row AR5
        var r5 = sheet.getRowById("AR5");
        sheet.setValue({row:r5 , col:"sPerson" , val:12345 , render:1});

        /*
         ***** Caution *****
          Since the onRenderFinish event is always called during full sheet rendering, methods that perform full sheet rendering should not be written here.
         */
    }
}
```

### Read More

- [onRenderStart event](./on-render-start)
- [render method](/docs/funcs/core/render)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
