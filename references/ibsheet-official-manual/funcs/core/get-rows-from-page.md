---
KEY: getRowsFromPage
KIND: method
PATH: funcs/core/get-rows-from-page
ALIAS: sheet.getRowsFromPage, getRowsFromPage()
ALIAS_EN: returns, data, row, object, docs, appx, positioned, pos
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-rows-from-page
---
# getRowsFromPage ***(method)***
> Returns the [data row object](/docs/appx/row-object) positioned at the pos-th position from the top within a specific page.

> The pos value is based on visible rows.


### Syntax
```javascript
object getRowsFromPage( page , pos );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|page|`object`|Required|[data page object](/docs/appx/page-object)|
|pos|`number`|Optional|Position from the top within the page (default: `0`)|


### Return Value
***row object*** : [data row object](/docs/appx/row-object)

### Example
```javascript
// Get the 10th row of the 4th page.
var page = sheet.getPageByIndex(4);
var rowObject = sheet.getRowsFromPage(page,10);
```

### Read More
- [getRowByIndex method](./get-row-by-index)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
