---
KEY: onShowCol
KIND: event
PATH: events/on-show-col
ALIAS_EN: event, called, column, shown, hidden, onshowcol
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-show-col
---
# onShowCol ***(event)***
> Event called when a column is shown or hidden.

> Returning `1(true)` prevents the show/hide action for the column and maintains the current state.

<!--!
> `[Private description]` This event is called when the showCol or hideCol methods are executed.
!-->

### Syntax

```
    onShowCol : function(paramObject) {

    }
or
    sheet.bind("onShowCol" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|col|`string`|Column name that will be shown or hidden on screen|
|hide|`boolean`|Hidden status
`0(false)`:Shown
`1(true)`:Hidden|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onShowCol:function(evtParam){
        // Prevent the "privacy" column from being shown
        if (evtParam.hide == "0" && evtParam.col == "privacy") {
            return true;
        }
    }
}
```

### Read More

- [showCol method](/docs/funcs/core/show-col)
- [hideCol method](/docs/funcs/core/hide-col)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
