---
KEY: spinnerStep
KIND: column-property
PATH: props/col/spinner-step
ALIAS_EN: increment, decrement, interval, input, values, columns, spinnervisible, spinner
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/spinner-step
---
# SpinnerStep ***(col)***
> Sets the increment/decrement interval for input values in columns that use [SpinnerVisible](./spinner-visible).

> 

> Additionally, you can set the input min and max using [SpinnerMax](./spinner-max) and [SpinnerMin](./spinner-min).

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Increment/decrement interval for input values during editing|


### Example
```javascript
options.Cols = [
    ...
    {Type: "Int", Name: "Qty", SpinnerVisible: true, SpinnerStep: 10, ...},
    ...
];
```

### Read More
- [Type appendix](/docs/appx/type)
- [SpinnerVisible](./spinner-visible)
- [SpinnerMax](./spinner-max)
- [SpinnerMin](./spinner-min)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.88|Feature added|
