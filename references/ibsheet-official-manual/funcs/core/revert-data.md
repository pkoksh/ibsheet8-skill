---
KEY: revertData
KIND: method
PATH: funcs/core/revert-data
ALIAS: sheet.revertData, revertData()
ALIAS_EN: reverts, sheet, data, values, point, search, revertdata, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/revert-data
---
# revertData ***(method)***
> Reverts all sheet data to the values at the point of search. 


> **<mark>Note</mark> : Only the sheet's data values are reverted. `Added`, `Changed`, `Deleted` status values are excluded, and row properties, column properties, cell properties, etc. are not changed.**

> Unlike [reloadData](./reload-data), reverts to the data searched through [doSearch](./do-search) or [loadSearchData](./load-search-data) functions.

### Syntax
```javascript
void revertData( remainAddRow, sync );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|remainAddRow|`boolean`|Optional|Whether to keep rows added by [addRow](./add-row)
`0(false)`:Delete all added rows (`default`)
`1(true)`:Keep added rows|
|sync|`boolean`|Optional|Execute rendering synchronously processing 
`0(false)`:Asynchronous mode (`default`)
`1(true)`:Synchronous mode|

### Return Value
***none***

### Example
```javascript
// Revert all sheet data (values, properties) to the initially searched values
sheet.revertData();

// Execute synchronously.
sheet.revertData(null, true);
```

### Read More

- [revertRow method](./revert-row)
- [revertCell method](./revert-cell)
- [reloadData method](./reload-data)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|Feature added|
|core|8.0.0.26|`sync` argument added|
