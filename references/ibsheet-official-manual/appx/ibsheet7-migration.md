---
KEY: ibsheet7Migration
KIND: appendix
PATH: appx/ibsheet7-migration
ALIAS_EN: migration
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/appx/ibsheet7-migration
---
# Migration
## 1. Product File Changes <a name="chapter-1"></a>

### File Function Comparison <a name="diff-files"></a>

|IBSheet7 File|Function|IBSheet8 File|
|---|---|---|
|ibsheet.js|Product core|ibsheet.js|
|ibleaders.js|License|ibleaders.js|
|ibsheetinfo.js|Initialization constants, functions|ibsheet-common.js|
|ibmsg|Message file|ko.js, en.js|
|Main folder|CSS files and images|css/theme folder|
|ibsheet.cfg|Common feature properties|ibsheet-common.js|
|None|Find, pivot, and other common dialogs|ibsheet-dialog.js|
|None|File export/import related module|ibsheet-excel.js|

When developing products with ibsheet7, the files that had to be necessarily included on the actual page were `ibsheet.js` and `ibsheetinfo.js`.

By adding only these two files, the remaining files (`ibmsg`, `ibsheet.cfg`, `ibsheet.css`) were automatically loaded onto the page through ajax communication.

In IBSheet8, files that previously had no extension like `ibmsg` or had individual extensions like cfg were all changed to js format, and each file was changed to be directly included on the page.

Therefore, when migrating to IBSheet8, the following files must be added.

### IBSheet8 Required Files <a name="ibsheet8-files"></a>

- Required files
1. `ibsheet.js` (IBSheet8 core)
2. `/locale/ko.js` (or `en.js`)  (Multilingual message file)
3. `/css/default/main.css` (Default design CSS)

- Optional files
1. `ibsheet-common.js`  (Common feature settings)
2. `ibsheet-dialog.js` (Various dialog usage)
3. `ibsheet-excel.js` (Excel, text download/upload)


### example <a name="ibsheet8-import"></a>
 ```html
// AS-IS
<script type="text/javascript" src="/common/sheet/js/ibsheet.js"></script>
<script type="text/javascript" src="/common/sheet/js/ibsheetinfo.js"></script>
```

```html
// TO-BE
// - Required files
<link rel="stylesheet" href="/common/ibsheet8/css/default/main.css">
<script type="text/javascript" src="/common/ibsheet8/ibsheet.js"></script>
<script type="text/javascript" src="/common/ibsheet8/locale/ko.js"></script>

// - Optional additional files
<script type="text/javascript" src="/common/ibsheet8/ibsheet-common.js"></script>
<script type="text/javascript" src="/common/ibsheet8/ibsheet-dialog.js"></script>
<script type="text/javascript" src="/common/ibsheet8/ibsheet-excel.js"></script>
```

IBSheet8 basically uses CSS3, so it displays correctly in browsers IE10 and above.

<!--!
`[Private]` If using IBSheet8 in browsers IE9 and below, the `/css/compatible/light/main.css` file must also be included.

!-->

## 2. Object Creation and Initialization <a name="chapter-2"></a>

### Object Creation <a name="create-ibsheet"></a>
The object creation steps in IBSheet7 are as follows.
1. Create a basic sheet object using the `createIBSheet` (or `createIBSheet2`) function
2. Configure the number and features of columns through the initialization function (`IBS_InitSheet`)

IBSheet8 combines the above two processes into a single function where object creation and initialization are performed.

```javascript
//AS-IS

// 1. Create a sheet object on the #sheetDIV element with specified size (target element, id, width, height)
createIBSheet2( document.getElementById("sheetDIV"),"mySheet","100%","250px");
// 2. Sheet initialization
var initSheet = {
    Cfg:{SearchMode:2},
    Cols:[
        {Header:"No",Type:"Seq",SaveName:"SEQ",Width:60},
        {Header:"Name",Type:"Text",SaveName:"sName",Width:100,Align:"Center"},
        {Header:"Department",Type:"Combo",SaveName:"sDept",Width:80,ComboText:"HR|General Affairs|Development|Design",ComboCode:"A01|A04|B01|B02"},
        ...
    ]
}
// Call initialization function (sheet object, initialization settings)
IBS_InitSheet(mySheet,initSheet);
```
```javascript
//TO-BE
var initSheet = {
    Cfg:{SearchMode:2},
    Cols:[
        {Header:"No",Type:"Int",Name:"SEQ",Width:60},
        {Header:"Name",Type:"Text",Name:"sName",Width:100,Align:"Center"},
        {Header:"Department",Type:"Enum",Name:"sDept",Width:80,Enum:"|HR|General Affairs|Development|Design",EnumKeys:"|A01|A04|B01|B02"},
        ...
    ]
}
// Sheet object creation and initialization (height, width follow the size of the sheetDIV element)
IBSheet.create({
    el:"sheetDIV" // Target element
    id:"mySheet" // id
    options:initSheet // Initialization settings

});
```

### Initialization Syntax Changes <a name="init-ibsheet"></a>

Check below for changes in IBSheet8 regarding types, formats, and features for each column in the existing IBSheet7.

**Major Initialization Feature Changes**

***Cfg(SetConfig)***

|IBSheet7 Property Name|Description|Changes|
|---|---|---|
|AutoFitColWidth|Feature that adjusts each column width within a range that prevents horizontal scrollbar at specified times|Changed to a format that adjusts each column width ratio through the [RelWidth (col)](/docs/props/col/rel-width) property during column creation|
|CountFormat,CountPosition,PagingPosition|Feature to display the number of loaded data records|Set through the [InfoRowConfig (cfg)](/docs/props/cfg/info-row-config) property|
|DragMode|Drag method, enable/disable settings|Can be set through the [CanDrag (cfg)](/docs/props/cfg/can-drag) property|
|HeaderRowHeight,DataRowHeight|Set the height of header and data rows|Changed to a format set through CSS
[Size (cfg)](/docs/props/cfg/size) allows overall size adjustment of row height, icon size, button size, etc.|
|FrozenCol,FrozenColRight|Left/right column freeze feature|Set through [LeftCols, RightCols](/docs/appx/init-structure) properties during sheet creation. Afterwards, changeable through [setFixedCols (method)](/docs/funcs/core/set-fixed-clos) function|
|MergeSheet|Header, data row merge type settings|Changed to [HeaderMerge (cfg)](/docs/props/cfg/header-merge), [DataMerge (cfg)](/docs/props/data-merge), [PrevColumnMerge (cfg)](/docs/props/cfg/prev-column-merge) properties|
|Page|Number of rows to render at once|Name changed to [PageLength (cfg)](/docs/props/cfg/page-length)|
|SearchMode|Search rendering method settings|[SearchMode (cfg)](/docs/props/cfg/search-mode) is the same but modes are slightly different, and some modes have been added|
|SumPosition|Position of the summary row|Set through [setFormulaRowPosition (method)](/docs/funcs/core/set-formula-row-position) function|
|ToolTip|Whether to use tooltips|Changed to `Tip` [(row)](/docs/props/row/tip) [(col)](/docs/props/col/tip) [(cell)](/docs/props/cell/tip) in row, col property settings|
|UseHeaderActionMenu|Header row context menu feature|Set through [Menu](/docs/appx/menu) property in [Def/Header](/docs/appx/init-structure)|






***Cols(InitColumns)***

#### [Type](/docs/appx/type) Property <a name="init-col-type"></a>
|Type Name|Changes|
|---|---|
|Text|Same as a general text type. However, when using the `MultiLineText` (multiple lines) property, a separate `Lines` type is provided.
|Status|Not supported
Regardless of the presence of a `Status` type column, management of changes within the sheet is done automatically.
 Generally, modified rows are displayed with a yellow background (`.IBColorChanged`), added rows with a blue background (`.IBColorAdded`), and deleted rows with a red background (`.IBColorDeleted`).
