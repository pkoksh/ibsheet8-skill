---
KEY: widthPad
KIND: column-property
PATH: props/col/width-pad
ALIAS_EN: width, small, button, displayed, right, side, cell, property
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/width-pad
---
# WidthPad ***(col)***
> Sets the width of the small button displayed on the right side of the cell when using the [Button](./button) property.

> The width is set in pixel units.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Width of the right button (default: 25px)|

### Example
```javascript
options.Cols = [
    ...
    // Display a "Confirm" button on the right side of the cell.
    {Type: "Text", Button: "Button", ButtonText: "Confirm", WidthPad: 25, Name: "conf_btn", Width: 120, ...},
    ...
];
```

### Read More
- [Button col](./button)
- [UseButton cfg](/docs/props/cfg/use-button)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
