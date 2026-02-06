---
KEY: filterValue
KIND: cell-property
PATH: props/cell/filter-value
ALIAS_EN: value, filtering, instead, cell, original, filtervalue
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/filter-value
---
# FilterValue ***(cell)***

> Sets the value to be used for filtering instead of the cell's original value.

> This is particularly useful for cells that are non-editable, such as `Html` or `button` type cells.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Reference text to be used when filtering|


### Example
```javascript
// Apply property within loaded data (column name: CLS)
// Set to filter using "00A0000" instead of the actual cell value
{
    data:[
        {... , "CARNOFilterValue":"00A0000" , ...}
    ]
}
```
![FilterValue](/assets/imgs/filterValue.png "Filtering by 00A0000 instead of the actual value")
<!-- IMAGE: Screenshot/Example Image - FilterValue -->
### Read More
- [SortValue cell](./sort-value)
- [CopyValue cell](./copy-value)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
