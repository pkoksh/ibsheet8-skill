---
KEY: basicCourse
KIND: appendix
PATH: appx/basic-course
ALIAS_EN: you, create, multiple, header, rows, sheet, basic, developer
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/appx/basic-course
---
# Basic Developer Training  ***(appendix)***

Table of Contents
1. Product File Structure
2. Basic Sheet Creation Method
3. Functions and Events
4. Understanding Sheet Structure (<a href="../../#docs/start/basic-structure" target="_blank">Header, Head, Body, Foot, Solid</a>)
5. <a href="../../#docs/start/basic-structure" target="_blank">Def</a> and `ibsheet-common.js`
6. Rendering and Data Loading
7. Data Extraction and Saving
8. Formula Feature Usage
9. <a href="../../#docs/appx/solid" target="_blank">Solid (appendix)</a>, <a href="../../#docs/appx/menu" target="_blank">Menu (appendix)</a>, Calendar Feature
10. Custom Dialog Feature Usage
11. File export/import Feature Usage
12. FAQ


## 1. Product File Structure
Explains the basic file structure of IBSheet8 (<a href="../../#docs/intro/files" target="_blank">Reference</a>), and describes the roles of the 3 `plugin files`.

## 2. Basic Sheet Creation Method
Explains how to simply create a sheet object using javascript. (<a href="../../#docs/start/quick-start" target="_blank">Reference</a>)
```javascript
var OPT = {
	Cfg:{
		Alternate:2, HeaderMerge:3
	},
	LeftCols:[
		{ Header: "No", Name: "SEQ", Type: "Text", Width:40, Align:"Center"},
	],
	Cols:[
		{ Header: "Name", Name: "sa_nm", Type: "Text", Width:80},
		{ Header: "Gender", Name: "sa_gender", Type: "Enum", Enum:"|Male|Female",EnumKeys:"|M|F", MinWidth:50},
		{ Header: "Employee No.", Name: "sa_id", Type: "Text", Align: "center", Width:70,Size:6,EditMask:"^\\d*$"},
		{ Header: "Department", Name: "sa_dept", Type: "Enum", Enum: "|Management Support|General Affairs|HR|Design|Construction 1|Construction 2", EnumKeys: "|01|02|03|04|05|06",Width:80 },
		{ Header: "Position", Name: "sa_position", MinWidth:60, MaxWidth:60, Type: "Enum", Enum: "|CEO|Executive VP|Director|General Manager|Deputy GM|Manager|Assistant Manager|Staff", EnumKeys: "|A1|A2|A3|B0|B1|C4|C5|C6"},
		{ Header: "Hire Date",	Name: "sa_enterdate", Type: "Date", Width:100, Format: "yyyy/MM/dd", DataForamt:"yyyyMMdd", EditFormat:"yyyy-MM-dd"},
		{ Header: "Salary", Name: "sa_salary", Type: "Int", Width:80},
		{ Header: "Retirement Status", Name: "sa_retire", Type: "Radio", Enum:"|Retired|Active", EnumKeys:"|Y|N",Align:"center",MinWidth:125},
		{ Header: "Remarks", Name: "sa_desc", Type: "Lines", RelWidth:1 }
	]
};

IBSheet.create({
	id:"mySheet",   // Name of the sheet being created
	el:"sheet_DIV", // ID of the div object where the sheet will be created
	options:OPT     // IBSheet basic settings
});
```

## 3. Functions and Events
Explains basic usage of ibsheet functions and events.
#### 1) <a href="../../#docs/funcs/method" target="_blank">Basic Function Usage</a>

- Frequently used functions

