---
KEY: decimalAdjust
KIND: column-property
PATH: props/col/decimal-adjust
ALIAS_EN: rounding, method, approximate, values, int, float, type, column
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/decimal-adjust
---
# DecimalAdjust ***(col)***

> Sets the rounding method for approximate values in Int and Float type column data. 


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`round`|Processes approximate values by rounding. (`default`)|
|`floor`|Processes approximate values by rounding down.|
|`ceil`|Processes approximate values by rounding up.|

### Example
```javascript
options.Cfg = {
  DecimalAdjust: "floor" // Set the rounding method for Int and Float type columns to round down
};
```

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.11|Feature added|
