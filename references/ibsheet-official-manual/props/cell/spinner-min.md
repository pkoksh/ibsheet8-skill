---
KEY: spinnerMin
KIND: cell-property
PATH: props/cell/spinner-min
ALIAS_EN: minimum, value, input, via, arrows, cells, spinnervisible, spinner
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/spinner-min
---
# SpinnerMin ***(cell)***
> Sets the minimum value for input via arrows in cells using [SpinnerVisible](./spinner-visible).

> 

> Additionally, you can set the input step and max values through [SpinnerStep](./spinner-step) and [SpinnerMax](./spinner-Max).

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Minimum value for input during editing|


### Example
```javascript
options.cells = [
    ...
    {Type: "Int", Name: "Qty", SpinnerVisible: true},
    ...
];

var data = [
    {Qty: 10, QtySpinnerMin: 0},
    {Qty: 20, QtySpinnerMin: -100},
]
```

### Read More
- [Type appendix](/docs/appx/type)
- [SpinnerVisible](./spinner-visible)
- [SpinnerStep](./spinner-step)
- [SpinnerMax](./spinner-max)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.42|Feature added|