|Function Name|Description|
|---|---|
|<a href="../../#docs/funcs/core/get-value" target="_blank">getValue</a>|Gets the value of a cell|
|<a href="../../#docs/funcs/core/set-value" target="_blank">setValue</a>|Modifies the value of a cell|
|<a href="../../#docs/funcs/core/get-string" target="_blank">getString</a>|Gets the formatted value of a cell|
|<a href="../../#docs/funcs/core/set-string" target="_blank">setString</a>|Modifies cell value with a formatted string|
|<a href="../../#docs/funcs/core/set-all-check" target="_blank">setAllCheck</a>|Checks all in a Bool type column|
|<a href="../../#docs/funcs/core/get-attribute" target="_blank">getAttribute</a>|Gets attributes of row, column, or cell|
|<a href="../../#docs/funcs/core/set-attribute" target="_blank">setAttribute</a>|Modifies attributes of row, column, or cell|
|<a href="../../#docs/funcs/core/add-row" target="_blank">addRow</a>|Adds a row|
|<a href="../../#docs/funcs/core/delete-row" target="_blank">deleteRow</a>|Deletes a row|
|<a href="../../#docs/funcs/core/remove-all" target="_blank">removeAll</a>|Removes all data|
|<a href="../../#docs/funcs/core/dispose" target="_blank">dispose</a>|Initializes the sheet object|
|<a href="../../#docs/funcs/core/focus" target="_blank">focus</a>|Moves focus to a specific position|
|<a href="../../#docs/funcs/core/do-dort" target="_blank">doSort</a>|Sorts a specific column|
|<a href="../../#docs/funcs/core/do-filter" target="_blank">doFilter</a>|Filters a specific column|
|<a href="../../#docs/funcs/core/make-sub-total" target="_blank">makeSubTotal</a>|Subtotal insertion feature|
|<a href="../../#docs/funcs/core/version" target="_blank">version</a>|Checks the product version|


#### 2) <a href="../../#docs/events/event" target="_blank">Event Usage</a>

- Frequently used events

|Event Name|Description|
|---|---|
|<a href="../../#docs/events/on-after-click" target="_blank">onAfterClick</a>|Event triggered on click|
|<a href="../../#docs/events/on-dbl-click" target="_blank">onDblClick</a>|Event triggered on double-click|
|<a href="../../#docs/events/on-before-change" target="_blank">onBeforeChange</a>|Event triggered before cell value is modified|
|<a href="../../#docs/events/on-after-change" target="_blank">onAfterChange</a>|Event triggered after cell value is modified|
|<a href="../../#docs/events/on-focus" target="_blank">onFocus</a>|Event triggered when focus moves within the sheet|
|<a href="../../#docs/events/on-render-first-finish" target="_blank">onRenderFirstFinish</a>|Event triggered when the sheet object is first created|

#### 3) JSON Events (Properties/Event)
- Define events on specific rows, columns, or cells (<a href="../../#docs/props/event/on-change" target="_blank">Reference</a>)

## 4. Understanding Sheet Structure
Understand each IBSheet structure (Header, Head, Body, Foot) and explain row/column objects.


![Structure](/assets/imgs/structure.png "Sheet Structure")
<!-- IMAGE: Screenshot/Example Image - Structure -->

#### 1) Header Row
##### a. Creating Multiple Header Rows, Changing Background Color, Text Color, and Content
> You can create multiple header rows in the sheet.

> After creation, you can change the title or modify properties (text color, background color, etc.) of header rows.

```
+----------+--------+--------+--------+-------------------+---------------+
|          |        | Appli- | Appli- |  Attendance Period |     Time      |
| Appli-   | Select | cation | cation +----------+--------+-------+-------+
| cant     |        | Reason | Amount | Start    | End    | Start | End   |
+----------+--------+--------+--------+----------+--------+-------+-------+
```
Logic for creating the two-row header structure shown above

```javascript
// Sheet creation part
options.Cols = [
	{ Header : ["Applicant", "Applicant"], Type : "Text", Name : "userName"},
	{ Header : ["Select", "Select"], Type : "Bool", Name: "CHK"}
	{ Header : ["Application\nReason", "Application\nReason"], Type : "Text", Name : "reason"},
	{ Header : ["Application\nAmount", "Application\nAmount"], Type : "Int", Name : "amtReq"},
	{ Header : ["Attendance Period", "Start Date"], Type : "Date", Name : "startWD"},
	{ Header : ["Attendance Period", "End Date"], Type : "Date", Name : "endWD"},
	{ Header : ["Time", "Start"], Type : "Date", Name : "startHm", Format: "HH:mm"},
	{ Header : ["Time", "End"], Type : "Date", Name : "endHm", Format: "HH:mm"}
];
```
##### b. Applying Design Properties (Background Color, Text Color, etc.) to Header Rows
> Apply Properties > Cell properties from the manual to header cells.
```javascript
// Sheet creation part
options.Cols = [
	// Set text color to red and make font bold
	{ Header : [{Value: "Line No.", TextColor: "red", TextStyle: 1}], Type : "Text", Name : "lineNo"},
	// Change background color to sky blue and add an icon before the title
	{ Header : [{Value: "Producer ID", Color: "#adceffff", HtmlPrefix: "<i class='fa-solid fa-person-digging'></i>"}], Type : "Text", Name: "userId"}
	...
];
```

