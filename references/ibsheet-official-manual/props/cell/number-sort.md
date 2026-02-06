---
KEY: numberSort
KIND: cell-property
PATH: props/cell/number-sort
ALIAS_EN: whether, sort, cell, data, numeric, format, numbersort
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/number-sort
---
# NumberSort ***(cell)***

> Sets whether to sort the cell's data in numeric format.

> Generally, `Int, Float, Date Type` are sorted in numeric format, and other [Types](/docs/appx/type) are sorted in string format.

> If the value is set to `0(false)`, sorting is done in string format regardless of the Type. If set to `1(true)`, sorting is done in numeric format.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|String format sorting|
|`1(true)`|Numeric format sorting|


### Example
```javascript
// Apply property within loaded data (column name: CLS)
// Sort a specific cell in numeric format
{
    data:[
        {... , "CLSNumberSort":"1" , ...}
    ]
}
```

### Read More
- [RawSort cell](./raw-sort)
- [SortValue cell](./sort-value)
- [CaseSensitive cell](./case-sensitive)
- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
