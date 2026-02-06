---
KEY: boolIcon
KIND: cell-property
PATH: props/cell/bool-icon
ALIAS_EN: check, uncheck, icons, different, images, html, objects, cells
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/bool-icon
---
# BoolIcon ***(cell)***
> Sets the check/uncheck icons to different images or HTML objects for cells with [Type](/docs/appx/type) `Bool`.

> To use custom images as checkbox icons, set the unchecked and checked images as a string connected with the first character as the delimiter.
(e.g., "|Off.gif|On.gif")
>
> When using custom images as checkbox icons, if some cells in the column are non-editable ([CanEdit](/docs/props/cell/can-edit)), set a total of 4 images including images for the non-editable state.
(e.g., "|Off.gif|On.gif|OffReadOnly.gif|OnReadOnly.gif")
>
> To use multiple radio icons, set the unchecked and checked images consecutively.
(e.g., "|Off1.gif|On1.gif|Off2.gif|On2.gif|Off3.gif|On3.gif")
>
> Additionally, you can configure features using regular number formats as shown in the Options below.
### Type
`mixed`( `string` \| `number` )

### Options
|Value|Description|
|-----|-----|
|`0`|Uses the default built-in checkbox image (`default`)
|`1`|Uses the built-in radio image|
|`2`|Uses a checkbox image that is always middle-aligned (`performance is slower than option 0`)|
|`3`|Uses a radio image that is always middle-aligned (`performance is slower than option 1`)|
|`4`|Uses \<input type="checkbox"> element (`good performance in IE`)|
|`5`|Uses \<input type="radio"> element (`good performance in IE`)|
|`6`|Implements checkbox using div element (`good performance in IE compatibility view`)|

### Example
```javascript
// Display checkbox as HTML element
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "BoolIcon", 4);
```

### Read More
- [BoolIconWidth cell](/docs/props/cell/bool-icon-width)
- [Type appendix](/docs/appx/type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
