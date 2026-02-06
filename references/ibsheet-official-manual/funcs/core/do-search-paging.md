---
KEY: doSearchPaging
KIND: method
PATH: funcs/core/do-search-paging
ALIAS: sheet.doSearchPaging, doSearchPaging()
ALIAS_EN: paging, search, cfg, searchmode, docs, props, mode, dedicated
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/do-search-paging
---
# doSearchPaging ***(method)***

> Paging search (cfg [SearchMode](/docs/props/cfg/search-mode) : `3` or `4` or `5`) is a dedicated method.

> The search data JSON's `Total` attribute is used to get the total data count, and data is retrieved in page units.

> For details related to the server response (JSON) structure, refer to [dataStructure](/docs/dataStructure/paging-structure).

### Syntax
```javascript
void doSearchPaging( url, pageParam, param, reqHeader, method, callback, timeout, sync, strictParse, traditional, restapi, cPage, pageLengthParam, beforeSend, orderByParam );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|url|`string`|Required|URL to call in ajax|
|pageParam|`string`|Optional|Page variable to send to the server (`default: 'ibpage'`)|
|param|`string` \| `object`|Optional|Search condition parameters to send to the server|
|reqHeader|`object`|Optional|Content to define in the request header when sending to the server
ex : `{"callBy":"ibsheetObject","method":"doSearchPaging"}`|
|method|`string`|Optional|GET/POST Select (`default: 'GET'`)|
|callback|`function`|Optional|Callback function to call after search|
|timeout|`number`|Optional|Maximum wait time for server communication (unit: seconds, `default: 60`)|
|sync|`number`|Optional|Synchronous search setting. When set to asynchronous, if called consecutively and the previous search has not finished, subsequent searches are ignored. If you need to call consecutively and all searches must complete, use synchronous search mode must use .
`0`:Asynchronous mode (`default`)
`1`:Asynchronous sequential processing mode
`2`:Synchronous mode|
|strictParse|`boolean`|Optional|json parser Select
Normally operates with flexible parsing, and when set to true, parses through the browser's JSON.parse()for parsing
`0(false)`:Use flexible parser (`default`)
`1(true)`:	browserin provides JSON.parse() built-in function|
|traditional|`boolean`|Optional|Configure param structure sent to the server
`param: {"data": [1, 2]}` Set when sending array structure params
**`0(false)`:[] Send including** (`default`)
ex) `data[]=1&data[]=2`
**`1(true)`:[] Send without**
ex) `data=1&data=2`
|
|restapi|`boolean`|Optional|Setting to change the page URL format to match REST API URL format
`0(false)`:page URL address change feature not used (`default`)
`1(true)`:Page URL format change to REST API format enabled

 **<mark>Note</mark> : When sending in GET method, parameters other than pageParam are not sent** 
ex) `/userInfo/users/2`|
|cPage| `number`|Optional|Page number to display first when searching (1starting from)|
|pageLengthParam| `string`|Optional|To send to the server `pageLength` variable (`default: 'ibpagelength'`)|
|beforeSend|`function`|Optional|Function to call before search
`1(true)` value return value cancels the search|
|orderByParam|`string`|Optional|To send to the server sorting information parameter variable (`default: 'iborderby'`)|


### Return Value
***none***

### Example
```javascript
//Search function when SearchMode is 3, 4, or 5
var opt = {
  "url":"/cust/getCustInfo.do",
  "param":"custId=92123&empId=24342",
  "method":"POST",
  "beforeSend":function (rtn) {
    console.log(rtn.sheet);  // sheet object
   },
  "callback":function (rtn) {
    var rtnData = JSON.parse(rtn.data);
    alert("All data count :" + rtnData["Total"]);
  }
};
sheet.doSearchPaging(opt);

//Search data example
{
  "Total":254141    //All data count
  "Data":[
    {},...,{}   //Searched by the count set in PageLength
  ]
}
```

### Read More

- [SortCurrentPage cfg](/docs/props/cfg/sort-current-page)
- [Timeout cfg](/docs/props/cfg/timeout)
- [PageLength cfg](/docs/props/cfg/page-length)
- [StrictParse cfg](/docs/props/cfg/strict-parse)
- [onReceiveData event](/docs/events/on-receive-data)
- [onDataLoad event](/docs/events/on-data-load)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.5|`timeout` argument added|
|core|8.0.0.6|`sync` argument added|
|core|8.0.0.7|`strictParse` argument added|
|core|8.0.0.7|`traditional` argument added|
|core|8.0.0.7|`restapi` argument added|
|core|8.0.0.20|`cPage` argument added|
|core|8.1.0.41|`pageLengthParam` argument added|
|core|8.1.0.49|`beforeSend` argument added|