The status value sent to the server is sent as 'STATUS' by default, and if you want to change the name, you can use the `ReqStatusName` property in Cfg.
The values previously sent to the server as `I`, `U`, `D` are now sent as `Added`, `Changed`, `Deleted`.
 To change these back to the same `I`, `U`, `D` as before, modify `ReqStatusAdded`, `ReqStatusChanged`, `ReqStatusDeleted` to `I`, `U`, `D` in ko.js (message file).
As with the previous IBSheet7, if you want to display the add/modify/delete status of rows through a separate column, please refer to the <a href="#mig-status-type">Status Type Migration</a> section below.|
|DelCheck|Not supported
 You can change the row status to deleted through the `deleteRow()` function.
If you want to place a checkbox and change the status to deleted like in IBSheet7, set the column Type to `Bool` and configure it to change the row status through [OnChange (json event)](/docs/props/event/on-change).
For detailed code, please refer to the <a href="#mig-del-check-type">DelCheck Type Migration</a> section below.|
|CheckBox|Changed to the `Bool` type.
|DummyCheck|Not supported
Set the type to `Bool` and set the [NoChanged (col)](/docs/props/col/no-changed) property to 1.
|Radio|Same as `Radio`.|
|Combo|Changed to the `Enum` type. 
`ComboText` and `ComboCode` for setting combo items have been changed to [Enum (col)](/docs/props/col/enum) and [EnumKeys (col)](/docs/props/enum-keys) respectively.
Note especially that the first character of `Enum` and `EnumKeys` is used as a delimiter.
For more details, please refer to the <a href="#mig-combo-combo-edit-type">Combo, ComboEdit Type Migration</a> below.|
|ComboEdit|Not supported.
Please refer to the <a href="#mig-combo-combo-edit-type">Combo, ComboEdit Type Migration</a>.|
|AutoSum|Set the type to Int or Float and use the [FormulaRow (col)](/docs/props/col/formula-row) property to display totals or averages.|
|Image|Changed to the `Img` type.
Note that the data structure has changed significantly, so please refer to the [Type](/docs/appx/type) section.
|Int|Same as `Int`.|
|Float|Same as `Float`.|
|Date|Same as `Date`.
 ([DataFormat](/docs/props/col/data-format)) must be set.|
|Popup|Not supported.
If you want to place a button on the right side of the column, you can set it through the `Button` property.
ex) {Type:"Text",Name:"DEPTPOP",`Button:"../assets/imgs/popup.png"`}
For the event triggered on button click, please refer to [onButtonClick (event)](/docs/events/on-button-click).|
|Pass|Same as `Pass`.|
|Seq|Not supported
 Set the column type to Int and set `Name` to `"SEQ"` to operate as an auto-numbering column.|
