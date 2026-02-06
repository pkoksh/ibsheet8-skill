---
KEY: buttonText
KIND: column-property
PATH: props/col/button-text
ALIAS_EN: button, property, value, html, text, display, cell, buttontext
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/button-text
---
# ButtonText ***(col)***
> When the [Button](./button) property value is `Button` or `Html`, sets the text to display on the cell button.

> When the [Button](./button) property value is `Button`, the configured text is displayed as a \<u> or \<button> tag, 
and when it is `Html`, HTML text like Input is interpreted and displayed in the cell.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|String to be placed in the button|

### Example
```javascript
options.Cols = [
    ...
    // Display a "Confirm" button on the right side of the cell
    {Type: "Text", Button: "Button", ButtonText: "Confirm", Name: "conf_btn", Width: 120, ... },
    ...
    // Display a "BTN" button on the Button type column
    { Type: "Button", ButtonText: "BTN", Name: "type_btn", Width: 120, ... },
];
```

### Read More
- [Button col](./button)
- [UseButton cfg](/docs/props/cfg/use-button)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
