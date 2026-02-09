# API Methods Reference

## Basic Rules
1. All method arguments can also be used as objects
```javascript
const row = mySheet.copyRow( mySheet.getFocusedRow(), mySheet.getFirstRow() );
const row = mySheet.copyRow({row: mySheet.getFocusedRow(), next: mySheet.getFirstRow() });
```
2. If the sync option is not set when creating IBSheet8, it is created asynchronously by default, and the onRenderFirstFinish event fires after creation
3. Boolean values in IBSheet8 APIs are set as 1/0 instead of true/false
4. setValue, setAttribute have a `render` parameter to choose whether to immediately apply the modified value<br>
여러 loop문 안에서 setValue,setAttribute를 호출하거나, 여러번 setValue,setAttribute를 호출해야 하는 경우에는 render 파라미터를 0으로 설정한 뒤 모든 작업이 끝나고나서 render 함수를 호출 할 것.(성능개선)
5. [Full API list](../ibsheet8-official-manual/funcs/index.md)
---
## ibsheet8 Creation/Removal

```javascript
const sheet = IBSheet.create({
  id: "sheetId",
  el: "containerId",
  options: { Cfg: {}, Cols: [], Events: {} },
  data: [], // optional
  sync: 1 // optional (default: 0)
});

IBSheet.dispose("sheet"); // Removes the DOM area, common variables, and JavaScript objects
```
## ibsheet8 Access

```javascript
const sheet = window["sheetId"]; // When created with IBSheet.create, it is stored in the window object under the specified id
```
---

## Data Load

### Local Data Load
[loadSearchData](../ibsheet8-official-manual/funcs/core/load-search-data)
```javascript
// Local data
sheet.loadSearchData({
  data: jsonArray,
  sync: 1, // sync option (default: 0)
  append: 1, // whether to append below existing data (default: 0)
});
```

### Server Data Load
[doSearch](../ibsheet8-official-manual/funcs/core/do-search)
```javascript
// Server data
sheet.doSearch({
  url: "/api/list",
  method: "POST",
  param: "name=John&saNo=3245" // or  { "name": "John", "saNo": 3245 }
  reqHeader: {"Content-Type":"application/json", ...} // Content to add to the request header
});

```
### Remove All Data

```javascript
sheet.removeAll();
```

---

## Data Extraction

### Extract data as object ({"data": jsonArray} structure)
[getSaveJson](../ibsheet8-official-manual/funcs/core/get-save-json)
```javascript
const changedData = sheet.getSaveJson(); // Extract only rows with changed status (Added, Changed, Deleted)
const checkedData = sheet.getSaveJson({ col: "checkColName" }); // Extract only data where checkColName column value is true
const allRows = sheet.getSaveJson({ saveMode: 0 }); // Extract all data (0: all, 1: all except Deleted, 2: Added, Changed, Deleted (default))
```

**Return format:**
```javascript
{ data: [{ "STATUS": "Added", id: rowId, colName1: "value1", colName2: "value2".. }, ...] }
```

### Extract data as querystring

```javascript
const changedData = sheet.getSaveString(); // Extract rows with changed status (Added, Changed, Deleted) as querystring format
```

**Return format:**
```javascript
"STATUS=Changed&colName1=value1&colName2=value2"
```

### Extract Row Data

```javascript
const rowData = sheet.getRowValue(row); // Extract as object format {"EMPNO":1234,"EMPNAME":'chris'...}
```

---

## Data Save

### Ajax communication and save through ibsheet8
- doSave operates sequentially: data collection (getSaveJson or getSaveString) -> transmission (ajax) -> result application (applySaveResult which internally calls acceptChangedData), so there is no need to individually call data collection or result application functions.

[doSave](../ibsheet8-official-manual/funcs/core/do-save)
```javascript
sheet.doSave({
  url: "/api/save",
  param: "name=John&saNo=3245", // Parameters to send to server together (object also possible {"name":"John",...})
  saveMode: 2, // Send only modified data
  queryMode: 1, // Select json or querystring
  quest: 1 // Create confirm before saving
});
```

### Save through external library

```javascript
const param = sheet.getSaveString(); // Extract changed data
$.ajax({
  url: '/api/save',
  method: 'post',
  data: param,
  success: function(data, status, xhr) {
    const io = data?.IO;
    if( io ) {
      // Apply save result
      sheet.applySaveResult(io.Result, io.Message, xhr.response);
    }
  }
});
```
---

## Getting Row Objects

```javascript
const allRows = sheet.getDataRows(); // Get all data row array. Since it's not a clone, do not add or remove items from the array.
const count = sheet.getDataRows().length;
const headRow = sheet.getRowById("Header"); // Header row object (if there are 2 or more header rows: Header, HR1, HR2, HR3 ... )
const sumRow = sheet.getRowById("FormulaRow"); // Formula row object
const row10th = sheet.getRowByIndex(10); // 10th data row object
const row11th = sheet.getNextRow(row10th);
const row9th = sheet.getPrevRow(row10th);
const firstRow = sheet.getFirstRow();
const lastRow = sheet.getLastRow();
const focusedRow = sheet.getFocusedRow();
const addedRows = sheet.getRowsByStatus("Added"); // Get added rows (array)
const checkedRows = sheet.getRowsByChecked("CHK"); // Get rows checked in the 'CHK' column (array)
const focusedRowIndex = sheet.getRowIndex( row10th ); // 10
```
---

