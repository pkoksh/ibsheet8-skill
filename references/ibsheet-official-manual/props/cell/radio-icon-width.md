---
KEY: radioIconWidth
KIND: cell-property
PATH: props/cell/radio-icon-width
ALIAS_EN: setting, radio, icon, custom, image, radioicon, docs, props
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/radio-icon-width
---
# RadioIconWidth ***(cell)***
> When setting the radio icon to a custom image through the [RadioIcon](/docs/props/cell/radio-icon) property, sets the width of the image in pixel units.
### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Width of the radio icon image (in pixels)|




### Example
```javascript
// Set the radio icon image width to 22px
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "RadioIcon", "|Off.gif|On.gif" );
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "RadioIconWidth", 22);
```

### Read More
- [RadioIcon cell](/docs/props/cell/radio-icon)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
