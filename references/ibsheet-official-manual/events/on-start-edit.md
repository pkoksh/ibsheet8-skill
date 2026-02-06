---
KEY: onStartEdit
KIND: event
PATH: events/on-start-edit
ALIAS_EN: event, called, cell, editing, starts, onstartedit
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-start-edit
---
# onStartEdit ***(event)***
> Event called when cell editing starts.

> Also called when the type ([Type](/docs/props/col/type)) is `Enum`. Not called when the type is `Radio` or `Bool`.

> Returning `1(true)` prevents the cell from being edited.

### Syntax

```
    onStartEdit : function(paramObject) {

    }
or
    sheet.bind("onStartEdit" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object that will enter edit mode|
|row |`object`|[Data row object](/docs/appx/row-object) of the cell that will enter edit mode|
|col |`string`|Column name of the cell that will enter edit mode|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onStartEdit:function(evtParam){
        // If the column of the cell entering edit mode is sCount (quantity) and the sSale column cell value of the current row is "Not for Sale", prevent cell editing.
        if (evtParam.col == "sCount" && evtParam.row["sSale"] == "Not for Sale") {
            return true;
        }
    }
}
```

### Read More

- [Enum col](/docs/props/col/enum)
- [onEndEdit event](./on-end-edit)
- [onShowEdit event](./on-show-edit)
- [onAfterEdit event](./on-after-edit)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
