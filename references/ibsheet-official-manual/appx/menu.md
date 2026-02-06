---
KEY: menu
KIND: appendix
PATH: appx/menu
ALIAS_EN: configures, appearance, content, context, menu, displayed, right, clicking
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/appx/menu
---
# Menu  ***(appendix)***
> Configures the appearance and content of the context menu displayed when right-clicking the mouse.

> For simple context menus, you can set them as delimiter-separated strings. (ex: Menu:"|Save|Cancel|Preview" )

> For more complex context menu structures, you need to configure them in json format.

> When a menu item is selected or the confirm button is clicked, you can check the selected content through the onSelectMenu event.


## Menu Properties
Properties set in Menu are divided into two main categories.
1. Properties for the menu object
2. Properties for specific items within the menu

```js
  {
    "Menu":{
      "Buttons":[ "Ok", "Cancel" ],
      "Items":[
        {"Name":"USA","Value":1,"Bool":1},
        {"Name":"Japan","Value":0,"Bool":1},
        {"Name":"China","Value":0,"Bool":1},
        {"Name":"North Korea","Value":1,"Bool":1}
      ],
      "OnSave":function(item,data) {
        alert("["+data.join(",")+"] has been selected.");
      }
    }
  }
```
![Menu feature](/assets/imgs/menuBasic.png)
<!-- IMAGE: Screenshot/Example Image - Menu feature -->



### 1. Properties for the Menu Object
|Name|Type|Description|
|---|---|---|
|*Items*|`array[object]`|Sets the items to be displayed in the menu as an array.|
|*Default*|`object`|Sets content to be commonly applied to all sub-item objects set within the Items array.
ex)
 //Set sub-items as checkbox format
Default:{ Bool:1 },   Items:[{}, {}, {}] |
|*SaveType*|`number`|Sets the value to be finally passed to the onSelectMenu event after selecting or modifying multiple items.
The returned values depending on the setting are as follows:
0 : Only non-empty items are returned. Items using the Bool property return the Name property when checked, and editable type items are returned in Name:Value format.
1 : Only modified items are returned. Items using the Bool property are returned in Name: 0, Name: 1 format, and editable type items are returned in Name: Value format.
2 : All values are returned. Items using the Bool property are returned in Name: 0, Name: 1 format, and editable type items are returned in Name: Value format.
3 : All values are returned. Items using the Bool property are returned in 0/1 format, and editable type items return only the Value.
4 : All values are returned. Items using the Bool property return ""(blank) for unchecked/Name for checked instead of 0/1, and editable type items return only the Value.|
|*Buttons*|`array[string]`|Sets buttons to be displayed at the bottom of the menu as an array. 
Available buttons are as follows:
"Ok": Return selected values
"Clear": Select all or deselect all for items using the Bool property
"Cancel": Ignore selected values and close the menu
ex)
"Buttons":[ "Ok", "Cancel" ]|
|*ExpandTime*|`number`|When displaying sub-items in tree format using the Level property, the sub-item menu automatically expands after the set time (in ms) when hovering over the parent item.
When set to 0, the sub-item menu is always shown expanded and no collapse icon is displayed. (default:200)|
|*CollapseOther*|`boolean`|When using tree format, when a user clicks a parent item to expand its sub-item menu, it automatically collapses the previously expanded sub-item menus of other parent items.(default:1)|
|*ShowHint*|`boolean`|When the menu is too small to show some content, hovering the mouse cursor expands the width of that item to show the hidden part.|

### 2. Properties for Specific Items within the Menu
|Name|Type|Description|
|---|---|---|
|*Name*
**Required**|`string`|Sets the name of each item. 
If the Text property is not set, the value set in Name is displayed in the item list.
If the Value property is not set, the value set in Name is passed.
 Name must be unique for each item.|
|*Text*|`string`|Sets the item text to be displayed in the menu. 
If the Text property is not set, the value set in Name is displayed in the item list.|
|*Value*|`string`|Sets the value to be passed when a specific item is selected.
If the Value property is not set, the value set in Name is passed.
However, when Bool:1 is used to place checkboxes on each item, the purpose changes completely and it is used as the initial selection state for the checkbox.|
|*Icon*|`string`|Sets the URL of the icon to be displayed to the left of the item text.|
|*IconWidth*|`number`|Sets the width of the icon object.|
|*LeftHtml*|`string`|Inserts a desired HTML object to the left of the item text.|
|*LeftWidth*|`number`|Sets the width of the left HTML object.|
|*RightHtml*|`string`|Inserts a desired HTML object to the right of the item text.|
|*RightWidth*|`number`|Sets the width of the right HTML object.|
|*Height*|`number`|Sets the minimum height of the item object. (If not set, it is automatically determined based on the content height.)|
|*Hidden*|`boolean`|Sets whether to hide a specific item object. 
If the item has child menus, they are all hidden as well.|
|*Disabled*|`boolean`|Disables a specific item. 
The item is visible but cannot be selected.|
|*Default*|`object`|Sets content to be commonly applied to all sub-item objects set within the Items array.
ex)
 //Apply the same Icon to sub-items.
