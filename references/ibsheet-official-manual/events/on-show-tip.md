---
KEY: onShowTip
KIND: event
PATH: events/on-show-tip
ALIAS_EN: event, called, tooltip, displayed, mouse, cursor, positioned, inside
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-show-tip
---
# onShowTip ***(event)***
> Event called when a tooltip is displayed as the mouse cursor is positioned inside a cell of the sheet.

> **This event always fires** even if [Tip](/docs/props/row/tip) is not configured on the sheet.

> If you want to change the tooltip value, return the desired string and that string will be displayed as the tooltip value.

> If you include \*Value\* in the returned string, the cell value will be substituted in place of \*Value\* in the tooltip.

> Returning an empty string ("") prevents the tooltip from being displayed on screen.

### Syntax

```
    onShowTip : function(paramObject) {

    }
or
    sheet.bind("onShowTip" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the tooltip will be displayed|
|row|`object`|[Data row object](/docs/appx/row-object) of the cell where the tooltip will be displayed|
|col|`string`|Column name of the cell where the tooltip will be displayed|
|tip|`string`|Value to be displayed in the tooltip|
|clientX|`number`|X coordinate of the mouse where the event occurred (browser-based)|
|clientY|`number`|Y coordinate of the mouse where the event occurred (browser-based)|
|X|`number`|X coordinate of the mouse where the event occurred (cell-based)|
|Y|`number`|Y coordinate of the mouse where the event occurred (cell-based)|

### Return
***string***

### Example
```javascript
options.Events = {
    onShowTip:function(evtParam){
        // Show different tooltip values per column.
        if(evtParam.col == "sTitle") {
            return "The movie name is *Value*!";
        } else if (evtParam.col == "sNum") {
            return "*Value* audience members watched this movie";
        }
    }
}
```

### Read More

- [Tip col](/docs/props/col/tip)
- [showTip method](/docs/funcs/core/show-tip)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
