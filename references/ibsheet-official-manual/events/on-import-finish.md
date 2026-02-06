---
KEY: onImportFinish
KIND: event
PATH: events/on-import-finish
ALIAS_EN: event, called, loading, excel, text, file, onimportfinish
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-import-finish
---
# onImportFinish ***(event)***

> Event called when loading an Excel/text file.\
> Returning `1(true)` in this event stops the data load operation.

### Syntax

```plaintext
    onImportFinish:function(paramObject) {

    }
or
    sheet.bind("onImportFinish" , function(paramObject) {});
```

### Parameters

| Name | Type | Description |
|------|------|-------------|
| sheet | `object` | Sheet object where Excel/text is being loaded |
| type | `string` | Text/Excel type (`EXCEL, TEXT`) |
| data | `object` | Excel/text data to be loaded into the sheet |
| result | `number` | **Loading result code**
`0`:Success
`Negative number`:Loading error occurred |
| message | `string` | **Loading result message**
`""`:Success
`Other`:Error message |

\
When an error occurs during loadExcel, the errors corresponding to each negative code are as follows.()\
**Error codes are limited to server modules only. Please make sure to use server module version 1.1.15 or later and update to the latest jsp for that version.**

| Code | Description |
|------|-------------|
| `-1` | When trying to load more rows than the number set by load.setMaxRow |
| `-2` | When load.setStrictHeaderMatch is set and any sheet header does not exist in the Excel |
| `-3` | When trying to load more columns than the number set by load.setMaxColumns |
| `-10` | When trying to load a file larger than the size set by load.setMaxFileSize |
| `-18` | When load.setDisallowDuplicatedHeader is set and duplicate data exists in the Excel header being loaded |
| `-100` | When load.setUsePoi(false) and load.setUseJXL(false) are set and loading an xls file
| `-201` | When the password is incorrect when workbookPassword is set |

### Return

**_boolean_**

### Example

```javascript
options.Events = {
    onImportFinish:function(evtParam){
        if (evtParam["type"] == "TEXT") {
            document.getElementById("myDiv").innerText = evtParam["type"] + " file has been loaded.";
        }

        // When stopping the operation by returning true in onImportFinish without setting SuppressExportMessage,
        // you must call hideMessage() to close the loading image.
        evtParam.sheet.hideMessage();

        return true; // If return is true, subsequent operations (data load) are stopped.
    }
}
```

### Read More

- [importData method](/docs/funcs/core/import-data)
- [loadExcel method](/docs/funcs/excel/load-excel)

### Since

| product | version | desc |
|---------|---------|------|
| core | 8.0.0.0 | Feature added |
| core | 8.0.0.26 | `result`, `message` parameters added |
| core | 8.1.0.6 | return behavior added |

