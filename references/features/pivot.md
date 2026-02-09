# Pivot Table

IBSheet8's pivot feature reconstructs the source ibsheet8 data by row/column/value criteria to create a pivot ibsheet8. The pivot ibsheet8 ID is automatically generated as `"pivotSheet_" + sourceSheetID`. DataMerge is not supported in pivot ibsheet8s, and browser performance issues may occur when exceeding 5,000 rows and 200 columns.

## 3 Usage Methods

### 1. UsePivot (Cfg) - Interactive Pivot Area

When `UsePivot: true` is set, a drag area for pivot configuration is created in the ibsheet8's Solid region, allowing users to drag columns to build pivots. In practice, this is not frequently used due to somewhat inconvenient UI.

```javascript
options.Cfg = {
  UsePivot: true,
  AcceptPivotRows: "sDept,sTeam,sPosition,sName",  // Columns allowed for left header (rows)
  AcceptPivotCols: "sDept,sTeam,sPosition",          // Columns allowed for top header (columns)
  AcceptPivotData: "sAge,sSalary,sBonus",             // Columns allowed for value area (int, float types)
  InitPivotRows: "sDept",          // Initial row criteria column
  InitPivotCols: "sPosition",     // Initial column criteria column
  InitPivotData: "sSalary",       // Initial value column
  PivotFormat: "#,###",           // Value cell format
  PivotFunc: "Sum",               // Aggregation function (Sum, Count, Max, Min)
  PivotSumPosition: false,        // Summary row position (false: Footer, true: Header)
  NoPivotSort: false              // false: Sort source data before creating pivot
};
```

Related event: `onAfterPivot` - Fires after pivot ibsheet8 creation is complete (at onRenderFirstFinish timing)

### 2. makePivotTable() - Programmatic Pivot Creation

Creates a pivot ibsheet8 directly via code according to the screen designer's intent. Since it must be called after data is loaded into the source ibsheet8, it is recommended to call it in the `onSearchFinish` event if there is no separate button. If a filter is applied to the source ibsheet8, the filter is automatically released before pivot creation.

```javascript
// criterias: Candidate columns available for pivot (can be omitted)
var criterias = {
  row: "sDept,sTeam,sPosition,sName",
  col: "sDept,sTeam,sPosition",
  data: "sAge,sSalary,sBonus"
};
// init: Columns actually used for pivot (required)
var init = {
  row: "sDept",
  col: "sPosition,sTeam",
  data: "sSalary,sAge"
};

var pivotSheet = sheet.makePivotTable(
  criterias,           // object|optional - Candidate columns for pivot
  init,                // object|required - Actual pivot configuration (row, col, data)
  "#,###",             // string|optional - Format
  "Sum,Avg",           // string|optional - Aggregation functions (must match number of data columns, comma-separated)
  function(evt) {},    // function|optional - Creation complete callback (at onRenderFirstFinish timing)
  { hideTotalRow: false, hideTotalCol: true }  // object|optional - Whether to show grand totals
);
```

Aggregation function options: `"Sum"` (default), `"Count"`, `"Max"`, `"Min"` - When there are multiple data columns, specify each with commas

Pattern for calling in onSearchFinish:
```javascript
options.Events = {
  onSearchFinish: function(evt) {
    sheet.makePivotTable(null, {
      row: "sDept",
      col: "sPosition",
      data: "sSalary"
    }, "#,###", "Sum");
  }
};
```

### 3. showPivotDialog() - Dialog Method (Most Commonly Used)

This is the most commonly used method as it allows users to freely configure pivots through a dialog UI.

**Prerequisite: The `"plugins/ibsheet-dialog.js"` file must be imported.**

> Cannot be used simultaneously with UseFilterDialog

```javascript
// Basic call
sheet.showPivotDialog();

// With options
sheet.showPivotDialog({
  width: 700,                    // Dialog width (default 500)
  height: 700,                   // Dialog height (default 600)
  name: "myPivot",               // Dialog name (default "pivotDialog_" + sheetid)
  pivotParams: {                 // makePivotTable options (format, callback, hideTotal)
    format: "#,### Won",
    callback: function(evt) {
      // evt.sheet: Pivot ibsheet8 object
      var dataRows = evt.sheet.getDataRows();
      // Post-processing logic after pivot creation
    },
    hideTotal: { hideTotalRow: false, hideTotalCol: true }
  },
  useStorage: true               // Pivot configuration save feature (StorageSession setup required)
});
```

## Pivot ibsheet8 Switching

```javascript
// Switch to pivot ibsheet8
pivotSheet_sheet.switchPivotSheet(1);

// Switch to source ibsheet8
pivotSheet_sheet.switchPivotSheet(0);

// Remove pivot ibsheet8 and return to source
sheet.PivotSheet.dispose();
sheet.PivotSheet.switchPivotSheet();
delete sheet.PivotSheet;
```

## Pivot Filter

In the pivot ibsheet8, you can filter source data to regenerate the pivot.

```javascript
// ClickPivotFilter: When clicking a pivot cell, only show matching data rows filtered in the source ibsheet8
options.Cfg = { ClickPivotFilter: true };

// doPivotFilter: Apply filter programmatically and regenerate pivot
// Connect column/value/operator with a delimiter (first character)
pivotSheet_sheet.doPivotFilter("|deptName|cardAmt", "|R&D Team|50000", "|9|6");
// Operators: 0=Not used, 1=Equal, 2=Not equal, 3=Less than, 4=Less or equal, 5=Greater than, 6=Greater or equal,
//            7=Starts with, 8=Does not start with, 9=Ends with, 10=Does not end with, 11=Contains, 12=Does not contain, 13=Top 10, 14=Has value, 15=No value

// clearPivotFilter: Release pivot filter and regenerate pivot with full data
pivotSheet_sheet.clearPivotFilter();

// getPivotFilterRows: Retrieve source rows that compose a pivot cell (note that source filter may change)
var rows = pivotSheet_sheet.getPivotFilterRows(focusRow, focusCol);
```

## Related API Summary

| Category | Item | Description |
|----------|------|-------------|
| Cfg | UsePivot | Use interactive pivot area |
| Cfg | AcceptPivotRows/Cols/Data | Columns allowed for each area when UsePivot is enabled |
| Cfg | InitPivotRows/Cols/Data | Initial columns to set when UsePivot is enabled |
| Cfg | PivotFormat | Pivot cell format |
| Cfg | PivotFunc | Aggregation function (Sum/Count/Max/Min) |
| Cfg | PivotSumPosition | Summary row position (0: bottom, 1: top) |
| Cfg | NoPivotSort | Create pivot without sorting source data |
| Cfg | ClickPivotFilter | Filter source on pivot cell click |
| Method | makePivotTable() | Create pivot via code |
| Method | showPivotDialog() | Pivot dialog (requires ibsheet-dialog.js) |
| Method | switchPivotSheet() | Switch between source/pivot ibsheet8 |
| Method | doPivotFilter() | Apply pivot filter |
| Method | clearPivotFilter() | Release pivot filter |
| Method | getPivotFilterRows() | Retrieve source rows of a pivot cell |
| Event | onAfterPivot | Pivot ibsheet8 creation complete |
