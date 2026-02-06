---
KEY: searchCells
KIND: config-property
PATH: props/cfg/search-cells
ALIAS_EN: search, row, you, choose, whether, cell, searchcells, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/search-cells
---
# SearchCells ***(cfg)***

> When using the search row, you can choose whether to search by row or by cell.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Search by row (`default`)
 ex) When entering "bag UK" in the search row, if there is one or more cell among the row's cells that contains "bag" and "UK" (including the case where one cell has "bag" and another cell has "UK"), the row is found|
|`1`|Search by cell
 ex) When entering "bag UK" in the search row, only cells that contain both words "bag" and "UK" are found|


### Example
```javascript
options.Cfg = {
  SearchCells: 0,
};
```

### Read More
- [Solid appendix](/docs/appx/solid)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
