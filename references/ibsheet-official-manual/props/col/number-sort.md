---
KEY: numberSort
KIND: column-property
PATH: props/col/number-sort
ALIAS_EN: whether, sort, column, data, numeric, format, numbersort, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/number-sort
---
# NumberSort ***(col)***

> Sets whether to sort the column data in numeric format.

> Generally, `Int, Float, Date` [Types](/docs/appx/type) are sorted numerically, while other [Types](/docs/appx/type) are sorted alphabetically.

> Setting the value to `0(false)` forces alphabetical sorting regardless of [Type](/docs/appx/type), while setting it to `1(true)` forces numeric sorting.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Alphabetical sorting (`default`)|
|`1(true)`|Numeric sorting|


### Example
```javascript
// Sort a specific column numerically
options.Cols = [
    ...
    {Type: "Text", Name: "SA_ID", NumberSort: 1 ...},
    ...
];
```

### Try it
- [True](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Col/NumberSort-true/)

### Read More
- [CanSort col](./can-sort)
- [RawSort col](./raw-sort)
- [Type appendix](/docs/appx/type)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
