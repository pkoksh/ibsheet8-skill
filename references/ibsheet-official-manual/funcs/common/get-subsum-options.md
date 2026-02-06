---
KEY: getSubsumOptions
KIND: method
PATH: funcs/common/get-subsum-options
ALIAS: sheet.getSubsumOptions, getSubsumOptions()
ALIAS_EN: subtotal, feature, sheet, via, makesubtotal, core, make, sub
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/common/get-subsum-options
---
# getSubSumOptions ***(method)***

> When the subtotal feature is used on the sheet via [makeSubTotal()](../core/make-sub-total), retrieves the configured options. 


### Syntax
```javascript
object getSubSumOptions();
```

### Return Value
***array[option]*** Options configured in makeSubTotal()
```
[
  {
    "stdCol": 3,
    "avgCols": "B|C",
    "captionCol": [
      {
        "col": "sUnit",
        "val": "%s: %col"
      }
    ],
    "position": "bottom",
    "color": "#dbe2eb",
    "stdColName": "sUnit"
  },
  {
    "stdCol": 2,
    "sumCols": "B|C",
    "position": "bottom",
    "color": "#b2c4d9",
    "stdColName": "sPolicy",
    "captionCol": [
      {
        "col": "sPolicy",
        "val": "%s : %col",
        "cumVal": "%s : %col"
      }
    ]
  }
]
```

### Example
```javascript
// Returns the options configured for subtotals as an array.
var opt = sheet.getSubSumOptions();
```

### Read More
- [makeSubTotal method](../core/make-sub-total)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
