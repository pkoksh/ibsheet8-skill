---
KEY: numberStrictMode
KIND: cell-property
PATH: props/cell/number-strict-mode
ALIAS_EN: false, empty, values, non, numeric, type, int, float
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/number-strict-mode
---
# NumberStrictMode ***(cell)***

> When set to 0(false), empty values or non-numeric values in numeric type (Int, Float) cells are treated as 0 during data loading.

> String-format numbers containing the thousands separator "," will be displayed as numbers.



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Does not strictly validate non-numeric data. Displays 0 instead of NaN for non-numeric values|
|`1(true)`|Strictly validates the data type in numeric type cells. Displays NaN for non-numeric values (`default`)|


### Example
```javascript
// 1. Apply property to a specific cell via method (column name: IntData)
sheet.setAttribute( sheet.getRowById("AR99") , "IntData" , "NumberStrictMode" , false);


// 2. Apply property by directly accessing the object (column name: IntData)
var ROW = sheet.getRowById("AR10");
ROW["IntDataNumberStrictMode"] = false;
// Verify changes
sheet.refreshCell({row:ROW, col:"IntData"});


// 3. Apply property within loaded data (column name: IntData)
{
    data:[
        {... , "IntDataNumberStrictMode":false , ...}
    ]
}
```

### Read More

- [Type appendix](/docs/appx/type)
<!--!
- `[Private]` [NumberStrictMode col](/docs/props/col/number-strict-mode)
!-->

### Since
|product|version|desc|
|---|---|---|
|core|8.0.0.17|Feature added|
