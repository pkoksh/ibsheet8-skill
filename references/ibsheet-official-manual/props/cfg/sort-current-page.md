---
KEY: sortCurrentPage
KIND: config-property
PATH: props/cfg/sort-current-page
ALIAS_EN: whether, sort, currently, displayed, page, server, paging, searchmode
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/sort-current-page
---
# SortCurrentPage ***(cfg)***

> Sets whether to sort only the currently displayed page when using server paging ([SearchMode](./search-mode): 4, 5).

### Type
`boolean`

### Options
|Value|Description|
|---|---|
|`0(false)`|Sends sort information to the server and retrieves the results. (`default`)|
|`1(true)`|Does not send sort information to the server, and sorts only the currently displayed page.|

### Example
```javascript
options.Cfg = {
    SortCurrentPage: true
};
```

### Read More

- [SearchMode cfg](./search-mode)
- [doSearchPaging method](/docs/funcs/core/do-search-paging)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
