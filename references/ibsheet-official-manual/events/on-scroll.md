---
KEY: onScroll
KIND: event
PATH: events/on-scroll
ALIAS_EN: event, fires, main, scroll, horizontal, vertical, sheet, moved
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-scroll
---
# onScroll ***(event)***
> Event that fires after the main scroll (horizontal, vertical) of the sheet is moved.

> Since this event always fires after the scroll is moved, performing many operations here may **degrade performance**.

### Syntax

```
    onScroll : function(paramObject) {

    }
or
    sheet.bind("onScroll" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the scroll was moved|
|hpos|`number`|scrollLeft of the middle section after scrolling (in pixels)|
|vpos|`number`|scrollTop of the middle section after scrolling (in pixels)|
|oldhpos|`number`|scrollLeft of the middle section before scrolling (in pixels)|
|oldvpos|`number`|scrollTop of the middle section before scrolling (in pixels)|
|hpos0|`number`|scrollLeft of the left section after scrolling (in pixels)|
|oldhpos0|`number`|scrollLeft of the left section before scrolling (in pixels)|
|hpos2|`number`|scrollLeft of the right section after scrolling (in pixels)|
|oldhpos2|`number`|scrollLeft of the right section before scrolling (in pixels)|


### Return
***none***


### Example
```javascript
options.Events = {
    onScroll:function(evtParam){
        // After scrolling down, focus on the first column of the first visible row on screen.
        evtParam.sheet.focus({row: evtParam.sheet.getShownRows()[0], col: evtParam.sheet.getFirstCol()});
    }
}
```

### Read More
- [onVScrollEndPoint event](./on-v-scroll-end-point)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
