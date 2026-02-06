---
KEY: onSearchStart
KIND: event
PATH: events/on-search-start
ALIAS_EN: fires, data, retrieval, starts, search, function, onsearchstart, event
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-search-start
---
# onSearchStart ***(event)***
> Fires before data retrieval starts through a search function.

> Returning `1(true)` cancels the search.

### Syntax

```
    onSearchStart : function(paramObject) {

    }
or
    sheet.bind("onSearchStart" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|type|`string`|Search/Excel type (Search, EXCEL)|


### Return
***boolean***

### Example
```javascript
options.Events = {
    onSearchStart: function(evtParam) {
        // Show the loading image
        $.blockUI();
    }
}
```

### Read More
- [onSearchFinish event](./on-search-finish)
- [doSearch method](/docs/funcs/core/do-search)
- [doSearchPaging method](/docs/funcs/core/do-search-paging)
- [loadSearchData method](/docs/funcs/core/load-search-data)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.24|Feature added|
|core|8.0.0.26|`type` added|
