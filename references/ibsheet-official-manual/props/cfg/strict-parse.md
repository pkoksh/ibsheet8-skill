---
KEY: strictParse
KIND: config-property
PATH: props/cfg/strict-parse
ALIAS_EN: selects, parser, parsing, json, data, search, functions, strictparse
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/strict-parse
---
# StrictParse ***(cfg)***

> Selects the parser when parsing JSON data in search functions.

> When not set or set to false, data is parsed through a lenient parser. When set to true, data is parsed through the browser-provided JSON.parse().

The lenient parser allows several things that are not permitted when parsing through the standard JSON.parse().
 1. Allows trailing commas
 2. Property names do not require double quotes.

Reference
- [MDN:bad parsing](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Errors/JSON_bad_parse)
- JSON.parse() has better performance than the lenient parser (approximately 5x), but since parsing does not take up a large portion of the data loading process, the difference is imperceptible to users for datasets within 50,000 records.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Use lenient parser (`default`)|
|`1(true)`|Use the browser-provided JSON.parse() built-in function|



### Example
```javascript
options.Cfg = {
    StrictParse: 1,       // Parse data through JSON.parse() in search functions
};
```

### Read More
- [doSearch method](/docs/funcs/core/do-search)
- [doSearchPaging method](/docs/funcs/core/do-search-paging)
- [loadSearchData method](/docs/funcs/core/load-search-data)

### Since
|product|version|desc|
|---|---|---|
|core|8.0.0.7|Feature added|
