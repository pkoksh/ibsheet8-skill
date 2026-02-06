---
KEY: spinnerStep
KIND: cell-property
PATH: props/cell/spinner-step
ALIAS_EN: increment, decrement, interval, input, values, cells, spinnervisible, spinner
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/spinner-step
---
# SpinnerStep ***(cell)***
> Sets the increment/decrement interval for input values in cells using [SpinnerVisible](./spinner-visible).

> 

> Additionally, you can set the input min and max values through [SpinnerMax](./spinner-max) and [SpinnerMax](./spinner-min).

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Increment/decrement interval for input values during editing|


### Example
```javascript
options.cells = [
    ...
    {Type: "Int", Name: "Qty", SpinnerVisible: true},
    ...
];

var data = [
    {Qty: 10, QtySpinnerStep: 10},
    {Qty: 20, QtySpinnerStep: 20},
]
```

### Read More
- [Type appendix](/docs/appx/type)
- [SpinnerVisible](./spinner-visible)
- [SpinnerMax](./spinner-max)
- [SpinnerMin](./spinner-min)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.42|Feature added|