|Html|Same as `Html`.|
|Button|Same as `Button`.
However, you must configure click logic through [onClick (event)](/docs/events/on-click) event instead of [onButtonClick (event)](/docs/events/on-button-click) event.|
|Result|Not supported|
|Sparkline|Can be implemented using the D3 library ([Spark chart example reference](https://www.ibsheet.com/v8/ibsheet/html/examples.html))|


#### Format Property <a name="init-format"></a>
In IBSheet8, the formats that can be set per type are diverse, and in addition to the basic [Format (col)](/docs/props/col/format), you can set the data type to exchange with the server or the data type to display during user editing through [DataFormat (col)](/docs/props/col/data-format), [EditFormat (col)](/docs/props/col/edit-format), [CustomFormat (col)](/docs/props/col/custom-format).

This enables support for very flexible and diverse format types.

Also, frequently used settings (`Format`, `DataFormat`, `EditFormat`...) can be stored in `IB_Preset` or other variables, and when the format is needed, it can be easily used through the [Extend (col)](/docs/props/col/extend) property.
```javascript
//AS-IS
var Cols = [
    {Type:"Date",SaveName:"eDate",Width:100,Format:"Ymd"},
];
```

```javascript
//TO-BE
opt.Cols = [
    // YMD contains Type, Width, Format, etc. all pre-configured.
    {Name:"eDate",Extend:IB_Preset.YMD},
];
```
The IB_Preset variable is in the `ibsheet-common.js` file.


#### Other Properties <a name="init-etc"></a>
|Property Name|IBSheet8 Support Method|
|---|---|
|AcceptKeys,ExceptKeys|Not supported
Logic must be configured using regular expressions through the [ResultMask (col)](/docs/props/col/result-mask) property.
For code to convert existing code to IBSheet8's [EditMask (col)](/docs/props/col/edit-mask), please refer to the <a href="#mig-accept-keys-except-keys">AcceptKeys, ExceptKeys Migration</a> below.|
|Align|Same as before (center, left, right)|
|ApproximateType|Cannot be set per column.
Determined by the Format.DecimalAdjust value in the locale file (ko.js) (ceil, round, floor)|
|AutoSum|Changed to the [FormulaRow (col)](/docs/props/col/formula-row) property. Usage is similar but function connections are also possible.|
|BackColor|Property name changed to [Color (col)](/docs/props/col/color). Usage is the same.|
|CalcLogic|Changed to the [Formula (col)](/docs/props/col/formula) property with expanded features. For details, please refer to [Formula (appendix)](/docs/appx/formula).|
|ColMerge|Same as the [ColMerge (col)](/docs/props/col/col-merge) property.|
|ComboCode,ComboText|As mentioned in the `Combo`, `ComboEdit` type migration above, changed to [Enum (col)](/docs/props/col/enum), [EnumKeys (col)](/docs/props/col/enum-keys).
Note that in IBSheet8, the first character is used as a delimiter during migration.|
|Edit,EditLen|`Edit` changed to [CanEdit (col)](/docs/props/col/can-edit), `EditLen` changed to [Size (col)](/docs/props/col/size).|
|EmptyToReplaceChar|Changed to [EmptyValue (col)](/docs/props/col/empty-value).
|FontBold,FontUnderline|Property name changed to [TextStyle (col)](/docs/props/col/text-style). In addition to bold, underline, strikethrough, italic, etc. can be set.|
|FontColor|Property name changed to [TextColor (col)](/docs/props/col/text-color). Usage is the same.|
|Hidden|Changed to [Visible (col)](/docs/props/col/visible). Therefore, values must be entered in reverse from before. ([Hidden (col)](/docs/props/col/hidden) property only reduces the actual row height or column width for display.)|
|KeyField|Property name changed to [Required (col)](/docs/props/col/required). Usage is the same.|
|MaximumValue,MinimumValue|Must be implemented by overriding the onEndEdit event. ([Example reference](#user-content-maximumvalueminimumvalue-migration))|
|SaveName|Property name changed to [Name (col)](/docs/props/col/name). 
 __In particular, `Name` is a required element, so all columns must have a `Name` property. Also, there must not be 2 or more columns with the same `Name` in one sheet.__|
|Sort|Property name changed to [CanSort (col)](/docs/props/col/can-sort). Usage is the same.|
|ToolTip|Property name changed to [Tip (col)](/docs/props/col/tip). Usage is the same.|
|TreeCol|Not supported
 When using the tree feature, the column that will be the tree must be specified through the [MainCol cfg](/docs/props/cfg/main-col) property.|
|InsertEdit|Property name changed to [AddEdit(col)](/docs/props/col/add-edit)|
|UpdateEdit|Property name changed to [ChangeEdit(col)](/docs/props/col/change-edit)|
|Width|Same as before.
Additionally, you can set the minimum, maximum, or relative size of column width through [MinWidth (col)](/docs/props/col/min-width), [MaxWidth (col)](/docs/props/col/max-width), [RelWidth (col)](/docs/props/col/rel-width).|


## 3. Event Mapping <a name="chapter-3"></a>

#### Event Usage Method Changes <a name="events-use"></a>
In IBSheet7, events were in the form of creating functions in the format `sheetId_eventName` within the global window object.

In IBSheet8, like other properties, events are defined within the [Events](/docs/appx/init-structure) property name.

Also, while the number of arguments varied for each event in IBSheet7, in IBSheet8 all events uniformly receive a single `evtParam` object, and the `evtParam` object contains different arguments depending on each event.
```javascript
//AS-IS
// change event
function mySheet_OnChange(row, col, value, oldValue) {
    if (col == 5 && value > 100) {
        alert("Maximum input value is 100.");
    }
}
// click event
function mySheet_OnClick(row, col, value, cellx, celly, cellw, cellh, rowtype) {
    if (mySheet.ColSaveName(col) == "SA_NO") {
        showEmpPopup( value ,"simple" );
    }
}
```
```javascript
//TO-BE
opt.Events = {
    // change event
    onAfterChange:function(evtParam) {
        if (evtParam.col == "AVGRST" && evtParam.val > 100 ) {
            alert("Maximum input value is 100.");
        }
    },
    // click event
    onAfterClick:function(evtParam) {
        if (evtParam.col == "SA_NO") {
            showEmpPopup( evtParam.sheet.getValue(evtParam.row, evtParam.col) );
        }
    }
}
```
#### Frequently Used Events <a name="events-favorite"></a>

Check the changes in IBSheet8 for frequently used events in IBSheet7.

There may be slight differences in event trigger timing.

Note that event names have changed from `PascalCase` to `camelCase`.

|IBSheet7 Event|IBSheet8 Event|Description|
|---|---|---|
|OnAfterEdit|[onAfterEdit (event)](/docs/events/on-after-edit)||
|OnBeforeCheck|[onBeforeChange (event)](/docs/events/on-before-change)|There is no separate event that only triggers for `CheckBox` type; this event triggers for columns of all types.|
|OnBeforeDownload|[onBeforeDownload (event)](/docs/events/on-before-download)||
|OnBeforePaste|[onBeforePaste (event)](/docs/events/on-before-paste)||
|OnButtonClick|[onClick (event)](/docs/events/on-click)|There is no separate event that only triggers for `Button` type; this event triggers for columns of all types.
You can also use the JSON Event [onClickSide (props event)](/docs/props/event/on-click-side).|
|OnChange|[onAfterChange (event)](/docs/events/on-after-change)|Does not trigger for changes through external functions like [setValue (method)](/docs/funcs/core/set-value).|
|OnClick|[onAfterClick (event)](/docs/events/on-after-click)| IBSheet8's [onClick (event)](/docs/events/on-click) triggers earlier than the same event in IBSheet7.
Therefore, use [onAfterClick (event)](/docs/events/on-after-click) during migration.|
|OnDblClick|[onDblClick (event)](/docs/events/on-dbl-click)||
|OnDownFinish|[onExportFinish (event)](/docs/events/on-export-finish)|Name changed|
|OnKeyUp, OnKeyDown|[onKeyUp (event)](/docs/events/on-key-up), [onKeyDown (event)](/docs/events/on-key-down)||
|OnLoad|[onRenderFirstFinish (event)](/docs/events/on-render-first-finish)|The trigger timing differs from IBSheet7's OnLoad, but it is the same in that it triggers once after initial creation.|
|OnLoadData|[onBeforeDataLoad (event)](/docs/events/on-before-data-load)|Name changed|
|OnLoadExcel, OnLoadText|[onImportFinish (event)](/docs/events/on-import-finish)|Handled commonly in a single event|
|OnMouseDown, OnMouseUp, OnMouseMove|[onMouseDown (event)](/docs/events/on-mouse-down), [onMouseUp (event)](/docs/events/on-mouse-up), [onMouseMove (event)](/docs/events/on-mouse-move)||
|OnMovePage|[onBeforeGoToPage (event)](/docs/events/on--before-go-to-page)|Name changed|
|OnRowSearchEnd|[onRowLoad (event)](/docs/events/on-row-load)|Name changed|
|OnSaveEnd|[onAfterSave (event)](/docs/events/on-after-save)|IBSheet7's OnSaveEnd triggers after data reflection and rendering are complete after saving, but [onAfterSave (event)](/docs/events/on-after-save) triggers immediately after receiving saved data from the server.|
|OnSearchEnd|[onSearchFinish (event)](/docs/events/on-search-finish)|Name changed|
|OnSelectMenu|[onSelectMenu (event)](/docs/events/on-select-menu)||
|OnSelectCell|[onFocus (event)](/docs/events/on-focus)|Name changed|
|OnSort|[onAfterSort (event)](/docs/events/on-after-sort)|Name changed|
|OnHScroll, OnVScroll|[onScroll (event)](/docs/events/on-scroll)|Handled commonly in a single event|

## 4. Frequently Used Function Mapping <a name="chapter-4"></a>

Support status and changes for functions that were relatively frequently used in IBSheet7.

|IBSheet7 Function Name|Description|IBSheet8 Support Status|
|---|---|---|
|ActionMenu|Creates a context menu on right-click in data area|Replaced by [Menu](/docs/appx/menu) property|
|CellAlign|Sets the horizontal alignment of a cell|Replaced by [Align (cell)](/docs/props/cell/align) property.
ex) `sheet.setAttribute(row,'colName','Align','Right');`|
|CellBackColor|Changes cell background color|Replaced by [Color (cell)](/docs/props/cell/color) property.
ex) `var color = sheet.getAttribute(row, 'colName', 'Color');`|
|CellComboItem|Changes cell dropdown list items|Replaced by [Enum (cell)](/docs/props/cell/enum), [EnumKeys (cell)](/docs/props/cell/enum-keys) properties.
ex) `sheet.setAttribute(row, 'colName', 'Enum', '\|CEO\|Manager\|Assistant Manager\|Staff');`
`sheet.setAttribute(row, 'colName', 'EnumKeys', '\|A01\|B0\|B2\|C0');`|
|CellEditable|Cell edit enable/disable|Replaced by [CanEdit (cell)](/docs/props/cell/can-edit) property.
ex) `sheet.setAttribute(row, 'colName', 'CanEdit', 0);`|
|CellFont|Sets various font types for a cell|Replaced by [TextFont (cell)](/docs/props/cell/text-font), [TextStyle (cell)](/docs/props/cell), [TextSize (cell)](/docs/props/cell) properties
ex) `sheet.setAttribute(row, 'colName', 'TextSize', '1.3em');`
|CellFontBold|Modifies cell font-weight|Replaced by [TextStyle (cell)](/docs/props/cell/text-style) property
ex) `sheet.setAttribute(row, 'colName', 'TextStyle', 1);`
|CellFontColor|Changes cell font color|Replaced by [TextColor (cell)](/docs/props/cell/text-color) property
ex) `var color = sheet.getAttribute(row, 'colName', 'TextColor');`
|CellFontItalic|Modifies cell font-style to italic|Replaced by [TextStyle (cell)](/docs/props/cell/text-style) property|
|CellFontName|Modifies cell font-family|Replaced by [TextFont (cell)](/docs/props/cell/text-font) property|
|CellFontSize|Modifies cell font-size|Replaced by [TextSize (cell)](/docs/props/cell/text-size) property|
|CellFontStrike|Sets strikethrough on cell content|Replaced by [TextStyle (cell)](/docs/props/cell/text-style) property|
|CellFontUnderline|Sets underline on cell content|Replaced by [TextStyle (cell)](/docs/props/cell/text-style) property|
|CellVAlign|Sets vertical alignment of cell content|Replaced by [VAlign (cell)](/docs/props/cell/v-align) property
ex) `sheet.setAttribute(row, 'colName', 'VAlign', 'top');`|
|CellImage|Changes image in an image cell|Changed to [getValue (method)](/docs/funcs/core/get-value), [setValue (method)](/docs/funcs/core/set-value) functions ([Check Img type data](/docs/appx/type))
ex) `sheet.setValue(row, 'colName', '\|./img/pic/sw97231.png\|200\|300');`|
|CellSearchValue|Checks the initially loaded data of a cell|Replaced by [Orig (cell)](/docs/props/cell/orig) property
ex) `var orgValue = sheet.getAttribute( sheet.getRowById("AR99") , "CLS" , "Orig");`|
|CellText|Gets or sets cell value in formatted state|Replaced by [getString (method)](/docs/funcs/core/get-string), [setString (method)](/docs/funcs/core/set-string) functions
ex) `var v = sheet.getString(row, col);`|
|CellValue|Gets or sets cell value with format removed|Replaced by [getValue (method)](/docs/funcs/core/get-value), [setValue (method)](/docs/funcs/core/set-value) functions
ex) `sheet.setValue(row, 'colName', 'A01');`|
|CheckAll|Checks all values in a column|Replaced by [setAllCheck (method)](/docs/funcs/set-all-check) function
ex) `sheet.setAllCheck('colName', 1);` |
|CheckedRows|Gets the total number of checked rows|Use [getRowsByChecked (method)](/docs/funcs/core/get-row-by-checked) function
ex)  `var cnt = sheet.getRowsByChecked( 'sCheck' ).length;`|
|ColBackColor|Sets background color for an entire column|Replaced by [Color (col)](/docs/props/col/color) property
ex) `sheet.setAttribute(null, 'colName', 'Color', '#FF9AE0');`|
|ColFontBold||Sets font-weight for an entire column|Replaced by [TextStyle (col)](/docs/props/col/text-style) property
ex) `sheet.setAttribute(null, 'colName', 'TextStyle', 1);`|
|ColFontColor|Sets text color for an entire column|Replaced by [TextColor (col)](/docs/props/col/text-color) property
ex) `sheet.setAttribute(null, 'colName', 'TextColor', '#FF0000');`|
|ColFontUnderline|Sets underline for entire column content|Replaced by [TextStyle (col)](/docs/props/col/text-style) property
ex) `sheet.setAttribute(null, 'colName', 'TextStyle', 4);`|
|ColWidth|Sets column width|Replaced by [Width (col)](/docs/props/col/width) property
ex) `sheet.setAttribute(null, 'colName', 'Width', 250);`|
|ColEditable|Sets column edit enable/disable|Replaced by [CanEdit (col)](/docs/props/col/can-edit) property
ex) `sheet.setAttribute(null, 'colName', 'CanEdit', 0);`|
|ColInsert|Add new column feature|Changed to [addCol (method)](/docs/funcs/core/add-col) function|
|ColHidden|Column show/hide setting|Changed to [hideCol (method)](/docs/funcs/core/hide-col) function

