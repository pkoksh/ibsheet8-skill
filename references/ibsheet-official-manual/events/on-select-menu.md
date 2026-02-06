---
KEY: onSelectMenu
KIND: event
PATH: events/on-select-menu
ALIAS_EN: event, called, menu, item, sheet, configured, docs, props
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-select-menu
---
# onSelectMenu ***(event)***
> Event called when a menu item from the sheet's configured menu ([Menu](/docs/props/col/menu)) is clicked upon right-clicking.

> **Not called when clicking a menu created by the [showMenu](/docs/funcs/core/show-menu) method.**


### Syntax

```
    onSelectMenu : function(paramObject) {

    }
or
    sheet.bind("onSelectMenu" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the menu is displayed|
|row|`object`|[Data row object](/docs/appx/row-object) of the cell where the menu is displayed|
|col|`string`|Column name of the cell where the menu is displayed|
|result|`string`|Selected item from the menu (the item's Value, or Name if Value is not declared)|

### Return
***none***


### Example
```javascript
options.Cfg = {
    // Previously configured menu
    Menu: {
        Items: [
            { Name: "title", Text: "Shortcut", Value:"0" },
            { Name: "title1", Text: "Shortcut1", Value:"1" },
            { Name: "title2", Text: "Shortcut2", Value:"2" },
            { Name: "title3", Text: "Shortcut3", Value:"3" },
            { Name: "title4", Text: "Shortcut4", Value:"4" }
        ] ;
    }
}

options.Events = {
    onSelectMenu:function(evtParam){
        // Change the cell value with the selected value from the menu
        evtParam.sheet.setValue({row: evtParam.row, col: evtParam.col, val: evtParam.result, render: 1});
        evtParam.sheet.refreshRow(evtParam.row);
    }
}
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
