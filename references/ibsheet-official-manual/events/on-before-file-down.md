---
KEY: onBeforeFileDown
KIND: event
PATH: events/on-before-file-down
ALIAS_EN: event, called, clicking, cell, column, type, docs, props
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-before-file-down
---
# onBeforeFileDown ***(event)***
> Event called when clicking a cell in a column where [Type](/docs/props/col/type) is set to `File`.

> This event fires during file download and only for saved cells. It does not fire if the cell with an uploaded file has not been saved yet. 

> Fires before file download, and returning `true(1)` prevents the download from executing. 


### Syntax

```
    onBeforeFileDown : function(paramObject) {

    }
or
    sheet.bind("onBeforeFileDown" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|row|`object`|[Data row object](/docs/appx/row-object) where the cell is located|
|col|`string`|Column name of the cell|
|path|`string`|Path where the file is stored, specified by [Path](/docs/props/cell/path) or [FilePath](/docs/props/cfg/export)|
|value|`string`|Cell value (file name)|

### Return
***boolean***


### Example
```javascript
options.Events = {
    // Change the file call path of the clicked cell
    onBeforeFileDown: function (evtParam) {
        location.href = "URL to change" + evtParam.value;
        return true;
    }
}
```
**In the above example, returning `false(0)` will download from the clicked cell's path.**

### Read More
- [Path cell](/docs/props/cell/path) 

- [Export cfg](/docs/props/cfg/export) 

- [Type appendix](/docs/appx/type) 

- [File Type upload appendix](/docs/appx/file-type-upload) 


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|Feature added|
