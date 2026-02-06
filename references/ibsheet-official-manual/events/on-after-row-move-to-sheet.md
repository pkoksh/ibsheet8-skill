---
KEY: onAfterRowMoveToSheet
KIND: event
PATH: events/on-after-row-move-to-sheet
ALIAS_EN: event, called, moving, rows, different, sheets, drag, drop
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-after-row-move-to-sheet
---
# onAfterRowMoveToSheet ***(event)***
> Event called when moving rows between different sheets (drag and drop).

> This event is only called from the sheet where the row was located before the move (not fired from the target sheet).

> Depending on the return result, it determines whether to delete (change row to deleted status)/remove (completely remove the row)/keep (treat as row copy) the row from the original sheet when moving.

> Returning `0(false)` treats it as a row move and deletes the row from the original sheet.

> Returning `1(true)` treats it as a row copy and keeps the row in the original sheet.

> Returning `-1` treats it as a row move and removes the row from the original sheet.

### Syntax
```
    onAfterRowMoveToSheet : function(paramObject) {

    }
or
    sheet.bind("onAfterRowMoveToSheet" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the row to be moved is located|
|row|`object`|[Data row object](/docs/appx/row-object) of the row to be moved|
|tosheet|`object`|Target sheet object where the row will be moved to|
|torow|`object`|[Data row object](/docs/appx/row-object) of the newly created row after moving (exists in `tosheet`)|
|copy|`boolean`|Whether the drag and drop action was a copy rather than a move
`0(false)`:Move
`1(true)`:Copy|

### Return
***number***

### Example
```javascript
options.Events = {
    onAfterRowMoveToSheet:function(evtParam){
        // You can handle the row from the original sheet differently depending on the target sheet.
        if (evtParam.tosheet == Sheet1) return 1;
        else if (evtParam.tosheet == Sheet2) return -1;
        else return 0;
    }
}
```

### Read More

- [onStartDrag event](./on-start-drag)
- [onEndDrag event](./on-end-drag)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
