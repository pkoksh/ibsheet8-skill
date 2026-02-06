---
KEY: getParentRows
KIND: method
PATH: funcs/core/get-parent-rows
ALIAS: sheet.getParentRows, getParentRows()
ALIAS_EN: specific, rowof, entire, parent, row, object, array, formas
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-parent-rows
---
# getParentRows ***(method)***
> specific rowof entire parent row object array formas returns.

### Syntax
```javascript
array getParentRows( row );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|row|`object`|Required|[data row object](/docs/appx/row-object)|

### Return Value
***array[row object]*** : [data row object](/docs/appx/row-object) array

### Example
```javascript
// focusapplied rowof parent rows retrieves.
var childNodes = sheet.getParentRows(sheet.getFocusedRow());
```

### Read More
- [getChildRows method](./get-child-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
