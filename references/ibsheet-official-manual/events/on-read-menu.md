---
KEY: onReadMenu
KIND: event
PATH: events/on-read-menu
ALIAS_EN: event, called, menu, configured, sheet, displayed, screen, right
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-read-menu
---
# onReadMenu ***(event)***
> Event called before the menu configured in the sheet is displayed on screen when right-clicking.

> **Not called by the [showMenu](/docs/funcs/core/show-menu) method.**

> You can return a new menu as a string or object to use (replaces the existing menu if one is configured).

### Syntax

```
    onReadMenu : function(paramObject) {

    }
or
    sheet.bind("onReadMenu" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the menu will be displayed|
|row|`object`|[Data row object](/docs/appx/row-object) of the cell where the menu will be displayed|
|col|`string`|Column name of the cell where the menu will be displayed|
|menu|`object`|Object containing the configuration for the menu to be displayed on screen|

### Return
***mixed( `string` \| `object` )***

### Example
```javascript
options.Cfg = {
    // Previously configured menu
    Menu: {
        Items: [
            { Name: "before", Text: "Previous" },
            { Name: "after", Text: "Next" },
            { Name: "now", Text: "Now" }
        ]
    }
}

options.Events = {
    onReadMenu:function(evtParam){
        // When the column name is sTitle, use a new menu instead of the existing one.
        if(evtParam.col == "sTitle") {
            var M = { Items: [
                { Name: "title", Text: "Shortcut" },
                { Name: "title1", Text: "Shortcut1" },
                { Name: "title2", Text: "Shortcut2" },
                { Name: "title3", Text: "Shortcut3" },
                { Name: "title4", Text: "Shortcut4" }
                ] };

            return M;
        }
    }
}
```

### Read More
- [onShowMenu event](./on-show-menu)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
