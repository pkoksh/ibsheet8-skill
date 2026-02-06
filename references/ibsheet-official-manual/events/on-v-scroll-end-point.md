---
KEY: onVScrollEndPoint
KIND: event
PATH: events/on-v-scroll-end-point
ALIAS_EN: event, fires, vertical, scroll, sheet, reaches, top, bottom
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-v-scroll-end-point
---
# onVScrollEndPoint ***(event)***
> Event that fires when the vertical scroll of the sheet reaches the very top or very bottom.

> When the `vpos` parameter is 0, it means the topmost position. When `vpos` is not 0, it means the bottommost position.

### Syntax

```
    onVScrollEndPoint : function(paramObject) {

    }
or
    sheet.bind("onVScrollEndPoint" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the scroll was moved|
|vpos|`number`|scrollTop of the middle section after scrolling (in pixels)|
|oldvpos|`number`|scrollTop of the middle section before scrolling (in pixels)|

### Return
***none***


### Example
```javascript
options.Events = {
    onVScrollEndPoint:function(evtParam){
        if (evtParam.vpos) {
            console.log('Vertical scroll reached the end!!!');
            var params = {
                "url": "./DoSearch.do",
                "param": "param1=10&param2=ABC",
                "method": "POST",
                "append": true,
                "callback": function (rtn) {
                    var rtnData = JSON.parse(rtn.data);
                    console.log(rtnData);
                }
            };
            evtParams.sheet.doSearch(params);
        }
    }
}
```

### Read More
- [onScroll event](./on-scroll)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|Feature added|
