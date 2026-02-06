---
KEY: getTotalRowCount
KIND: method
PATH: funcs/core/get-total-row-count
ALIAS: sheet.getTotalRowCount, getTotalRowCount()
ALIAS_EN: returns, total, count, searched, data, rows, row, fetched
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-total-row-count
---
# getTotalRowCount ***(method)***

> Returns the total count of all searched data rows or the total data row count to be fetched from the DB, depending on the search mode.

> When [(Cfg)SearchMode](/docs/props/cfg/search-mode) is set to 0, 1, or 2, returns the count of all searched data rows. 

> When [(Cfg)SearchMode](/docs/props/cfg/search-mode) is set to 3, 4, or 5, returns the Total value set in the search data. The Total value should be set to the total count of the DB according to the search criteria.

### Syntax
```javascript
number getTotalRowCount();
```

### Return Value
***number*** : Total count of all searched data or the Total value included in the search data

### Example
```javascript
// Get the total data count
var tRow = sheet.getTotalRowCount();
```

### Read More
- [getDataRows method](./get-data-rows)
- [getShownRows method](./get-shown-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
