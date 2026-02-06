---
KEY: decimalAdjust
KIND: cell-property
PATH: props/cell/decimal-adjust
ALIAS_EN: rounding, method, approximate, values, int, float, type, column
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/decimal-adjust
---
# DecimalAdjust ***(cell)***

> Sets the rounding method for approximate values in Int and Float type column data. 


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`round`|Rounds approximate values. (`default`)|
|`floor`|Rounds down approximate values.|
|`ceil`|Rounds up approximate values.|

```javascript
// Apply property within loaded data (column name: FloatData)
{
    data:[
        {... , "FloatData": 15.1, "FloatDataDecimalAdjust": "floor", ...} // Set the rounding method for this cell to floor
    ]
}
```

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.11|Feature added|
