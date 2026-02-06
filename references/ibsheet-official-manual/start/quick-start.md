---
KEY: quickStart
KIND: guide
PATH: start/quick-start
ALIAS_EN: quick, start
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/start/quick-start
---
# Quick Start


## ibsheet File Configuration
To use `IBSheet8`, add the following 4 to 7 files.

```html
<!----- ibsheet basic modules ----->
<!-- Design CSS -->
<link rel="stylesheet" type="text/css" href="ibsheet/css/default/main.css">
<!-- Sheet core file -->
<script src="ibsheet/ibsheet.js"></script>
<!-- License file -->
<script src="ibsheet/ibleaders.js"></script>
<!-- Message file - add either ko.js or en.js -->
<script src="ibsheet/locale/ko.js"></script>


<!----- ibsheet optional modules ----->
<!-- Excel download/upload related module -->
<script src="ibsheet/plugins/ibsheet-excel.js"></script>
<!-- Dialog related module for search, detail view, etc. -->
<script src="ibsheet/plugins/ibsheet-dialog.js"></script>
<!-- Common property related module -->
<script src="ibsheet/plugins/ibsheet-common.js"></script>
```

## Sheet Creation

After configuring information such as the number of columns, features, and header titles, create the object through the **[IBSheet.create()](/docs/static/create)** function.

*During initial creation, the **width and height of the sheet** follow the **width and height of the div element** defined in the el property, and <mark>*if the div has **no width or height*** the default values are **100%** for width and **800px** for height.</mark>*

[JavaScript syntax]
```javascript
function initSheet() {
    // Set sheet initialization properties
    var OPT = {
            // Definition for each column (set column name, Type, Format, etc.)
            // The "Type" and "Name" properties of a column must always be set.
            Cols:[
                {Header: "Column1", Name: "colName1", Type: "Text"},
                {Header: "Column2", Name: "colName2", Type: "Text", Align: "center"}
            ]
        };
    // Set initial data
    var DATA = [];

    IBSheet.create({
        id: "sheet",        // Sheet object ID
        el: "sheetDiv",     // DIV element ID where the sheet will be created
        options: OPT,       // Initialization options variable
        data: DATA          // Initial loading data
    });
}
```
[HTML syntax - Fixed sheet height]
```html
<body onload="initSheet()">
  <div class="btnCls">
     <button type="button" class="mainBtnB">Search</button>
     <button type="button" class="mainBtnB">New</button>
  </div>
  <hr>
  <!-- DIV element that will become the sheet -->
  <div id="sheetDiv" style="width:100%; height:500px;"></div>
</body>
```
[HTML syntax - Fixed parent element height]
```html
<body onload="initSheet()">
  <div class="btnCls">
     <button type="button" class="mainBtnB">Search</button>
     <button type="button" class="mainBtnB">New</button>
  </div>
  <hr>
  <!-- Parent element of the sheet -->
  <div style="width:100%; height:600px;">
     <!-- DIV element that will become the sheet -->
     <div id="sheetDiv" style="width:100%; height:100%;"></div>
   </div>
</body>
```

**When creating the sheet with a relative height value such as 100%, the parent element's height must be fixed.**

<mark>**The sheet height must be set large enough to display all fixed rows (header, filter, total rows, etc.).** 
This is typically around 150~200px, and if set smaller than this, the sheet may not be created.</mark>

*Refer to [Sheet Object Structure](/docs/start/basic-structure) for `options` and `data`.*

![Sheet Creation](/assets/imgs/quickStart1.png "Simple sheet creation")
<!-- IMAGE: Sheet/Table View - Sheet Creation -->

[Figure 1] Created ibsheet

## Sheet Initialization and Column Configuration

