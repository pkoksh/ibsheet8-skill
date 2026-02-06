---
KEY: loadSearchData
KIND: method
PATH: funcs/core/load-search-data
ALIAS: sheet.loadSearchData, loadSearchData()
ALIAS_EN: loads, json, format, data, sheet, loadsearchdata, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/load-search-data
---
# loadSearchData ***_(method)_***

> Loads JSON format data into the sheet.

> Since it operates asynchronously, post-data-load processing should be implemented in the [onReceiveData](/docs/events/on-receive-data), [onBeforeDataLoad](/docs/events/on-before-data-load), [onDataLoad](/docs/events/on-data-load) events.

> By default, `loadSearchData` removes the sheet's existing data and loads the data retrieved from the server.

> To append new data after existing data, use the `append: true` option.

> For details related to the server response (JSON) structure, refer to [dataStructure](/docs/dataStructure/1data-structure).

### Syntax

```javascript
void loadSearchData( data, append, callback, sync, next, strictParse, parent, ignoreEvent );
```

### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| data | `object` | Required | JSON format data |
| append | `boolean` | Optional | Whether to `append` below existing data
Due to differences in search methods, when using `append:1(true)` with [SearchMode](/docs/props/cfg/search-mode):2, the [onRenderFinish](/docs/events/on-render-finish) event is not triggered.
`0(false)`:Remove existing data then load search data (`default`)
`1(true)`:Append search data to existing data|
| callback | `function` | Optional | Callback function to call after search
ex) `sheet`: sheet object, `data`: search data, `result(0)`: search success |
| sync | `boolean` | Optional | Whether to perform synchronous search. 
`0(false)`: Asynchronous mode (`default`)
`1(true)`: Synchronous mode |
| next | `object` | Optional | [data row object](/docs/appx/row-object)
Data is `appended` above the specified row. (Only available when `append:1(true)`) |
| strictParse | `boolean` | Optional | JSON parser selection
Normally operates with flexible parsing, and when set to true, parses through the browser's JSON.parse() built-in function
`0(false)`:Use flexible parser (`default`)
`1(true)`:Use browser's JSON.parse() built-in function|
| parent | `object` | Optional | [data row object](/docs/appx/row-object)
(Specifies the parent row when performing tree search) |
| ignoreEvent | `boolean` | Optional | Argument to prevent search-related events from being triggered 
`0(false)`:Trigger search-related events (`default`)
`1(true)`:Do not trigger search-related events |

Flexible parsing allows a few exceptions that general JSON.parse() parsing does not allow.

1. Extra commas allowed
2. Property names do not require double quotes.

Reference

- [MDN:bad parsing](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Errors/JSON_bad_parse)
- JSON.parse() has better performance than flexible parsing (approximately 5 times), however, the parsing time difference during data loading is not significant, and within 50,000 records it is at a level that is difficult for users to notice.

### Return Value

**_none_**

### Example

```javascript
var DATA = {"data":[
    {"EMP_ID":"08212","EMP_NM":"John Doe","DEPT_CD":"031"},
  {"EMP_ID":"07417","EMP_NM":"Gyun Heo","DEPT_CD":"120"},
  {"EMP_ID":"02600","EMP_NM":"Panseo Hong","DEPT_CD":"405"},
]};

//Append data below existing data.
sheet.loadSearchData( DATA, 1 );

//Append data above the specified row.
sheet.loadSearchData({ data: DATA.data, append: true, next: sheet.getRowByIndex(3) })
```

### Read More

- [StrictParse cfg](/docs/props/cfg/strict-parse)
- [doSearch method](./do-search)
- [doSearchPaging method](./do-search-paging)
- [onBeforeDataLoad](/docs/events/on-before-data-load)
- [onDataLoad event](/docs/events/on-data-load)
- [onReceiveData event](/docs/events/on-receive-data)

### Since

| product | version | desc |
|---------|---------|------|
| core | 8.0.0.0 | Feature added |
| core | 8.0.0.6 | `sync` argument added |
| core | 8.0.0.7 | `next` argument added |
| core | 8.0.0.7 | `strictParse` argument added |
| core | 8.0.0.25 | `parent` argument added |

