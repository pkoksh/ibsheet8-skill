---
KEY: getShownRows
KIND: method
PATH: funcs/core/get-shown-rows
ALIAS: sheet.getShownRows, getShownRows()
ALIAS_EN: returns, data, row, object, docs, appx, currently, visible
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-shown-rows
---
# getShownRows ***(method)***
> Returns [data row object](/docs/appx/row-object)s currently visible on screen.

> The larger the sheet's height, the more [data row object](/docs/appx/row-object)s are returned. 

> When `current: 0(false)` is set, all visible rows in the entire area are returned. 

> When using tree, collapsed rows are not returned.


### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|current|`boolean`|Optional|Area setting for returning visible rows 
 `0(false)`:Entire area 
 `1(true)`:Currently visible screen area (`default`)

### Syntax
```javascript
object getShownRows(current);
```

### Return Value
***array[row object]*** : [data row object](/docs/appx/row-object) in array form

### Example
```javascript
// Check the number of visible rows in the entire area
var rowArr = sheet.getShownRows(1);
var cnt = rowArr.length;
```

### Read More
- [getShownCols method](./get-shown-cols)
- [row object(Row Object) appendix](/docs/appx/row-object)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.17|`current` argument added|
