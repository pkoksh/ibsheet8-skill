---
KEY: radionIconWidth
KIND: column-property
PATH: props/col/radion-icon-width
ALIAS_EN: width, image, pixels, setting, radio, icon, custom, radioicon
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/radion-icon-width
---
# RadioIconWidth ***(col)***
> Sets the width of the image in pixels when setting the radio icon to a custom image through the [RadioIcon](./radio-icon) property.
### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Width of the radio icon image (in pixels)|




### Example
```javascript
// Define the width of the radio icon image as 22px
options.Cols = [
    ...
    {Type: "Radio", Name: "st1", RadioIconWidth: 22, RadioIcon: "|Off.gif|On.gif" ...},
    ...
];
```

### Read More
- [RadioIcon col](./radio-icon)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
