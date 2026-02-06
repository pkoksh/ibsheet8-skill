---
KEY: downToHwpxBuffer
KIND: method
PATH: funcs/excel/down-to-hwpx-buffer
ALIAS: sheet.downToHwpxBuffer, downToHwpxBuffer()
ALIAS_EN: downloading, multiple, ibsheet, instances, single, hangul, file, down
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/excel/down-to-hwpx-buffer
---
# down2HwpxBuffer ***(method)***

> Used when downloading multiple `ibsheet` instances into a single Hangul file.

> **To use this feature, the `/plugins/ibsheet-excel.js` file provided with the distribution must be included.**
>
> When `down2HwpxBuffer(1(true))` is executed, each subsequent [down2Hwpx](./down-to-hwpx) call on the sheets will not perform the download. Instead, when `down2HwpxBuffer(0(false))` is called, the contents of each sheet are drawn as Hangul tables in the order that `down2Hwpx` was called.
> Also, using the template feature and the `sheetField` property of `down2Hwpx`, you can create tables at desired positions.

[Basic information about download/upload](/docs/appx/import-export)

### Syntax
```javascript
void down2HwpxBuffer( isBuffer );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|isBuffer|`boolean`|Required|Whether to use buffering
`0(false)`:Buffering not used (`default`)
`1(true)`:Use buffering|


### Return Value
***none***

### Example
```javascript

//1. Method for drawing multiple sheets in a Hangul file without using templates
//Start buffering
sheet.down2HwpxBuffer(true);

//Draw only 4 columns as a Hangul table
var param1 = {
        downCols:"1QTCost|1QTProfit|2QTCost|2QTProfit"
};
sheet.down2Hwpx(param1);

//Draw the remaining merge columns as a second Hangul table
var param2 = {
        downCols:"3QTCost|3QTProfit|4QTCost|4QTProfit|Total|Summary"
};
sheet.down2Hwpx(param2);

//End buffering (Actual download starts)
sheet.down2HwpxBuffer(false);

//2. Method for creating sheets at desired positions using templates.

//Start buffering
sheet1.down2HwpxBuffer(true);

//Buffer first sheet data
var param1 = {
    fileName:"Resume.hwpx",
        //tempFile and keyField are set only in the first call.
        tempFile:"Resume.hwpx",
        keyField: {
                "name": "John Doe",
                "engName": "Hong Gil Dong"
        },
        sheetField : "sheet1"
};
sheet1.down2Hwpx(param1);

//Buffer second sheet data
var param2 = {
        sheetField : "shee2"
};
sheet2.down2Hwpx(param2);

//Buffer third sheet data
var param3 = {
        sheetField : "shee3"
};
sheet3.down2Hwpx(param3);

//Buffer fourth sheet data
var param4 = {
        sheetField : "shee4"
};
sheet4.down2Hwpx(param4);


//Download all sheets (actual download starts)
sheet1.down2HwpxlBuffer(false);
```
* Template screen example

![image](/assets/imgs/Resume.png)
<!-- IMAGE: Screenshot/Example Image - image -->


### Read More

- [down2Hwpx method](./down-to-hwpx)


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.85|Down2Hwpx Feature added|
|excel|1.1.2|Down2Hwpx Feature added|
|jar|1.0.0|Down2Hwpx Feature added|
