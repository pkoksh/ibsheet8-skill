---
KEY: buttonWidth
KIND: column-property
PATH: props/col/button-width
ALIAS_EN: type, docs, appx, button, property, value, width, object
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/button-width
---
# ButtonWidth ***(col)***
> When [Type](/docs/appx/type) is `Button` and the [Button](./button) property value is `Button`, sets the width of the button object created in the cell.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Width of the button object|

### Example
```javascript
// Set button width to 80px
options.Cols = [
    ...
    {Type: "Button", Button: "Button", Name: "btn1", ButtonWidth: 80 ...},
    ...
];
```

### Read More
- [Button col](./button)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
