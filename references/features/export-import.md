# Export and Import

IBSheet8 provides two types of export/import.

| Category | Server-based | Client-based |
|------|----------|---------------|
| Excel Export | `down2Excel()` | `exportData()` |
| Excel Import | `loadExcel()` | `importData()` |
| Text Export | `down2Text()` | `exportData()` (txt/csv) |
| Text Import | `loadText()` | `importData()` (txt/csv) |
| PDF Export | `down2Pdf()` | - |
| Hwpx Export | `down2Hwpx()` | - |
| Multi-sheet Export | `down2ExcelBuffer()` | `exportDataBuffer()` |
| Direct bulk data processing | `directDown2Excel()` / `directLoadExcel()` | - |

---

## Prerequisites

### When using server-based functions

1. **Server module installation**

   - Java: Add `ibsheet8-1.x.x.jar` + Apache POI library to `WEB-INF/lib`
   - .NET: Add `IBSheet8-4.0.dll` + Syncfusion library to bin or references

2. **Include plugin files**

   ```html
   <script src="/plugins/ibsheet-excel.js"></script>
   ```

3. **Export path configuration**

   ```javascript
   // Set in Cfg when creating ibsheet8
   Cfg: {
     Export: {
       Url: "/assets/ibsheet/jsp"  // Path where JSP/ASPX files are located
     }
   }
   ```

   To set commonly for all ibsheet8 instances, use `IBSheet.CommonOptions`.

### When using client-based functions

- The `plugins/jszip.min.js` file must be present.
- Processing is done directly in the browser without a server module.
- Supported file formats: **xlsx, txt, csv**

---

## Excel Export

### Server-based: down2Excel

```javascript
// Basic usage
sheet.down2Excel({
  fileName: "DataList.xlsx",
  sheetDesign: 1,
  merge: 1
});

// Using key options
sheet.down2Excel({
  fileName: "TransportExpenses.xlsx",
  sheetName: "Transport",            // Worksheet name
  downCols: "name|dept|amount",   // Download specific columns only ("Visible": visible columns only)
  downRows: "1|3|5",              // Download specific rows only ("Visible": visible rows only)
  downHeader: 1,                  // Include header row (default: 1)
  downSum: 1,                     // Include formula row (default: 1)
  sheetDesign: 1,                 // Apply design (0: not applied, 1: fully applied, 2: exclude borders, 3: none applied, 4: header only)
  merge: 1,                       // Apply merge (0: disabled, 1: enabled (keep values), 2: enabled (clear values))
  wordWrap: 1,                    // Text word wrap (default: 1)
  excelFontSize: 10,              // Font size
  excelRowHeight: 20,             // Row height (-1: auto adjust)
  freezePane: 1,                  // Freeze pane (1: header, 2: head area, 4: left frozen columns, bitwise combination possible)
  hiddenColumn: 1,                // Download hidden columns as Excel "column hide"
  downCombo: "TEXT",              // Enum download format ("TEXT": display value, "CODE": code value)
  workbookPassword: "1234",       // Excel file password (xlsx only)
  enableFilter: 1                 // Enable Excel filter
});
```

**Adding title area with titleText / userMerge:**

```javascript
sheet.down2Excel({
  fileName: "Report.xlsx",
  titleText: "||March 2024 Transport Expenses\r\n|||||||John Doe",
  userMerge: "0,2,1,4",   // row,col,downward merge count,rightward merge count (separate multiple with spaces)
  titleAlign: "center"
});
```

**Adding custom top/bottom areas with exHead/exFoot:**

```javascript
sheet.down2Excel({
  fileName: "Report.xlsx",
  exHead: [
    {
      Height: 30,
      Cells: [
        { Value: "Department", Color: "#DEDEDE", TextSize: 12, TextStyle: 1 },
        { Value: "General Affairs", ColSpan: 3 }
      ]
    }
  ],
  exFoot: [
    {},  // Empty row
    { Height: 30, Cells: [{ Value: "Printed: 2024-01-01 John Doe" }] }
  ]
});
// Note: When using exHead/exFoot, titleText and userMerge are ignored.
```

**Using template files:**

