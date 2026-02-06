---
KEY: ajax
KIND: method
PATH: funcs/core/ajax
ALIAS: sheet.ajax, ajax()
ALIAS_EN: retrieves, data, server, via, ajax, communication, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/ajax
---
# ajax ***(method)***

> Retrieves data from the server via ajax communication.

> You can use the callback function that executes when the server communication is complete to use the data received from the server.


### Syntax
```javascript
void ajax ( url, param, method, callback, sync, reqHeader, timeout, traditional );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|url|`string`|Required|URL to call via ajax|
|param|`string` \| `object`|Optional|Parameters to send to the server|
|method|`string`|Optional| Select transmission method `GET / POST` (`default: 'GET'`)|
|callback|`funtion`|Optional|Callback function triggered when server communication is complete
e.g.) `func(res(result code), data(data received from server), responseXML(XMLHttpRequest.responseXML), response(XMLHttpRequest object))`|
|sync|`boolean`|Optional|Whether to process synchronously
`0(false)`:Asynchronous mode (`default`)
`1(true)`:Synchronous mode|
|reqHeader|`object`|Optional|Headers to send to the server {key1: value1, key2: value2}|
|timeout|`number`|Optional|Maximum wait time for server communication (unit: seconds, `default: 60`)|
|traditional|`boolean`|Optional|Configure param structure sent to the server
`param: {"data": [1, 2]}` Set when sending array structure params
**`0(false)`:Send including []** (`default`)
e.g.) `data[]=1&data[]=2`
**`1(true)`:Send without []**
e.g.) `data=1&data=2`
|

### Return Value
***none***

### Example
```javascript
// Retrieve data using POST method
sheet.ajax("./insaAppMain.do", "dept_cd=031&position_cd=A0", "POST", function (res, data, resXml, response) {
  if (res >= 0) {
    sheet.loadSearchData(data);
  } else {
    alert("Data retrieval failed!!");
  }
});

// Retrieve data using GET method
sheet.ajax({
  url: "./insaAppMain.do",
  param: {"dept_cd": 31, "position_cd": "A0"},
  method: "GET",
  reqHeader: {"Content-Type":"application/json"},
  callback: function (res, data, resXml, response) {
    if (res >= 0) {
      sheet.loadSearchData(data);
    } else {
      alert("Data retrieval failed");
    }
  }
});
```

### Read More
- [loadSearchData method](./load-search-data)
- [Timeout cfg](/docs/props/cfg/timeout)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.5|`timeout` argument added|
|core|8.0.0.7|`traditional` argument added|
|core|8.0.0.17|`params` -> `param` argument name changed (`params` still usable)|