Default:{ Icon:"./image/icon/bt.gif", IconWidth:24 },   Items:[{},{},{}] |
|*Caption*|`boolean`|Uses a specific item as a caption.
When this feature is set, the item cannot be selected.
<pre>Menu:{
  Items:[
    {Name:"N1",Text:"By Age",Caption:1},
    {Name:"N2",Text:"Light vehicle"},
    {Name:"N3",Text:"Adult"},
    {Name:"N4",Text:"Youth"},
    {Name:"N5",Text:"Child"}
  ] 
}</pre>
![Caption](/assets/imgs/menuCaption.png "Caption")
<!-- IMAGE: Screenshot/Example Image - Caption -->|
|*Items*|`array[object]`|Sets sub-item objects under a specific item.|
|*Level*|`boolean`|Displays sub-item objects in Tree format.
![Level](/assets/imgs/menuLevel.png "Level")
<!-- IMAGE: Screenshot/Example Image - Level -->|
|*Expanded*|`number`|Sets the expand/collapse state of an item when displaying items in Tree format using the Level property.
-1 : Expanded and cannot be collapsed
1 : Expanded and can be collapsed
0 : Collapsed
<b>This property is affected by the parent CollapseOther and ExpandTime properties.</b>|
|*Menu*|`boolean`|Displays sub-item objects as a menu to the right of the parent item.
![Menu](/assets/imgs/menuMenu.png "Menu")
<!-- IMAGE: Screenshot/Example Image - Menu -->|
|*Columns*|`number`|Displays sub-item objects divided into multiple columns.
<pre>Menu:{
  Items:[
    {
      Columns:2,
      Items:[
        {Name:"Security Strategy"},
        {Name:"Military Development"},
        {Name:"Defense Resources"}
      ] 
    }
  ]
}</pre>
![Columns](/assets/imgs/menuColumns.png "Columns")
<!-- IMAGE: Screenshot/Example Image - Columns -->
|*ColumnSizes*|`string`|Sets the number of items per column using "," as a delimiter.
For example, if Columns:3 and ColumnSizes:"3,2,4", it is displayed as follows:
![ColumnSizes](/assets/imgs/menuColumnSizes.png "ColumnSizes")
<!-- IMAGE: Screenshot/Example Image - ColumnSizes -->|
|*Bool*|`boolean`|Displays a checkbox to the right of the item text.
Items with this property applied will toggle the checkbox value when clicked.
All checked items are passed to the onSelectMenu event when clicking the "Ok" button through the Buttons property.
![Bool](/assets/imgs/menuBool.png "Bool")
<!-- IMAGE: Screenshot/Example Image - Bool -->|
|*Group*|`number`|Forms a Radio group among items using the Bool property so that only one item can be selected within the same group.
The Group value can be set to a number of 1 or greater.|
|*UnCheck*|`boolean`|Sets whether the Radio selection can be deselected for items using the Group property.|
|*GroupAll*
*CheckAll*|`number`
`boolean`|Among items using the Bool property, items with the same GroupAll property value will be checked together when the item with CheckAll set is checked.<pre>//When "All Fruits" item is selected, Apple, Pear, Orange items are also selected.
Menu:{
  Items:[
    {Name:"All Fruits",Bool:1,GroupAll:200,CheckAll:1},
    {Name:"Apple",Bool:1,GroupAll:200},
    {Name:"Pear",Bool:1,GroupAll:200},
    {Name:"Orange",Bool:1,GroupAll:200},
  ] 
}</pre>|
|*NoAll*|`boolean`|The set item will not be affected by the "Deselect All (Clear)/Select All (All)" buttons.|
|*Enum*|`boolean`|Sets whether to display sub-items as a combo box to the right of the parent item.
![Enum](/assets/imgs/menuEnum.png "Enum")
<!-- IMAGE: Screenshot/Example Image - Enum -->|
|*Edit*|`boolean`|Displays an editable input object to the right of the item text.
When {Name:"Name",Edit:1,Width:150} is set:
![Edit](/assets/imgs/menuEdit.png "Edit")
<!-- IMAGE: Screenshot/Example Image - Edit -->|
|*Width*|`number`|Sets the width of the combo box when using the Enum property.
Sets the width of the input object when using the Edit property.|
|*Left*|`boolean`|Positions the checkbox on the left when using the Bool property.
Positions the combo box on the left when using the Enum property.
Positions the input object on the left when using the Edit property.|
---

