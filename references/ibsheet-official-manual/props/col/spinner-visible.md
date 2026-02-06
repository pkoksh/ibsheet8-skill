---
KEY: spinnerVisible
KIND: column-property
PATH: props/col/spinner-visible
ALIAS_EN: displays, arrows, editing, columns, type, docs, appx, int
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/spinner-visible
---
# SpinnerVisible ***(col)***
> Displays arrows during editing in columns with [Type](/docs/appx/type) `Int` or `Float`.

> When set, the input type is created as number.

> 

> Additionally, you can set the input step, min, and max using [SpinnerStep](./spinner-step), [SpinnerMax](./spinner-max), and [SpinnerMin](./spinner-min).

> `Restriction` Does not work on columns with [EditMaskFunc](../cfg/edit-mask-func) applied.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Does not display arrows during editing (`default`)|
|`1(true)`|Displays arrows during editing|

### Example
```javascript
options.Cols = [
    ...
    {Type: "Int", Name: "Qty", SpinnerVisible: true...},
    ...
];
```

### Read More
- [Type appendix](/docs/appx/type)
- [SpinnerStep](./spinner-step)
- [SpinnerMax](./spinner-max)
- [SpinnerMin](./spinner-min)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.88|Feature added|
