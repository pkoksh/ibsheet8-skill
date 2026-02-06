---
KEY: noButtonInFilter
KIND: column-property
PATH: props/col/no-button-in-filter
ALIAS_EN: prevents, button, timepicker, created, time, picker, generated, filter
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/no-button-in-filter
---
# NoButtonInFilter ***(col)***

> Prevents the `Button` or `TimePicker` created through [Button](./button) or [TimePicker](./time-picker) from being generated in the filter row of the column.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|`Button` or `TimePicker` is created in the filter row (`default`)|
|`1(true)`|`Button` or `TimePicker` is not created in the filter row|

### Example
```javascript
// Set a specific column's filter row to not generate buttons
options.Cols = [
    {Type: "Text", Button: "Button", ButtonText: "TestButton", Name: "sNumber", NoButtonInFilter: 1, Width: 70 ...},
    ...
];
```

### Read More
- [Button](./button)
- [TimePicker](./time-picker)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.76|Feature added|
