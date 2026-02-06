---
KEY: removePage
KIND: method
PATH: funcs/core/remove-page
ALIAS: sheet.removePage, removePage()
ALIAS_EN: deletes, specific, page, removepage, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/remove-page
---
# removePage ***(method)***
> Deletes a specific page.

> The page where the current focus is located cannot be deleted.


### Syntax
```javascript
boolean removePage( page );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|page|`object`|Required|page data object


### Return Value
***boolean*** : Whether page deletion succeeded or failed

### Example
```javascript
// Get the last page
var page = sheet.getPageByRow(  sheet.getLastRow() );
// Delete the last page
sheet.removePage(page);
```

### Read More
- [goToPage method](./go-to-page)
- [goToNextPage method](./go-to-next-page)
- [goToPrevPage method](./go-to-prev-page)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
