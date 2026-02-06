---
KEY: onAfterPivot
KIND: event
PATH: events/on-after-pivot
ALIAS_EN: event, called, pivot, sheet, created, creating, usepivot, onafterpivot
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-after-pivot
---
# onAfterPivot ***(event)***
> Event called after the pivot sheet is created when creating a pivot sheet with 'UsePivot: 1'.

> Fires at the onRenderFirstFinish point after the pivot sheet is created.

### Syntax

```
    onAfterPivot : function(paramObject) {

    }
or
    sheet.bind("onAfterPivot" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Parent sheet object|
|pivotSheet|`object`|Pivot sheet object|
|criterias|`object`|Column names set as pivot sheet criteria targets|
|init|`object`|Pivot sheet column, row, and calculation target settings|
|format|`string`|Format to be displayed in the pivot sheet|
|type|`string`|Calculation method per calculation target column|

### Return
***boolean***|


### Example
```javascript
options.Events = {
    onAfterPivot:function(evtParam){
        // Check pivot sheet information after the pivot sheet is created
        alert("The calculation type of the pivot sheet is " + evtParam.type + ".");
    }
}
```

### Read More

- [UsePivot Cfg](/docs/props/cfg/use-pivot)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.41|Feature added|
