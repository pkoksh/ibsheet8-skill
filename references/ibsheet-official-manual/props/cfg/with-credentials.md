---
KEY: withCredentials
KIND: config-property
PATH: props/cfg/with-credentials
ALIAS_EN: dosearch, docs, funcs, core, search, dosearchpaging, paging, dosave
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/with-credentials
---
# WithCredentials ***(cfg)***

> When using [doSearch](/docs/funcs/core/do-search), [doSearchPaging](/docs/funcs/core/do-search-paging), [doSave](/docs/funcs/core/do-save), the [withCredentials](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials) option can be set for internal Ajax requests.

> Useful for requests that need to include cookies or authentication information.
>
> **Caution:** When using `WithCredentials: true`, CORS configuration is required on the server.
> 1. Set `Access-Control-Allow-Origin` to the requesting domain (origin) instead of `"*"`
> 2. Set `Access-Control-Allow-Credentials: true`
> 3. Set `Access-Control-Allow-Methods` and `Access-Control-Allow-Headers` if needed
> Requests will be blocked by the browser if server configuration is incorrect.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Do not use withCredentials for Ajax requests (`default`)|
|`1(true)`|Use withCredentials option for Ajax requests|

### Example
```javascript
options.Cfg = {
    WithCredentials: true // Include cookies/authentication information in Ajax requests
};
```

### Read More
- [doSearch method](/docs/funcs/core/do-search)
- [doSearchPaging method](/docs/funcs/core/do-search-paging)
- [doSave method](/docs/funcs/core/do-save)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.28|Feature added|
