---
KEY: boolIcon
KIND: column-property
PATH: props/col/bool-icon
ALIAS_EN: check, uncheck, icon, different, image, html, object, column
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/bool-icon
---
# BoolIcon ***(col)***
> Sets the check/uncheck icon to a different image or HTML object for a column with [Type](/docs/appx/type) `Bool`.

> To use custom images as checkbox icons, set a string connecting the uncheck image and check image with the first character as a separator.
(ex: "|Off.gif|On.gif")
>
> When using custom images as checkbox icons, if there are cells in the column that are not editable ([CanEdit](./can-edit)), you can set a total of 4 images including the images for when editing is disabled.
(ex: "|Off.gif|On.gif|OffReadOnly.gif|OnReadOnly.gif")
>
> To use multiple radio icons, set the uncheck and check images consecutively.
(ex: "|Off1.gif|On1.gif|Off2.gif|On2.gif|Off3.gif|On3.gif")
>
> Additionally, you can set features using regular number formats as shown in the `Options` below.
### Type
`mixed`( `string` \| `number`)

### Options
|Value|Description|
|-----|-----|
|`0`|Uses the default built-in checkbox image (`default`)
|`1`|Uses the built-in radio image|
|`2`|Uses a checkbox image that is always middle-aligned (**performance is slower than option 0**)|
|`3`|Uses a radio image that is always middle-aligned (**performance is slower than option 1**)|
|`4`|Uses \<input type="checkbox"> object (**good performance in IE**)|
|`5`|Uses \<input type="radio"> object (**good performance in IE**)|
|`6`|Implements checkbox using div object (**good performance in IE compatibility view**)|

### Example
```javascript
// Display checkbox as HTML object
options.Cols = [
    ...
    {Type: "bool", Name: "accept", BoolIcon: 4 ...},
    ...
];
```

### Read More
- [BoolIconWidth col](./bool-icon-width)
- [Type appendix](/docs/appx/type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
