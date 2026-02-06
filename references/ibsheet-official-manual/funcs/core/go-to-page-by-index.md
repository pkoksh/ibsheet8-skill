---
KEY: goToPageByIndex
KIND: method
PATH: funcs/core/go-to-page-by-index
ALIAS: sheet.goToPageByIndex, goToPageByIndex()
ALIAS_EN: navigates, specific, page, gotopagebyindex, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/go-to-page-by-index
---
# goToPageByIndex ***(method)***
> Navigates to a specific page.

> Available in client/server paging.


### Syntax
```javascript
void goToPageByIndex(index);
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|index|`number`|Required|Page sequence number to navigate to


### Return Value
***none***

### Example
```javascript
// Navigate to the 12th page
sheet.goToPageByIndex(12);
```

### Read More
- [goToNextPage method](./go-to-next-page)
- [goToPrevPage method](./go-to-prev-page)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
