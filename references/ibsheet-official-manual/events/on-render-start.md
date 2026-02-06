---
KEY: onRenderStart
KIND: event
PATH: events/on-render-start
ALIAS_EN: event, called, sheet, rendered, onrenderstart
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-render-start
---
# onRenderStart ***(event)***

> Event called before the sheet is rendered.

> Returning `1(true)` cancels the sheet rendering.

### Syntax

```
    onRenderStart : function(paramObject) {

    }
or
    sheet.bind("onRenderStart" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object that will be rendered|

### Return
***boolean***

### Example
```javascript
user_authority = 3;// Set current authority to 3
options.Events = {
    onRenderStart:function(evtParam){
        // Do not render the sheet if the authority is less than 3.
        if (user_authority < 3) return true;

        /*
         ***** Caution *****
          Since the onRenderStart event is always called during full sheet rendering, methods that perform full sheet rendering should not be written here.
         */
    }
}
```

### Read More

- [onRenderFinish event](./on-render-finish)
- [render method](/docs/funcs/core/render)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
