---
KEY: downToExcelBuffer
KIND: method
PATH: funcs/excel/down-to-excel-buffer
ALIAS: sheet.downToExcelBuffer, downToExcelBuffer()
ALIAS_EN: multiple, ibsheet, you, want, download, single, excel, file
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/excel/down-to-excel-buffer
---
# down2ExcelBuffer ***(method)***

> multiple `ibsheet` is used when you want to download to a single Excel file.

> **To use this feature, the `/plugins/ibsheet-excel.js` file provided with the distribution must be included.**
>
> `down2ExcelBuffer(1(true))`as when executed after each in the sheet [down2Excel](./down-to-excel) even if called download is not done without, `down2ExcelBuffer(0(false))` when called moment each sheet's contents Excelfile inside each different worksheet download .

> This feature using it is also possible to create an Excel file with multiple worksheets from a single sheet.

[Basic information about download/upload](/docs/appx/import-export)

### Syntax
```javascript
void down2ExcelBuffer( isBuffer );
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
sheet1.down2ExcelBuffer(true);

//Buffer first sheet data
var param1 = {
        fileName:"Travel_Expenses.xlsx",
        sheetName:"Transportation"  //Worksheet name in Excel file
};
sheet1.down2Excel(param1);

//Buffer second sheet data
var param2 = {
        sheetName:"Meals"    //Worksheet name in Excel file
};
sheet2.down2Excel(param2);

//Buffer third sheet data
var param3 = {
        sheetName:"Accommodation/Others"    //Worksheet name in Excel file
};
sheet3.down2Excel(param3);

//Download all sheets (actual download starts)
sheet1.down2ExcelBuffer(false);





//2. From a single sheetin divide by columns to create Excel file
//Start buffering
sheet.down2ExcelBuffer(true);

//Download only 4 columns as the first worksheet
var param1 = {
        sheetName:"Q1-2",
        downCols:"1QTCost|1QTProfit|2QTCost|2QTProfit"
};
sheet.down2Excel(param1);

//Download remaining columns as the second worksheet
var param2 = {
        sheetName:"Q3-Q4 and Summary",
        downCols:"3QTCost|3QTProfit|4QTCost|4QTProfit|Total|Summary"
};
sheet.down2Excel(param2);

//End buffering (Actual download starts)
sheet.down2ExcelBuffer(false);
```

### Read More

- [down2Excel method](./down-to-excel)


### Since

|product|version|desc|
|---|---|---|
|excel|0.0.3|Feature added|
