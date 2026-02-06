---
KEY: disabled
KIND: column-property
PATH: props/col/disabled
ALIAS_EN: whether, button, usable, columns, type, docs, appx, file
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/disabled
---
# Disabled ***(col)***
> Sets whether the button is usable for columns with [Type](/docs/appx/type) `Button` or `File`.

> `Type:"Button", Disabled:1` : The button column changes to a disabled color, and click events are not triggered 

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
// Set a specific column's button as disabled
options.Cols = [
    ...
    {Type: "Button", Button: "Button", Disabled: 1, Name: "btn1" ...},
    ...
];
```

### Read More
- [Type appendix](/docs/appx/type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
