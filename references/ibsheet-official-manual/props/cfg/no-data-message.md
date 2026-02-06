---
KEY: noDataMessage
KIND: config-property
PATH: props/cfg/no-data-message
ALIAS_EN: whether, display, message, data, retrieved, creating, sheet, empty
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/no-data-message
---
# NoDataMessage ***(cfg)***

> Sets whether to display the message **"No data retrieved."** when creating a sheet with empty data (data argument of IBSheet.create) or when searching using a search function. 


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Do not display message on sheet creation or search.|
|`1`|Display message only on sheet creation|
|`2`|Display message only on search (`default`)|
|`3`|Display message on both sheet creation and search|


### Example
```javascript
options.Cfg = {
  NoDataMessage: 2,  // Display message only when searching using a search function
  ...
};
```

### Try it
- [Set to 3](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/NoDataMessage/)

### Read More
- [create static](/docs/static/create)
- [loadSearch method](/docs/funcs/core/load-search-data)
- [doSearch method](/docs/funcs/core/do-search)
- [doSearchPaging method](/docs/funcs/core/do-search-paging)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.6|Feature added|
