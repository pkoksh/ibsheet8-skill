---
KEY: onSearchFinish
KIND: event
PATH: events/on-search-finish
ALIAS_EN: fires, data, loaded, dosearch, docs, funcs, core, search
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-search-finish
---
# onSearchFinish ***(event)***
> Fires when data loaded through [doSearch](/docs/funcs/core/do-search) or [loadSearchData](/docs/funcs/core/load-search-data) functions has been fully rendered (displayed) on screen.


**<mark>Note</mark> : This event is useful for closing a loading image that is displayed on screen after the search is complete. For accessing the sheet to change values or attributes,
the `onBeforeDataLoad` or `onDataLoad` events are more appropriate.**

### Syntax

```
    onSearchFinish : function(paramObject) {

    }
or
    sheet.bind("onSearchFinish" , function(paramObject) {});
```

### Parameters

| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|type|`string`|Search/Excel type (Search, EXCEL)|

### Return
***none***

### Example
```javascript
options.Events = {
    onSearchFinish:function(evtParam){
        // Remove the loading image
        $.unblockUI();
    }
}
```

### Read More
- [onReceiveData event](/docs/events/on-receive-data)
- [onBeforeDataLoad event](./on-before-data-load)
- [onDataLoad event](./on-data-load)
- [onSearchStart event](./on-search-start)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.26|`type` added|
