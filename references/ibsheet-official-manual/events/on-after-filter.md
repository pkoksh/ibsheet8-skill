---
KEY: onAfterFilter
KIND: event
PATH: events/on-after-filter
ALIAS_EN: event, called, filtering, performed, sheet, onafterfilter
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-after-filter
---
# onAfterFilter ***(event)***
> Event called after filtering has been performed on the sheet.

### Syntax

```
    onAfterFilter:function(paramObject) {

    }
or
    sheet.bind("onAfterFilter" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|Sheet object where filtering was applied|
|type|`number`|Filtering action information
`0`:When the filter value has changed
`2`:When filtering is executed during rendering or when grouping change occurs together with filtering|
<!--!
`[Private note]` ***There is a 1 which is related to cookies so it was excluded, and it seems like 2 should be changed to 1.***
!-->

### Return
***none***

### Example
```javascript
options.Events = {
    onAfterFilter:function(evtParam){
        // You can display a message about filtering completion.
        alert("Filtering has been completed.");
    }
}
```

### Read More
- [onBeforeFilter event](./on-before-filter)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
