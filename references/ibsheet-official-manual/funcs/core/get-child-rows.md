---
KEY: getChildRows
KIND: method
PATH: funcs/core/get-child-rows
ALIAS: sheet.getChildRows, getChildRows()
ALIAS_EN: returns, child, rows, including, grandchildren, specific, row, object
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-child-rows
---
# getChildRows ***(method)***
> Returns all child rows (including grandchildren) of a specific row as an object array.

### Syntax
```javascript
array getChildRows( row, maxLevel );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|row|`object`|Required|parentrow [data row object](/docs/appx/row-object)|
|maxLevel|`number`|Optional|Limit level for child rows to retrieve (returns rows **below** the specified level)|

### Return Value
***array[row object]*** : [data row object](/docs/appx/row-object) array

### Example
```javascript
// first rowof child rows retrieves.
var childNodes = sheet.getChildRows(sheet.getFirstRow());
```

### Read More
- [getParentRows method](./get-parent-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.1.0.14|`maxLevel` Feature added|
