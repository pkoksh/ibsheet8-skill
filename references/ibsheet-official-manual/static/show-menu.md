---
KEY: showMenu
KIND: static-member
PATH: static/show-menu
ALIAS_EN: displays, context, menu, desired, position, showmenu, static
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/static/show-menu
---
# showMenu ***(static)***

> Displays a context menu at the desired position. 

> Returns the created menu object.

### Syntax
```javascript
void IBSheet.showMenu(menu, pos, func, init);
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|menu|`object`|Required|Menu object to be displayed as a context menu (Refer to [Menu appendix](/docs/appx/menu))|
|pos|`object`|Optional|Position where the menu will be displayed (Refer to [Position appendix](/docs/appx/position))|
|func|`function`|Optional|Callback function when an `item` is selected or a button is clicked within the menu (Refer to [OnSave in Menu appendix](/docs/appx/menu))|
|init|`array[string]`|Optional|Initialization values when using `Bool, Enum, Edit` within the menu
ex:
For `Bool`, pass `Name` values as an array like ["confirm", "reject"] to check them
For `Enum`, enter as "name: value" format like ["country: 1"]
For `Edit`, enter like ["inp1:Please enter the reason"]|

### Return Value
***object***

### Example
```javascript
// Display a context menu below a specific button when clicked
document.getElementById("btnConfirm").addEventListener("click", function(){
    var menu = {
      Items: [
            {Text: "Approval Tasks", Caption: 1},
            {Name: "confirmAll", Text: "Full Approval", Bool: 1, Group: 1},
            {Name: "confirm", Text: "Approve", Bool: 1, Group: 1},
            {Name: "reject", Text: "Reject", Bool: 1, Group: 1},
            {Name: "pendding", Text: "Hold", Bool: 1, Group: 1}
        ]
    };
    pos = {"Tag": "btnConfirm"};
    IBSheet.showMenu(menu, pos, function(item,data){
		if (item.Name == "confirmAll") {
			// Full approval process..
		} else if (item.Name == "confirm") {
			// Approval process..
		}
    }, ["confirm"]);
},false);

```
### Read More

- [Menu appendix](/docs/appx/menu)
- [Position appendix](/docs/appx/position)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
