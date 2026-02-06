---
KEY: pageObject
KIND: appendix
PATH: appx/page-object
ALIAS_EN: cfg, searchmode, docs, props, search, mode, value, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/appx/page-object
---
# Page Object  ***(appendix)***
> When (cfg)[SearchMode](/docs/props/cfg/search-mode) is set to a value other than 0, the sheet manages data rows in groups of the count specified in (cfg)[PageLength](/docs/props/cfg/page-length).

> At this point, the concept of a [page object](/docs/appx/page-object) is introduced. A [page object](/docs/appx/page-object) has links to the first and last rows it contains, as well as links to the previous and next pages.

> Especially when using SearchMode:4 with page navigation, you can navigate page by page through functions like [goToPage()](/docs/funcs/core/go-to-page).


>**<mark>Note</mark> : Page object index starts from 0.**


## Getting a Page Object
You can obtain a page object through several functions starting with getPage.
```javascript
var page = sheet.getPageByIndex(3); //Gets the page object at index 3.
```


## Page Object Link Information
|Name|Description|
|---|---|
|nextSibling|Next [page object](/docs/appx/page-object)|
|previousSibling|Previous [page object](/docs/appx/page-object)|
|firstChild|First row among the rows the page contains|
|lastChild|Last row among the rows the page contains|
|parentNode|Parent row object|
|childNodes.length|Number of rows the page contains|

```javascript
function moveNextPage(){
    //Gets the current page from the first visible row.
    var page = sheet.getPageByRow( sheet.getShownRows()[0] );
    //
    if(!page.nextSibling){
        sheet.showMessage("This is the last page.",1200);
    }else{
        sheet.goToPage(page.nextSibling);
    }


    //Navigate to the first page
    sheet.goToPage(0);
}
```
### Read More
- [getShownRows method](/docs/funcs/core/get-shown-rows)
- [getPageByIndex method](/docs/funcs/core/get-page-by-index)
- [getPageByRow method](/docs/funcs/core/get-page-by-row)
- [goToPage method](/docs/funcs/core/go-to-page)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
