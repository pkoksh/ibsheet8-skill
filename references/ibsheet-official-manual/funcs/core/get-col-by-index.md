---
KEY: getColByIndex
KIND: method
PATH: funcs/core/get-col-by-index
ALIAS: sheet.getColByIndex, getColByIndex()
ALIAS_EN: leftfrom, columnof, index, based, onas, column, name, getcolbyindex
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-col-by-index
---
# getColByIndex ***(method)***

> leftfrom columnof `index` based onas column name OK.

> `index`starts from `1`starting from.

> By default, this function operates based on visible columns. 

> By setting `includeHideCol` or `Cfg: GetColWithHide`, you can retrieve regardless of `Visible`. 

> The priority is `includeHideCol` > `GetColWithHide`, so even if `GetColWithHide` is set to `true`, when `includeHideCol` is `false`, it operates based on visible columns.


### Syntax
```javascript
string getColByIndex( index, includeHideCol );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|index|`number`|Required|columnof `index`
|includeHideCol|`boolean`|Optional|`true` when set, `Col.Visible` regardless index extract.
`0(false)`:Do not include hidden columns in calculation (`default`)
`1(true)`:Include hidden columns in calculation|


### Return Value
***string*** : specified position present column name

### Example
```javascript
//3th column(1starting fromas)of column name OK
var fcol = sheet.getColByIndex(3);
```

### Read More
- [getColIndex method](./get-col-index)
- [GetColWithHide cfg](/docs/props/cfg/get-col-with-hide)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.11|`includeHideCol` argument added|