Can also be replaced by [Visible (col)](/docs/props/col/visible) property
ex) `sheet.setAttribute(null, 'colName', 'Visible', 0);`|
|ColSaveName|Check `Name` based on column index|Replaced by [getColByIndex (method)](/docs/funcs/core/get-col-by-index) function
ex) `var c = sheet.getColByIndex(4);`|
|ColumnSort|Sort specified column|Replaced by [doSort (method)](/docs/funcs/core/do-sort) function
ex) `sheet.doSort('colName1|-colName2');`|
|ColValueDup|Check for duplicate rows in a column|Replaced by [getRowsByDup (method)](/docs/funcs/core/get-rows-by-dup) function
ex) `var dupRows = sheet.getRowByDup({cols:'colName','firstOnly':1});`|
|ColValueDupRows|Extract all duplicate rows in a column|Replaced by [getRowsByDup (method)](/docs/funcs/core/get-rows-by-dup) function
ex) `var dupRows = sheet.getRowByDup({cols:'colName'});`|
|CountFormat|Display search count|Replaced by [setInfoRow (method)](/docs/funcs/core/set-info-row) function|
|CountPosition|Display position of search count|Replaced by [setInfoRow (method)](/docs/funcs/core/set-info-row) function|
|CurrentColInfo|Extract current column info (order, width, etc.)|Same as [getCurrentColInfo (method)](/docs/funcs/core/get-current-col-info), [setCurrentColInfo (method)](/docs/funcs/core/set-current-col-info) functions|
|DataCopy|Row copy feature|Replaced by [copyRow (method)](/docs/funcs/core/copy-row) function
ex) `sheet.copyRow(sheet.getFocusedRow());`|
|DataInsert|Row add feature|Replaced by [addRow (method)](/docs/funcs/core/add-row) function
ex) `sheet.addRow();`|
|DataMove|Row move feature|Replaced by [moveRow (method)](/docs/funcs/core/move-row) function
ex) `sheet.moveRow(row, nextRow);`|
|DirectDown2Excel|||
|DirectLoadExcel|||
|DoAllSave|Save all data|Replaced by `saveMode` argument in [doSave (method)](/docs/funcs/core/do-save) function
ex) `sheet.doSave({url:'saveData.do',saveMode:0});`|
|DoPrint|Print sheet data|Same as [doPrint (method)](/docs/funcs/core/do-print) function|
|DoSave|Save sheet data|Same as [doSave (method)](/docs/funcs/core/do-save) function|
|DoSearch|Search sheet data|Same as [doSearch (method)](/docs/funcs/core/do-search) function|
|DoSearchPaging|Search function when SearchMode is server paging|Same as [doSearchPaging (method)](/docs/funcs/core/do-search-paging) function|
|Down2Excel|Export sheet to Excel file|Same as [down2Excel (method)](/docs/funcs/excel/down-to-excel) function|
|Down2ExcelBuffer|Export multiple sheets to Excel file|Same as [down2ExcelBuffer (method)](/docs/funcs/excel/down-to-excel-buffer) function|
|Down2Pdf|||
|Down2Text|Export sheet content to text file|Same as [down2Text (method)](/docs/funcs/excel/down-to-text) function|
|Editable|Set edit enable/disable for entire sheet|Replaced by [CanEdit (cfg)](/docs/props/cfg/can-edit) property
ex) `sheet.CanEdit = 0;
sheet.renderBody();`|
|EnterBehavior|||
|Enable|Sheet activation toggle|Changed to two functions: [enable (method)](/docs/funcs/core/enable), [disable (method)](/docs/funcs/core/disable)|
|ExportData|||
|ExtendLastCol|Auto width adjustment for last column|Column width ratio can be adjusted through [RelWidth (col)](/docs/props/col/rel-width) property|
|FindCheckedRow|Extract checked rows from a specific column|Changed to [getRowsByChecked (method)](/docs/funcs/core/get-rows-by-checked) function|
|FindStatusRow|Extract rows with status changes|Changed to [getRowsByStatus (method)](/docs/funcs/core/get-rows-by-status) function|
|FindSubSumRow|||
|FindText|Extract rows containing specific text|Same as [findText (method)](/docs/funcs/core/find-text) function|
|FitColWidth|Readjust column width|Changed to a format that auto-adjusts through [RelWidth (col)](/docs/props/col/rel-width) property|
|FitSizeCol|Adjust column width to fit the cell with the longest text|Changed to [fitSize (method)](/docs/funcs/core/fit-size) function|
|FocusAfterProcess|Whether to focus the first row after data loading|Replaced by [IgnoreFocused (cfg)](/docs/props/cfg/ignore-focused) property
Setting to 0 moves focus to the first row after data loading (default: 0)|
|FrozenCol|Left column freeze feature|Changed to [setFixedLeft (method)](/docs/funcs/core/get-fixed-left) function|
|FrozenRows|Top row freeze feature|Changed to [setFixedTop (method)](/docs/funcs/core/set-fixed-top) function|
|GetCellProperty|Check row or cell properties|Can be checked through [getAttribute (method)](/docs/funcs/core/get-attribute) function
ex) `var colEdit = sheet.getAttribute({col:'colName',attr:'CanEdit'});` |
|GetChildRows|Extract child rows of a specific row when using tree|Same as [getChildRows (method)](/docs/funcs/core/get-child-rows) function|
|GetComboInfo|Check dropdown list item content|Can be checked through [Enum (col)](/docs/props/col/enum), [EnumKeys (col)](/docs/props/col/enum-keys) properties
ex) `var enum = sheet.getAttribute(null, 'colName', 'Enum');`|
|GetCurrentPage|Check current page index|Changed to [getPageIndex (method)](/docs/funcs/core/get-page-index) function|
|GetDataFirstRow|Check first data row index|Changed to [getFirstRow (method)](/docs/funcs/core/get-first-row) function|
|GetDataLastRow|Check last data row index|Changed to [getLastRow (method)](/docs/funcs/core/get-last-row) function|
|GetEditText|Check currently editing content||
|GetSaveData|Ajax communication dedicated function|Not supported|
|GetSaveJson|Extract sheet data in JSON format|Same as [getSaveJson (method)](/docs/funcs/core/get-save-json) function|
|GetSaveString|Extract sheet data in querystring format|Same as [getSaveString (method)](/docs/funcs/core/get-save-string) function|
|GetSearchData|Ajax communication dedicated function|Not supported|
|GetSelectionCols|Extract currently selected column index|Changed to get the entire selected range through [getSelectedRanges (method)](/docs/funcs/core/get-selection-ranges) function|
|GetSelectionRows|Extract currently selected row index|Changed to get the entire selected range through [getSelectedRanges (method)](/docs/funcs/core/get-selection-ranges) function|
|HeaderActionMenu|Display context menu on right-click in header row|Changed to set [Menu (row)](/docs/props/row/menu) property in [Def.Header](/docs/appx/init-structure) (refer to `ibsheet-common.js`)|
|HeaderBackColor|Background color for header row|Recommended to set in CSS file.
Can be set through [Color (row)](/docs/props/row/color) property in [Def.Header](/docs/appx/init-structure)|
|HeaderCheck|Check/uncheck header checkbox|Set through [Checked (cell)](/docs/props/cell/checked) property
ex) sheet.getAttribute(sheet.Header,"CheckData","Checked");|
|HeaderFontBold|Header title font-weight setting|Recommended to set in CSS file. Can be set through [TextStyle (row)](/docs/props/row/text-style) property in [Def.Header](/docs/appx/init-structure)|
|HeaderFontColor|Header title text color setting|Recommended to set in CSS file. Can be set through [TextColor (row)](/docs/props/row/text-color) property in [Def.Header](/docs/appx/init-structure)|
|HeaderRows|Number of header rows|Can be checked through [getHeaderRows (method)](/docs/funcs/core/get-header-rows) function
ex) `var hcnt = sheet.getHeaderRows().length;`|
|HideFilterRow|Remove filter row|Same as [hideFilterRow (method)](/docs/funcs/core/hide-filter-row) function|
|HideProcessDlg|Remove loading image|Changed to [hideMessage (method)](/docs/funcs/core/hide-message) function|
|HideSubSum|Remove subtotal row|Changed to [removeSubTotal (method)](/docs/funcs/core/remove-sub-total) function|
|IBCloseCalendar|Remove calendar|Changed to [`dialogObject.Close` (appendix)](/docs/appx/dialog) function of object created by [IBSheet.showCalendar (static)](/docs/static/show-calendar) function|
|IBShowCalendar|Open calendar outside sheet area|Changed to [IBSheet.showCalendar (static)](/docs/static/show-calendar) function|
|ImageList|Image file index setting|Not supported|
|InitCellProperty|Cell-level setting change|Can be changed through [setAttribute (method)](/docs/funcs/core/set-attribute) function|
|InitColumns|Column initialization|Integrated into [IBSheet.create (static)](/docs/static/create) function|
|InitComboNoMatchText|||
|InitHeaders<a name="mig-init-headers"></a>|Header basic feature settings|Integrated into [Cfg](/docs/appx/init-structure) properties.
ex) `options.Cfg = {CanColResize:0,CanSort:1}; // Disable sorting, resizing for all`|
|IsDataModified|Check data modification status|Changed to [hasChangedData (method)](/docs/funcs/core/has-changed-data) function|
|IsHaveChild|Check for child nodes|Using [getChildRows (method)](/docs/funcs/core/get-child-rows), if the returned array length is 0 or more, you can know that at least 1 child exists|
|LastCol|Get last column index|Changed to [getLastCol (method)](/docs/funcs/core/get-last-col) function (returns column Name)|
|LastRow|Get last row index|Changed to [getLastRow (method)](/docs/funcs/core/get-last-row) function (returns last data row object)|
|LoadSaveData|Reflect save results|Changed to [applySaveResult (method)](/docs/funcs/core/apply-save-result) function|
|LoadSearchData|Load search data|Same as [loadSearchData (method)](/docs/funcs/core/load-search-data) function (XML not supported)|
|LoadExcel|Load Excel file data|Same as [loadExcel (method)](/docs/funcs/excel/load-excel) function|
|LoadExcelBuffer|Load multiple worksheet content|Same as [loadExcelBuffer (method)](/docs/funcs/excel/load-excel-buffer) function|
|LoadText|Load text file data|Same as [loadText (method)](/docs/funcs/core/load-text) function|
|MergeSheet|Auto data merge feature|Changed to [HeaderMerge (cfg)](/docs/props/cfg/header-merge), [DataMerge (cfg)](/docs/props/cfg/data-merge) properties|
|MouseCol|Column index at mouse cursor position|Changed to [getMouseCol (method)](/docs/funcs/core/get-mouse-col) function (returns column Name)|
|MouseHoverMode|Display settings on mouse hover over data|Changed to [Hover (cfg)](/docs/props/cfg/hover) property
ex) `sheet.Hover = 1; // Cell-level`|
|MouseRow|Row index at mouse cursor position|Changed to [getMouseRow (method)](/docs/funcs/core/get-mouse-row) function (returns row object)|
|MouseToolTipText|Tooltip display setting|Changed to [showTip (method)](/docs/funcs/core/show-tip) function
ex) `sheet.showTip('<div class="warn">3 days until quarter closing.</div>');`|
|MoveColumnPos|Change column position|Changed to [moveCol (method)](/docs/funcs/core/move-col) function|
|PagingPosition|Pagination setting|Integrated into [InfoRowConfig (cfg)](/docs/props/cfg/info-row-config) property|
|RangeBackColor|Change background color of a specific area|Since rendering timing can be directly controlled, set [Color (cell)](/docs/props/cell/color) property for each cell through [setAttribute (method)](/docs/funcs/core/set-attribute) function (set `render` argument to 0), and call [rerender (method)](/docs/funcs/core/rerender) function when finished|
|RangeFontBold|Change font-weight of a specific area|Since rendering timing can be directly controlled, set [TextStyle (cell)](/docs/props/cell/text-style) property for each cell through [setAttribute (method)](/docs/funcs/core/set-attribute) function (set `render` argument to 0), and call [rerender (method)](/docs/funcs/core/rerender) function when finished|
|RangeFontColor|Change text color of a specific area|Since rendering timing can be directly controlled, set [TextColor (cell)](/docs/props/cell/text-color) property for each cell through [setAttribute (method)](/docs/funcs/core/set-attribute) function (set `render` argument to 0), and call [rerender (method)](/docs/funcs/core/rerender) function when finished|
|RangeText|Extract content of a specific area|Since rendering timing can be directly controlled, set values for each cell through [setString (method)](/docs/funcs/core/set-string) function (set `render` argument to 0), and call [rerender (method)](/docs/funcs/core/rerender) function when finished|
|RangeValue|Extract content of a specific area|Since rendering timing can be directly controlled, set values for each cell through [setValue (method)](/docs/funcs/core/set-value) function (set `render` argument to 0), and call [rerender (method)](/docs/funcs/core/rerender) function when finished|
|RedrawSum|Recalculate summary|Changed to [calculate (method)](/docs/funcs/core/calculate) function|
|RemoveAll|Delete all data|Same as [removeAll (method)](/docs/funcs/core/remove-all) function|
|RenderSheet|Pause/resume display of modifications|Changed to [renderBody (method)](/docs/funcs/core/renderBody), [rerender (method)](/docs/funcs/core/rerender) functions|
|ReNumberSeq|Re-number Seq column|Not supported
Numbering is automatically calculated each time.|
|Reset|Clear sheet object|Call [dispose (method)](/docs/funcs/core/dispose) function to completely remove the sheet, then recreate with the same id ([IBSheet.create (static)](/docs/static/create))|
|ReturnCellData|Revert cell data to initially loaded data|Changed to [revertCell (method)](/docs/funcs/core/revert-cell) function|
|ReturnColumnPos|Restore column order to initial creation state|Not supported|
|ReturnData|Revert entire row data to initially loaded data|Changed to [revertRow (method)](/docs/funcs/core/revert-row) function|
|RowBackColor|Change row background color|Replaced by [Color (row)](/docs/props/row/color) property
ex) `sheet.setAttribute(row, null, 'Color', '#FFAA99');`|
|RowBackColorD|Background color of rows to be deleted|Set in CSS file `.IBColorDeleted` class|
|RowBackColorI|Background color of added rows|Set in CSS file `.IBColorAdded` class|
|RowBackColorU|Background color of modified rows|Set in CSS file `.IBColorChanged` class|
|RowCount|Check row count by status|Can be checked through [getRowsByStatus (method)](/docs/funcs/core/get-rows-by-status) or [getTotalRowCount (method)](/docs/funcs/core/get-total-row-count) functions|
|RowData|Get or set row values in JSON format|Values can be obtained through all row objects such as [getRowById (method)](/docs/funcs/core/get-row-by-id), [getFocusedRow (method)](/docs/funcs/core/get-focused-row)|
|RowDelete|Immediately delete row|Changed to [removeRow (method)](/docs/funcs/core/remove-row) function|
|RowEditable|Set edit enable/disable for entire row|Replaced by [CanEdit (row)](/docs/props/row/can-edit) property
ex) `sheet.setAttribute(row, null, 'CanEdit', 0);`|
|RowExpanded|Set expand state of child rows when using tree|Changed to [setExpandRow (method)](/docs/funcs/core/set-expand-row) function|
|RowFontColor|Change row text color|Replaced by [TextColor (row)](/docs/props/row/text-color) property
ex) `var fc = sheet.getAttribute(row, null, 'TextColor');`|
|RowHeight|Set row height|Check through [getRowHeight (method)](/docs/funcs/core/get-row-height) function
Change height through [Height (row)](/docs/props/row/height) property.
ex) `sheet.setAttribute(sheet.getFocusedRow(), null, "Height", 200);`|
|RowHeightMax|Set maximum height for all data rows|Set through [Def.Row.MaxHeight](/docs/appx/init-structure) property
ex) `sheet.Def.Row.MaxHeight = 100; sheet.rerender();`|
|RowHeightMin|Set minimum height for all data rows|Set through [Def.Row.MinHeight](/docs/appx/init-structure) property
ex) `sheet.Def.Row.MinHeight = 50; sheet.rerender();`|
|RowHidden|Row show/hide setting|Replaced by [Visible (row)](/docs/props/row/visible) property
ex) `sheet.setAttribute(row, null, 'Visible', 0);`
Changed to [hideRow (method)](/docs/funcs/core/hide-row) function
ex) `sheet.hideRow(row, null, 0);`|
|RowLevel|Set Depth index of row when using tree|Replaced by `Level` property (read-only)
ex) `var lvl = sheet.getAttribute(row, null, 'Level');`
Must use [moveRow (method)](/docs/funcs/core/move-row) function to move rows.|
|SaveNameCol|Index for column name|Changed to [getColIndex (method)](/docs/funcs/core/get-col-index) function|
|SearchRows|Number of loaded data rows|Changed to [getDataRows (method)](/docs/funcs/core/get-data-rows) function
However, if you want to exclude status-changed data rows, you can get the count as follows:
ex) `var searchRow = sheet.getDataRows() - sheet.getRowsByStatus("Added,Deleted").length;`|
|SelectCell|Move focus to a specific position|Changed to [focus (method)](/docs/funcs/core/focus) function
ex) `sheet.focus(row, 'colName');`|
|SelectCol|Move focus to a specific column|Changed to [focus (method)](/docs/funcs/core/focus) function
ex) `sheet.focus(null, 'colName');`
`var fc = sheet.getFocusedCol();`|
|SelectionMode|Set row/cell-level selection|Replaced by [SelectingCells (cfg)](/docs/props/cfg/selecting-cells) property|
|SelectRow|Move focus to a specific row|Changed to [focus (method)](/docs/funcs/core/focus) function
ex) `sheet.focus(row, null);`
`var fr = sheet.getFocusedRow();`|
|SetBlur|Remove focus from sheet|Changed to [blur (method)](/docs/funcs/core/blur) function
ex) `sheet.blur(2);`|
|SetColProperty|Change column properties|Various properties can be set through [setAttribute (method)](/docs/funcs/core/set-attribute)
ex) `sheet.setAttribute(null, 'colName', 'CanEdit', 0);`|
|SetConfig|Initial feature settings|Replaced by [Cfg](/docs/appx/init-structure) property in [IBSheet.create (static)](/docs/static/create) function|
|SetEndEdit|End editing|Changed to [endEdit (method)](/docs/funcs/core/end-edit) function|
|SetHeaderMode|Feature settings for header row|Refer to <a href="#mig-init-headers">InitHeaders</a> function description above.
ex) `sheet.CanSort = 0;`|
|SetMergeCell|Span for a specific area|Changed to [setMergeRange (method)](/docs/funcs/core/set-merge-range) function|
|SetSelectRange|Select specific area|Changed to [selectRange (method)](/docs/funcs/core/select-range) function|
|SetSplitMergeCell|Cancel merge for a merged area|Changed to [setMergeCancel (method)](/docs/funcs/core/set-merge-cancel) function|
|SheetWidth|Change sheet width|Modify the width of the el element specified when creating with [IBSheet.create (static)](/docs/static/create) function|
|SheetHeight|Change sheet height|Modify the height of the el element specified when creating with [IBSheet.create (static)](/docs/static/create) function|
|ShowCalendar|Open calendar popup over a specific cell|Replaced by [AutoCalendar (cfg)](/docs/props/cfg/auto-calendar) property|
|ShowColumnPopup|Display context menu set on a column|Similar functionality can be implemented through [showMenu (method)](/docs/funcs/core/show-menu) function
ex) `var menu = sheet.getAttribute(sheet.getFocusedRow(),"sCompany","Menu");`
`sheet.showMenu(sheet.getFocusedRow(),"sCompany",menu);`|
|ShowFilterRow|Display filter row|Same as [showFilterRow (method)](/docs/funcs/core/show-filter-row) function|
|ShowFindDialog|Open find dialog|Same as [showFindDialog (method)](/docs/funcs/dialog/show-find-dialog) function (`ibsheet-dialog.js` file required)|
|ShowGroupRow|Create group row|Changed to use Solid rows|
|ShowMsgMode|Set whether message event triggers||
|ShowPivotDialog|Open pivot dialog|Changed to [showPivotDialog (method)](/docs/funcs/dialog/show-pivot-dialog) function (`ibsheet-dialog.js` file required)|
|ShowProcessDlg|Display loading image|Changed to [showMessage (method)](/docs/funcs/core/show-message) function|
|ShowSubSum|Create subtotal row|Changed to [makeSubTotal (method)](/docs/funcs/core/make-sub-total) function|
|ShowToolTip|Display tooltip|Changed to [showTip (method)](/docs/funcs/core/show-tip) function|
|ShowTreeLevel|Expand to specified depth when using tree sheet|Same as [showTreeLevel (method)](/docs/funcs/core/show-tree-level) function|
|SumBackColor|Background color for summary row|Set in CSS file `.IBFormulaRow` class or set directly on the summary row
ex) `var frow = sheet.getRowById("FormulaRow");`
`sheet.setAttribute(frow, null, 'Color', "#FF0099");`|
|SumFontBold|Font-weight for summary row|Set in CSS file `.IBFormulaRow` class|
|SumFontColor|Text color for summary row|Set in CSS file `.IBFormulaRow` class|
|SumRowHidden|Summary row show/hide setting|Separated and changed to [showRow (method)](/docs/funcs/core/show-row), [hideRow (method)](/docs/funcs/core/hide-row)
Replaced by [Visible (row)](/docs/props/row/visible) property
ex) `sheet.setAttribute(sheet.FormulaRow, null, "Visible", true);`|
|SumValue|Set summary row value|Changed to [getValue (method)](/docs/funcs/core/get-value), [setValue (method)](/docs/funcs/core/set-value) functions
ex) `sheet.setValue(sheet.FormulaRow, "sAmt", 250000);`|
|TabBehavior|Action setting when pressing 'Tab' key in focus state||
|Theme|Theme setting|Only [setTheme (method)](/docs/funcs/core/set-theme) is the same|
|ToolTipText|Set tooltip for a specific cell|Replaced by [Tip (cell)](/docs/props/cell/tip) property
ex) `sheet.setAttribute(row, 'colName', 'Tip', 'Please enter the employee number first');`|
|TopRow|Check index of the topmost row|Can be checked through [getShownRows (method)](/docs/funcs/core/get-shown-rows) function
ex) `var trow = sheet.getShownRows()[0];`|
|TotalRows|Set total data count|Changed to [getTotalRowCount (method)](/docs/funcs/core/get-total-row-count) function|
|Visible|Show/hide entire sheet|Change display or visibility of the el element specified when creating with [IBSheet.create (static)](/docs/static/create)|

