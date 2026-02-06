---
KEY: makePivotTable
KIND: method
PATH: funcs/core/make-pivot-table
ALIAS: sheet.makePivotTable, makePivotTable()
ALIAS_EN: creates, pivot, table, based, data, target, sheet, makepivottable
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/make-pivot-table
---
# makePivotTable ***(method)***

> Creates a pivot table based on all data from the target sheet.

> However, if the target sheet has a filter applied at the time of pivot creation, the filter is cancelled before creating the pivot.

> The created pivot table sheet's ID is created as `"pivotSheet_" + id` of the original sheet. For example, if the original sheet's ID is `"sheet"`, the pivot sheet's ID will be `"pivotSheet_sheet"`. 

> The `DataMerge` feature is not supported in the pivot table sheet.

> **<mark>Note</mark> : Creating a pivot table with more than 5000 rows and 200 columns using `makeSubTotal` may cause browser performance issues. 
It is recommended to configure `makeSubTotal` base row and column settings so that the table is created within these limits.**



### Syntax
```javascript
object makePivotTable(criterias, init, format, type, callback, hideTotal);
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|criterias|`object`|Optional|Settings for pivot table base target column names
 Use general column data for row and col, and use numeric columns (`int, float`) for data.|
|init|`object`|Required|Settings for pivot table columns, rows, and calculation targets
 Use general column data for row and col, and use numeric columns (`int, float`) for data.|
|format|`string`|Optional|Format to be displayed in the pivot table|
|type|`string`|Optional|Calculation method for each calculation target column (`default: "Sum"`)
 `"Sum"`, `"Count"`, `"Max"`, `"Min"` are available.
Multiple calculation methods per column can be set by connecting with `,(comma)` to match the number of data columns.|
|callback|`function`|Optional|Callback function to call after the pivot sheet is created. Triggered at the [onRenderFirstFinish](/docs/events/on-render-first-finish) point after the pivot sheet is created.|
|hideTotal|`object`|Optional|Whether to display grand total in the pivot table|

### criterias
|Name|Type|Required|Description|
|----------|-----|---|----|
|row|`string`|Required|Row level field base column names connected with delimiter (",") as a string|
|col|`string`|Required|Column level field base column names connected with delimiter (",") as a string|
|data|`string`|Required|Calculation target base column names connected with delimiter (",") as a string|

### init
|Name|Type|Required|Description|
|----------|-----|---|----|
|row|`string`|Required|Row level field column names to set, connected with delimiter (",") as a string|
|col|`string`|Required|Column level field column names to set, connected with delimiter (",") as a string|
|data|`string`|Required|Calculation target column names connected with delimiter (",") as a string|

### hideTotal
|Name|Type|Required|Description|
|----------|-----|---|----|
|hideTotalRow|`boolean`|Optional|Whether to hide the row grand total (`default: false`)|
|hideTotalCol|`boolean`|Optional|Whether to hide the column grand total (`default: false`)|


### Return Value
***object*** : The created pivot sheet object

### Example
```javascript
// Pivot table creation
var criterias = {
  row: 'sDept,sTeam,sPosition,sName,sGender,sAgeRange,sAddr',
  col: 'sDept,sTeam,sPosition,sName,sGender,sAgeRange,sAddr',
  data: 'sAge,sPeriod,sSalary,sBonus'
}
var init = {
  row: 'sDept',
  col: 'sPosition,sTeam',
  data: 'sSalary,sAge'
}
var callback = function (evt) {
  // callback function ...
}
var hideTotal = {
  hideTotalRow: false,
  hideTotalCol: true
}

// Since there are two initialized data columns (sSalary, sAge), Sum and Avg types are applied respectively, and column grand total is hidden.
sheet.makePivotTable(criterias, init, '#,###', 'Sum,Avg', callback, hideTotalCol);
```

### Read More
- [showPivotDialog method](/docs/funcs/dialog/show-pivot-dialog)
- [switchPivotSheet method](./switch-pivot-sheet)
<!--!
- `[Private]` [clearPivotSheet method](/docs/funcs/dialog/clear-pivot-sheet)
!-->

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.17|`callback` Feature added|
|core|8.1.0.46|`type` option `Max`, `Min` added|
|core|8.1.0.94|`criterias` argument changed to Optional|
|core|8.2.0.15|`pivotType` related Feature improved|
|core|8.3.0.9|`hideTotal` argument Feature added|
