---
KEY: getRowsByStatus
KIND: method
PATH: funcs/core/get-rows-by-status
ALIAS: sheet.getRowsByStatus, getRowsByStatus()
ALIAS_EN: returns, rows, specific, status, array, getrowsbystatus, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-rows-by-status
---
# getRowsByStatus ***(method)***
> Returns rows of a specific status as an array.

> Row states include `Added, Changed, Deleted`. 

> Prefixing a property name with `!` allows skipping records where that property's value is truthy (`true` or `1`).


### Syntax
```javascript
array getRowsByStatus( status );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|status|`string`|Required|Status value (use `,` as delimiter to check multiple statuses simultaneously)|


### Return Value
***array[row object]*** : [data row object](/docs/appx/row-object) array

### Example
```javascript
// Get all modified rows.
var chgRows = sheet.getRowsByStatus("Changed");

// Get all newly added or modified rows.
var rows = sheet.getRowsByStatus("Added,Changed");

// Extract rows where the Added attribute is set but the Deleted attribute is not set
var rows = sheet.getRowsByStatus("Added,!Deleted");

// Extract only rows where the Changed attribute is set but both Added and Deleted attributes are not set
var rows = sheet.getRowsByStatus("!Added,Changed,!Deleted");

```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
