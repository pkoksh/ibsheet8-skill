---
KEY: radioIcon
KIND: cell-property
PATH: props/cell/radio-icon
ALIAS_EN: radio, icon, cells, type, docs, appx, different, image
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/radio-icon
---
# RadioIcon ***(cell)***
> Sets the `Radio` icon in cells where [Type](/docs/appx/type) is `Radio` to a different image or HTML object.

> To use a custom image as the radio icon, set a string connecting the unchecked image and checked image using the first character as a delimiter.
(e.g.: "|OFF.gif|ON.gif")
>
> When using custom images as checkbox icons, if some cells in the column are non-editable ([CanEdit](./can-edit)), set a total of 4 images including the non-editable state images.
(e.g.: "|Off.gif|On.gif|OffReadOnly.gif|OnReadOnly.gif")
>
> To use multiple radio icons, connect the unchecked and checked images consecutively.
(e.g.: "|Off1.gif|On1.gif|Off2.gif|On2.gif|Off3.gif|On3.gif")
>
> Additionally, you can configure features using numeric values as described in the Options below.
### Type
`mixed`(`string` \| `number` )

### Options
**When using numeric values**

|Value|Description|
|-----|-----|
|`0`|Uses the default built-in radio icon image / When using the [Range](/docs/props/col/range) property, uses the built-in checkbox icon image (`default`)
|`1`|Uses the built-in radio icon image|
|`2`|Uses the built-in checkbox icon image|
|`3`|Uses \<input type="radio"> object / When using the [Range](/docs/props/col/range) property, uses \<input type="checkbox"> object|
|`4`|Uses \<input type="radio"> object|
|`5`|Uses \<input type="checkbox"> object|
|`6`|Does not display an icon|
***Using input objects may result in slower performance compared to not using them.***



### Example
```javascript
// Use checkbox icon instead of radio icon (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "RadioIcon", "2");


// Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSRadioIcon"] = "2";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSRadioIcon":"2" , ...}
    ]
}
```

### Read More

- [RadioIconWidth cell](./radio-icon-width)
- [RadioUncheck cell](./radio-uncheck)
- [Type appendix](/docs/appx/type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
