---
KEY: hasFilter
KIND: method
PATH: funcs/core/has-filter
ALIAS: sheet.hasFilter, hasFilter()
ALIAS_EN: returns, whether, filter, hasfilter, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/has-filter
---
# hasFilter ***(method)***
> Returns whether a filter has been used.

> Returns `true` if a filter is set, regardless of the filter results.



### Syntax
```javascript
boolean hasFilter();
```

### Return Value
***boolean*** : filter applied whether

### Example
```javascript
//filter usesetor?
var fuse = sheet.hasFilter();
```

### Read More
- [clearFilter method](./clear-filter)
- [setFilter method](./set-filter)
- [doFilter method](./do-filter)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
