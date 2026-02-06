---
KEY: onBeforeFilter
KIND: event
PATH: events/on-before-filter
ALIAS_EN: event, called, filtering, performed, sheet, onbeforefilter
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-before-filter
---
# onBeforeFilter ***(event)***
> Event called before filtering is performed on the sheet.

> Returning `1(true)` prevents filtering from proceeding.

### Syntax

```
    onBeforeFilter:function(paramObject) {

    }
or
    sheet.bind("onBeforeFilter" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|Sheet object where filtering will be applied|
|type|`number`|Filtering action information
`0`:When the filter value has changed
`2`:When filtering is executed during rendering or when grouping change occurs together with filtering|
<!--!
`[Private note]` ***There is a 1 which is related to cookies so it was excluded, and it seems like 2 should be changed to 1.***
!-->


### Return
***boolean***

### Example
```javascript
options.Events = {
    onBeforeFilter:function(evtParam){
        if(evtParam.type == 2) return false;
        return true;
    }
}
```

### Read More
- [onAfterFilter event](./on-after-filter)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
