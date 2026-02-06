---
KEY: floatCalcMode
KIND: config-property
PATH: props/cfg/float-calc-mode
ALIAS_EN: correction, value, changed, float, type, column, outputs, fewer
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/float-calc-mode
---
# FloatCalcMode ***(cfg)***
> Sets the correction value to be changed when a `Float` Type column outputs with fewer decimal places than the (col)[Format](/docs/props/col/format) setting or outputs more decimal places than expected during calculations.

The correction value for decimal calculations uses `1e5`, i.e., 1 * 10^5 = `100000` as the default value due to JavaScript's `floating point` arithmetic issues.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`| Calculate with correction value set to `1e5` (`default`)|
|`1(true)`|Adjust the correction value based on the decimal length set in (col)[Format](/docs/props/col/format) during calculations|

### Example
```javascript
options.Cfg :{
    FloatCalcMode: true
};
```

### Read More

- [Format Col](../col/format)
- [Format Cell](../cell/format)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.47|Feature added|
