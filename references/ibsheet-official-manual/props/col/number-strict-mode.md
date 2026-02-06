---
KEY: numberStrictMode
KIND: column-property
PATH: props/col/number-strict-mode
ALIAS_EN: false, empty, values, non, numeric, type, int, float
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/number-strict-mode
---
# NumberStrictMode ***(col)***

> When set to 0(false), empty values or non-numeric values in numeric type (Int, Float) columns are treated as 0 during data retrieval.

> String-format numbers containing the thousands separator "," will be displayed as numbers.



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Does not strictly validate non-numeric data. Displays 0 instead of NaN for non-numeric values|
|`1(true)`|Strictly validates the data type in numeric type columns. Displays NaN for non-numeric values (`default`)|


### Example
```javascript
options.Cols = [
    ...
    {
        Header: 'Integer(Int)',
        Type: 'Int',
        Name: 'IntData',
        Width: 80,
        Align: 'Right',
        NumberStrictMode: 0   // Does not strictly validate non-numeric data.
    },
    ...
];
```

### Read More
- [Type appendix](/docs/appx/type)
<!--!
- `[Private]` [NumberStrictMode cell](/docs/props/cell/number-strict-mode)
!-->

### Since
|product|version|desc|
|---|---|---|
|core|8.0.0.17|Feature added|
