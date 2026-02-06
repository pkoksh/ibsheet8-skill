---
KEY: setAllColValue
KIND: method
PATH: funcs/common/set-all-col-value
ALIAS: sheet.setAllColValue, setAllColValue()
ALIAS_EN: uses, setvalue, change, values, data, rows, single, column
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/common/set-all-col-value
---
# setAllColValue ***(method)***

> Uses setValue to change the values of all data rows in a single column at once. 


### Syntax
```javascript
void setAllColValue( colName, value );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|colName|`string`|Optional|Column name|
|value|`string`|Optional|Input value|

### Return Value
***none***

### Example
```javascript
// Changes all values in the StartDate column to 20210124 at once.
sheet.setAllColValue("StartDate", "20210124");
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
