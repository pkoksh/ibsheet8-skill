---
KEY: exportDataBuffer
KIND: method
PATH: funcs/core/export-data-buffer
ALIAS: sheet.exportDataBuffer, exportDataBuffer()
ALIAS_EN: multiple, ibsheet, you, want, download, single, excel, file
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/export-data-buffer
---
# exportDataBuffer ***(method)***

> multiple `ibsheet` is used when you want to download to a single Excel file.

> `exportDataBuffer(1(true))`as when executed after each in the sheet [exportData](./export-data) even if called download is not done without, `exportDataBuffer(0(false))` when called moment each sheet's contents Excelfile inside each different worksheet download .

> This feature using it is also possible to create an Excel file with multiple worksheets from a single sheet. 

<!--!
> 
> **<mark>Note</mark> : [UseSpreadSheet](/docs/props/cfg/use-spread-sheet) featurein not supported.**
!-->

### Syntax
```javascript
void exportDataBuffer( isBuffer );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|isBuffer|`boolean`|Required|buffering whether
`0(false)`:Buffering not used (`default`)
`1(true)`:Use buffering|


### Return Value
***none***

### Example
```javascript
//1. General usage method
//Start buffering
sheet1.exportDataBuffer(true);

//Buffer first sheet data
var param1 = {
        fileName:"Travel_Expenses.xlsx",
        sheetName:"Transportation"  //Worksheet name in Excel file
};
sheet1.exportData(param1);

//Buffer second sheet data
var param2 = {
        sheetName:"Meals"    //Worksheet name in Excel file
};
sheet2.exportData(param2);

//Buffer third sheet data
var param3 = {
        sheetName:"Accommodation/Others"    //Worksheet name in Excel file
};
sheet3.exportData(param3);

//Download all sheets (actual download starts)
sheet1.exportDataBuffer(false);





//2. From a single sheetin divide by columns to create Excel file
//Start buffering
sheet.exportDataBuffer(true);

//Download only 4 columns as the first worksheet
var param1 = {
        sheetName:"Q1-2",
        downCols:"1QTCost|1QTProfit|2QTCost|2QTProfit"
};
sheet.exportData(param1);

//Download remaining columns as the second worksheet
var param2 = {
        sheetName:"Q3-Q4 and Summary"
        downCols:"3QTCost|3QTProfit|4QTCost|4QTProfit|Total|Summary"
};
sheet.exportData(param2);

//End buffering (Actual download starts)
sheet.exportDataBuffer(false);
```

### Read More

- [exportData method](./export-data)


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.24|Feature added|
