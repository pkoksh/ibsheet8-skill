---
KEY: onIconClick
KIND: event
PATH: events/on-icon-click
ALIAS_EN: event, called, clicking, icon, within, cell, docs, props
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-icon-click
---
# onIconClick ***(event)***
> Event called when clicking the icon within a cell where the [Icon](/docs/props/col/icon) property value is set to an image URL.

> If the cell with [Icon](/docs/props/col/icon) set is not editable, this event is called not only when clicking the button but also when clicking inside the cell.

> Returning `1(true)` prevents events that fire after `onIconClick` among the events that can be triggered by the current click (e.g., [OnClickSide](/docs/props/event/on-click-side)).

### Syntax

```
    onIconClick : function(paramObject) {

    }
or
    sheet.bind("onIconClick" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|row|`object`|[Data row object](/docs/appx/row-object) where the cell is located|
|col|`string`|Column name of the cell|
|x|`number`|Mouse click x-coordinate within the icon|
|y|`number`|Mouse click y-coordinate within the icon|

### Return
***boolean***

### Example
```javascript
options.Cols = [
    {
        Header : "ID",
        Name: "sId",
        Type: "Text",
        Icon: "http://ibsheet.com/demo/images/11/s1.jpg"
    } ...
]

options.Events = {
    onIconClick:function(evtParam){
        // When clicking the icon in the sId column, open http://ibsheet.com/ibsheet_main.html in a new window.
        if (evtParam.col == "sId") {
           window.open('http://ibsheet.com/ibsheet_main.html');
        }
    }
}
```

### Read More

- [Icon col](/docs/props/col/icon)
- [OnClickSide event](/docs/props/event/on-click-side)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
