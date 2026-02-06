---
KEY: showImage
KIND: config-property
PATH: props/cfg/showImage
ALIAS_EN: feature, displays, icon, image, focus, editable, enum, columns
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/showImage
---
# ShowImage ***(cfg)***

> A feature that displays the icon image on focus in editable `Enum` columns.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0`|Always display the icon. (`default`)|
|`1`|Display the `Enum` column icon only on focus.|

### Example
```javascript
options.Cfg = {
    ShowImage: 1              // Display Enum column icon only on focus
};
```

### Read More
- [Enum col](/docs/props/col/enum)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.87|Feature added|