## 5. Differences and Considerations During Migration <a name="chapter-5"></a>

1. Changes in Object Access and Rendering Timing <a name="mig-approach"></a>
Unlike previous versions, IBSheet8 has changed to a method of directly accessing each object within the sheet to check or modify values.

Also, unlike IBSheet7 where rendering occurred immediately after each function execution, rendering has been improved for looping operations by calling the rendering function when needed to actually reflect on the screen.

Please refer to the example below that constructs logic to check the entire data for a column called "TOTAL" and display the background color of cells in red when the column value is greater than 100.


```javascript
//AS-IS
// Loop from the first data row to the last data row.
for (var i = sheet.GetDataFirstRow(); i <= sheet.GetDataLastRow(); i++) {
    if (sheet.GetCellValue(i,"TOTAL") > 100){ // Clone and get the value in the cell.
        sheet.SetCellBackColor(i,"TOTAL", "#FF0000"); // Change the background color of that cell to red. (Rendering occurs with each function call.)
    }
}
```

```javascript
//TO-BE
// Get all data row objects as an array
var rows = sheet.getDataRows();
for (var i = 0; i < rows.length; i++) {
    // Get one row object
    var row = rows[i];
    // Compare and set values within the row object.
    // Even with these modifications, they are not actually reflected (rendered) on screen.
    if (sheet.getValue(row, "TOTAL") > 100) {
        sheet.setAttribute(row, "TOTAL", "Color", "#FF0000", 0);// Set render property to 0
    }
}
// Reflect all modifications on screen
sheet.renderBody();
```
In IBSheet7, frequent rendering occurrences and differences in value handling methods degraded performance.

