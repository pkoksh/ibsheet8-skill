---
KEY: getColWithHide
KIND: config-property
PATH: props/cfg/get-col-with-hide
ALIAS_EN: apis, getcolindex, getcolbyindex, getfirstcol, getlastcol, getnextcol, getprevcol, operate
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/get-col-with-hide
---
# GetColWithHide ***(cfg)***
> The APIs `getColIndex, getColByIndex, getFirstCol, getLastCol, getNextCol, getPrevCol` operate based on visible columns by default. 

> When this feature is set to `true`, the above `APIs` operate regardless of `Col.Visible`. 

> The priority is `includeHideCol` > `GetColWithHide`, so even if `GetColWithHide` is set to `true`, setting `includeHideCol` to `false` will make it operate based on visible columns.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Feature disabled (`default`)|
|`1(true)`|`getColIndex, getColByIndex, getFirstCol, getLastCol, getNextCol, getPrevCol` operate regardless of `Col.Visible`.|


### Example
```javascript
// Makes getColIndex, getColByIndex, getFirstCol, getLastCol, getNextCol, getPrevCol APIs operate regardless of Visible.
options.Cfg = {
    GetColWithHide: true
};
```

### Read More
- [getColIndex method](/docs/funcs/core/get-col-index)
- [getColByIndex method](/docs/funcs/core/get-col-by-index)
- [getFirstCol method](/docs/funcs/core/get-first-col)
- [getLastCol method](/docs/funcs/core/get-last-col)
- [getNextCol method](/docs/funcs/core/get-next-col)
- [getPrevCol method](/docs/funcs/core/get-prev-col)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.11|Feature added|
