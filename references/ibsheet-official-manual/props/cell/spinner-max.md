---
KEY: spinnerMax
KIND: cell-property
PATH: props/cell/spinner-max
ALIAS_EN: maximum, value, input, via, arrows, cells, spinnervisible, spinner
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/spinner-max
---
# SpinnerMax ***(cell)***
> Sets the maximum value for input via arrows in cells using [SpinnerVisible](./spinner-visible).

> 

> Additionally, you can set the input step and min values through [SpinnerStep](./spinner-step) and [SpinnerMin](./spinner-min).

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Maximum value for input during editing|


### Example
```javascript
options.cells = [
    ...
    {Type: "Int", Name: "Qty", SpinnerVisible: true},
    ...
];

var data = [
    {Qty: 10, QtySpinnerMax: 100000},
    {Qty: 20, QtySpinnerMax: 200000},
]
```

### Read More
- [Type appendix](/docs/appx/type)
- [SpinnerVisible](./spinner-visible)
- [SpinnerStep](./spinner-step)
- [SpinnerMin](./spinner-min)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.42|Feature added|
