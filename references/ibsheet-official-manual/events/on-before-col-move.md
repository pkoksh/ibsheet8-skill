---
KEY: onBeforeColMove
KIND: event
PATH: events/on-before-col-move
ALIAS_EN: event, called, column, moved, different, position, via, drag
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-before-col-move
---
# onBeforeColMove ***(event)***
> Event called before a column is moved to a different position via drag.</br>
> Returning `return true` can cancel the column move.

### Syntax
```
    onBeforeColMove : function(paramObject) {

    }
or
    sheet.bind("onBeforeColMove" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|col|`string`|Column name being moved|
|toCol|`string`|Column name at the target position|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onBeforeColMove:function(evtParam){
        // If the target position for the column move is the SEQ column, cancel the column move.
        if (evtParam.toCol == "SEQ") return true;
    }
}
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.1|Feature added|
