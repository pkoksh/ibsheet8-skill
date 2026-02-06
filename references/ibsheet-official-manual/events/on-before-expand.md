---
KEY: onBeforeExpand
KIND: event
PATH: events/on-before-expand
ALIAS_EN: called, tree, collapsed, expanded, while, onbeforeexpand, event
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-before-expand
---
# onBeforeExpand ***(event)***
> Called when a tree is collapsed or expanded while using a tree.

> Returning `1(true)` in this event can stop the collapse/expand action.

### Syntax

```
    onBeforeExpand : function(paramObject) {

    }
or
    sheet.bind("onBeforeExpand" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|row|`object`|[Data row object](/docs/appx/row-object) of the row to expand|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onBeforeExpand:function(evtParam){
        // Block expanding based on level.
        if(evtParam.row["Level"] > 4){
            sheet.showMessageTime("Viewing detailed items is available after completion of current progress.",2000);
            return true;
        }
    }
}
```

### Read More

- [setExpandRow method](/docs/funcs/core/set-expand-row)
- [showTreeLevel method](/docs/funcs/core/show-tree-level)
- [onAfterExpand event](/docs/events/on-after-expand)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
