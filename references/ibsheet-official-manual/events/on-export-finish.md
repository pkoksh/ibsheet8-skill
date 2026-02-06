---
KEY: onExportFinish
KIND: event
PATH: events/on-export-finish
ALIAS_EN: fires, download, completed, calling, function, down, excel, docs
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-export-finish
---
# onExportFinish ***(event)***
> Fires when the download is completed after calling a function ([down2Excel](/docs/funcs/excel/down-to-excel), [down2Text](/docs/funcs/excel/down-to-text), [exportData](/docs/funcs/core/export-data), [down2Pdf](/docs/funcs/excel/down-to-pdf)) that downloads the sheet contents as `Excel, Text, Pdf`, etc.

### Syntax

```
    onExportFinish : function(paramObject) {

    }
or
    sheet.bind("onExportFinish" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|type|`string`|`EXCEL, TEXT, PDF` depending on [down2Excel](/docs/funcs/excel/down-to-excel), [down2Text](/docs/funcs/excel/down-to-text), [exportData](/docs/funcs/core/export-data), [down2Pdf](/docs/funcs/excel/down-to-pdf) function call|
|result|`boolean`|Download processing result
`0(false)`:Error occurred
`1(true)`:Completed normally|

### Return
***none***

### Example
```javascript
options.Events = {
    onExportFinish:function(evtParam){
        //Display message after download completion
        if(evtParam.result){
            alert("Download has been completed.");
        }
    }
}
```

### Read More
- [exportData method](/docs/funcs/core/export-data)
- [down2Excel method](/docs/funcs/excel/down-to-excel)
- [down2Text method](/docs/funcs/excel/down-to-text)
- [onBeforeExport event](./on-before-export)

### Since

|product|version|desc|
|---|---|---|
|excel|0.0.0|Feature added|
