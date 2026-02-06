---
KEY: onStartDrag
KIND: event
PATH: events/on-start-drag
ALIAS_EN: event, called, row, dragged, within, sheet, onstartdrag
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-start-drag
---
# onStartDrag ***(event)***
> Event called before row(s) are dragged within the sheet.

> Returning `1(true)` cancels the row drag and executes row selection (`Select`) instead.

> Returning `-1` cancels the row drag and also cancels all subsequent actions. 

> Returning a `string` displays the returned value as the `html` shown during dragging.


### Syntax

```
    onStartDrag : function(paramObject) {

    }
or
    sheet.bind("onStartDrag" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the drag was initiated|
|row|`object`|[Data row object](/docs/appx/row-object) of the cell where the drag started|
|col|`string`|Column name of the cell where the drag started|
|more|`boolean`|Whether multiple rows will be dragged|
|rows|`array[object]`|Array of [data row objects](/docs/appx/row-object) when multiple rows are dragged|
<!--!
|`[Private]` copy|`boolean`|Whether the drag operation is copying rows instead of moving them|
!-->

### Return
***mixed(`number` \| `string`)*** : When a string is returned, the cell drag object is replaced with the returned value


### Example
```javascript
options.Events = {
    onStartDrag:function(evtParam){
        // Cancel dragging if the row is newly added or if multiple rows are being dragged.
        if(evtParam.row["Added"] == 1 || evtParam.more) return true;
    }
}
```

### Read More

- [onEndDrag event](./on-end-drag)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.1.0.1|`-1` return feature added|
|core|8.1.0.14|`string` return feature added|
