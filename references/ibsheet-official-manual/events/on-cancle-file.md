---
KEY: onCancleFile
KIND: event
PATH: events/on-cancle-file
ALIAS_EN: fires, file, upload, cancelled, selection, dialog, closed, type
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-cancle-file
---
# onCancelFile ***(event)***
> Fires when a file upload is cancelled or the file selection dialog is closed in a `Type:File` cell. 


### Syntax
```
    onCancelFile  : function(paramObject) {

    }
or
    sheet.bind("onCancelFile " , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|Sheet object|
|row|`object`|Data row object where the cell is located|
|col|`string`|Column name of the cell|


### Return
***none***

### Example
```javascript
options.Events = {
  // Show cancel alert when cancelling in the file upload dialog
  onCancelFile: function(evtParam) {
    alert('File selection cancelled');
  }
}
```

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.86|Feature added|