You can configure detailed settings for the sheet's header, rows, columns, etc. through the `options` of the [IBSheet.create()](/docs/static/create) function.
```javascript
var OPT = {
        // Definition for each column (set column name, Type, Format, etc.)
        Cols:[
            {
                Header: "Name",
                Name: "sa_nm", Type: "Text"
            },
            {
                Header: "Employee Number",
                Name: "sa_id", Type: "Text", Align: "center"
            },
            {
                Header: "Department",
                Name: "sa_dept", Type: "Enum",
                Enum: "|Management Support|General Affairs|HR|Design|Construction 1|Construction 2", EnumKeys: "|01|02|03|04|05|06"
            },
            {
                Header: "Position",
                Name: "sa_position", Type: "Enum",
                Enum: "|CEO|Senior Managing Director|Director|General Manager|Deputy General Manager|Manager|Assistant Manager|Staff", EnumKeys: "|A1|A2|A3|B0|B1|C4|C5|C6"
            },
            {
                Header: "Hire Date",
                Name: "sa_enterdate", Type: "Date", Width:100, Format: "yyyy/MM/dd",
            },
            {
                Header: "Remarks",
                Name: "sa_desc", Type: "Lines"
            }
        ]
    };
```
![Sheet Creation 2](/assets/imgs/quickStart2.png "Sheet Creation 2")
<!-- IMAGE: Sheet/Table View - Sheet Creation 2 -->

[Figure 2] `ibsheet` with column settings applied

For creating multi-line headers or setting cell merging within headers, please refer to the [(col)Header](/docs/props/col/header) property.


By setting the data in [IBSheet.create](/docs/static/create), you can load data simultaneously with sheet creation.

```javascript
var DATA = [
    {"sa_nm": "Hong Gildong", "sa_id": "9821450", "sa_dept": "04", "sa_position": "B0", "sa_enterdate": "19980305", "sa_desc": ""},
    {"sa_nm": "Kim Hanguk", "sa_id": "9510427", "sa_dept": "01", "sa_position": "A3", "sa_enterdate": "19890317", "sa_desc": ""}
];
```

![Sheet Creation 3](/assets/imgs/quickStart3.png "Sheet Creation 3")
<!-- IMAGE: Sheet/Table View - Sheet Creation 3 -->

[Figure 3] `ibsheet` with data loaded

If you need to search based on user input, after creating the sheet, use the [loadSearchData()](/docs/funcs/core/load-search-data) or [doSearch()](/docs/funcs/core/do-search) API.


<div class='notice'>

### Caution
The sheet creation function [IBSheet.create()](/docs/static/create) operates asynchronously, so calling sheet functions immediately after creation may cause errors.

```javascript
// Sheet creation function
IBSheet.create({ ... });
// Since it is created asynchronously, it is unknown whether the "sheet" object has been created.
sheet.showFilterRow(); // Call this in the onRenderFirstFinish event, or set options.Cfg.ShowFilter: true to display the filter row simultaneously with sheet creation.
```
Therefore, to call necessary functions after sheet creation, you should configure the logic in the [onRenderFirstFinish](/docs/events/on-render-first-finish) event.

</div>

## Examples of Using Various Features

[IBSheet Method Usage](/docs/funcs/method)

### **Adding Rows**
You can add a new row through the [addRow()](/docs/funcs/core/add-row) function.	

```javascript
// Add a new row above the selected row.
sheet.addRow(sheet.getFocusedRow(), 1);
```

### **Loading Data**
You can load data through the [loadSearchData()](/docs/funcs/core/load-search-data) function.

```javascript
// Ajax communication using jQuery
$.ajax({
    url: "./data.jsp",
    param: "edate=19950101&position=C1",
    success: function (rtnData) {
        // Load JSON data retrieved from the server
        sheet.loadSearchData(rtnData);
    }
});
```

You can load data from a URL through the [doSearch()](/docs/funcs/core/do-search) function.


After the search data loading is complete
```javascript
// Ajax communication and data loading
sheet.doSearch("/ex/getPetaData.do", "edate=19950101&position=C1");
```

Both the [loadSearchData()](/docs/funcs/core/load-search-data) and [doSearch()](/docs/funcs/core/do-search) functions above operate asynchronously.


### **Extracting Modified Data**

 You can extract modified data (or all data) from the sheet in JSON format or querystring format through the [getSaveJson()](/docs/funcs/core/get-save-json) and [getSaveString()](/docs/funcs/core/get-save-string) functions.

([getChangedData()](/docs/funcs/core/get-changed-data) extracts modified data at the cell level, while [getSaveJson()](/docs/funcs/core/get-save-json) and [getSaveString()](/docs/funcs/core/get-save-string) extract at the row level.)

