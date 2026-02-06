---
KEY: setTotalRowCount
KIND: method
PATH: funcs/core/set-total-row-count
ALIAS: sheet.setTotalRowCount, setTotalRowCount()
ALIAS_EN: changes, total, data, row, count, displayed, inforowconfig, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-total-row-count
---
# setTotalRowCount ***(method)***

> Changes the total data row count displayed when using the [InfoRowConfig cfg](/docs/props/cfg/info-row-config) feature.

> Useful when you want to display a count different from the count stored in the DB.


### Syntax
```javascript
void setTotalRowCount ( count );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|count |`number`|Required|Number to display as the total data row count|

### Return Value
***none***

### Example
```javascript
// Change the total data row count
sheet.setTotalRowCount ( 2000 );
```

### Read More
- [InfoRowConfig cfg](/docs/props/cfg/info-row-config)
- [getTotalRowCount method](./get-total-row-count)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|Feature added|
