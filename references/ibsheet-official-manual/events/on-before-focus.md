---
KEY: onBeforeFocus
KIND: event
PATH: events/on-before-focus
ALIAS_EN: event, called, cell, sheet, focused, onbeforefocus
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-before-focus
---
# onBeforeFocus ***(event)***
> Event called before a cell in the sheet is focused.

> Returning `1(true)` prevents the focus from moving.

### Syntax

```
    onBeforeFocus : function(paramObject) {

    }
or
    sheet.bind("onBeforeFocus" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object containing the focused cell|
|row|`object`|[Data row object](/docs/appx/row-object) where the focused cell is located|
|col|`string`|Column name where the focused cell is located|
|orow|`object`|[Data row object](/docs/appx/row-object) where the previously focused cell was located|
|ocol|`string`|Column name where the previously focused cell was located|
|rect|`array[object]`|Focused area when multiple cells are focused|
|orect|`array[object]`|Area when multiple cells were previously focused|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onBeforeFocus: function (evtParam) {
        if (!confirm('Cell content: "' + evtParam.sheet.getString({row :evtParam.row, col: evtParam.col}) + '"\nDo you want to focus?')) {
          return true;
        }
    }
}
```

### Read More
- [focus method](/docs/funcs/core/focus)
- [onFocus event](/docs/events/on-focus)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.6|Feature added|
