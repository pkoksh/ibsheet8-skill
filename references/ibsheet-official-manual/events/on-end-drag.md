---
KEY: onEndDrag
KIND: event
PATH: events/on-end-drag
ALIAS_EN: event, called, moment, dragged, row, dropped, onenddrag
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-end-drag
---
# onEndDrag ***(event)***
> Event called at the moment when dragged row(s) are dropped.

> The return value can determine whether drag and drop is possible and the drop position (the values that can be returned are the same as the type parameter).

### Syntax

```
    onEndDrag : function(paramObject) {

    }
or
    sheet.bind("onEndDrag" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the dragged rows were originally located|
|row|`object`|Original [data row object](/docs/appx/row-object) of the dragged rows|
|tosheet|`object`|Sheet object where the rows were dropped|
|torow|`object`|[Data row object](/docs/appx/row-object) that serves as the reference for where the rows will be placed when dropped|
|type|`number`|Information about whether drag and drop is possible and the drop position
`0`:Cannot drag and drop
`1`:Drop above the `torow` [data row object](/docs/appx/row-object) (also applies when the target sheet has no data)
`2`:If `tosheet` is a tree/group, drop as a child node of the `torow` [data row object](/docs/appx/row-object)
`3`:Drop below the `torow` [data row object](/docs/appx/row-object)
`4`:Dropped on an area outside the sheet where drag and drop is not possible|
|x|`number`|x-coordinate of the mouse cursor when dropping (browser-based)|
|y|`number`|y-coordinate of the mouse cursor when dropping (browser-based)|
|rows|`array[object]`|Array of [data row objects](/docs/appx/row-object) when multiple rows are dragged and dropped|
<!--!
|`[Private]` copy|`boolean`|Whether the drag and drop action will be a copy rather than a move|
!-->

### Return
***number***

### Example
```javascript
options.Events = {
    onEndDrag:function(evtParam){
        // Cancel drag and drop between different sheet objects.
        if(evtParam.sheet == evtParam.tosheet) return 0;
    }
}
```

### Read More

- [onStartDrag event](./on-start-drag)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.3.0.28|type:4 feature added|