IBSheet8 has advantages in such operations through direct object access and rendering timing control.

The above example was actually written to explain the logic differences with IBSheet7; using IBSheet8's [Formula](./formula) feature allows for simpler and faster implementation of such functionality.

2. Tree Data Parsing <a name="mig-parse-tree-data"></a>
In IBSheet7, two data structures were supported when using trees.

1) Hierarchical tree data using the `Items` property
```javascript
{Data:[
    {ID:1,sName:"Grandfather",Items:[
        {ID:2,sName:"Uncle"},
        {ID:3,sName:"Father",Items:[
            {ID:5,sName:"Older Brother"},
            {ID:6,sName:"Me"}
        ]},
        {ID:4,sName:"Younger Uncle"}
    ]}
]}
```
2) Depth-specified tree data using the `Level` property
```javascript
{Data:[
    {ID:1 ,Level:1,sName:"Grandfather"},
    {ID:2 ,Level:2,sName:"Uncle"},
    {ID:3 ,Level:2,sName:"Father"},
    {ID:5 ,Level:3,sName:"Older Brother"},
    {ID:6 ,Level:3,sName:"Me"},
    {ID:4 ,Level:2,sName:"Younger Uncle"},
]}
```

IBSheet8 basically supports the tree data structure using the `Items` property from method 1) above.
And to use parsing with the `Level` property as before, you must use the `v7.convertTreeData` function in `ibsheet-common.js`.

