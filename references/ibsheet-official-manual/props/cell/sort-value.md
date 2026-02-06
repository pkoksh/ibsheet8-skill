---
KEY: sortValue
KIND: cell-property
PATH: props/cell/sort-value
ALIAS_EN: value, sorting, instead, cell, original, sortvalue
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/sort-value
---
# SortValue ***(cell)***

> Sets a value to be used for sorting instead of the cell's original value.

> This is particularly useful for non-editable cells such as Html type or button cells.

> This property is also used as the grouping criterion when using the group feature.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Reference string to be used when sorting|


### Example
```javascript
// Apply property within loaded data (column name: CLS)
// Set a specific cell to appear at the top when sorting in ascending order
{
    data:[
        {... ,"CLSSortValue": "00000" , ...}
    ]
}
```

### Read More
- [Group cfg](/docs/props/cfg/group)
- [NumberSort cell](./number-sort)
- [RawSort cell](./raw-sort)
- [CaseSensitive cell](./case-sensitive)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
