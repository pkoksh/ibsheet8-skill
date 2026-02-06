---
KEY: maxPages
KIND: config-property
PATH: props/cfg/max-pages
ALIAS_EN: searchmode, number, pages, sheet, holds, one, time, maxpages
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/max-pages
---
# MaxPages ***(cfg)***

> When `SearchMode: 2`, sets the number of pages that the sheet holds at one time.

> The larger the number of pages, the more DOM elements are held, which may cause the sheet to become heavier.

> If the number of pages is too small, data loading may occur frequently every time the scroll is moved.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Number of pages held (`default: 1`)|

### Example
```javascript
options.Cfg ={
    MaxPages: 5,        // Holds only 5 pages
};
```

### Read More
- [PageLength cfg](/docs/props/cfg/page-length)
- [SearchMode cfg](/docs/props/cfg/search-mode)
- [updateClientPaging method](/docs/funcs/core/update-client-paging)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
