---
KEY: spinnerMin
KIND: column-property
PATH: props/col/spinner-min
ALIAS_EN: minimum, value, entering, via, arrows, columns, spinnervisible, spinner
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/spinner-min
---
# SpinnerMin ***(col)***
> Sets the minimum value when entering via arrows in columns that use [SpinnerVisible](./spinner-visible).

> 

> Additionally, you can set the input step and max using [SpinnerStep](./spinner-step) and [SpinnerMax](./spinner-Max).

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Minimum value for input during editing|


### Example
```javascript
options.Cols = [
    ...
    {Type: "Int", Name: "Qty", SpinnerVisible: true, SpinnerMin: -1, ...},
    ...
];
```

### Read More
- [Type appendix](/docs/appx/type)
- [SpinnerVisible](./spinner-visible)
- [SpinnerStep](./spinner-step)
- [SpinnerMax](./spinner-max)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.88|Feature added|
