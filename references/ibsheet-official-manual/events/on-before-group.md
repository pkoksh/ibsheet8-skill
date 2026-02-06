---
KEY: onBeforeGroup
KIND: event
PATH: events/on-before-group
ALIAS_EN: event, called, grouping, applied, released, based, specific, column
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-before-group
---
# onBeforeGroup ***(event)***
> Event called before grouping is applied/released based on specific column(s) in the sheet.

> Returning `1(true)` prevents the group from being applied/released.

### Syntax

```
    onBeforeGroup:function(paramObject) {

    }
or
    sheet.bind("onBeforeGroup" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|Sheet object where the group apply/release action occurred|
|group|`string`|Column names that serve as the basis for grouping in the sheet|


### Return
***boolean***

### Example
```javascript
options.Events = {
    onBeforeGroup:function(evtParam){
        // Cannot group by the support department column.
        if(evtParam.group.indexOf("deptNm") > -1){
            alert("Grouping by the support department column is not allowed.");
            return true; // Cancel grouping
        } // Cannot group by more than 4 columns.
        else if (evtParam.group.split(",").length > 3) {
            alert("Cannot group by more than 4 columns.");
            return true;
        }
    }
}
```

### Read More
- [onAfterGroup event](./on-after-group)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
