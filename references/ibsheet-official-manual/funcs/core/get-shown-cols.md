---
KEY: getShownCols
KIND: method
PATH: funcs/core/get-shown-cols
ALIAS: sheet.getShownCols, getShownCols()
ALIAS_EN: returns, currently, visible, column, names, screen, array, getshowncols
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-shown-cols
---
# getShownCols ***(method)***
> Returns the currently visible column names on screen as an array.

> If the section argument is not set, returns the visible column names in the center area as an array.

> The wider the sheet's width, the more column names are returned.


### Syntax
```javascript
object getShownCols(section);
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|section|`number`|Optional|Specifies the area based on the fixed pane
`0`:left
`1`:center (`default`)
`2`:right|

### Return Value
***array[string]*** : Array of column names

### Example
```javascript
// Check visible column names in the center area
var colNameArr = sheet.getShownCols(1);
```

### Read More
- [getShownRows method](./get-shown-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
