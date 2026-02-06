---
KEY: showPopupMenu
KIND: method
PATH: funcs/core/show-popup-menu
ALIAS: sheet.showPopupMenu, showPopupMenu()
ALIAS_EN: displays, context, menu, mouse, cursor, position, showpopupmenu, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/show-popup-menu
---
# showPopupMenu ***(method)***
> Displays a context menu at the mouse cursor position.

> This has the same feature as static [showMenu](/docs/static/show-menu), with the difference that the sheet object that made the call can be obtained in the `callback` event.

###
![showPopupMenu](/assets/imgs/showPopupMenu.png "Displays context menu at mouse cursor position")
<!-- IMAGE: Screenshot/Example Image - showPopupMenu -->


### Syntax
```javascript
void showPopupMenu( menu, func );
```

### Parameters


|Name|Type|Required| Description |
|----------|-----|---|----|
|menu|`object`|Required|`JSON object` for context menu configuration|
|func|`function`|Optional|`callback` function called when user selects from the context menu|

### Return Value
***none***

### Example
```javascript
// Display context menu when right-clicking anywhere on screen.
$(document).ready(function(){
    // Mouse right click event
    document.oncontextmenu = function(evt){
	evt.preventDefault();
        // Menu structure
	var menu = {
      Items : [ // Items form a tree structure within the menu.
        { Text:'Approval document renewal',Name:"A01"},
        { Text:'Approval document temporary save',Name:"A02"},
        { Text:'Approval document discard/delete',Name:"A03"}
            ]
	};
    // Display context menu.
	sheet.showPopupMenu( menu , function(str){
	    switch(str.Name){
                case "A01":
        // Renewal operation
                break;
                case "A02":
        // Temporary save operation
                break;
                case "A03":
        // Discard/delete operation
                break;
            }//end swicth
	});
	return false;
    }//end oncontextmenu
});//end ready
```

### Read More

- [closeDialog method](./close-dialog)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
