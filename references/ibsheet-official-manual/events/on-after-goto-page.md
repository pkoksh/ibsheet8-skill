---
KEY: onAfterGotoPage
KIND: event
PATH: events/on-after-goto-page
ALIAS_EN: event, called, navigating, another, page, onaftergotopage
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-after-goto-page
---
# onAfterGotoPage ***(event)***
> Event called after navigating to another page.

> Not called when navigating to a new page by scrolling down or when moving focus in [SearchMode](/docs/props/cfg/search-mode): 2, 3.

### Syntax

```
    onAfterGotoPage:function(paramObject) {

    }
or
    sheet.bind("onAfterGotoPage" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|Sheet object|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onAfterGotoPage:function(evtParam){
        // After moving to the next page, focus on the first column of the first row.
        evtParam.sheet.focus({row: evtParam.sheet.getFocusedPage().firstChild, col: evtParam.sheet.getFirstCol()});
    }
}
```

### Read More

- [goToPage event](/docs/funcs/core/go-to-page)
- [onBeforeGoToPage event](./on-before-go-to-page)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