```javascript
var chgData = sheet.getSaveJson();
```
return value
```js
{
    "data":[
        // Deleted data
        {"id":"AR2","SEQ":2,"sStatus":"D","DCheck":"1","sNation":"Korea", ... "STATUS":"Deleted"},
        // New data
        {"id":"AR51","SEQ":4,"sStatus":"I","DCheck":"0","sNation":"USA", ... "STATUS":"Added"},
        // Modified data
        {"id":"AR5","SEQ":6,"sStatus":"U","DCheck":"0","sNation":"Korea", ... "STATUS":"Changed"}
    ]
}
```
You can check whether the sheet has been modified through [hasChangedData()](/docs/funcs/core/has-changed-data).

To extract only rows of a specific status, for example, to extract only newly added rows, you can conveniently use the [getRowsByStatus('Added')](/docs/funcs/core/get-rows-by-status) function.



### **Deleting Rows**
You can change a specific row's status to `Deleted` with the [deleteRow()](/docs/funcs/core/delete-row) function.

You can immediately delete a specific row with the [removeRow()](/docs/funcs/core/remove-row) function.

You can delete all data rows with the [removeAll()](/docs/funcs/core/remove-all) function.
```javascript
// Extract the first row object
var row = sheet.getFirstRow();
// Immediately delete the first row.
sheet.removeRow(row);
```

### **Clearing Status**
You can clear the sheet's status after a save operation is completed through the [acceptChangedData](/docs/funcs/core/accept-changed-data) function.

When this function is called, rows with Modified (Changed) or Added status are changed to loaded status, and rows with Deleted status are removed.


### **Checking/Changing Cell Values**
You can check or change cell values through the [getValue](/docs/funcs/core/get-value) and [setValue](/docs/funcs/core/set-value) functions.

```javascript
// READ cell value
var cls = sheet.getValue( sheet.getFirstRow(), "CLS" ); // Get the value of the "CLS" column in the first data row.

// WRITE cell value
sheet.setValue( sheet.getRowByIndex(100), "DESC", "Threshold proximity warning!" ); // Change the "DESC" value of the 100th row.
```



### **Setting Text Color and Background Color**
You can change the properties of a specific cell through the [setAttribute()](/docs/funcs/core/set-attribute) function.
```javascript
// Change the background color of the AMT column to FF0000
sheet.setAttribute(null, "AMT", "Color", "#FF0000" );

// Change the text color of the last row to 0000FF
sheet.setAttribute( sheet.getLastRow(), null, "TextColor", "#0000FF" );

// Change the font of a specific cell to Bold
sheet.setAttribute( sheet.getFocusedRow(), "ETC", "TextStyle", 1 );
```


When you need to change multiple design properties at once, use the [setCellStyle()](/docs/funcs/core/set-cell-style) function.
```javascript
var row = sheet.getFirstRow();
sheet.setCellStyle({row: row, col: "sa_nm", attr: {TextColor:"red", Color: "#00FF00"}, render: 1});
```


## Using Events

[IBSheet Event Usage](/docs/events/event)

### Example of Using Events When Data is Modified
```javascript
// Declare events during object creation
options.Events = {
    onAfterChange:function (evtParam) {
        if (evtParam.col == "AMT" && evtParam.val == 3000) {
            evtParam.sheet.showMessage("I Love You 3000");
        }
    }
};
```

### Double Click Event Bind Example (Not Recommended)
```javascript
// Event binding after sheet object creation
sheet.bind("onDblClick" , function(evtParam) {
    var row = evtParam.row;
    var col = evtParam.col;
    // Open detail dialog when double-clicking a non-editable cell
    if (!sheet.getAttribute(row, col, "Edit")) {
        evtParam.sheet.showEditDialog(row);
    }
});
```


### Read More
- [Sheet object structure getting started](/docs/start/basic-structure)
- [Header col](/docs/props/col/header)
- [Method usage basics method](/docs/funcs/method)
- [Event usage basics event](/docs/events/event)
- [onRenderFirstFinish event](/docs/events/on-render-first-finish)
- [create static](/docs/static/create)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
