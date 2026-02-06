---
KEY: spinnerVisible
KIND: cell-property
PATH: props/cell/spinner-visible
ALIAS_EN: displays, arrows, editing, cells, type, docs, appx, int
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/spinner-visible
---
# SpinnerVisible ***(cell)***
> Displays arrows during editing in cells where [Type](/docs/appx/type) is `Int` or `Float`.

> When set, the input type is created as number.

> 

> Additionally, you can set the input step, min, and max values through [SpinnerStep](./spinner-step), [SpinnerMax](./spinner-max), and [SpinnerMax](./spinner-min).

> `Restriction` Does not work on cells where [EditMaskFunc](../cfg/edit-mask-func) is applied.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Do not display arrows during editing (`default`)|
|`1(true)`|Display arrows during editing|

### Example
```javascript
options.cells = [
    ...
    {Type: "Int", Name: "Qty", SpinnerVisible: false},
    ...
];

var data = [
    {Qty: 10, QtySpinnerVisible: true},
    {Qty: 20, QtySpinnerVisible: false},
]
```

### Read More
- [Type appendix](/docs/appx/type)
- [SpinnerStep](./spinner-step)
- [SpinnerMax](./spinner-max)
- [SpinnerMin](./spinner-min)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.42|Feature added|
