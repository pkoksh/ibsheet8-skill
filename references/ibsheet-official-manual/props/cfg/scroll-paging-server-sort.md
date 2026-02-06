---
KEY: scrollPagingServerSort
KIND: config-property
PATH: props/cfg/scroll-paging-server-sort
ALIAS_EN: option, scroll, paging, searchmode, search, mode, wanting, server
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/scroll-paging-server-sort
---
# ScrollPagingServerSort ***(cfg)***

> An option to set when using scroll paging ([SearchMode](./search-mode): 3) and wanting to use server-side sorting. When set, sort information is sent to the server during sorting, and the results are retrieved.

### Type
`boolean`

### Options
|Value|Description|
|---|---|
|`0(false)`|Does not send sort information to the server; sorts only the currently displayed page. (`default`)|
|`1(true)`|Sends sort information to the server and retrieves the results.|

### Example
```javascript
options.Cfg = {
    ScrollPagingServerSort: true // Sends sort information to the server during sorting and retrieves the results.
};
```

### Read More

- [SearchMode cfg](./search-mode)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.6|Feature added|
