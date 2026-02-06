---
KEY: button
KIND: column-property
PATH: props/col/button
ALIAS_EN: feature, displays, desired, icon, image, checkbox, button, right
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/button
---
# Button ***(col)***
> A feature that displays a desired icon image, checkbox, or button on the right side of a cell. 

> When the column [Type](/docs/appx/type) is `Date` or `Enum`, a calendar or dropdown-shaped button is displayed regardless of the setting.

> *To set a button on the left side of a cell, check the [Icon](./icon) property.*

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

![Button property](/assets/imgs/buttonDefaults.png "Button property")
<!-- IMAGE: Button Image - Button property -->
[Figure 4]



### Type
`string`

### Options
**When the column Type is not Button**

|Value|Description|
|-----|-----|
|`Button`|Displays the text set through the [ButtonText](./button-text) property using a \<u> tag.|
|`Clear`|Displays a button for clearing the cell content on the right side of the cell. See [Figure 1]|
|`Check`|Displays a checkbox on the right side of the cell. See [Figure 2]|
|`Html`|Displays the desired HTML tag set through the [ButtonText](./button-text) property on the right side of the cell.|
|`empty string`|Hides the button image that would normally be displayed.
 For example, `Date` type columns display a calendar button by default, and this property can be used to hide it.|
|`other`|If you enter a URL to an image file, the image is displayed as the background of the button cell. See [Figure 3]
(Only gif, png, jpg images are supported / onButtonClick event is triggered on click)|
|`Defaults`|Displays a [Defaults](./defaults) button on the right side of the cell. See [Figure 4]|
<!--!
|`[Private]` `Expand`|Displays a button for collapse/expand functionality.|
!-->


***When using Html or image buttons, the button width can be set through the [WidthPad](./width-pad) property.***


**When the column Type is Button**

|value|desc|
|---|---|
|`Button`|Displays as a regular button. 
Depending on the value of the [UseButton](/docs/props/cfg/use-button) property, the cell value is rendered as a \<u> tag or \<button> tag.|
|`Html`|Set the property to `Html` and use the cell value in `Html` format. (ex: <div class="button>Button\</div>)|
<!--!
|`[Private]` `Class`|Applies a custom CSS class to the cell.
For example, if you use the default theme and set the `Button property` value to "Class" and the [ButtonClass](./button-class) property value to "CUST_BTN",
the actual class of the cell will be set to **IBToolCUST_BTN**.|
!-->

### Example
```javascript
options.Cols = [
    ...
    // Display a checkbox on the right side of the cell
    {Type: "Text", Name: "product_name", Button: "Check", Width: 120 ...},
    // Add an image button on the right side of the cell
    {Type: "Text",  Name: "brnSaleAmt", Button: "/pcd/img/popIcon.png", Width: 120 ...},
    ...
    // Set the type to Button
    {Type: "Button", Name: "btn_type", ButtonText: "Btn", Width: 120, "WidthPad": 50 ...},
    ...
];
```

### Try it
- [Demo of Button](https://portal.ibsheet.com/ko/support/solutions/articles/72000650961-셀-우측-버튼-button-속성-사용-방법)

### Read More
- [WidthPad col](./width-pad)
- [ButtonText col](./button-text)
- [Defaults col](./defaults)
- [UseButton cfg](/docs/props/cfg/use-button)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