##### c. Modifying Created Header Rows
> When accessing a created header row to change values or properties, you must access the header row through its id.

> The id of the first header row is `Header`, and from the 2nd header row onwards, ids are assigned as `HR1, HR2, HR3...`.
```javascript
	const firstHeaderRow = mySheet.getRowById("Header"); // Get the first header row

  // Changing header content/properties after creation
	sheet.setValue(firstHeaderRow , "sa_nm" , "Employee Info", 1 ); // Change first header row content
	sheet.setAttribute({row:sheet.getRowById("HR1"),attr:"Color",val:"#FFED37"}); // Change second header row background color
	sheet.setValue(sheet.getRowById("HR2"), "sa_nm" , "Employee Name"); // Change third header row content
```
****


#### 2) Accessing Row Objects and Checking Values (<a href="../../#docs/start/row" target="_blank">Reference</a>)

> ***All rows in the sheet have an `id` and can be accessed through this `id`.***

> The `id` of the first header row is `Header`, and from the second onwards, ids are automatically assigned as **HR1, HR2...**.

> Data row `id`s are automatically assigned in creation order as **AR1, AR2, AR3...**.

> Additionally, the filter row has the name `Filter`, the summary row has `FormulaRow`, etc.

> When creating Head, Foot, Solid, etc. rows, you can directly specify the `id`.


```javascript
/**  Getting row objects **/
// First data row
var headerRow = sheet.getFirstRow();
// Focused row
var focusRow = sheet.getFocusedRow();
// Row below the focused row
var nrow = sheet.getNextRow(  sheet.getFocusedRow() );
// Row above the focused row
var nrow = sheet.getPrevRow(  sheet.getFocusedRow() );
// 10th data row
var row = sheet.getRowByIndex( 10 );
// Summary row
var sumRow = sheet.getRowById("FormulaRow");

// Get all data rows
var dataRows = sheet.getDataRows();
// Get currently visible rows
var dataRows = sheet.getShownRows();

/** Checking and modifying values within row objects **/
var edit = sheet.getRowById("AR2").CanEdit;
var edit = sheet.getAttribute(sheet.getFocusedRow() , null , "CanEdit" );

sheet.setAttribute(sheet.getFocusedRow(), null, "Color" , "#FF0000",0);
```


#### 3) Changing Column Properties (<a href="../../#docs/start/col" target="_blank">Reference</a>)

> When columns are configured through the Cols property during sheet creation, Name and Type must be specified.

> After the sheet is created, you can check or change column properties based on the Name assigned to each column.

The following Names are reserved words and require caution when using them. (Note case sensitivity)
|Reserved Word|Purpose|
|------|---|
|SEQ|Regardless of Type, operates as an auto-incrementing number format (SEQ exists in all sheets)|
|id|<mark>Since all rows have a unique **id**, **id** cannot be used separately as a column name</mark>
(If search data contains "`id`", it is queried as `"___id"`.)|
|STATUS|Used as a status value automatically sent to the server when calling save functions such as [getSaveJson()](/docs/funcs/core/get-save-json), [doSave()](/docs/funcs/core/do-save)|

```javascript
// Get all column names
var cols = sheet.getCols();

// Check column property
var color = sheet.getAttribute(null, "saID", "Color");

// Change column property
sheet.setAttribute({col:"AMT_12",attr:"CanEdit",val:0});
```

