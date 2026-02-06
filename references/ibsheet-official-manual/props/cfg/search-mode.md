---
KEY: searchMode
KIND: config-property
PATH: props/cfg/search-mode
ALIAS_EN: data, search, mode, sheet, searchmode, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/search-mode
---
# SearchMode ***(cfg)***

> Sets the data search mode of the sheet.



### Type
`number`

### Options
|Value|Mode|Description|
|-----|-----|------|
|`0`|**FastLoad Mode (Virtual Scroll Processing)**|`IBSheet8`'s FastLoad mode (SearchMode: 0) is based on virtual scroll, which instantly updates only the data in the visible area when the user scrolls vertically.
This allows users to immediately view row data without screen stuttering while scrolling.
When using this feature, all row heights must be the same, and there are [(Appendix) feature constraints](/docs/appx/fastload-constraints).
 If data row heights are not uniform, please set [(Cfg)AutoRowHeight](./auto-row-height).|
|`1`|**ClientPaging** |A feature that retrieves all data, processes paging based on the [(Cfg)PageLength](./page-length) property setting value, and displays through page navigation.
You can dynamically change and recalculate the number of pages using the [(Method)updateClientPaging](/docs/funcs/core/update-client-paging) function. 
 Page navigation can be used in [InfoRowConfig](/docs/props/cfg/info-row-config).

**<mark>Caution</mark>: `(Method) makeSubTotal` is not supported.**|
|`2`|**LazyLoad (default)**|A feature that retrieves all data and displays data on screen based on scroll position in units of the [(Cfg)PageLength](./page-length) property setting value.|
|`3`|**ScrollAppend**|A feature that retrieves and displays one page at a time based on the count specified in [(Cfg)PageLength](./page-length).
Search must be performed through the [(Method)doSearchPaging](/docs/funcs/core/do-search-paging) function.
When the user scrolls vertically to the bottom, the URL called by [(Method)doSearchPaging](/docs/funcs/core/do-search-paging) is re-requested to append the next page data below the existing data.
The server must construct a paging query based on page information (ibpage=2,3,4...) passed from the sheet and return data for each page.
The retrieved data must include a **Total** (total record count) property.
When the **Total** value equals the accumulated data count, no more server calls are made.
Previously retrieved pages are reused without re-requesting.
`Sort`, `Filter`, `Excel download`, etc. only work within the retrieved data. 

 **<mark>Caution</mark>**: Properties that cause non-uniform data row heights such as `Type:Lines, Img` or `Wrap:1` cannot be used.
 `(Col) FormulaRow` cannot be used.
`(Method) makeSubTotal` is not supported.
The PageLength value must be set to match the number of data received from the server.**|
|`4`|**ServerPaging**|A feature that retrieves and displays one page at a time based on the count specified in [(Cfg)PageLength](./page-length).
Search must be performed through the [(Method)doSearchPaging](/docs/funcs/core/do-search-paging) function.
Page navigation UI can be displayed using [InfoRowConfig](/docs/props/cfg/info-row-config).
When the page number changes, the URL called by [(Method)doSearchPaging](/docs/funcs/core/do-search-paging) is re-requested to display the page data.
The server must construct a paging query based on page information (ibpage=2,3,4...) passed from the sheet and return data for each page.
The retrieved data must include a **Total** (total record count) property.
Previously retrieved pages do not call the server again.
`Filter`, `Excel download`, etc. only work within the retrieved data.
`Sort` operates based on [SortCurrentPage](./sort-current-page).

 **<mark>Caution</mark>: `(Col) FormulaRow` cannot be used.
`(Method) makeSubTotal` is not supported.
The PageLength value must be set to match the number of data received from the server.**
|`5`|**ServerPaging2**| The operation is the same as `ServerPaging`, but it always calls the server to retrieve data when navigating pages.
`Filter`, `Excel download`, etc. operate within the PageLength.
`Sort` operates based on [SortCurrentPage](./sort-current-page).
You can dynamically change the number of rows per page through [(Method)updatePageLength](/docs/funcs/core/update-page-length).

 **<mark>Caution</mark>: `(Col) FormulaRow` cannot be used.
`(Method) makeSubTotal` is not supported.
The PageLength value must be set to match the number of data received from the server.**|</br>
### Example
```javascript
options.Cfg = {SearchMode: 0, ...};
```

### Read More
- [AutoRowHeight cfg](./auto-row-height)
- [InfoRowConfig cfg](./info-row-config)
- [PageLength cfg](./page-length)
- [doSearchPaging method](/docs/funcs/core/do-search-paging)
- [updateClientPaging method](/docs/funcs/core/update-client-paging)
- [updatePageLength method](/docs/funcs/core/update-page-length)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.1.0.54|`ServerPaging2` added|
