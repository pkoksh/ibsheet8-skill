---
KEY: decimalAdjust
KIND: config-property
PATH: props/cfg/decimal-adjust
ALIAS_EN: rounding, method, approximate, values, int, float, type, column
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/decimal-adjust
---
# DecimalAdjust ***(cfg)***

> Sets the rounding method for approximate values in Int and Float type column data. 


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`round`|Rounds approximate values. (`default`)|
|`floor`|Floors (rounds down) approximate values.|
|`ceil`|Ceils (rounds up) approximate values.|

### Example
```javascript
options.Cols = [
    ...
    {Type: "Int", Name: "Pvt_TSum", DecimalAdjust: "floor", ...}, // Set rounding method to floor
    ...
];
```

### Try it
- ["round" by default](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/DecimalAdjust-round/)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.11|Feature added|
