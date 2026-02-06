---
KEY: updatePageLength
KIND: method
PATH: funcs/core/update-page-length
ALIAS: sheet.updatePageLength, updatePageLength()
ALIAS_EN: changes, number, rows, display, per, page, server, paging
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/update-page-length
---
# updatePageLength ***(method)***

> Changes the number of rows to display per page when using server paging 2 (`(Cfg)SearchMode: 5`).

### Syntax
```javascript
boolean updatePageLength( length, cPage );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|length|`number`|Required|Number of rows to display per page|
|cPage|`number`|Optional|Page number to navigate to after changing the number of rows per page (`default: 1`)|


### Return Value
***boolean***

### Example
```javascript
// Update the number of rows displayed per page to 20.
sheet.updatePageLength(20);

// Update the number of rows displayed per page to 30 and navigate to page 3.
sheet.updatePageLength(30, 3);
```

### Read More
- [SearchMode cfg](/docs/props/cfg/search-mode)
- [PageLength cfg](/docs/props/cfg/page-length)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.54|Feature added|
