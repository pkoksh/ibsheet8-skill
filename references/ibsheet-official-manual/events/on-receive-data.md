---
KEY: onReceiveData
KIND: event
PATH: events/on-receive-data
ALIAS_EN: event, occurs, immediately, sheet, receives, data, retrieval, dosearch
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-receive-data
---
# onReceiveData ***(event)***
> Event that occurs immediately after the sheet receives data during data retrieval ([doSearch](/docs/funcs/core/do-search), [doSearchPaging](/docs/funcs/core/do-search-paging), [loadSearchData](/docs/funcs/core/load-search-data)).

> Occurs before the [onBeforeDataLoad](/docs/events/on-before-data-load) event.

> Returning `true(1)` stops all subsequent data parsing operations and related events.

### Syntax

```
    onReceiveData:function(paramObject) {

    }
or
    sheet.bind("onReceiveData" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|Sheet object that will load the data|
|data|`string`|Data retrieved from the server|
|response|`object`|`response` object|
|type|`string`|Search/Excel type (Search, EXCEL)|

### Return
***string***

### Example
```js
// Example of modifying retrieved content
options.Events = {
    onReceiveData: function(evtParam) {
        var DATA = evtParam.data; // Retrieved result data
        var parseData = JSON.parse(DATA); // Parse data that comes in as string

        // Modify part of the retrieved data
        /**
         * Retrieved data structure
         * { data: [{}, {}], etc: []}
         */
        for (var i = 0; i < parseData.data.length; i++){
            var row = parseData.data[i];
            // If the AttrYn column value is Y, set "Decision Complete" in the ConfirmFinish column
            if (row["AttrYn"] == "Y") {
                row["ConfirmFinish"] = "Decision Complete";
                row["CanEdit"] = 0;
            }
        }

        return parseData; // Return modified data after parsing
    }
}
```

### **Data structure to pass via Return**
> The data structure that must be passed when using return in `onReceiveData` differs depending on which search API is used. 

> When using `return`, the data structure below must be followed for the search to complete normally. 


1. Data structure to return from `loadSearchData` 

```js
// When returning as an object
// Return array structured data
[
  {
    "EMP_ID": "08212",
    "EMP_NM": "John",
    "DEPT_CD": "031"
  },
  {
    "EMP_ID": "07417",
    "EMP_NM": "Jane",
    "DEPT_CD": "120"
  },
  {
    "EMP_ID": "02600",
    "EMP_NM": "Smith",
    "DEPT_CD": "405"
  }
]

// When returning as a string
// Return as a string with object structure
`{"data":[{"EMP_ID":"08212","EMP_NM":"John","DEPT_CD":"031"},{"EMP_ID":"07417","EMP_NM":"Jane","DEPT_CD":"120"},{"EMP_ID":"02600","EMP_NM":"Smith","DEPT_CD":"405"}]}`
```

2. Data structure to return from `doSearch` 

```js
// Return object structured data
// Data must be inside an array within the data key
{
  "data": [{
      "sCountry": "UK",
      "sSatisfaction": 98,
      "sCompany": "Hanwha",
      "sSaleIncrease": 6579,
      "sPrice": 6788476,
      "sSaleQuantity": 28426
    },
    {
      "sCountry": "UK",
      "sSatisfaction": 69,
      "sCompany": "Google",
      "sSaleIncrease": 1510,
      "sPrice": 2097657,
      "sSaleQuantity": 40992
    },
    {
      "sCountry": "China",
      "sSatisfaction": 82,
      "sCompany": "Hanwha",
      "sSaleIncrease": 2696,
      "sPrice": 9591104,
      "sSaleQuantity": 13705
    },
    ...
  ]
}

// When returning as a string, also return as a string with object structure
```

3. Data structure to return from `doSearchPaging` 

```js
// Return object structured data as below
// Must include `Total` which is the total record count of the search data
{
  "Total":254141    //Total data count
  "data": [{
      "sCountry": "UK",
      "sSatisfaction": 98,
      "sCompany": "Hanwha",
      "sSaleIncrease": 6579,
      "sPrice": 6788476,
      "sSaleQuantity": 28426
    },
    {
      "sCountry": "UK",
      "sSatisfaction": 69,
      "sCompany": "Google",
      "sSaleIncrease": 1510,
      "sPrice": 2097657,
      "sSaleQuantity": 40992
    },
    {
      "sCountry": "China",
      "sSatisfaction": 82,
      "sCompany": "Hanwha",
      "sSaleIncrease": 2696,
      "sPrice": 9591104,
      "sSaleQuantity": 13705
    },
    ...
  ]
}

// When returning as a string, also return as a string with object structure
```

### Read More

- [doSearch method](/docs/funcs/core/do-search)
- [doSearchPaging method](/docs/funcs/core/do-search-paging)
- [loadSearchData method](/docs/funcs/core/load-search-data)
- [onDataLoad event](./on-data-load)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.19|Feature added|
|core|8.0.0.24|Added event firing when using `loadSearchData`|
|core|8.0.0.26|`type` added|
|core|8.1.0.73|Data parsing interruption feature added|
