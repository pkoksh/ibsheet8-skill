---
KEY: onAfterGroup
KIND: event
PATH: events/on-after-group
ALIAS_EN: event, called, grouping, applied, released, rendering, based, specific
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-after-group
---
# onAfterGroup ***(event)***
> Event called after grouping has been applied/released (before rendering) based on specific column(s) in the sheet.

### Syntax

```
    onAfterGroup:function(paramObject) {

    }
or
    sheet.bind("onAfterGroup" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|Sheet object where the group apply/release action occurred|


### Return
***boolean***

### Example
```javascript
options.Events = {
    onAfterGroup:function(evtParam){
        // You can display a message about group apply/release here.
        alert("Grouping has been applied/released.");
    }
}
```

### Read More

- [onBeforeGroup event](./on-before-group)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
