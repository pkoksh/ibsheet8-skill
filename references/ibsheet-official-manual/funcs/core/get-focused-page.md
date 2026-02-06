---
KEY: getFocusedPage
KIND: method
PATH: funcs/core/get-focused-page
ALIAS: sheet.getFocusedPage, getFocusedPage()
ALIAS_EN: returns, page, object, docs, appx, currently, focused, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-focused-page
---
# getFocusedPage ***(method)***

> Returns the [page object](/docs/appx/page-object) of the currently focused data.


### Syntax
```javascript
object getFocusedPage();
```

### Return Value
***page object*** : [page object](/docs/appx/page-object)

### Example
```javascript
//current focus present page object
var pageObj = sheet.getFocusedPage();
```

### Read More
- [getPageIndex method](./get-page-index)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