## Menu Events
In addition to the global onShowMenu and onSelectMenu events, each menu can have its own events.
Events set on menus are also divided into global events and events set on specific items, just like properties.

### 1. Menu-wide Events

#### OnSave
Triggered when a menu item is selected or the confirm button is clicked. (Triggered after the menu closes)
1. When a specific item is clicked
The clicked item object is passed in the item argument, and you can check the value through the Name/Value properties.
data contains null.
2. When clicking the confirm button after modifying editable items
The item argument is null, and the data argument contains an array of selected item values.

|Argument|Type|Description|
|---|---|---|
|item|`object`|Item object selected from the menu|
|data|`array`|Values of items selected from the menu|

#### OnButton
Triggered when a bottom button is clicked.

Triggered before OnSave.

Returning false can prevent post-processing for the button click.

|Argument|Type|Description|
|---|---|---|
|button|`string`|Selected button string|


### 2. Individual Item Events
#### OnClick
Triggered when a specific menu item is clicked.

Various features can be assigned depending on the return value.

* When returning false: All features that occur after clicking the item are not executed, and you can continue browsing the menu.
* When returning true: All features that occur after clicking the item are not executed, and the menu closes.
* When returning null: The default action from the click (menu item selection) is executed.

Inside the event, the clicked item (MenuItem) is bound to this (for item Name, access via this.Name).

Through this.Owner, you can access the entire menu object that contains the item, and the parent item or menu can be accessed via this.Parent.

When the menu is created from a sheet cell, you can access the sheet, row, and column where the menu was created via this.Owner.Sheet, this.Owner.Row, this.Owner.Col.


#### OnChanged
Triggered when there is a change in editable type items (using Bool, Enum, Edit properties). (Triggered before the change is applied)

Items can access the entire menu that contains them through the Owner(Menu) property.

Inside the event, the clicked item (MenuItem) is bound to this (for item Name, access via this.Name, and the original value via this.Value).

Through this.Owner, you can access the entire menu object that contains the item, and the parent item or menu can be accessed via this.Parent.

When the menu is created from a sheet cell, you can access the sheet, row, and column where the menu was created via this.Owner.Sheet, this.Owner.Row, this.Owner.Col.

A Value must be returned for the value to be set, and this.Value must be returned to ignore the change.

---

## Example
```js
{
  Menu:{
    Buttons:["Ok","Cancel"],
    Items:[
      {
      Menu:1,
      Name:"Fruit",
        Items:[
          {Name:"Fruit Name",Caption:1},
          {Name:"Apple",Bool:1},
          {Name:"Pear",Bool:1},
          {Name:"Orange",Bool:1}
        ]
      },
      {
        Enum:1,
        Name:"Vegetable",
        Items:[
          {Name:"Carrot"},
          {Name:"Cucumber"},
          {Name:"Eggplant"},
          {Name:"Tomato"}
        ]
      },
      {
        Level:1,
        Expanded:1,
        Default:{OnClick:ItemClickHandler},
        Name:"Wild Greens",
        Items:[
          {Name:"Bellflower Root"},
          {Name:"Deodeok"},
          {Name:"Water Parsley"}
        ]
      }
    ],
    OnButton:function(button){
      if(button == "Cancel"){
        if(!confirm("Are you sure you want to cancel?")){
          return false;
        }
      }
    }
  }
}
```
![Menu](/assets/imgs/menu.png "Menu")
<!-- IMAGE: Screenshot/Example Image - Menu -->


### Read More
- [Menu row](/docs/props/row/menu)
- [EnumMenu col](/docs/props/col/enum-menu)
- [Menu col](/docs/props/col/menu)
- [EnumMenu row](/docs/props/row/enum-menu)
- [Menu cell](/docs/props/cell/menu)
- [onSelectMenu event](/docs/events/on-select-menu)
- [onShowMenu event](/docs/events/on-show-menu)
- [showMenu static](/docs/static/show-menu)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
