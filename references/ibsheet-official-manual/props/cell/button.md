---
KEY: button
KIND: cell-property
PATH: props/cell/button
ALIAS_EN: feature, displays, desired, icon, image, checkbox, button, right
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/button
---
# Button ***(cell)***
> A feature that displays a desired icon image, checkbox, or button on the right side of a cell. 

> When the column [Type](/docs/appx/type) is `Date` or `Enum`, a calendar or dropdown-shaped button is displayed regardless of this setting.

>
> When the column type is `Button`, it operates as a feature for the cell button.

> *To set a button on the left side of a cell, check the [Icon](/docs/props/cell/icon) property.*

###
![Button property](/assets/imgs/button1.png "Button property")
<!-- IMAGE: Button Image - Button property -->
[Figure 1]


![Button property](/assets/imgs/button2.png "Button property")
<!-- IMAGE: Button Image - Button property -->
[Figure 2]


![Button property](/assets/imgs/button3.png "Button property")
<!-- IMAGE: Button Image - Button property -->
[Figure 3]




### Type
`string`

### Options
**When the column Type is not Button**

|Value|Description|
|-----|-----|
|`Clear`|A button for clearing cell content is displayed on the right side of the cell. See [Figure 1]|
|`Check`|A checkbox is displayed on the right side of the cell. See [Figure 2]|
|`Html`|Set the desired HTML tag using the [ButtonText](/docs/props/cell/button-text) property, and it will be displayed on the right side of the cell.|
|`Empty string`|Hides the button image that would normally be shown.
 For example, Date type columns show a calendar button by default, and this property can be used to hide the button.
|`Other`|If you enter a URL to an image file, the image will be displayed as the button background. See [Figure 3]
(Only gif, png, jpg images are supported / `onButtonClick event` is triggered on click)|
<!--!
|`[Private]` `Expand`|A button for collapse/expand functionality is displayed.|
!-->


**When the column Type is Button**

|value|desc|
|---|---|
|`Button`|Displays as a standard button form. 
Depending on the value of [UseButton](/docs/props/cfg/use-button), the cell value is wrapped in a \<u> tag or \<button> tag.|
|`Html`|Set the property to `Html` and use the cell value in `Html` format. (e.g., <div class="button>Button\</div>)|
<!--!
|`[Private]` `Class`|Applies a custom CSS Class to the cell.
For example, if using the default theme with Button property value set to `Class` and [ButtonClass](/docs/props/cell/button-class) value set to "CUST_BTN",
the actual class of the cell will be set to **IBToolCUST_BTN**.|
!-->

### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Button", "Clear");


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSButton"] = "/images/alBtn.gif";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {..., "CLSButton":"Check", ...}
    ]
}
```

### Read More

- [Type appendix](/docs/appx/type)
- [ButtonText cell](/docs/props/cell/button-text)
- [UseButton cfg](/docs/props/cfg/use-button)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
