---
KEY: onDataLoad
KIND: event
PATH: events/on-data-load
ALIAS_EN: fires, data, parsed, loaded, within, sheet, ondataload, event
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-data-load
---
# onDataLoad ***(event)***
> Fires after data has been parsed and loaded within the sheet.

> Internal loading is complete, but screen rendering has not yet occurred.

> At this point, **row objects have been created**, so functions that use **row objects** as arguments can be used.

### Syntax

```
    onDataLoad : function(paramObject) {

    }
or
    sheet.bind("onDataLoad" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where data was loaded|
|result|`number`| 1. When searching via server ([doSearch](/docs/funcs/core/do-search))
`0`:Success
`-1`:Empty URL (`e.g.: sheet.doSearch("")`)
`-3`:When the request URL is wrong or the result was not received due to network errors
`-5`:When the response result is empty
`-6`:Connection timeout ((cfg)Timeout exceeded)
`-7`:Invalid data format (mostly data issues)
`Other`:User-defined code

 2. When searching with regular data ([loadSearchData](/docs/funcs/core/load-search-data))
`0`:Success
`-7`:Invalid data format
|
|message|`string`|`Message` content included in the search result `json`|
|response|`object`|`response` object|
|type|`string`|Search/Excel type (Search, EXCEL)|

<!--!
### Return
`[Private]` ***boolean***
!-->

### Example
```javascript
options.Events = {
    onDataLoad:function(evtParam){
        if (res == 0) alert("Data has been loaded.");
        else alert("Failed to load data.");
    }
}
```
### Read More
- [doSearch method](/docs/funcs/core/do-search)
- [doSearchPaging method](/docs/funcs/core/do-search-paging)
- [loadSearchData method](/docs/funcs/core/load-search-data)
- [onReceiveData event](/docs/events/on-receive-data)
- [onBeforeDataLoad event](/docs/events/on-before-data-load)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.26|`type` added|
