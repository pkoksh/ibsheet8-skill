---
KEY: goToNextPage
KIND: method
PATH: funcs/core/go-to-next-page
ALIAS: sheet.goToNextPage, goToNextPage()
ALIAS_EN: navigates, next, page, current, gotonextpage, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/go-to-next-page
---
# goToNextPage ***(method)***
> Navigates to the next page of the current page.



### Syntax
```javascript
boolean goToNextPage();
```

### Return Value
***boolean*** : Whether page navigation was successful (returns false if already on the last page)

### Example
```javascript
// Navigate to the next page
function NextPage(){
    var rtn = sheet.goToNextPage();
    if(!rtn) {
        alert("This is the last page.");
    }
}
```

### Read More
- [goToPage method](./go-to-page)
- [goToPrevPage method](./go-to-prev-page)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