**APIs defined in `IBSheet.v7` must have the sheet object bound.**

```javascript
// Convert IBSheet7's Level data structure.
sheet.loadSearchData( IBSheet.v7.convertTreeData(jsonData) );
```

## 6. Miscellaneous <a name="chapter-6"></a>

### Status Type Migration <a name="mig-status-type"></a>
The "Status" type that showed row status in ibsheet7 does not exist in ibsheet8, and row addition, deletion, and modification are managed automatically. (Added, Deleted, Changed properties are added to the row object)

And the row color changes automatically based on status. (Blue: new, Pink: deleted, Yellow: modified)

If you want to create a column showing status like ibsheet7, you can [Extend](/docs/props/col/extend) `IB_Preset.STATUS` from the `IBSheet-common.js` file on (Col).

```javascript
var initSheet = {
    Cols:[
        // Create a column that behaves like a Status column.
        {
            Header: "Status",
            Name: "RStatus",
            Extend: IB_Preset.STATUS
        }
    ]
};
```
Note
- Looking up the content of IB_Preset.STATUS in ibsheet-common.js, since it uses [Formula (col)](/docs/props/col/formula), the [CanFormula (row)](/docs/props/row/can-formula) property must be set to 1 and the [CalcOrder (row)](/docs/props/row/calc-order) property must be set in [Def/Row](/docs/appx/init-structure).
- Since the `STATUS` data value is changed through [Formula (col)](/docs/props/col/formula) during save, the strings in the `local/language.js` file (`"ReqStatusAdded": "Added"`(I), `"ReqStatusChanged": "Changed"`(U), `"ReqStatusDeleted": "Deleted"`(D), `"ReqStatusEmpty": ""`(R)) must be modified.
- If you want to display status with separate images like IBSheet7's `Cfg.ImageStatus` property, put the corresponding images instead of Added, Changed, Deleted in [Format (col)](/docs/props/col/format).

```js
Format:{"I":"<img src='../images/added.gif'>","U":"<img src='../images/changed.gif'>","D":"..."}
```

### DelCheck Type Migration <a name="mig-del-check-type"></a>
Add logic to change row status based on value through [OnChange (json event)](/docs/props/event/on-change) when creating the column.

You can [Extend](/docs/props/col/extend) `IB_Preset.DelCheck` from the `IBSheet-common.js` file on (Col).

```javascript
var initSheet = {
    Cols:[
        // Create a column that behaves like a DelCheck column.
        {
            Header:"Delete",
            Name:"DEL",
            Extend: IB_Preset.DelCheck
        }
    ]
};
```
### Combo, ComboEdit Type Migration <a name="mig-combo-combo-edit-type"></a>
The `Combo` type has been changed to the [Enum](/docs/appx/type) type, and `ComboText`, `ComboCode` have been changed to [Enum (col)](/docs/props/col/enum), [EnumKeys (col)](/docs/props/enum-keys) properties respectively.

```javascript
//AS-IS
{Header:"Position", Type:"Combo", SaveName:"Position", ComboText:"Staff|Assistant Manager|Manager|Deputy GM|General Manager", ComboCode:"A0|A1|B0|B1|B3"}
```
```javascript
//TO-BE (Note that the first character of Enum, EnumKeys properties is used as a delimiter)
{Header:"Position", Type:"Enum", Name:"Position", Enum:"|Staff|Assistant Manager|Manager|Deputy GM|General Manager", EnumKeys:"|A0|A1|B0|B1|B3"}
```

`ComboEdit` can create a similarly functioning column using [Defaults (col)](/docs/props/col/defaults), [Format (col)](/docs/props/col/format), [EditFormat (col)](/docs/props/col/edit-format), [Suggest (col)](/docs/props/col/suggest) properties.
```javascript
//AS-IS
{Header:"Position", Type:"ComboEdit", SaveName:"Position", ComboText:"Staff|Assistant Manager|Manager|Deputy GM|General Manager|Director|Executive VP|CEO", ComboCode:"A0|A1|B0|B1|B3|C0|C1|C2"}
```

