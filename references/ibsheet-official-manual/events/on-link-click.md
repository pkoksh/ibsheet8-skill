---
KEY: onLinkClick
KIND: event
PATH: events/on-link-click
ALIAS_EN: event, called, clicking, cell, column, type, docs, props
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-link-click
---
# onLinkClick ***(event)***
> Event called when clicking a cell in a column where [Type](/docs/props/col/type) is set to `Link` or `Img`.

> Links defined by the [Link](/docs/props/col/link) property do not trigger this event when clicked.

> Returning `1(true)` prevents the link action from executing.

### Syntax

```
    onLinkClick : function(paramObject) {

    }
or
    sheet.bind("onLinkClick" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|row|`object`|[Data row object](/docs/appx/row-object) where the cell is located|
|col|`string`|Column name of the cell|
|url|`string`|`URL` value to be opened in the browser|
|target|`string`|Location where the `URL` will be opened (same as `target` of HTML `<a>` tag)|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onLinkClick:function(evtParam){
        // Prevent the URL from opening in the same frame where the click occurred.
        if (evtParam.target == "_self") {
           return true;
        }
        return false;
    }
}
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
