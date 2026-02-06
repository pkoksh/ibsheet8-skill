---
KEY: onSelectFile
KIND: event
PATH: events/on-select-file
ALIAS_EN: fires, user, selects, excel, text, file, calling, importdata
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-select-file
---
# onSelectFile ***(event)***
> Fires when the user selects an Excel or text file after calling [importData](/docs/funcs/core/import-data), [loadExcel](/docs/funcs/excel/load-excel), or [loadText](/docs/funcs/excel/load-text) functions.

> When the above functions are called, a file selection dialog opens first, and this event fires when a file is selected. 

> Returning false from this event cancels the file upload.

### Syntax

```
    onSelectFile : function(paramObject) {

    }
or
    sheet.bind("onSelectFile" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|type|`string`|`EXCEL, TEXT` depending on which function was called: [importData](/docs/funcs/core/import-data), [loadExcel](/docs/funcs/excel/load-excel), [loadText](/docs/funcs/excel/load-text)|
|filename|`string`|Selected file name|

### Return
***none***

### Example
```javascript
options.Events = {
    onSelectFile:function(evtParam){
       // Display a block on screen until the upload is complete.
       $.blockUI({ message: '<h1><img src="busy.gif" />File upload in progress...</h1>' });
    }
}
```

### Read More
- [importData method](/docs/funcs/core/import-data)
- [loadExcel method](/docs/funcs/excel/load-excel)
- [loadText method](/docs/funcs/excel/load-text)
- [onImportFinish event](./on-import-finish)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
