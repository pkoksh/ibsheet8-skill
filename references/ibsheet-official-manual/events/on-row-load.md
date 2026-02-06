---
KEY: onRowLoad
KIND: event
PATH: events/on-row-load
ALIAS_EN: event, called, immediately, data, row, object, docs, appx
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-row-load
---
# onRowLoad ***(event)***
> Event called immediately after a [data row object](/docs/appx/row-object) is created during data retrieval.

> Called for each row created in the sheet before the sheet rendering is complete. In this event, you can change row attributes or cell data within the row.

> **You cannot add new rows to the sheet using the [addRow](/docs/funcs/core/add-row) method within this event.** 


### Syntax

```
    onRowLoad : function(paramObject) {

    }
or
    sheet.bind("onRowLoad" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object that will be rendered|
|row|`object`|[Data row object](/docs/appx/row-object) to be added to the sheet|
|eventName|`string`|Event name|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onRowLoad:function(evtParam){
        // If the cell value in the CUST_CD column of the row is 500 or greater, change the text color to red.
        if (evtParam.row["CUST_CD"] >= 500) {
            evtParam.row["CUST_CD"+"TextColor"] = "#FF0000";
        }
    }
}
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
