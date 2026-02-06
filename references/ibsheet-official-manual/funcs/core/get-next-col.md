---
KEY: getNextCol
KIND: method
PATH: funcs/core/get-next-col
ALIAS: sheet.getNextCol, getNextCol()
ALIAS_EN: specified, columnof, columnname, return, getnextcol, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-next-col
---
# getNextCol ***(method)***

> specified columnof  columnname return. 

> By default, this function operates based on visible columns. 

> By setting `includeHideCol` or `Cfg: GetColWithHide`, you can retrieve regardless of `Visible`. 

> The priority is `includeHideCol` > `GetColWithHide` , so `GetColWithHide` even if set to `true`, `includeHideCol` `false`,it can be made to operate based on visible columns.

### Syntax
```javascript
string getNextCol( col, includeHideCol );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|col|`string`|Required|column name
|includeHideCol|`boolean`|Optionalhidden column based on include whether
`0(false)`:Do not include hidden columns in calculation (`default`)
`1(true)`:Include hidden columns in calculation|


### Return Value
***string*** : column name

### Example
```javascript
// columnname return.
var fcol = sheet.getNextCol(sheet.getFocusedCol());
```

### Read More
- [getPrevCol method](./get-prev-col)
- [GetColWithHide cfg](/docs/props/cfg/get-col-with-hide)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|Feature added|
|core|8.0.0.11|`includeHideCol` argument added|
