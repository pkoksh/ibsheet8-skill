---
KEY: radioIcon
KIND: column-property
PATH: props/col/radio-icon
ALIAS_EN: radio, icon, different, image, html, object, columns, type
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/radio-icon
---
# RadioIcon ***(col)***
> Sets the `Radio` icon to a different image or `Html` object in columns with [Type](/docs/appx/type) `Radio`.

> To use a custom image as the radio icon, set the unchecked image and checked image as a concatenated string using the first character as a delimiter.
(e.g.: "|OFF.gif|ON.gif")
>
> When using custom images as checkbox icons, if some cells within the column are non-editable ([CanEdit](./can-edit)), you can set a total of 4 images including the non-editable state images.
(e.g.: "|Off.gif|On.gif|OffReadOnly.gif|OnReadOnly.gif")
>
> To use multiple radio icons, set the unchecked and checked images consecutively.
(e.g.: "|Off1.gif|On1.gif|Off2.gif|On2.gif|Off3.gif|On3.gif")
>
> Additionally, you can configure features using regular numeric format as shown in the `Options` below.
### Type
`mixed`( `string` \| `number` )

### Options
**When using numeric format**

|Value|Description|
|-----|-----|
|`0`|Uses the default built-in radio icon image / Uses built-in checkbox icon image when the [Range](./range) property is used (`default`)
|`1`|Uses the built-in radio icon image|
|`2`|Uses the built-in checkbox icon image|
|`3`|Uses \<input type="radio"> object / Uses \<input type="checkbox"> object when the [Range](./range) property is used|
|`4`|Uses \<input type="radio"> object|
|`5`|Uses \<input type="checkbox"> object|
|`6`|Does not display an icon|
***Performance may be slower when using input objects compared to when not using them.***



### Example
```javascript
// Use checkbox icon instead of radio icon
options.Cols = [
    ...
    {Type: "Radio", Name: "relation", RadioIcon: 2 ...},
    ...
];
```

### Read More
- [Range col](./range)
- [HRadio col](./h-radio)
- [RadioIconWidth col](./radio-icon-width)
- [RadioUncheck col](./radio-uncheck)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