```javascript
// Insert data into a pre-prepared Excel template
sheet.down2Excel({
  fileName: "sheet.xlsx",
  tempFile: "template.xlsx",  // Template file name prepared on the server
  startRow: 4,                // Data writing start row (from 0)
  startCol: 2,                // Data writing start column (from 0)
  sheetNo: 0                  // Worksheet number within the template
});
// TempRoot configuration is required in Down2Excel.jsp on the server side
```

### Client-based: exportData

Generates Excel files directly in the browser without a server module. Most options are the same as `down2Excel`.

```javascript
// xlsx download
sheet.exportData({
  fileName: "InventoryList.xlsx",
  downRows: "Visible",
  sheetDesign: 1,
  merge: 1
});

// txt download
sheet.exportData({
  fileName: "Data.txt",
  colDelim: ","
});

// csv download
sheet.exportData({
  fileName: "Data.csv",
  downSum: 0
});

// Page setup (xlsx only)
sheet.exportData({
  fileName: "Report.xlsx",
  excelPage: {
    orientation: "landscape",  // Landscape orientation ("portrait": portrait)
    paperSize: "A4",
    marginLeft: 1.8,
    marginRight: 1.8,
    marginTop: 1.9,
    marginBottom: 1.9,
    fitToWidth: 1,
    fitToHeight: 0
  }
});
```

---

## Excel Import

### Server-based: loadExcel

Displays a file dialog, parses the selected Excel file on the server, and loads it into the ibsheet8.

```javascript
// Basic usage (HeaderMatch mode)
sheet.loadExcel({
  mode: "HeaderMatch",
  startRow: 5,
  workSheetName: "DecemberSettlement"
});

// Read from a specific position using HeaderSkip mode
sheet.loadExcel({
  mode: "HeaderSkip",
  startRow: 4,
  startCol: 3
});

// Append to existing data
sheet.loadExcel({
  append: 1,
  mode: "HeaderMatch"
});

// Column mapping (map ibsheet8 1st column to Excel 5th column)
sheet.loadExcel({
  columnMapping: "5|4|3|2|1"
});

// FullLoad mode: load all worksheets into a dialog
sheet.loadExcel({
  mode: "FullLoad"
});
```

**mode option description:**

| mode | Description |
|------|------|
| `"HeaderMatch"` | Match by comparing ibsheet8 header titles with Excel headers (default) |
| `"NoHeader"` | Map sequentially from the first row without headers |
| `"HeaderSkip"` | Skip header row count and map sequentially |
| `"FullLoad"` | Load all worksheets into a dialog for selection |

**Key options:**

| Option | Description |
|------|------|
| `append` | Whether to append after existing data (default: 0) |
| `startRow` | Starting row number in Excel (from 1) |
| `startCol` | Starting column number in Excel (from 1) |
| `endRow` | Last row to read (from 0) |
| `workSheetName` | Specify worksheet name |
| `workSheetNo` | Specify worksheet number |
| `columnMapping` | Column mapping (`"5\|4\|3\|2\|1"`) |
| `maxFileSize` | Maximum file size (MB) |
| `fileExt` | Allowed extensions (default: `"xls\|xlsx"`) |
| `skipEmptyRow` | Skip empty rows (default: 1) |
| `workbookPassword` | Open password-protected files (xlsx only) |
| `activeSheet` | Upload the active worksheet |

### Client-based: importData

Parses Excel files directly in the browser without a server. Provides options similar to `loadExcel`.

```javascript
// Basic usage
sheet.importData({
  mode: "HeaderMatch",
  startRow: 3,
  workSheetName: "sheet"
});

// Change order with column mapping
sheet.importData({
  columnMapping: "3|4|5|2|1"
});

// Pass file object directly (file dialog not displayed)
sheet.importData({
  file: fileObject,  // File object or Blob object
  mode: "HeaderMatch"
});

// Import text/CSV files
sheet.importData({
  fileExt: "csv|txt",
  colSeparator: ",",
  encoding: "utf-8"
});
```

---

## Multi-sheet Excel Export

### Server-based: down2ExcelBuffer

Exports multiple IBSheets to a single Excel file as separate worksheets.

```javascript
// Start buffering
sheet1.down2ExcelBuffer(true);

// Buffer each ibsheet8 data
sheet1.down2Excel({ fileName: "TravelExpenses.xlsx", sheetName: "Transport" });
sheet2.down2Excel({ sheetName: "Meals" });
sheet3.down2Excel({ sheetName: "Accommodation" });

// End buffering and execute download
sheet1.down2ExcelBuffer(false);
```

