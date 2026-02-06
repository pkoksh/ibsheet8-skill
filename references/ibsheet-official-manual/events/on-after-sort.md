---
KEY: onAfterSort
KIND: event
PATH: events/on-after-sort
ALIAS_EN: event, called, sorting, performed, onaftersort
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-after-sort
---
# onAfterSort ***(event)***
> Event called after sorting has been performed.


### Syntax

```
    onAfterSort:function(paramObject) {

    }
or
    sheet.bind("onAfterSort" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|Sheet object where sorting was executed|

### Return
***none***



### Example
```javascript
options.Events = {
    onAfterSort:function(evtParam){
        // Called after all sorting is complete, so display a status message here.
        alert("Sorting has been completed.");
    }
}
```

### Read More

- [onBeforeSort event](./on-before-sort)
- [doSort method](/docs/funcs/core/do-sort)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