## Row Operations

### Add Row

```javascript
const newRow = sheet.addRow(); // Add to the last row
const newRow = sheet.addRow({next: row, init: { colName1: "Korea", colName3: "A" } }); // Add new row above the specified row
```

### Remove Row

```javascript
sheet.removeRow(row); // The row is removed from the row object and the DOM is also removed
```

### Change Row Status to Deleted (not actually removed)

```javascript
sheet.deleteRow(row, 1); // Second argument (0: cancel delete, 1: delete). Deleted:1 is added to the row.
```

### Move/Copy Row
```javascript
sheet.moveRow(row, targetRow) // Move row above targetRow

sheet.copyRow(row, targetRow) // Add a row with the same values as row above targetRow
```




---

## Cell Value Operations

```javascript
const value = sheet.getValue(row, "colName"); // Actual value with formatting removed
sheet.setValue(row, "colName", "new value");
sheet.setValue({row: row, col: "colName", val: "new value", render: 0 }); // When render:0 is set, it does not render on screen; it is applied when the render function is called.
const text = sheet.getString(row, "colName");  // Formatted value
```

---

## Focus/Selection

```javascript
const frow = sheet.getFocusedRow();
const fcol = sheet.getFocusedCol()
sheet.focus(row, "colName") // Move focus
sheet.blur() // Release focus

const selRangeArr = sheet.getSelectedRanges();
const selRows = sheet.getSelectedRows();
sheet.selectAllRows(); // Select all rows
sheet.clearSelection();
sheet.selectRange(startRow, startCol, endRow, endCol, 1); // Select specific range
```

---

## Checkbox

```javascript
sheet.setCheck(row, "checkColName", 1); //check
sheet.setCheck(row, "checkColName", 0); //uncheck
sheet.setCheck(row, "checkColName", null);// toggle check
const checkedRows = sheet.getRowsByChecked("checkColName");
sheet.setAllCheck("checkColName");
```

---

## Column Operations

```javascript
const colNames = sheet.getCols(); // All column name array ["SEQ", "EMPNO", "EMPNAME"... ]
const firstCol = sheet.getFirstCol();
const lastCol = sheet.getLastCol();
sheet.showCol("colName");
sheet.hideCol("colName");
sheet.setAttribute(null, "colName", "CanEdit", 0); // Set row value to null when operating on columns
sheet.setAttribute(null, "colName", "CanSort", 1);
const colWidth = sheet.getAttribute(null, "colName", "Width");
const colType = sheet.getAttribute(null, "colName", "Type");
```

---

## Sort/Filter
[doFilter](../ibsheet8-official-manual/funcs/core/do-filter)
```javascript
sheet.doSort("colName1,-colName2"); // '-' before colName means DESC sort
sheet.clearSort();

sheet.showFilterRow(); // Create filter row

if(sheet.getRowById("Filter").Visible) {
  sheet.doFilter({cols: "|colName1|colName2", vals: "|Admin|3500", operators: "|1|5" }); // Can only be used when the Filter row exists
}
sheet.clearFilter();
sheet.hideFilterRow();
```

---

## Search

```javascript
const firstFoundRow = sheet.findText("colName", "search text");
```

---

## Style

```javascript
sheet.setAttribute( row, null, "Color", "#FF0000"); // Change row color
sheet.setAttribute( row, null, "TextFont", "Times New Roman"); // Set row font family
sheet.setAttribute( null, "colName", "TextStyle", 1 ); // Set column text to Bold
sheet.setAttribute( null, "colName", "TextSize", "27px" ); // Set column text size
sheet.setAttribute( null, "colName", "Class", "grid-warning" ); // Set .grid-warning class on column
sheet.setAttribute( row, "colName", "TextColor", "#0000FF"); // Change cell text color
```

---

## Render Functions

```javascript
sheet.refreshCell(row, "colName"); // Render cell
sheet.refreshRow(row); // Render row
sheet.renderBody(); // Render data area
sheet.rerender(); // Render entire area
```
renderBody()나 rerender()는 작업 종료후 1회만 호출 할 것.
---

## Export
[exportData](../ibsheet8-official-manual/funcs/core/export-data)
```javascript
sheet.exportData({fileName: "DataList.xlsx", sheetName: "Sheet1", downRows: "Visible", downCols: "Visible", sheetDesign: 1});
```

---

## Merge
[setAutoMerge](../ibsheet8-official-manual/funcs/core/set-auto-merge)
```javascript
sheet.setAutoMerge(0, 3); // Auto merge based on adjacent cells
sheet.setAutoMergeCancel();

sheet.setMergeRange(startRow, "colName1", endRow, "colName4"); // Force merge specific range (not available in SearchMode:0)
```

---

## Tree
```javascript
sheet.showTreeLevel(3, 0, 1); // Expand to level 3
sheet.setExpandRow(sheet.getFocusedRow(), null, 0); // Collapse focused row
const isExpanded = sheet.getAttribute(row, null, "Expanded"); // Check if row is expanded
```
