---
KEY: onStartDragCell
KIND: event
PATH: events/on-start-drag-cell
ALIAS_EN: event, called, cell, dragged, within, sheet, onstartdragcell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-start-drag-cell
---
# onStartDragCell ***(event)***
> Event called before a cell is dragged within the sheet.

> Returning `1(true)` cancels the row drag and executes selection (`Select`) instead.

> Returning a `string` displays the returned value as the `html` shown during dragging.

### Syntax

```
    onStartDragCell : function(paramObject) {

    }
or
    sheet.bind("onStartDragCell" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the drag was initiated|
|row|`object`|[Data row object](/docs/appx/row-object) of the dragged cell|
|col|`string`|Column name of the dragged cell|
|html|`string`|HTML of the dragged object attached to the mouse|

### Return

***mixed(`boolean` \| `string`)*** : When a string is returned, the cell drag object is replaced with the returned value


### Example
```javascript
options.Events = {
    onStartDragCell: function (evtParam) {
        // Return true so that Int type columns cannot be dragged
        if (evtParam.sheet.getType(evtParam.row, evtParam.col) == 'Int') {
            return true;
        }
    }
}
```

### Read More

- [CanDrag cfg](/docs/props/cfg/can-drag)
- [DragCell cfg](/docs/props/cfg/drag-cell)
- [onEndDragCell event](./on-end-drag-cell)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.27|Feature added|
