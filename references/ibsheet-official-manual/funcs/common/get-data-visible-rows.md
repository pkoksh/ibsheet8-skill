---
KEY: getDataVisibleRows
KIND: method
PATH: funcs/common/get-data-visible-rows
ALIAS: sheet.getDataVisibleRows, getDataVisibleRows()
ALIAS_EN: retrieves, data, row, objects, currently, visible, sheet, getdatavisiblerows
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/common/get-data-visible-rows
---
# getDataVisibleRows ***(method)***

> Retrieves the data row objects currently visible in the sheet. 


### Syntax
```javascript
void getDataVisibleRows( noSubTotal );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|noSubTotal|`boolean`|Optional|Whether to exclude subtotal/cumulative total rows|

### Return Value
***none***

### Return Value
***array[row object]*** : Array of data row objects


### Example
```javascript
// Returns the data row objects currently visible in the sheet.
sheet.getDataVisibleRows();
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
