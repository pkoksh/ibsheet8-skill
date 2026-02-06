---
KEY: getPageIndex
KIND: method
PATH: funcs/core/get-page-index
ALIAS: sheet.getPageIndex, getPageIndex()
ALIAS_EN: pageof, index, getpageindex, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-page-index
---
# getPageIndex ***(method)***
> pageof `index` OK.

> `index`starts from `0`starting from.



### Syntax
```javascript
number getPageIndex( page );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|page|`object`|Required|page data object


### Return Value
***number*** : Index number of the [page object](/docs/appx/page-object)

### Example
```javascript
//Page where the current focus is located
var page = sheet.getFocusedPage();
//Page index OK
var pidx = sheet.getPageIndex(page);
```

### Read More
- [getPageByIndex method](./get-page-by-index)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
