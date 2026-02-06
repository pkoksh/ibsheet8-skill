---
KEY: getRowById
KIND: method
PATH: funcs/core/get-row-by-id
ALIAS: sheet.getRowById, getRowById()
ALIAS_EN: based, onas, data, row, object, docs, appx, returns
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-row-by-id
---
# getRowById ***(method)***
> ID based onas [data row object](/docs/appx/row-object) returns.



### Syntax
```javascript
string getRowById( id );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|id|`string`|Required|rowof id|


### Return Value
***row object*** : [data row object](/docs/appx/row-object)

### Example
```javascript
//Gets the AR5 row object and changes its state to Delete.
var row = sheet.getRowById("AR5");
row["Deleted"] = 1;
sheet.renderBody();
```

### Read More
- [getRowIndex method](./get-row-index)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
