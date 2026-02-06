---
KEY: loadExcelBuffer
KIND: method
PATH: funcs/excel/load-excel-buffer
ALIAS: sheet.loadExcelBuffer, loadExcelBuffer()
ALIAS_EN: provides, feature, load, multiple, sheets, single, excel, file
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/excel/load-excel-buffer
---
# loadExcelBuffer ***(method)***

> Provides a feature to load multiple sheets from a single Excel file at once.

> **To use this feature, the `/plugins/ibsheet-excel.js` file provided with the distribution must be included.**
>
> If `loadExcelBuffer(true)` is called, subsequent [loadExcel](./load-excel) calls on multiple sheets will not actually execute. When `loadExcelBuffer(false)` is finally called, the contents of the Excel file selected through the file dialog can be loaded into each sheet.

### Syntax
```javascript
void loadExcelBuffer( isBuffer );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|isBuffer|`boolean`|Required|Whether to use buffering
`0(false)`:Buffering not used (`default`)
`1(true)`:Use buffering|


### Return Value
***none***

### Example
```javascript
//Start buffering
sheet1.loadExcelBuffer(true);

//Upload the "Regular Employee" worksheet's contents to sheet1
var param1 = {workSheetName:"Regular Employee"};
sheet1.loadExcel(param1);

//Upload the "Contract Employee" worksheet's contents to sheet2
var param2 = {workSheetName:"Contract Employee"};
sheet2.loadExcel(param2);

//End buffering (file dialog opens)
sheet1.loadExcelBuffer(false);
```

### Read More
- [loadExcel method](./load-excel)

### Since

|product|version|desc|
|---|---|---|
|excel|0.0.3|Feature added|
