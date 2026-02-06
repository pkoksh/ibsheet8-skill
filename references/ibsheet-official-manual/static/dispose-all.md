---
KEY: disposeAll
KIND: static-member
PATH: static/dispose-all
ALIAS_EN: removes, sheet, objects, contained, within, javascript, window, object
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/static/dispose-all
---
# disposeAll ***(static)***

> Removes all `sheet objects` contained within the javascript Window object.

> When developing screens in SPA (Single Page Application) format, you may notice that during page navigation (component loading), elements within the DOM are removed, but javascript global variables in the Window object are retained.

> Since sheets are also stored in the Window as global variables when created, when building SPA-based systems, you must call this function during page navigation (component loading) to clear the sheet objects from the Window.

### Syntax
```javascript
void IBSheet.disposeAll(dialogs, unload);
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|dialogs|`boolean`|Optional|Removes all calendars, menus, and dialogs created by `static` methods.|
|unload|`boolean`|Optional|When loading `ibsheet.js` for each component in an SPA environment, releases sheet-related memory when completely removing the sheet.|

### Return Value
***none***

### Example
```javascript
// Load page in SPA format
function movePage(url){
    // Clear sheets in the current Window before page navigation
    IBSheet.disposeAll(true);

    // Navigate to new page
    $("#contents").load(url, function(response, status, xhr) {
        // Post-navigation tasks
    });
}
```
### Read More
- [IBSheetLoader](https://ibsheet.github.io/loader-manual/)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.3|`unload` parameter added|
