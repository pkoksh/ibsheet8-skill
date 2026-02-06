---
KEY: onShowHint
KIND: event
PATH: events/on-show-hint
ALIAS_EN: event, called, hint, displayed, screen, onshowhint
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-show-hint
---
# onShowHint ***(event)***
> Event called when a hint is displayed on screen.

> If you want to change the hint value, return a custom `hint` value (default is the cell value).

### Syntax

```
    onShowHint : function(paramObject) {

    }
or
    sheet.bind("onShowHint" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the hint will be displayed|
|row|`object`|[Data row object](/docs/appx/row-object) of the cell where the hint will be displayed|
|col|`string`|Column name of the cell where the hint will be displayed|
|hint|`object`|Hint value to be displayed on screen|
|reason|`number`|Reason why the hint is displayed
`1`:When the cell content width is larger than the cell width
`2`:When the cell content height is larger than the cell height
`3`:When the cell content width/height is larger than the cell width/height|

### Return
***string***

### Example
```javascript
options.Events = {
    onShowHint:function(evtParam){
        // When a hint is shown for a cell with column name sTitle and the cell content is 5 characters or more, show the hint as "first 5 characters..." format.
        if(evtParam.col == "sTitle" && evtParam.hint.length >= 5) {
            return evtParam.hint.slice(0,5) + "...";
        }
    }
}
```

### Read More

<!--!
- `[Private]` [HintValue col](/docs/props/col/hint-value) Value set on cell, col, or row
!-->
- [showHint method](/docs/funcs/core/show-hint)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
