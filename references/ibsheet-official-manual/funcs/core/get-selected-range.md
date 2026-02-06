---
KEY: getSelectedRange
KIND: method
PATH: funcs/core/get-selected-range
ALIAS: sheet.getSelectedRange, getSelectedRange()
ALIAS_EN: returns, currently, selected, areas, array, getselectedranges, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-selected-range
---
# getSelectedRanges ***(method)***
> Returns the currently selected areas as an array.

> For example, after selecting as shown below, the return value in `default` form is as follows.


###
![Get selected area](/assets/imgs/getSelectedRanges.png "Get selected area")
<!-- IMAGE: Screenshot/Example Image - Get selected area -->


```
[
    [row1object, "CONTRACTNO", row2object, "CARNO", 4, 3, 6, 3]
    ,[row1object, "RENTFEE", row2object, "RENTDATE", 5, 7, 4, 2]
    ,[row1object, "CARNO", row2object, "RENTFEE", 11, 5, 4, 3]
]
```
### Syntax
```javascript
object getSelectedRanges( rowtype, coltype );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|rowtype|`number`|Optional|`0`:Extract all selected areas without separation (`default`)
`1`:When using tree, extract excluding collapsed children
`2`:Separate and extract by page unit|
|coltype|`number`|Optional|`0`:Extract all without separation (`default`)
`1`:Separate and extract by area (Left/Center/Right)|

### Return Value
***object (array[array])*** : Array of selected areas

[start [data row object](/docs/appx/row-object), start column name, end [data row object](/docs/appx/row-object), end column name, start row index, start column index, number of selected rows, number of selected columns]


### Example
```javascript
// Check the number of selected cells
var selectRange = sheet.getSelectedRanges();
var selectCellCnt = 0;
for(var i=0;i<selectRange.length;i++){
    selectCellCnt += parseInt(selectRange[i][6]) * parseInt(selectRange[i][7]);
}
alert("Total "+selectCellCnt+" cells selected.");
```

### Read More
- [selectRange method](./select-range)
- [getSelectedRows method](./get-selected-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
