---
KEY: onBeforeGoToPage
KIND: event
PATH: events/on-before-go-to-page
ALIAS_EN: event, called, navigating, different, page, onbeforegotopage
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-before-go-to-page
---
# onBeforeGoToPage ***(event)***
> Event called when navigating to a different page.

> If the return value is `1(true)`, the page will not be navigated.

> Not called when navigating to a new page by scrolling down or when moving focus in [SearchMode](/docs/props/cfg/search-mode): 2, 3.

### Syntax

```
    onBeforeGoToPage:function(paramObject) {

    }
or
    sheet.bind("onBeforeGoToPage" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|Sheet object|
|page|`object`|[Page object](/docs/appx/page-object) of the page to navigate to|
|pagepos|`number`|Page number to navigate to (`starts from 0`)|

### Return
***boolean***

### Example
```javascript
// Function to check if all cells in a column named col on the current page are checked
// Returns true if checked, false if not
function CheckAllChecked(sheet, col) {
    var row = sheet.getFocusedPage().firstChild;
    while (row) {
        if (!row[col]) return false;
        row = row.nextSibling;
    }
    return true;

}

options.Events = {
    onBeforeGoToPage:function(evtParam){
        // Page navigation is allowed if all sCheck column cells on the current page are checked.
        if (CheckAllChecked(params.sheet, "sCheck")) return false;
        alert("Not all items are checked.")
        return true;
    }
}
```

### Read More

- [goToPage method](/docs/funcs/core/go-to-page)
- [onAfterGoToPage event](./on-after-go-to-page)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
