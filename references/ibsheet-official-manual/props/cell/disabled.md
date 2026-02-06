---
KEY: disabled
KIND: cell-property
PATH: props/cell/disabled
ALIAS_EN: whether, button, usable, cells, type, docs, appx, file
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/disabled
---
# Disabled ***(cell)***
> Sets whether the button is usable for cells with [Type](/docs/appx/type) `Button` or `File`.

> `Type:"Button", Disabled:1` : The button cell changes to a disabled color and the click event is not triggered. 

> `Type:"File", Disabled:1` : The file add and remove buttons are not displayed.



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Button functionality enabled (`default`)|
|`1(true)`|Button functionality disabled|

### Example
```javascript
// Set a specific cell's button to disabled
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Disabled", 1);
```

### Read More
- [Button cell](./button)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
