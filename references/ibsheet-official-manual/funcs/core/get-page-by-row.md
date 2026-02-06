---
KEY: getPageByRow
KIND: method
PATH: funcs/core/get-page-by-row
ALIAS: sheet.getPageByRow, getPageByRow()
ALIAS_EN: returns, page, object, docs, appx, containing, specified, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-page-by-row
---
# getPageByRow ***(method)***
> Returns the [page object](/docs/appx/page-object) containing the specified [data row object](/docs/appx/row-object).



### Syntax
```javascript
object getPageByRow( row );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|Required|[data row object](/docs/appx/row-object)


### Return Value
***page object*** : row including present  [page object](/docs/appx/page-object)

### Example
```javascript
//Gets the last page object.
var lastRow = sheet.getLastRow();
var lastPageObj = sheet.getPageByRow(lastRow);
```

### Read More
- [getPageIndex method](./get-page-index)
- [getPageByIndex method](./get-page-by-index)
- [getPageIndexByRow method](./get-page-index-by-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
