---
KEY: onDragFinish
KIND: event
PATH: events/on-drag-finish
ALIAS_EN: last, event, fires, dragged, rows, dropped, ondragfinish
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-drag-finish
---
# onDragFinish ***(event)***
> The last event that fires after dragged rows have been dropped. 

> This event fires after the dragged content has been reflected in `tosheet`. 

> Event firing order: `onEndDrag` -> `onAfterRowMoveTosheet` -> `onDragFinish`

### Syntax

```
    onDragFinish : function(paramObject) {

    }
or
    sheet.bind("onDragFinish " , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the dragged rows were originally located|
|row|`object`|Original [data row object](/docs/appx/row-object) of the dragged rows|
|tosheet|`object`|Sheet object where the rows were dropped|
|torow|`object`|[Data row object](/docs/appx/row-object) that serves as the reference for where the rows will be placed|

### Return
***none***


### Example
```javascript
options.Events = {
    onDragFinish:function(evtParam){
        // This section is the state after the drag has finished and been reflected in the sheet.
    }
}
```

### Read More

- [onStartDrag event](./on-start-drag)
- [onEndDrag event](./on-end-drag)
- [onAfterRowMoveTosheet event](./on-after-row-move-to-sheet)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.15|Feature added|
