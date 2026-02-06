---
KEY: pageLength
KIND: config-property
PATH: props/cfg/page-length
ALIAS_EN: number, rows, row, display, per, page, pagelength, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/page-length
---
# PageLength ***(cfg)***

> Sets the number of rows (`Row`) to display per page (`Page`). 

> When searching with `SearchMode: 1 (Client Paging)`, it is treated as the number of data rows displayed per page.

> When searching with `SearchMode: 2 (LazyLoad)`, the data retrieved at once is calculated from `PageLength` and `MaxPages` (default 1).

> When searching with `SearchMode: 1,2,4,5`, performance decreases if the PageLength value is too large. Setting 20-100 is recommended.


> **<mark>Caution</mark>: When using server paging (SearchMode: 3,4,5), the PageLength value must match the number of data retrieved from the server. (If PageLength is not set, the default value is 20)**


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Number of rows per page (`default: 20`)|


### Example
```javascript
options = {
    Cfg :{
      PageLength: 30,  // Number of rows to display per page
      MaxPages: 5      // Set the number of pages to render
    }
};
```

### Read More
- [MaxPages cfg](/docs/props/cfg/max-pages)
- [goToPage method](/docs/funcs/core/go-to-page)
- [updateClientPaging method](/docs/funcs/core/update-client-paging)
- [updatePageLength method](/docs/funcs/core/update-page-length)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
