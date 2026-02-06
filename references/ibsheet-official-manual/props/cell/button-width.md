---
KEY: buttonWidth
KIND: cell-property
PATH: props/cell/button-width
ALIAS_EN: width, button, object, created, cell, type, docs, appx
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/button-width
---
# ButtonWidth ***(cell)***
> Sets the width of the button object created in the cell when [Type](/docs/appx/type) is `Button` and the [Button](/docs/props/cell/button) property value is `Button`.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Width of the button object|

### Example
```javascript
// Set the button width to 80px
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "ButtonWidth", 80);
```

### Read More
- [Button cell](/docs/props/cell/button)
- [Type appendix](/docs/appx/type)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
