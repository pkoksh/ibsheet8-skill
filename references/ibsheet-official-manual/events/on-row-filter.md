---
KEY: onRowFilter
KIND: event
PATH: events/on-row-filter
ALIAS_EN: event, called, row, filtering, onrowfilter
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-row-filter
---
# onRowFilter ***(event)***
> Event called for each row during filtering.

> You must return a `boolean` value indicating whether the row should be displayed on screen.

### Syntax

```
    onRowFilter:function(paramObject) {

    }
or
    sheet.bind("onRowFilter" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|Sheet object where filtering is in progress|
|row|`object`|[Data row object](/docs/appx/row-object) that has been filtered|
|show|`boolean`|Filtering result
`0(false)`:Hidden from screen
`1(true)`:Shown on screen|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onRowFilter:function(evtParam){
        // If the sName column value is "City Hall", always show it on screen regardless of the filtering result.
        // Useful when filtering should be affected by other column values.
        if (evtParam.row["sName"] == "City Hall") return true;
        return evtParam.show;
    }
}
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
