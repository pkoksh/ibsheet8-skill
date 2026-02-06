---
KEY: showMenu
KIND: method
PATH: funcs/core/show-menu
ALIAS: sheet.showMenu, showMenu()
ALIAS_EN: displays, context, menu, specific, cell, position, showmenu, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/show-menu
---
# showMenu ***(method)***
> Displays a context menu at a specific cell position.


###
![Context menu](/assets/imgs/showMenu.png "Displays context menu at mouse cursor position")
<!-- IMAGE: Screenshot/Example Image - Context menu -->


### Syntax
```javascript
mixed showMenu( row, col, menu, pos, func, init, always, cursor );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|Required|[data row object](/docs/appx/row-object)|
|col |`string`|Required|column name|
|menu|`object`|Required|JSON object for context menu configuration|
|pos|`object`|Optional|Position of the menu to be displayed ([Position appendix Reference](/docs/appx/position))|
|func|`function`|Optional|`callback` function called when user selects from the context menu|
|init|`array[string]`|Optional|Initial value settings for Enum, Edit, Bool type items in the menu
 Bool : Array of menu item Names to display as checked
 - ex) ["aa","bb"] Displays checkboxes for Name aa, bb as checked.
Edit, Bool : key-value string array of menu item Name and Value 
 - ex) ["aa:1","bb:2"] Displays items with Name aa, bb with values 1,2 respectively on screen.|
|always|`boolean`|Optional|Whether to continue showing the menu if it is already displayed
`0(false)`:Toggle context menu Visible/Hidden (`default`)
`1(true)`:Context menu always Visible|
|cursor|`boolean`|Optional|Whether to focus on the corresponding menu when the menu's `Value` matches the cell value
`0(false)`:Do not trigger focus (`default`)
`1(true)`:Trigger focus on the corresponding menu when `Value` matches cell value

**<mark>Note</mark> : This feature cannot be used together with the `init` feature. When the `init` feature is used, the `cursor` feature is ignored.**


### Return Value
***mixed( `object` )***

Returns the menu object when the menu appears (ex: {Items:[...],Names:[...]})

Returns `null` when the menu does not appear (when an already opened menu is closed)

### Example
```javascript
function popup(){
	// Menu structure
	var menu = {
		Items : [ // Items form a tree structure within the menu.
			{ Text:'Approval document renewal',Name:"A01"},
			{ Text:'Approval document temporary save',Name:"A02"},
			{ Text:'Approval document discard/delete',Name:"A03"}
		]
	};
	// Display context menu on a specific cell.
	sheet.showMenu( {
	    row:sheet.getRowById("AR2"),
	    col:"image02",
	    menu:menu,
	    func:function(evt){
	        if(evt.Name == "A01"){
	      // Renewal operation
	        }
	    }
	});
}

```

### Read More

- [Menu appendix](/docs/appx/menu)
- [closeDialog method](./close-dialog)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.1.0.9|`cursor` Feature added|