#### 4) Adding Head and Foot
You can set fixed rows between the header and data area or below the data rows.
```javascript
var OPT = {
	// Top fixed row
	Head : [
		{
			id:"HEAD1",Kind:"Head",CanEdit:0,
			sa_salary:"",sa_salaryType:"Text",sa_retire:"Show Retired Only",sa_retireType:"Text",sa_descType:"Bool",sa_descAlign:"left",sa_descCanEdit:1,
			sa_descOnChange:function(evt){
				if(evt.row[evt.col]){
					evt.sheet.setFilter({name:"myFilter",filter:"sa_retire=='Y'?1:0",render:1});
				}else{
					evt.sheet.clearFilter();
				}
			}
		}
	],
	// Bottom fixed row
	Foot : [
		{id:"FOOT1",Kind:"Foot",sa_desc:"2019 Data",CanEdit:0,Color:"#FFDDEE"}
	]
}
```

## 5. Common Feature Definition (Def and ibsheet-common.js)
#### 1) Role of <a href="../../#docs/appx/init-structure" target="_blank">Def</a>
You can set common features for all rows or columns in the sheet.

Even if a specific property is set on all columns through options.Def.Col, if the same property is set on an individual column through options.Cols, the value set on the individual column takes priority.

#### 2) Using <a href="../../#docs/static/common-options" target="_blank">CommonOptions</a> Property and <a href="../../#docs/static/on-before-create" target="_blank">onBeforeCreate</a> Function
You can set common features for all sheets in the system.

Values set on individual sheets take priority over values set through CommonOptions, and values set through the onBeforeCreate function have the highest priority.

IBSheet.CommonOptions is defined in ibsheet-common.js.

#### 3) IB_Preset and <a href="../../#docs/props/col/extend" target="_blank">Extend</a>
You can store various column properties in a variable and easily create columns with identical features using the Extend property.

The IB_Preset variable is defined in the ibsheet-common.js file.



## 6. Rendering and Data Loading
#### 1) Value Changes and Rendering within the Sheet

When changing values or colors within the sheet, you must pay attention to rendering timing when causing changes on the screen.

```javascript
// Logic that causes multiple renderings
var drows = sheet.getDataRows();
for(var i=0;i<drows.length;i++){
	sheet.setValue(drows[i], "DWT" , "Unavailable");
	sheet.setAttribute( {row:drows[i],attr:"Color","#FF0000"});
}

// Logic that causes only a single rendering
var drows = sheet.getDataRows();
for(var i=0;i<drows.length;i++){
	// Set the render argument to 0 in setValue or setAttribute (changes are not reflected on screen)
	sheet.setValue(drows[i], "DWT" , 0 , 0 );
	sheet.setAttribute( {"row":drows[i],attr:"Color","#FF0000","render":0});
}
// The final changes are displayed on screen.
sheet.rerender();
```

Reference for various rendering functions

- Full sheet rendering: <a href="../../#docs/funcs/core/rerender" target="_blank">rerender()</a>
- Data area only rendering: <a href="../../#docs/funcs/core/render-body" target="_blank">renderBody()</a>
- Single specific row rendering: <a href="../../#docs/funcs/core/refresh-row" target="_blank">refreshRow()</a>
- Single specific cell rendering: <a href="../../#docs/funcs/core/refresh-cell" target="_blank">refreshCell()</a>

#### 2) Using Search / Data Loading Functions

Data loading within the sheet varies depending on the <a href="../../#docs/props/cfg/search-mode" target="_blank">SearchMode</a> setting.

|Type|Function Name|Description|
|---|---|---|
|Basic Search|<a href="../../#docs/funcs/core/do-search" target="_blank">doSearch</a>|Calls the specified URL and loads the returned JSON into the sheet.|
|Paging Search|<a href="../../#docs/funcs/core/do-search-paging" target="_blank">doSearchPaging</a>|Sets the server URL to be continuously called when using paging search (cfg:{SearchMode:3 or 4}).|
|Data Load|<a href="../../#docs/funcs/core/load-search-data" target="_blank">loadSearchData</a>|Loads JSON data (string or object) into the sheet.|
**All of the above functions are asynchronous.**

#### 3) Related Events

