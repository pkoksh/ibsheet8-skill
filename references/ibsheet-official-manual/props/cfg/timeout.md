---
KEY: timeout
KIND: config-property
PATH: props/cfg/timeout
ALIAS_EN: maximum, wait, time, server, communication, sheet, timeout, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/timeout
---
# Timeout ***(cfg)***

> Sets the maximum wait time for server communication used in the sheet. 

> The input value is in `seconds` units. The default value is `60 seconds`. 

> **Applied when the timeout parameter is not set when calling [ajax (method)](./../../funcs/core/ajax), [doSave (method)](./../../funcs/core/do-save), [doSearch (method)](./../../funcs/core/do-search), [doSearchPaging (method)](./../../funcs/core/do-search-paging). The API's timeout parameter takes priority.**

### Type
`number`

### Example
```javascript
options = {
    Cfg :{
        Timeout: 20,  // Set maximum wait time to 20 seconds when executing doSave, doSearch, doSearchPaging, ajax
        ...
    }
};
```

### Read More
- [ajax method](/docs/funcs/core/ajax)
- [doSave method](/docs/funcs/core/do-save)
- [doSearch method](/docs/funcs/core/do-search)
- [doSearchPaging method](/docs/funcs/core/do-search-paging)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|Feature added|
