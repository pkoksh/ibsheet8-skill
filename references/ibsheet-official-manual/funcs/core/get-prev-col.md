---
KEY: getPrevCol
KIND: method
PATH: funcs/core/get-prev-col
ALIAS: sheet.getPrevCol, getPrevCol()
ALIAS_EN: returns, column, immediately, specified, getprevcol, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-prev-col
---
# getPrevCol ***(method)***
> Returns the column immediately before the specified column.

> specified column first columnwhen set to `null` return. 

> By default, this function operates based on visible columns. 

> By setting `includeHideCol` or `Cfg: GetColWithHide`, you can retrieve regardless of `Visible`. 

> The priority is `includeHideCol` > `GetColWithHide` , so `GetColWithHide` even if set to `true`, `includeHideCol` `false`,it can be made to operate based on visible columns.


### Syntax
```javascript
string getPrevCol( col, includeHideCol );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|col|`string`|Required|column name
|includeHideCol|`boolean`|Optional|hidden column based on include whether
`0(false)`:Do not include hidden columns in calculation (`default`)
`1(true)`:Include hidden columns in calculation|

### Return Value
***string*** : column name

### Example
```javascript
//3th indexof column's before column check.
var col = sheet.getColByIndex(3);
var prevCol = sheet.getPrevCol(col);
```

### Read More
- [getNextCol method](./get-next-col)
- [GetColWithHide cfg](/docs/props/cfg/get-col-with-hide)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|Feature added|
|core|8.0.0.11|`includeHideCol` argument added|