The following events are triggered during the search/data loading process. (Rendering functions in between are excluded)
|Order|Event Name|Description|
|---|---|---|
|1|<a href="../../#docs/events/on-receive-data" target="_blank">onReceiveData</a>|Triggered just before data parsing. You can manipulate the data to be loaded.|
|2|<a href="../../#docs/events/on-before-data-load" target="_blank">onBeforeDataLoad</a>|Triggered after JSON data parsing. You can manipulate the parsed JSON data.|
|3|<a href="../../#docs/events/on-data-load" target="_blank">onDataLoad</a>|Triggered before rendering on screen.|
|4|<a href="../../#docs/events/on-search-finish" target="_blank">onSearchFinish</a>|Triggered after data rendering is complete and all search procedures are finished.|

#### 4) Data Structure

<a href="../../#docs/appx/data-structure" target="_blank">Search/Save Data Structure Reference</a>
```javascript
// General search data structure
{"data":[
	{"colName1":"1234", "colName2":"abcd","colName3":"value1"},
	{"colName1":"1234", "colName2":"abcd","colName3":"value2"},
	....
]}
```
## 7. Data Extraction and Saving
#### 1) Data Extraction Functions

You can extract data from the sheet through the following functions.

|Function Name|Description|
|---|---|
|<a href="../../#docs/funcs/core/do-save" target="_blank">doSave</a>|Extracts changed content from the sheet, sends it to the server, and reflects the server's response JSON content in the sheet.|
|<a href="../../#docs/funcs/core/get-save-string" target="_blank">getSaveString</a>|Extracts modified content from the sheet in querystring format per row and returns it.|
|<a href="../../#docs/funcs/core/get-save-json" target="_blank">getSaveJson</a>|Extracts modified content from the sheet in JSON format per row and returns it.|


#### 2) Checking Data Modification Information in Rows and Cells

- Getting modified row objects

You can extract required row objects by modification, deletion, or insertion using the <a href="../../#docs/funcs/core/get-rows-by-status" target="_blank">getRowsByStatus()</a> function.

- Checking whether at least one modified value exists

You can determine true/false using the <a href="../../#docs/funcs/core/has-changed-data" target="_blank">hasChangedData()</a> function.

- Checking modification status of a specific row
```javascript
var row = getRowByIndex(55);
if(row["Changed"]){
	// This row has modified content.
}
if(row["Added"]){
	// This is a newly added row.
}
if(row["Deleted"]){
	// This row is scheduled for deletion.
}
```
- Checking modification status and pre-modification value of a specific cell
```javascript
var row = sheet.getFocusedRow();
// Check modification status of column with Name AMT
if(row["AMTChanged"]){// Modified.
	// Check pre-modification value
	var oldValue = row["AMTOrgi"];
}
```
 - Reflecting modifications to the sheet

 <a href="../../#docs/funcs/core/accept-changed-data" target="_blank">acceptChangedData()</a>,  <a href="../../#docs/funcs/core/apply-save-result" target="_blank">applySaveResult()</a> : Reflects modified data to the sheet. 

 (Rows with the Deleted property are deleted, and Added/Changed properties are removed from rows.)

#### 3) Using Save Functions

<a href="../../#docs/funcs/core/do-save" target="_blank">doSave()</a> : Sends modified content to the specified URL and reflects the returned results.

The doSave function operates sequentially with getSaveString (data collection), ajax (data transmission), and acceptChangedData (status clear) functions.

Return JSON format when using the doSave function (<a href="../../#docs/appx/data-structure" target="_blank">Reference</a>)
```javascript
{
	"IO":{
		"Result":1, "Message":"Saved successfully."
	}
}
```

#### 4) Save-Related Events

|Order|Event Name|Description|
|---|---|---|
|1|<a href="../../#docs/events/on-save" target="_blank">onSave</a>|Triggered when the doSave function is called.|
|2|<a href="../../#docs/events/on-before-save" target="_blank">onBeforeSave</a>|Triggered before modified data is sent to the server through the doSave function.|
|3|<a href="../../#docs/events/on-after-save" target="_blank">onAfterSave</a>|Triggered after receiving the save result from the server.|

## 8. Formula Feature
#### 1) Creating Summary Rows

You can create a summary row at the bottom using <a href="../../#docs/props/col/formula-row" target="_blank">FormulaRow</a> when creating columns.

