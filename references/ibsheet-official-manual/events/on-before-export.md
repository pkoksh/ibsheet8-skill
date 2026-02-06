---
KEY: onBeforeExport
KIND: event
PATH: events/on-before-export
ALIAS_EN: fires, sheet, data, sent, server, calling, download, functions
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-before-export
---
# onBeforeExport ***(event)***
> Fires before the sheet data is sent to the server when calling download functions ([exportData](/docs/funcs/core/export-data), [down2Excel](/docs/funcs/excel/down-to-excel), [down2Text](/docs/funcs/excel/down-to-text), [down2Pdf](/docs/funcs/excel/down-to-pdf)).

> The sheet information and data are combined into a single string, placed in `Data`, and sent as a `response` to the specified `jsp (or aspx)`. 

> Returning `1(true)` in this event can stop the download.

### Syntax

```
    onBeforeExport : function(paramObject) {

    }
or
    sheet.bind("onBeforeExport" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|type|`string`|`EXCEL, TEXT, PDF` depending on [exportData](/docs/funcs/core/export-data), [down2Excel](/docs/funcs/excel/down-to-excel), [down2Text](/docs/funcs/excel/down-to-text), [down2Pdf](/docs/funcs/excel/down-to-pdf) function call|
|formElem|`object`|Object containing the data to be sent to the server

`Data` check
If `reqHeader` is not set in the download function, check `evtParam.formElem.Data.value`; if `reqHeader` is set, check with `evtParam.formElem.get("Data")`
Cannot be checked in `exportData`|
|data|`object`|Provides the file to download in blob format. Delivered as `data.blob` and can be modified
Only available in `exportData`|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onBeforeExport:function(evtParam){
        // Show a warning or stop the download based on user level.
        if(userLvl < 3){
            alert("Contains sensitive data.\nPlease use with caution.");
        }else{
            alert("You do not have download permission.");
            evtParam.sheet.hideMessage();
            return true;
        }
    }
}
```

### Read More
- [exportData method](/docs/funcs/core/export-data)
- [down2Excel method](/docs/funcs/excel/down-to-excel)
- [down2Text method](/docs/funcs/excel/down-to-text)
- [onExportFinish event](./on-export-finish)

### Since

|product|version|desc|
|---|---|---|
|excel|0.0.0|Feature added|
|excel|3.0.6|data parameter added|