```javascript
//TO-BE
var comboText = "Staff|Assistant Manager|Manager|Deputy GM|General Manager|Director|Executive VP|CEO";
var comboCode = "A0|A1|B0|B1|B3|C0|C1|C2";

{
    Header:"Position", Type:"Text", Name:"Position",
    Button: "Defaults",
    // Set the Format type of cell values displayed on screen. If value is A0, "Staff" is displayed
    Format: {
        "A0": "Staff",
        "A1": "Assistant Manager",
        "B0": "Manager",
        "B1": "Deputy GM",
        "B3": "General Manager",
        "C0": "Director",
        "C1": "Executive VP",
        "C2": "CEO"
    },
    // Set the Format type displayed on screen during cell editing
    EditFormat: {
        "A0": "Staff",
        "A1": "Assistant Manager",
        "B0": "Manager",
        "B1": "Deputy GM",
        "B3": "General Manager",
        "C0": "Director",
        "C1": "Executive VP",
        "C2": "CEO"
    },
    Suggest:"|"+comboText,  // Filter items during input
    Defaults: "|"+comboCode // Default values when cell is selected
}
```
With the above settings, it can be used. For `ComboEdit` usage, please set it commonly in the [onBeforeCreate (static)](/docs/static/on-before-create) event.


### AcceptKeys, ExceptKeys Migration <a name="mig-accept-keys-except-keys"></a>

`AcceptKeys` and `ExceptKeys` are both features that allow or disallow input of specific characters.
In IBSheet7, reserved words such as `E(English)`, `N(Numbers)`, `K(Korean)` along with specific desired characters were set as follows.

```javascript
//AS-IS
var Cols = [
    // AcceptKeys example          Only allow English, numbers, - (symbol)
    {Type:"Text", Name:"SA_NO", AcceptKeys:"E|N|[-]" },

    // ExceptKeys example          English and !,@,# cannot be entered
    {Type:"Text", Name:"SA_PRT", ExceptKeys:"E|[!@#]" }
];
```

```javascript
///TO-BE
opt.Cols = [
    // Using EditMask instead of AcceptKeys to allow only English, numbers, - (symbol)
    {Type:"Text", Name:"SA_NO", EditMask:"^[a-zA-Z|\\d|\\-]*$" },

    // Using EditMask instead of ExceptKeys to disallow English and !,@,#
    {Type:"Text", Name:"SA_PRT", EditMask:"^[^a-zA-Z|^!|^@|^#]*$" }
];
```
If you are not familiar with regular expressions, you can also automatically convert existing `AcceptKeys`, `ExceptKeys` to [EditMask (col)](/docs/props/col/edit-mask) through common logic in [onBeforeCreate (static)](/docs/static/on-before-create).

Please refer to the logic below.

```javascript
// Event triggered just before sheet creation (all arguments passed to IBSheet.create are contained in opt)
IBSheet.onBeforeCreate = function(opt){
    var acceptExceptKeysMig = function(Cols){

        for(var i = 0; i < Cols.length; i++) {
            var c = Cols[i];

            // Implement AcceptKeys similarly through EditMask.
            if (c["AcceptKeys"]) {

                var setV = c["AcceptKeys"];
                var acceptKeyArr = setV.split("|");
                var mask = "";

                for (var i = 0; i < acceptKeyArr.length; i++) {
                    switch (acceptKeyArr[i]) {
                    case "E":
                        mask += "|a-zA-Z";
                        break;
                    case "N":
                        mask += "|\\d";
                        break;
                    case "K":
                        mask += "|\\u3131-\\u314e\\u314f-\\u3163\\uac00-\\ud7a3";
                        break;
                    default:
                        if (acceptKeyArr[i].substring(0, 1) == "[" && acceptKeyArr[i].substring(acceptKeyArr[i].length-1) == "]") {
                            var otherKeys = acceptKeyArr[i].substring(1, acceptKeyArr[i].length-1);
                            for (var x = 0; x < otherKeys.length; x++) {
                                if ([".","-","$","^","*","+","|","(",")"].indexOf(otherKeys[x]) > -1) {
                                    mask += "|\\" + otherKeys[x];
                                } else {
                                    mask += "|" + otherKeys[x];
                                }
                            }
                        }
                        break;
                    }
                }
                c.EditMask = "^[" + mask.substring(1) + "]*$";

            // Implement ExceptKeys similarly through EditMask.
            } else if(c["ExceptKeys"]) {

                var setV = c["ExceptKeys"];
                var acceptKeyArr = setV.split("|");
                var mask = "";

                for (var i = 0; i < acceptKeyArr.length; i++) {
                    switch (acceptKeyArr[i]) {
                    case "E":
                        mask += "|^a-zA-Z";
                        break;
                    case "N":
                        mask += "|^\\d";
                        break;
                    case "K":
                        mask += "|^\\u3131-\\u314e\\u314f-\\u3163\\uac00-\\ud7a3";
                        break;
                    default:
                        if (acceptKeyArr[i].substring(0, 1) == "[" && acceptKeyArr[i].substring(acceptKeyArr[i].length-1) == "]") {
                            var otherKeys = acceptKeyArr[i].substring(1, acceptKeyArr[i].length-1);
                            for (var x = 0; x<otherKeys.length; x++) {
                                if ([".","-","$","^","*","+","|","(",")"].indexOf(otherKeys[x]) > -1) {
                                    mask += "|^\\" + otherKeys[x];
                                } else {
                                    mask += "|^" + otherKeys[x];
                                }
                            }
                        }
                        break;
                    }
                }
                c.EditMask = "^[" + mask.substring(1) + "]*$";
            }
        }
    }

    acceptExceptKeysMig(opt.options.Cols);
    if(opt.options.LeftCols) acceptExceptKeysMig(opt.options.LeftCols);
    if(opt.options.RightCols) acceptExceptKeysMig(opt.options.RightCols);

    // The modified opt must be returned for the sheet to be created.
    return opt;
}
```



### MaximumValue, MinimumValue Migration

Can be implemented by commonly defining the [onEndEdit](../events/on-end-edit) event in the [IBSheet.onBeforeCreate](../static/on-before-create) event.

Please refer to the content below.
1. Define the onBeforeCreate event in ibsheet-common.js as follows.
```js
_IBSheet.onBeforeCreate = function(init) {
    // Common event definition
    init.options.Events = init.options.Events || {};

    // If onEndEdit is declared on individual page, save it in orgEndEdit
    if(typeof init.options.Events.onEndEdit != "undefined") {
      init.options.Events.orgEndEdit = init.options.Events.onEndEdit;
    }

    // Common definition of onEndEdit event
    init.options.Events.onEndEdit = function(evt) {
      // If MinimumValue is defined on the column
      if (typeof evt.sheet.Cols[evt.col].MinimumValue != "undefined") {
        if (evt.sheet.Cols[evt.col].MinimumValue > Number(evt.raw)) {
          alert(
            "The minimum allowed input value is " +
              evt.sheet.Cols[evt.col].MinimumValue +
              "."
          );
          // Prevent exiting the edit field
          return true;
        }
      }

      // If MaximumValue is defined on the column
      if (typeof evt.sheet.Cols[evt.col].MaximumValue != "undefined") {
        if (evt.sheet.Cols[evt.col].MaximumValue < Number(evt.raw)) {
          alert(
            "The maximum allowed input value is " +
              evt.sheet.Cols[evt.col].MaximumValue +
              "."
          );
          return true;
        }
      }

      // If onEndEdit is defined on individual page
      if(typeof init.options.Events.orgEndEdit != "undefined") {
        return init.options.Events.orgEndEdit(evt)
      }
    }
    return init;
  }
```

2. Define MaximumValue and MinimumValue the same way as with the IBSheet7 product when creating the sheet.
```js
const initSheet = {
    Cols:[
        {Header:"Profit", Type: "Int", Name:"income", MinimumValue:1000 }, // Value must be 1000 or above
        {Header:"Loss", Type: "Int", Name:"loss", MaximumValue:0 }  // Value must be 0 or below
        ...
    ]
}
IBSheet.create({
    id: "mySheet",
    el: "sheetDIV",
    options: initSheet
})

```
