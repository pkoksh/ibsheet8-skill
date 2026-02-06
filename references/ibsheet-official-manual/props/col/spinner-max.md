---
KEY: spinnerMax
KIND: column-property
PATH: props/col/spinner-max
ALIAS_EN: maximum, value, entering, via, arrows, columns, spinnervisible, spinner
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/spinner-max
---
# SpinnerMax ***(col)***
> Sets the maximum value when entering via arrows in columns that use [SpinnerVisible](./spinner-visible).

> 

> Additionally, you can set the input step and min using [SpinnerStep](./spinner-step) and [SpinnerMin](./spinner-min).

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Maximum value for input during editing|


### Example
```javascript
options.Cols = [
    ...
    {Type: "Int", Name: "Qty", SpinnerVisible: true, SpinnerMax: 100000, ...},
    ...
];
```

### Read More
- [Type appendix](/docs/appx/type)
- [SpinnerVisible](./spinner-visible)
- [SpinnerStep](./spinner-step)
- [SpinnerMin](./spinner-min)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.88|Feature added|