The summary row can display calculated values such as averages and counts in addition to general column totals.

#### 2) Calculations Between Columns

The <a href="../../#docs/props/col/formula" target="_blank">Formula</a> feature is provided to display calculation results between columns.

Columns with the <a href="../../#docs/props/col/formula" target="_blank">Formula</a> property set cannot be edited by users and display automatically calculated values.

For details, please refer to <a href="../../#docs/appx/formula" target="_blank">Formula</a> in the appendix.

#### 3) Changing Properties

The <a href="../../#docs/props/col/attribute-formula" target="_blank">Attribute+Formula</a> feature is provided to change column properties.

<mark>When using the **Formula** or **Attribute+Formula** features, the <a href="../../#docs/props/row/can-formula" target="_blank">CanFormula</a> and <a href="../../#docs/props/row/calc-order" target="_blank">CalcOrder</a> properties must be set in Def.Row.</mark>

## 9. Solid and Context Menu Features
#### 1) Understanding Solid Rows

You can add rows that perform independent functions within the sheet.

Please refer to <a href="../../#docs/appx/solid" target="_blank">solid</a> in the appendix.

#### 2) Utilizing the Menu Feature

You can configure the context menu displayed when right-clicking the mouse.

Please refer to <a href="../../#docs/appx/menu" target="_blank">menu</a> in the appendix.

## 10. Custom Dialog Feature Usage

You can use several dialog features through the **ibsheet-dialog.js** file.

(To use the features below, the ibsheet-dialog.js file must be included in the relevant page.)

|Dialog|Function Name|Role|
|---|---|---|
|Find|<a href="../../#docs/funcs/dialog/show-find-dialog" target="_blank">showFindDialog</a>|Finds or highlights specific characters in data loaded in the sheet.|
|Detail View|<a href="../../#docs/funcs/dialog/show-edit-dialog" target="_blank">showEditDialog(rowObject,width,height)</a>|Displays the content of a specific row in a dialog.|
|Pivot|<a href="../../#docs/funcs/dialog/show-pivot-dialog" target="_blank">showPivotDialog()</a>|Creates and displays a pivot dialog based on the Type of each column in the sheet.|
|Download|<a href="../../#docs/funcs/dialog/show-download-dialog" target="_blank">showDownloadDialog()</a>|Allows users to specify desired rows/columns from loaded data in the sheet for download.|
|Upload|<a href="../../#docs/funcs/dialog/show-upload-dialog" target="_blank">showUploadDialog()</a>|Allows users to set the column order through a preview dialog before loading Excel content into the sheet.|
|Sort|<a href="../../#docs/funcs/dialog/show-sort-dialog" target="_blank">showSortDialog()</a>|Allows sorting multiple columns simultaneously through a dialog.|

## 11. File export/import Feature Usage
Methods for exporting or importing files are broadly divided into server-side methods and client-side methods.

### Server-side export/import Method
Pre-work is required for import/export operations on the server.

Please refer to the <a href="../../#docs/appx/import-export" target="_blank">Setting Up Excel Upload/Download</a> section.


- Excel download/upload feature

You can download/upload data through the <a href="../../#docs/funcs/excel/down-to-excel" target="_blank">down2Excel()</a>, <a href="../../#docs/funcs/excel/load-excel" target="_blank">loadExcel()</a> functions.

- Text download/upload feature

You can download/upload data through the <a href="../../#docs/funcs/excel/down-to-text" target="_blank">down2Text()</a>, <a href="../../#docs/funcs/excel/load-text" target="_blank">loadText()</a> functions.

### Client-side import/export Method
The following steps are required for import/export operations using javascript.

#### 1) Adding the jszip.min.js file
Add the /plugins/jszip.min.js file.

#### 2) Performing import/export using the following functions
- Excel, text download feature

<a href="../../#docs/funcs/excel/exportData" target="_blank">exportData()</a>
- Excel, text upload feature

<a href="../../#docs/funcs/excel/importData" target="_blank">importData()</a>


## 12. FAQ

- When adding a button to the sheet or opening a layer-type popup through a Click event, input continues to be directed to the sheet that opened the popup even when typing in the sheet or input elements within the popup.

