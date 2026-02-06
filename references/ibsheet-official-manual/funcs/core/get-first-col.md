---
KEY: getFirstCol
KIND: method
PATH: funcs/core/get-first-col
ALIAS: sheet.getFirstCol, getFirstCol()
ALIAS_EN: checks, leftmost, column, name, getfirstcol, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-first-col
---
# getFirstCol ***(method)***

> Checks the leftmost column name.

> It is also possible to retrieve the leftmost column of a specific area through section.

> By default, this function operates based on visible columns. 

> By setting `includeHideCol` or `Cfg: GetColWithHide`, you can retrieve regardless of `Visible`. 

> The priority is `includeHideCol` > `GetColWithHide` , so `GetColWithHide` even if set to `true`, `includeHideCol` `false`,it can be made to operate based on visible columns.


### Syntax
```javascript
string getFirstCol( section, includeHideCol );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|section|`number`|Optional|Area specified based on fixed pane
`0`:left (`default`)
`1`:center (`default` when LeftCols(left) information does not exist)
`2`:right (`default` when LeftCols(left) and Cols(center) information do not exist)|
|includeHideCol|`boolean`|Optional|`true` when set, `Col.Visible` extracts columns regardless of
`0(false)`:Do not include hidden columns in calculation (`default`)
`1(true)`:Include hidden columns in calculation|


### Return Value
***string*** : Leftmost column name

### Example
```javascript
// Check the leftmost column name.
var fcol = sheet.getFirstCol();
```

### Read More
- [getLastCol method](./get-last-col)
- [GetColWithHide cfg](/docs/props/cfg/get-col-with-hide)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.11|`includeHideCol` argument added|
