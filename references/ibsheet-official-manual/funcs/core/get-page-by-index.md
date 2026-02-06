---
KEY: getPageByIndex
KIND: method
PATH: funcs/core/get-page-by-index
ALIAS: sheet.getPageByIndex, getPageByIndex()
ALIAS_EN: returns, page, object, docs, appx, specified, index, getpagebyindex
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-page-by-index
---
# getPageByIndex ***(method)***
> Returns the [page object](/docs/appx/page-object) with the specified `index`.

> `index` starts from `0`.



### Syntax
```javascript
object getPageByIndex( index );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|index|`number`|Required|Page sequence number to retrieve


### Return Value
***page object*** : [page object](/docs/appx/page-object) corresponding to the specified sequence

### Example
```javascript
// Get the 15th page object
var pageObj = sheet.getPageByIndex(15);
```

### Read More
- [getPageIndex method](./get-page-index)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
