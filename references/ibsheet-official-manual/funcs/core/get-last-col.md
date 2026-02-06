---
KEY: getLastCol
KIND: method
PATH: funcs/core/get-last-col
ALIAS: sheet.getLastCol, getLastCol()
ALIAS_EN: checks, rightmost, column, name, getlastcol, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-last-col
---
# getLastCol ***(method)***

> Checks the rightmost column name.

> It is also possible to retrieve the rightmost column of a specific area through section.

> By default, this function operates based on visible columns. 

> By setting `includeHideCol` or `Cfg: GetColWithHide`, you can retrieve regardless of `Visible`. 

> The priority is `includeHideCol` > `GetColWithHide` , so `GetColWithHide` even if set to `true`, `includeHideCol` `false`,it can be made to operate based on visible columns.


### Syntax
```javascript
string getLastCol( section, includeHideCol );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|section|`number`|Optional|Area specified based on fixed pane
`0`:left (`default` when RightCols(right) and Cols(center) information do not exist)
`1`:center (`default` when RightCols(right) information does not exist)
`2`:right (`default`)|
|includeHideCol|`boolean`|Optional|`true` when set, `Col.Visible` extracts columns regardless of
`0(false)`:Do not include hidden columns in calculation (`default`)
`1(true)`:Include hidden columns in calculation|

### Return Value
***string*** : Rightmost column name

### Example
```javascript
// Check the rightmost column name.
var lcol = sheet.getLastCol();
```

### Read More
- [getFirstCol method](./get-first-col)
- [GetColWithHide cfg](/docs/props/cfg/get-col-with-hide)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.11|`includeHideCol` argument added|
