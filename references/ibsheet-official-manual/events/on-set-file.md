---
KEY: onSetFile
KIND: event
PATH: events/on-set-file
ALIAS_EN: type, file, fires, upload, cell, immediately, completing, selection
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-set-file
---
# onSetFile ***(event)***
> In `Type:File`, fires just before file upload to the cell, immediately after completing file selection in the file selection dialog. 

> You can check the selected file information through the `files` parameter.

> Returning `1(true)` stops the value input for the file type and the file is not uploaded.


### Syntax
```
    onSetFile  : function(paramObject) {

    }
or
    sheet.bind("onSetFile " , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|Sheet object|
|row|`object`|Data row object where the cell is located|
|col|`string`|Column name of the cell|
|files|`array`|Selected file object (`FileList`)|


### Return
***boolean***

### Example
```javascript
options.Events = {
  // Check the file name selected from the file upload dialog
  onSetFile: function(evtParam) {
    console.log(evtParam.files[0].name);
  }
}
```

### Read More
- [File Type upload appendix](/docs/appx/file-type-upload)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.19|Feature added|
