---
KEY: onRowAdd
KIND: event
PATH: events/on-row-add
ALIAS_EN: event, called, immediately, new, row, added, sheet, rendering
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-row-add
---
# onRowAdd ***(event)***
> Event called immediately after a new row is added to the sheet (before rendering).

> Called when using the [addRow](/docs/funcs/core/add-row) method.

### Syntax

```
    onRowAdd : function(paramObject) {

    }
or
    sheet.bind("onRowAdd" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|row|`object`|[Data row object](/docs/appx/row-object) to be added to the sheet|

### Return
***none***


### Example
```javascript
options.Events = {
    onRowAdd:function(evtParam){
        // You can set initial values here when adding a row.
        // Since rendering occurs after this event, just setting the values will be reflected.
        evtParam.row["sTitle" ] = "None";
        evtParam.row["sAudience" ] = 0;
        evtParam.row["sPlace" ] = "TBD";
    }
}
```

### Read More

- [addCols method](/docs/funcs/core/add-cols)
- [onAfterRowAdd event](./on-after-row-add)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
