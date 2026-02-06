---
KEY: doSearch
KIND: method
PATH: funcs/core/do-search
ALIAS: sheet.doSearch, doSearch()
ALIAS_EN: dosearch, loads, data, json, format, sheet, ajax, communication
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/do-search
---
# doSearch ***(method)***

> `doSearch` loads data in JSON format to the sheet in AJAX communication.

> Since it operates asynchronously, post-data-load processing should be implemented in the [onReceiveData](/docs/events/on-receive-data), [onBeforeDataLoad](/docs/events/on-before-data-load), [onDataLoad](/docs/events/on-data-load) events.

> By default, `doSearch` clears the existing data in the sheet and loads the data fetched from the server.

> To append new data after existing data, use the `append: true` option.

> For details related to the server response (JSON) structure, refer to [dataStructure](/docs/dataStructure/1data-structure).

### Syntax

```javascript
void doSearch( url, param,  method, append, reqHeader, callback, timeout, sync, next, strictParse, traditional );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|url|`string`|Required|URL to call in AJAX|
|param|`string` \| `object`|Optional|Parameters to send to the server|
|method|`string`|Optional| Transmission method GET / POST Select (`default: 'GET'`)|
|append|`boolean`|Optional|Whether to `append` to existing data
Due to differences in search methods, when using `append:1(true)` with [SearchMode](/docs/props/cfg/search-mode):2, [onRenderFinish](/docs/events/on-render-finish) event is not triggered.
`0(false)`:Remove existing data then load search data (`default`)
`1(true)`:Append search data to existing data|
|reqHeader|`object`|Optional|Content to define in the request header when sending to the server
ex : `{"callBy":"ibsheetObject","method":"doSearch"}`|
|callback|`function`|Optional|Callback function to call after search|
|timeout|`number`|Optional|Maximum wait time for server communication (unit: seconds, `default: 60`)|
|sync|`number`|Optional|Synchronous search setting. When set to asynchronous, if called consecutively and the previous search has not finished, subsequent searches are ignored. If you need to call consecutively and all searches must complete, synchronous search mode must be used.
`0`:Asynchronous mode (`default`)
`1`:Asynchronous sequential processing mode
`2`:Synchronous mode|
|next|`object`|Optional|[data row object](/docs/appx/row-object)
Data is `append`ed above the specified row. (only available when `append:1(true)`)|
|strictParse|`boolean`|Optional|JSON parser Select
Normally parses JSON data through a flexible parser, and when set to true, parses through the browser's JSON.parse()
`0(false)`:Use flexible parser (`default`)
`1(true)`:Use browser's built-in JSON.parse() function|
|traditional|`boolean`|Optional|Configure param structure sent to the server
`param: {"data": [1, 2]}` Set when sending array structure params
**`0(false)`:Send including []** (`default`)
ex) `data[]=1&data[]=2`
**`1(true)`:Send without []**
ex) `data=1&data=2`
|
|parent|`object`|Optional|[data row object](/docs/appx/row-object)
 (Specifies the parent row when using dynamic tree search) 
|


A flexible parser allows several things that standard JSON.parse() does not allow, permitting a few exceptions.
 1. Extra commas allowed
 2. Property names do not require double quotes.

Reference
- [MDN:bad parsing](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Errors/JSON_bad_parse)
- JSON.parse() has better performance than flexible parsing (approximately 5 times), however the parsing time difference during data loading is not large, and within 50,000 records, it is at a level that is difficult for users to notice.

### Return Value
***none***

### Example

```javascript
// GET method data retrieval
sheet.doSearch("./insaAppMain.do", "dept_cd=031&position_cd=A0", "GET");

// POST method data retrieval
var opt = {
  url: "./insaAppMain.do",
  param: {"dept_cd": 031, "position_cd": "A0"},
  method: "POST",
  reqHeader: {"Content-Type":"application/json"}
};
sheet.doSearch(opt);
```

### Read More

- [loadSearchData method](./load-search-data)
- [doSearchPaging method](./do-search-paging)
- [onReceiveData event](/docs/events/on-receive-data)
- [onBeforeDataLoad event](/docs/events/on-before-data-load)
- [onDataLoad event](/docs/events/on-data-load)
- [onSearchFinish event](/docs/events/on-search-finish)
- [Timeout cfg](/docs/props/cfg/timeout)
- [StrictParse cfg](/docs/props/cfg/strict-parse)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.4|To provide consistency with other APIs, `params` argument name to `param`changed to `params`can still be used but is not recommended.|
|core|8.0.0.5|`timeout` argument added|
|core|8.0.0.6|`sync` argument added|
|core|8.0.0.7|`next` argument added|
|core|8.0.0.7|`strictParse` argument added|
|core|8.0.0.7|`traditional` argument added|
|core|8.0.0.25|`parent` argument added|
