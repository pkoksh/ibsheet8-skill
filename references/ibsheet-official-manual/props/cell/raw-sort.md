---
KEY: rawSort
KIND: cell-property
PATH: props/cell/raw-sort
ALIAS_EN: whether, sort, based, data, format, docs, props, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/raw-sort
---
# RawSort ***(cell)***

> Sets whether to sort based on data with [Format](/docs/props/cell/format) applied during sorting.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Sorting with the column's `Type` and `Format` applied (`default`)|
|`1`|Sorting based on raw data without `Format` applied
For `Enum` types, sorting is based on `Key`|
|`2`|For `Enum` types, sorting by the input order (array order) of `Enum` and `EnumKey`|


### Example
```javascript
// Apply property within loaded data (column name: CLS)
// Sort based on raw data without format applied
{
    data:[
        {... , "CLSRawSort": 1, ...}
    ]
}
```

### Read More
- [NumberSort cell](./number-sort)
- [SortValue cell](./sort-value)
- [CaseSensitive cell](./case-sensitive)
- [Format cell](/docs/props/cell/format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
