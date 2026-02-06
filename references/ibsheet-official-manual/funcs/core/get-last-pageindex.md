---
KEY: getLastPageindex
KIND: method
PATH: funcs/core/get-last-pageindex
ALIAS: sheet.getLastPageindex, getLastPageindex()
ALIAS_EN: returns, index, last, page, paging, search, mode, getlastpageindex
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-last-pageindex
---
# getLastPageIndex ***(method)***

> Returns the index of the last page in paging search mode.

### Syntax
```javascript
number getLastPageIndex();
```

### Return Value
***number*** : last Page index

### Example
```javascript
// Gets the index of the last page in the current search.
var lastIndex = sheet.getLastPageIndex();
```

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.78|Feature added|