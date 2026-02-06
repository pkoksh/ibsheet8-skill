---
KEY: getDataRows
KIND: method
PATH: funcs/core/get-data-rows
ALIAS: sheet.getDataRows, getDataRows()
ALIAS_EN: returns, data, rows, currently, held, sheet, getdatarows, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-data-rows
---
# getDataRows ***(method)***

> Returns all data rows currently held in the sheet. 


> **<mark>Note</mark> :** 

**- For `Type:"Text"` columns, the returned data type for Number data is Number type.**

  **If you want it returned as String type, set (Col)[OrigSearchData](/docs/props/col/orig-search-data).**

**- For `Type:"Date", Format, DataFormat, EditFormat` columns, the returned data type is Number type (timestamp).**

  **If you want it returned in a format like 20010101, convert the data using the [getValue](./get-value) or [dateToString](/docs/static/date-to-string) function.**

**- When values are changed by directly accessing the row object, the status (Changed) is not affected.**


<!--! [Private] Made private due to SearchMode:5 feature addition
> For general search, all searched data rows are returned, and for server scroll search ([SearchMode](/docs/props/cfg/search-mode):3), the data rows searched for the corresponding page are returned. 

> However, for server paging ([SearchMode](/docs/props/cfg/search-mode):4), only the searched page data is returned. 
If pages 1,3,5 are searched, data for pages 1,3,5 is returned. 

When [AlwaysSearchPage](/docs/props/cfg/always-search-page):1 is set, if the currentPage argument is set to 1, only the currently displayed page's data is returned.

!-->

### Syntax
```javascript
array getDataRows( noSubTotal);
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|noSubTotal |`boolean`|Optional|Whether to exclude subtotal/cumulative total rows
`0(false)`:Include subtotal/cumulative total rows (`default`)
`1(true)`:Exclude subtotal/cumulative total rows|
<!--![Private] Made private due to SearchMode:5 feature addition
|currentPage |`boolean`|Optional|Whether to return current displayed page data
`0(false)`:Return entire page data (`default`)
`1(true)`:Return current displayed page data|
!-->

### Return Value
***array[row object]*** : An array containing [data row object](/docs/appx/row-object)s

### Example
```javascript
// Retrieve all data rows.
var Rows = sheet.getDataRows();

for(var i=0; i<Rows.length; i++){
  // When batch changing the closed column (saveName:close_data) value, the render property should be turned off for faster speed.
    sheet.setValue({row:Rows[i], col:"close_data", val:"Changed", render:0});
  //Rows[i].close_data = "Changed"; // Changing values by accessing the row object directly does not affect status.
}
// Apply changes.
sheet.rerender(1);
```

### Read More
- [getTotalRowCount method](./get-total-row-count)
- [OrigSearchData col](/docs/props/col/orig-search-data)
- [getShownRows method](./get-shown-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.4|`noSubTotal` argument added to retrieve only data rows excluding subtotal/cumulative total rows|
<!--![Private] Made private due to SearchMode:5 feature addition
|core|8.1.0.23|`currentPage` argument added to retrieve only the current displayed page's data rows|
!-->