You can also split worksheets by columns from a single ibsheet8:

```javascript
sheet.down2ExcelBuffer(true);
sheet.down2Excel({ sheetName: "Q1-Q2", downCols: "q1Cost|q1Profit|q2Cost|q2Profit" });
sheet.down2Excel({ sheetName: "Q3-Q4", downCols: "q3Cost|q3Profit|q4Cost|q4Profit" });
sheet.down2ExcelBuffer(false);
```

To append to the same worksheet, use the `appendPrevSheet: 1` option.

### Client-based: exportDataBuffer

Client version of `down2ExcelBuffer`, with the same usage.

---

## Text/CSV Export and Import

### Server-based: down2Text / loadText

```javascript
// txt download
sheet.down2Text({ fileName: "Data.txt" });

// csv download
sheet.down2Text({
  fileName: "Data.csv",
  colDelim: ",",
  downloadEncoding: "UTF-8(BOM)"  // Prevent Korean character corruption in Excel
});

// Key options
sheet.down2Text({
  fileName: "Data.csv",
  downCols: "name|dept|amount",
  downRows: "Visible",
  downHeader: 1,
  downSum: 0,
  rowDelim: "\r\n",        // Row delimiter (default: "\r\n")
  colDelim: ","             // Column delimiter (txt: tab, csv: comma)
});
```

```javascript
// Import text file
sheet.loadText({
  mode: "NoHeader",
  append: 1,
  colSeparator: "\t",
  encoding: "utf-8"
});
```

### Client-based

Use `exportData` and `importData` functions with the file extension set to `txt` or `csv`.

---

## PDF Export

Available only as server-based. Java: requires `ib-itext.jar`, .NET: requires `wkhtmltopdf.exe`.

```javascript
sheet.down2Pdf({
  fileName: "Report.pdf",
  title: "Transport Expense Details",
  titleStyle: "color:red; font-size:100px;",
  paper: "landscape",         // Paper orientation ("portrait": portrait, "landscape": landscape)
  fontTo: "Gulim",            // Korean font ("Gulim" or "Gothic")
  dpi: 2000,                  // Zoom ratio (smaller value = larger display, 50~32840)
  downCols: "Visible"         // Visible columns only
});
```

> **Note:** There are limitations when using ibsheet8 with the MultiRecord feature.

---

## Direct Bulk Data Processing

### directDown2Excel

Downloads Excel using data generated directly on the server instead of the data queried in the ibsheet8. This can reduce server load caused by large data volumes.

```javascript
sheet.directDown2Excel({
  url: "./apex/yearApexDataList.do",            // Data query server URL (required)
  extendParam: "year=2024&deptNo=0041",         // Parameters to send to the server
  fileName: "AnnualSettlementInfo.xlsx"
});
```

On the server, data in `List<Map>` structure is placed in the request under the name `SHEETDATA` and forwarded to `DirectDown2Excel.jsp`.

### directLoadExcel

Sends the Excel file directly to a desired servlet on the server for saving to DB, instead of loading it into the ibsheet8.

```javascript
sheet.directLoadExcel({
  startRow: 5,
  workSheetName: "sheet4",
  // The FP parameter must specify the servlet path to receive the final data.
  extendParam: "year=2024&deptNo=0041&FP=./save/empExcelData.do"
});
```

---

## Clipboard

```javascript
sheet.copy();       // Copy selected area
sheet.copyAll();    // Copy all
sheet.paste();      // Paste

// Settings
Cfg: {
  CanPaste: true,
  PasteMode: 1    // 0: overwrite, 1: add rows
}
```

---

## Related Events

| Event | Description |
|--------|------|
| `onBeforeExport` | Called before export execution |
| `onExportFinish` | Called after export completion |
| `onSelectFile` | Called on file selection (import) |
| `onImportFinish` | Called after import completion |

---

## Related Settings (Cfg)

| Property | Description |
|------|------|
| `Export.Url` | Server JSP/ASPX file path |
| `AutoExcelMode` | Auto Excel mode setting |
| `Down2ExcelConfig` | down2Excel default option settings |
| `LoadExcelConfig` | loadExcel default option settings |
