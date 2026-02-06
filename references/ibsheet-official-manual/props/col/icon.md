---
KEY: icon
KIND: column-property
PATH: props/col/icon
ALIAS_EN: feature, displays, desired, icon, image, checkbox, button, left
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/icon
---
# Icon ***(col)***
> A feature that displays a desired icon image, checkbox, or button on the left side of a cell. 

> Similar to the [Button](/docs/props/col/button) property that displays a button on the right side of a cell.

> Cannot be used when the column type is `Button`.


###

![Icon property](/assets/imgs/Icon2.png "Icon property")
<!-- IMAGE: Icon Image - Icon property -->
[Figure 1]

![Icon property](/assets/imgs/Icon1.png "Icon property")
<!-- IMAGE: Icon Image - Icon property -->
[Figure 2]

![Icon property](/assets/imgs/iconDefaults.png "Icon property")
<!-- IMAGE: Icon Image - Icon property -->
[Figure 3]


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Clear`|Displays a button for clearing the cell content on the left side of the cell.|
|`Date`|Displays a calendar icon on the left side of the cell. A calendar is shown on click only when the column type is `Date`. See [Figure 1]|
|`Check`|Displays a checkbox on the left side of the cell.|
|`empty string`|Hides the `Icon` image that would normally be displayed.|
|`other`|If you enter a URL to an image file, the image is displayed as the icon background. See [Figure 2]
(Only `gif, png, jpg` images are supported)|
|`Defaults`|Displays a [Defaults](./defaults) button on the left side of the cell. See [Figure 3]|
<!--!
|`[Private]` `Expand`|Displays a button for collapse/expand functionality.|
!-->


*You can set the width of the icon area through the [IconWidth](/docs/props/col/icon-width) property.
When the icon is clicked, the [onIconClick](/docs/events/on-icon-click) event is triggered.
When set to `"Clear"` or `"Check"`, only the [OnClickSide](/docs/props/event/on-click-side) event is triggered.*


### Example

```javascript
options.Cols = [
    ...
    // Display a checkbox on the left side of the cell
    {Type: "Text", Name: "product_name", Icon: "Check", Width: 120 ...},
    // Add an image button on the left side of the cell
    {Type: "Text", Name: "brnSaleAmt", Icon: "/pcd/img/popIcon.png", IconWidth: 15, Width: 120 ...},
    ...
];

// 4. When using Icon:"Check", to check in retrieved data (column name: CLS)
{
    "data": [
        {... , "CLSChecked": 1 , ...}
    ]
}
```
### Try it
- [Demo of Icon](https://portal.ibsheet.com/ko/support/solutions/articles/72000650962-셀-좌측-버튼-icon-속성-사용-방법)

### Read More

- [IconWidth col](/docs/props/col/icon-width)
- [Button col](/docs/props/col/button)
- [Defaults col](./defaults)
- [Checked cell](/docs/props/cell/checked)
- [Icon cell](/docs/props/cell/icon)
- [IconWidth cell](/docs/props/cell/icon-width)
- [setIconCheck method](/docs/funcs/core/set-icon-check)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
