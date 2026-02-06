---
KEY: goToPrevPage
KIND: method
PATH: funcs/core/go-to-prev-page
ALIAS: sheet.goToPrevPage, goToPrevPage()
ALIAS_EN: navigates, previous, page, current, gotoprevpage, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/go-to-prev-page
---
# goToPrevPage ***(method)***
> Navigates to the previous page of the current page.



### Syntax
```javascript
boolean goToPrevPage();
```

### Return Value
***boolean*** : Whether page navigation was successful (returns false if the current page is the first page)

### Example
```javascript
// Navigate to the previous page
function PrevPage(){
    var rtn = sheet.goToPrevPage();
    if (!rtn) {
    alert("This is the first page.");
    }
}
```

### Read More
- [goToPage method](./go-to-page)
- [goToNextPage method](./go-to-next-page)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
