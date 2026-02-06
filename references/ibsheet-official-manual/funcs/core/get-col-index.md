---
KEY: getColIndex
KIND: method
PATH: funcs/core/get-col-index
ALIAS: sheet.getColIndex, getColIndex()
ALIAS_EN: column, name, index, getcolindex, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-col-index
---
# getColIndex ***(method)***

> column name for `index` OK.

> `index`starts from `1`starting from.

> By default, this function operates based on visible columns. 

> By setting `includeHideCol` or `Cfg: GetColWithHide`, you can retrieve regardless of `Visible`. 

> The priority is `includeHideCol` > `GetColWithHide` , so `GetColWithHide` even if set to `true`, `includeHideCol` `false`,it can be made to operate based on visible columns.



### Syntax
```javascript
string getColIndex( col, includeHideCol );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|col|`string`|Required|column name
|includeHideCol|`boolean`|Optional|`true` when set, `Col.Visible` regardless index extract
`0(false)`:Do not include hidden columns in calculation (`default`)
`1(true)`:Include hidden columns in calculation|


### Return Value
***number*** : column name positioned index

### Example
```javascript
//column name EMP_NM column's index
var fcol = sheet.getColIndex("EMP_NM");
```

### Read More
- [getColByIndex method](./get-col-by-index)
- [GetColWithHide cfg](/docs/props/cfg/get-col-with-hide)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.3|`name` argument name changed -> `col`, unified with other APIs|
|core|8.0.0.11|`includeHideCol` argument added|
