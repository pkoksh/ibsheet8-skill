---
KEY: sheetHeight
KIND: appendix
PATH: appx/sheet-height
ALIAS_EN: learn, height, sheet, object, settings, appendix
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/appx/sheet-height
---
# Sheet Object Height Settings  ***(appendix)***
> Learn how to set the height of a sheet object.

## 1. Sheet Height
The sheet height follows the height assigned to the **el** object when creating the sheet.

For example, if the el object is set to 500px as follows, the sheet height will be 500px.
```html
<div id="sheetDIV" style="width:100%;height:500px"></div>

<script>
//Create sheet object
IBSheet.create({
    id:"sheet1",
    el:"sheetDIV",
    options:{...}
});
</script>
```

- If the el object has no height, it will automatically have a height of 800px.
- If the sheet object's height is too small to display even static rows (header, summary rows), the sheet will not be created.

## 2. Modifying Sheet Height
If you want the sheet's width or height to expand or shrink according to the window size, set the el object's width/height to 100% and adjust by assigning width/height to the sheet's parent DIV object.

```html
<!-- Sheet parent DIV -->
<div class="sheet_wrapper" style="width:100%;min-height:200px;height:calc(100% - 130px)">
    <!-- Sheet object -->
    <div id="sheetDIV" style="width:100%;height:100%"></div>
</div>
```

When assigning the el's width or height in **percent**, the parent object's width or height must be <mark>explicitly defined</mark>.

For example, if the el object's height is 100% but the parent DIV's height is not defined, the sheet will not be created.

When changing the sheet height to a fixed size, please adjust the parent object rather than the sheet object.

```js
//Change the .sheet_wrapper object's height to 680px
sheet.MainTag.parentNode.style.height = "680px";
```


## 3. Automatic Height Adjustment Based on Loaded Data

To automatically adjust the sheet height based on the amount of loaded data, use (Cfg)[NoVScroll](/docs/props/cfg/no-v-scroll):1.

NoVScroll does not work with SearchMode:0.

## 4. Setting Maximum Height for the Sheet

To show a smaller height when there is little loaded data, and fix the sheet height with a vertical scrollbar when the data exceeds a certain number of rows, call the following logic in the search completion event ([onSearchFinish](/docs/events/on-search-finish)).

```js
var options = {
    Cols:[],
    Events:{
        onSearchFinish:function(evtParam){
            //When the loaded data has 10 or more rows, show with vertical scroll.
            resizeSheet( evtParam.sheet, evtParam.getDataRows().length, 10);
        }
    }

};

/*
Common function
Create scroll when more than a certain number of rows are loaded (sheet object, number of loaded data rows, reference row count to display)
*/
function resizeSheet(sheet,dataRowCnt, baseRowCnt){
    var p = sheet.MainTag.parentNode;  //Sheet parent object
    var h = sheet.MainTag.clientHeight; //Sheet object height

    //Height of the remaining area excluding the data area in the sheet
    var hOtherRows = h - sheet.MainTable.tBodies[0].querySelector('.IBBodyMid').clientHeight - sheet.MainTable.tBodies[0].querySelector(".HeightSpace").parentNode.offsetHeight;

    //Change the parent's size based on the reference rows and loaded data row count
    if(dataRowCnt < baseRowCnt){
        p.style.height = ((dataRowCnt * sheet.RowHeight) + hOtherRows)+"px";
    }else{
        p.style.height = ((baseRowCnt * sheet.RowHeight) + hOtherRows)+"px";
    }
}
```

### Read More
- [NoVScroll cfg](/docs/props/cfg/no-v-scroll)
- [onSearchFinish event](/docs/events/on-search-finish)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.6|Added|
