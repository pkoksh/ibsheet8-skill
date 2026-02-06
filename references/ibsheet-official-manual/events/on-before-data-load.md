---
KEY: onBeforeDataLoad
KIND: event
PATH: events/on-before-data-load
ALIAS_EN: event, fires, data, loaded, sheet, calling, server, onbeforedataload
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-before-data-load
---
# onBeforeDataLoad ***(event)***
> Event that fires before data is loaded into the sheet after calling the server.

> Since the data has not yet been parsed inside the sheet, **row objects have not been created**, so functions that use row objects as arguments cannot be used.
At this point, you can process data using the event parameter `data` object.

> After parsing is complete, the [onDataLoad](./on-data-load) event fires.

### Syntax

```
    onBeforeDataLoad:function(paramObject) {

    }
or
    sheet.bind("onBeforeDataLoad" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|Sheet object that will load the data|
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
|data|`object`|Data to be loaded into the sheet|
|message|`string`|`Message` content included in the search result `json`|
|response|`object`|`response` object|

### Return
***none***

### Example
```javascript
// Example for error handling after search
options.Events = {
    onBeforeDataLoad:function(evtParam){
        if (evtParam.row["result"] < 0) {
            alert("An error has occurred\n"+evtParam.message);
        }
    }
}


// Example for modifying searched content
options.Events = {
    onBeforeDataLoad:function(evtParam){
        // Search result data
        var DATA = evtParam.data;
        // Modify part of the searched data.
        for(var i = 0; i < DATA.length; i++){
            var row = DATA[i];
            // If the value in the AttrYn column is Y, set "Confirmed" in the ConfirmFinish column
            // and block editing for that row. (No separate return is needed for modified data [CallByReference])
            if(row["AttrYn"] == "Y"){
                row["ConfirmFinish"] = "Confirmed";
                row["CanEdit"] = 0;
            }
        }
    }
}
```
```javascript
// Search result json reference
{
    //Note the case of IO, Result, Message!
    "IO":{"Result":100,"Message":"Search completed successfully"},
    "Data":[ ... ]
}
```

### Read More

- [doSearch method](/docs/funcs/core/do-search)
- [doSearchPaging method](/docs/funcs/core/do-search-paging)
- [loadSearchData method](/docs/funcs/core/load-search-data)
- [onReceiveData event](/docs/events/on-receive-data)
- [onDataLoad event](/docs/events/on-data-load)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
