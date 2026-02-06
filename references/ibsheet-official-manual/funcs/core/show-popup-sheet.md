---
KEY: showPopupSheet
KIND: method
PATH: funcs/core/show-popup-sheet
ALIAS: sheet.showPopupSheet, showPopupSheet()
ALIAS_EN: displays, sheet, object, dialog, specific, cell, position, showpopupsheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/show-popup-sheet
---
# showPopupSheet ***(method)***
> Displays a sheet object as a dialog at a specific cell position.


###
![showPopupSheet](/assets/imgs/showPopupSheet.png "Displays sheet object at mouse cursor position")
<!-- IMAGE: Sheet/Table View - showPopupSheet -->


### Syntax
```javascript
void showPopupSheet( row, col, data, width, height, dialog, pos);
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|Optional|[data row object](/docs/appx/row-object) to display the popup at (if either `row` or `col` argument is missing, the popup is created at the sheet center)|
|col |`string`|Optional|Column name to display the popup at (if either `row` or `col` argument is missing, the popup is created at the sheet center)|
|data|`object`|Required|Sheet object to be displayed as popup (object for initialization and data settings)|
|width|`number`|Optional|Width of the popup|
|height|`number`|Optional|Height of the popup|
|dialog|`object`|Optional|Parent popup object|
|pos|`object`|Optional|Adjusts the left/right and top/bottom position of the displayed menu. ex) `{x:10, y:10}`|


### Return Value
***object*** : The created sheet object

### Example
```javascript
function popup(){
  // Definition of the sheet to appear as popup
  // PSheet is the sheet object returned when showPopupSheet is called. In this example, it is simply defined with the variable name PSheet.
    var sheetInfo = {};
    sheetInfo.Cols = [
    {Header: "Employee No", Type:"Text", MinWidth:80, Name:"EMPNO", Align:"Center", CanEdit:0},
    {Header: "Employee Name", Type:"Text", MinWidth:80, Name:"EMPNM", Align:"Center", CanEdit:0},
        {Header: "Department Name", Type:"Text", MinWidth:80, Name:"DEPT", Align:"Center", CanEdit:0},
    {Header: "Position", Type:"Text", Width:80, Name:"POSITION", Align:"Center", CanEdit:0}
    ];
    sheetInfo.Events = {
    // Action when double-clicking a row in the popup sheet
        "onDblClick":function(evt){
            if(PSheet.getFocusedRow()){
                PSheet.setValue( PSheet.getFocusedRow() , "empNm" , evt.sheet.getValue(evt.row,"EMPNM") , 1);
                PSheet.closeDialog();
            }
        }
    };
    sheetInfo.Data = [
    {EMPNO:"01514",EMPNM:"Han Deuk-yeol",DEPT:"General Affairs",POSITION:"Deputy Director"},
    {EMPNO:"04140",EMPNM:"Kim Ha-jin",DEPT:"Planning",POSITION:"Deputy Director"},
    {EMPNO:"01794",EMPNM:"Su Yong",DEPT:"Planning",POSITION:"Assistant Manager"},
    {EMPNO:"03414",EMPNM:"Jeon Su-hak",DEPT:"Budget",POSITION:"Director"}
    ];
    var popSheet = PSheet.showPopupSheet( {row:PSheet.getRowById("AR2"),col:"empNm",data:sheetInfo,width:300,height:400});
}
```

### Read More
- [closeDialog method](./close-dialog)

### Since
|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
