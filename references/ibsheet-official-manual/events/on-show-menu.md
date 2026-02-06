---
KEY: onShowMenu
KIND: event
PATH: events/on-show-menu
ALIAS_EN: event, called, menu, configured, sheet, displayed, screen, upon
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-show-menu
---
# onShowMenu ***(event)***
> Event called when the menu configured in the sheet is about to be displayed on screen upon right-clicking a cell.

> **Not called by the [showMenu](/docs/funcs/core/show-menu) method.**

> Returning `1(true)` prevents the configured menu from being displayed on screen.

### Syntax

```
    onShowMenu : function(paramObject) {

    }
or
    sheet.bind("onShowMenu" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the menu will be displayed|
|row|`object`|[Data row object](/docs/appx/row-object) of the cell where the menu will be displayed|
|col|`string`|Column name of the cell where the menu will be displayed|
|menu|`object`|Object containing the configuration for the menu to be displayed on screen|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onShowMenu:function(evtParam){
        // Do not display the menu on screen when the column name is preTaskId.
        if (evtParam.col === "preTaskId") return true;
    }
}
```

### Read More

- [onReadMenu event](./on-read-menu)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