When opening a popup by clicking the sheet, this occurs because the sheet still considers itself to have focus.

When opening the popup, you must call the [blur()](/docs/funcs/core/blur) function to prevent the sheet from capturing focus.

- How to prevent the sheet from taking focus immediately after search.

The sheet focuses on the first row, first column after loading data. 

If you want to prevent focus from being taken after search, set the (cfg)[IgnoreFocused](/docs/props/cfg/ignore-focused) property to 1.

- Issue where declaring [Attribute+Formula](/docs/props/col/attribute-formula) on a column causes other [Formula](/docs/props/col/formula) to stop working.

When using only Formula, if [CalcOrder](/docs/props/row/calc-order) is not set, it automatically calculates in alphabetical order of column names. However, when Attribute+Formula is used, the calculation order for both Attribute+Formula and regular Formula must be defined in CalcOrder for it to work correctly.

- Issue where errors occur or search intermittently fails after sheet creation and search.

This is often caused by calling the search function before sheet creation. Since sheet creation is asynchronous, calling the search function after calling IBSheet.[create()](/docs/static/create) may cause this issue.

To solve this problem, the search function must be called in the [onRenderFirstFinish](/docs/events/on-render-first-finish) event, which is triggered after creation.

- How to remove or recreate a sheet.

To remove all sheets on the page, call the IBSheet.[disposeAll()](/docs/static/dispose-all) function. To remove a single sheet, use the sheet.[dispose()](/docs/funcs/core/dispose) function.

Recreating a removed sheet is the same as creating a regular sheet using the IBSheet.[create()](/docs/static/create) function.



### Read More
- [File Structure introduction](/docs/intro/files)
- [Quick Start getting started](/docs/start/quick-start)
- [Sheet Object Basic Structure getting started](/docs/start/basic-structure)
- [Sheet Object Structure getting started](/docs/appx/init-structure)
- [SearchMode cfg](/docs/props/cfg/search-mode)
- [Extend col](/docs/props/col/extend)
- [Method Usage Basics method](/docs/funcs/method)
- [doSearch method](/docs/funcs/core/do-search)
- [doSearchPaging method](/docs/funcs/core/do-search-paging)
- [down2Excel method](/docs/funcs/excel/down-to-excel)
- [down2Text method](/docs/funcs/excel/down-to-text)
- [getSaveString method](/docs/funcs/core/get-save-string)
- [getSaveJson method](/docs/funcs/core/get-save-json)
- [getChangedData method](/docs/funcs/core/get-changed-data)
- [loadSearchData method](/docs/funcs/core/load-search-data)
- [loadExcel method](/docs/funcs/excel/load-excel)
- [loadText method](/docs/funcs/excel/load-text)
- [rerender method](/docs/funcs/core/rerender)
- [renderBody method](/docs/funcs/core/render-body)
- [refreshRow method](/docs/funcs/core/refresh-row)
- [refreshCell method](/docs/funcs/core/refresh-cell)
- [showDownloadDialog method](/docs/funcs/dialog/show-download-dialog)
- [showEditDialog method](/docs/funcs/dialog/show-edit-dialog)
- [showFindDialog method](/docs/funcs/dialog/show-find-dialog)
- [showPivotDialog method](/docs/funcs/dialog/show-pivot-dialog)
- [showUploadDialog method](/docs/funcs/dialog/show-upload-dialog)
- [Event Usage Basics event](/docs/events/event)
- [onReceiveData event](/docs/events/on-receive-data)
- [onBeforeDataLoad event](/docs/events/on-before-data-load)
- [onDataLoad event](/docs/events/on-data-load)
- [onSearchFinish event](/docs/events/on-search-finish)
- [onSave event](/docs/events/on-save)
- [onBeforeSave event](/docs/events/on-before-save)
- [onAfterSave event](/docs/events/on-after-save)
- [What is a Static Object static](/docs/static/static)
- [onBeforeCreate static](/docs/static/on-before-create)
- [CommonOptions static](/docs/static/common-options)
- [Solid appendix](/docs/appx/solid)
- [Menu appendix](/docs/appx/menu)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
