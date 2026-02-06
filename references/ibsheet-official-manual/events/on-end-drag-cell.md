---
KEY: onEndDragCell
KIND: event
PATH: events/on-end-drag-cell
ALIAS_EN: event, called, moment, dragged, cell, dropped, onenddragcell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-end-drag-cell
---
# onEndDragCell ***(event)***
> Event called at the moment when a dragged cell is dropped.



### Syntax

```
    onEndDragCell : function(paramObject) {

    }
or
    sheet.bind("onEndDragCell" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the dragged cell was originally located|
|row|`object`|Original [data row object](/docs/appx/row-object) of the dragged cell|
|col|`string`|Original column name of the dragged cell|
|tosheet|`object`|Sheet object where the cell was dropped|
|torow|`object`|[Data row object](/docs/appx/row-object) of the dropped cell|
|tocol|`string`|Column name of the dropped cell|
|x|`number`|x-coordinate of the mouse cursor when dropping (browser-based)|
|y|`number`|y-coordinate of the mouse cursor when dropping (browser-based)|


### Return
***none***


### Example
```javascript
options.Events = {
    onEndDragCell: function (evtParam) {
        if (!evtParam.torow || !evtParam.tocol || evtParam.tocol === '_ConstWidth' || (evtParam.row && evtParam.row.Kind != 'Data') || (evtParam.torow && evtParam.torow.Kind != 'Data')) { return; }

        var bValue = evtParam.tosheet.getValue(evtParam.torow, evtParam.tocol);
        var aValue = evtParam.sheet.getValue(evtParam.row, evtParam.col);

        if (evtParam.tosheet && evtParam.torow && evtParam.tocol) {
            evtParam.tosheet.setValue(evtParam.torow, evtParam.tocol, aValue);

            if (bValue) {
                evtParam.sheet.setValue(evtParam.row, evtParam.col, bValue);
            } else {
                evtParam.sheet.setValue(evtParam.row, evtParam.col, '');
            }
        }
    }
}
```

### Read More

- [CanDrag cfg](/docs/props/cfg/can-drag)
- [DragCell cfg](/docs/props/cfg/drag-cell)
- [onStartDragCell event](./on-start-drag-cell)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.27|Feature added|
