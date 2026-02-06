---
KEY: goToPage
KIND: method
PATH: funcs/core/go-to-page
ALIAS: sheet.goToPage, goToPage()
ALIAS_EN: navigates, specific, page, gotopage, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/go-to-page
---
# goToPage ***(method)***
> Navigates to a specific page.



### Syntax
```javascript
void goToPage( page );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|page|`object`|Required|[data page object](/docs/appx/page-object)|


### Return Value
***none***

### Example
```javascript
// Get the last page
var page = sheet.getPageByRow(sheet.getLastRow() );
// Navigate to the last page
sheet.goToPage(page);
```

### Read More
- [goToNextPage method](./go-to-next-page)
- [goToPrevPage method](./go-to-prev-page)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
