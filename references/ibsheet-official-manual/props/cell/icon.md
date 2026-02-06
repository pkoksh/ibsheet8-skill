---
KEY: icon
KIND: cell-property
PATH: props/cell/icon
ALIAS_EN: feature, displays, desired, icon, image, checkbox, button, left
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/icon
---
# Icon ***(cell)***
> A feature that displays a desired icon image, checkbox, or button on the left side of a cell. 

> Similar to the [Button](./button) property which displays a button on the right side of the cell.

> Cannot be used when the column type is `Button`.

###
![Icon property](/assets/imgs/Icon1.png "Icon property")
<!-- IMAGE: Icon Image - Icon property -->
[Figure 1]

![Icon property](/assets/imgs/Icon2.png "Icon property")
<!-- IMAGE: Icon Image - Icon property -->
[Figure 2]


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Clear`|A button for clearing cell content is displayed on the left side of the cell.|
|`Date`|A calendar icon is shown on the left side of the cell. The calendar is displayed when clicked only if the column type is "Date". See [Figure 2]|
|`Check`|A checkbox is displayed on the left side of the cell.|
|`Empty string`|Hides the Icon image that would normally be shown.|
|`Other`|If you enter a URL to an image file, the image will be displayed as the icon background. See [Figure 1]
(Only gif, png, jpg images are supported)|
<!--!
|`[Private]` `Expand`|A button for collapse/expand functionality is displayed.|
!-->

*You can set the width of the icon area through the [IconWidth](../col/icon-width) property.
The [onIconClick](/docs/events/on-icon-click) event is triggered when clicking the icon.
Setting `"Clear"` or `"Check"` will only trigger the [OnClickSide](/docs/props/event/on-click-side) event.*


### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Icon", "Clear");


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSIcon"] = "Check";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    "data":[
        {... , "CLSIcon":"/images/popIcon.gif", ...}
    ]
}

//4. Apply property within loaded data (column name: CLS)
{
    "data":[
        {... , "ClsIcon":"Check", "CLSChecked":1, ...}
    ]
}
```

### Read More

- [IconWidth cell](./icon-width)
- [Button cell](./button)
- [Checked cell](/docs/props/cell/checked)
- [Icon col](../col/icon)
- [IconWidth col](../col/icon-width)
- [setIconCheck method](/docs/funcs/core/set-icon-check)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
