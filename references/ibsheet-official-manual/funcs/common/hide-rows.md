---
KEY: hideRows
KIND: method
PATH: funcs/common/hide-rows
ALIAS: sheet.hideRows, hideRows()
ALIAS_EN: hides, multiple, rows, once, hiderows, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/common/hide-rows
---
# hideRows ***(method)***

> Hides multiple rows at once. 



### Syntax
```javascript
void hideRows( rows );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|rows|`array[object]`|Optional|Array of [data row objects](/docs/appx/row-object) to hide|


### Return Value
***none***


### Example
```javascript
// Hides the AR1 row and AR2 row at once.
sheet.hideRows([sheet.getRowById("AR1"), sheet.getRowById("AR2")]);
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
