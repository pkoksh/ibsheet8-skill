# Frozen Columns/Rows and Cell Merge

## Frozen Columns

The ibsheet8 is divided vertically into `Left(Section:0)`, `Center(Section:1)`, and `Right(Section:2)` areas.
During initialization, columns are placed in each area using the `LeftCols`, `Cols`, and `RightCols` arrays. At runtime, dynamic changes are possible with the `setFixedLeft`, `setFixedRight`, and `setFixedCols` methods.

> **Note:** The `SEQ` column is always auto-created in Hidden state even if not specified in `LeftCols`. The `left` argument of `setFixedLeft` and `setFixedCols` must always include the `SEQ` column in the calculation.

> Hidden columns are also included in the frozen column count.

### Area Configuration at Initialization

```javascript
var options = {
  Cfg: {
    LeftCanResize: 1,   // Allow left area resize
    LeftWidth: 200,      // Left area width
    RightCanResize: 1,  // Allow right area resize
    RightWidth: 150      // Right area width
  },
  LeftCols: [  // Left frozen columns
    { Header: "NO", Type: "Int", Name: "SEQ", Width: 50 },
    { Header: "Select", Type: "Bool", Name: "chk", Width: 50 }
  ],
  Cols: [  // Center scroll area
    { Header: "Name", Name: "name", Type: "Text", Width: 120 },
    { Header: "Revenue", Name: "revenue", Type: "Int", Width: 120, Format: "#,### Won" }
  ],
  RightCols: [  // Right frozen columns
    { Header: "Total", Name: "total", Type: "Int", Width: 120, Format: "#,### Won" }
  ]
};
```

### Dynamic Frozen Column Change

```javascript
// Fix 4 columns on the left (including SEQ), reapply merge
sheet.setFixedLeft(4, 1);

// Fix 2 columns on the right
sheet.setFixedRight(2);

// Set 4 left and 1 right simultaneously
sheet.setFixedCols(4, 1);

// Release left frozen columns (all columns move to Center area)
sheet.setFixedLeft(0);

// Release right frozen columns
sheet.setFixedRight(0);
```

### setFixedLeft / setFixedRight Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| count | `number` | Optional | Number of columns to freeze (setting `0` moves all columns of that area to Center) |
| reMerge | `boolean` | Optional | Whether to reapply existing merge after column move (`0`: not applied (default), `1`: reapply) |
| sync | `boolean` | Optional | Synchronous rendering (`0`: asynchronous (default), `1`: synchronous) |

### setFixedCols Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| left | `number` | Optional | Number of left area columns (calculated including SEQ column) |
| right | `number` | Optional | Number of right area columns |
| reMerge | `boolean` | Optional | Whether to reapply existing merge after column move (`0`: not applied (default), `1`: reapply) |
| sync | `boolean` | Optional | Synchronous rendering (`0`: asynchronous (default), `1`: synchronous) |

## Frozen Rows

The ibsheet8 is divided horizontally into `Header`, `Body`, and `Footer` areas.
Custom rows (Head/Foot) can be placed in the header/footer areas, and data rows in the body area can be fixed at the top/bottom using `setFixedTop` and `setFixedBottom`.

### Fixed via Custom Rows (Head / Foot)

During initialization, custom rows that are always displayed regardless of scrolling can be created using the `Head` and `Foot` properties.

```javascript
var options = {
  Head: [  // Custom rows fixed at bottom of header area
    {
      id: "myHeadRow1",
      Spanned: 1,
      deptName: {
        Type: "Text", Value: "Include Outstanding Receivables",
        Span: 2, Color: "#EDEDED", Align: "Center", TextStyle: 1
      },
      qt1: { Type: "Bool" },
      qt2: { Type: "Bool" }
    }
  ],
  Foot: [  // Custom rows fixed in footer area
    {
      id: "myFootRow1",
      Spanned: 1,
      Color: "#666666",
      TextColor: "#FFFFFF",
      deptName: { Value: "2025 Data", TextColor: "#FFBBBB", Span: 5 },
      qt4: { Type: "Int", Format: "#,###", Value: 1248423 }
    }
  ]
};
```

#### Dynamic Creation with showFixedRows

Even after initialization, Head/Foot rows can be dynamically added using the `showFixedRows` method. The `Kind` property of the object specifies Head or Foot.

```javascript
// Dynamically create 1 Foot row
sheet.showFixedRows([{
  Kind: "Foot",
  id: "myFootRow",
  chk: { Type: "Text", Value: "", CanEdit: 0, CanFocus: 0 }
}]);

// Create 1 Head row + 1 Foot row simultaneously
sheet.showFixedRows([
  { Kind: "Head", id: "headRow1", name: { Value: "Top fixed row" } },
  { Kind: "Foot", id: "footRow1", name: { Value: "Bottom fixed row" } }
]);
```

### Fix Data Rows at Top/Bottom (setFixedTop / setFixedBottom)

Data rows in the body area can be fixed at the top or bottom so they do not scroll.

> **Limitation:** `setFixedTop` cannot be used with `SearchMode: 0, 3`. `setFixedBottom` can only be used with `SearchMode: 1, 2`.

> **Limitation:** Cannot be used together with `DataMerge`, and there must be at least 4 data rows.

```javascript
// Fix 4 data rows at the top
sheet.setFixedTop(4, 1);

// Fix 2 data rows at the bottom (from the last row)
sheet.setFixedBottom(2, 1);

// Release top fixed rows
sheet.setFixedTop(0, 1);

// Release bottom fixed rows
sheet.setFixedBottom(0, 1);
```

### setFixedTop / setFixedBottom Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| count | `number` | Optional | Number of data rows to fix |
| render | `boolean` | Optional | Whether to apply to screen immediately (`0`: not applied -> `rerender()` required later, `1`: apply immediately (default)) |

---

## Cell Merge

### Auto Merge (DataMerge / HeaderMerge)

The `DataMerge` (data area) and `HeaderMerge` (header area) properties in `Cfg` automatically merge cells with the same values.
After ibsheet8 creation, dynamic changes are possible with the `setAutoMerge` method.

> Takes priority over `Span` and `RowSpan` cell properties.

#### DataMerge / HeaderMerge Options

| Value | Description |
|-------|-------------|
| `0` | No merge (`default`) |
| `1` | Column-based merge -- merges rows vertically when the same column has equal values |
| `2` | Row-based merge -- merges columns horizontally when the same row has equal values |
| `3` | Column-first merge -- applies column-based merge first, then row-based merge on unmerged cells |
| `4` | Row-first merge -- applies row-based merge first, then column-based merge on unmerged cells |
| `5` | Column-first omnidirectional merge -- column-based merge that also merges adjacent columns with equal values |
| `6` | Row-first omnidirectional merge -- row-based merge that also merges adjacent rows with equal values |

```javascript
var options = {
  Cfg: {
    DataMerge: 1,        // Data area: column-based merge
    HeaderMerge: 0,      // Header area: no merge
    PrevColumnMerge: 1   // Merge based on the left column's merge range (see below)
  }
};
```

#### PrevColumnMerge (Previous Column-based Merge)

During row merge (vertical merge), determines whether to merge based on the left column's merge range. Requires `DataMerge` or `HeaderMerge` to be set.

| Value | Description |
|-------|-------------|
| `0` | Previous column-based merge disabled (`default`) |
| `1` | Applied to data area only |
| `2` | Applied to header area only |
| `3` | Applied to both data and header areas |

#### Exclude Specific Columns from Merge (ColMerge)

Excludes specific columns from vertical auto merge. When set to `0`, the column is also excluded from `PrevColumnMerge` lookup.

```javascript
Cols: [
  // ColMerge: 0 -> This column will not be merged vertically
  { Type: "Text", Name: "Dept", ColMerge: 0, Width: 100 },
  { Type: "Text", Name: "Team", Width: 100 }
]
```

#### Exclude Specific Rows from Merge (RowMerge)

Excludes specific rows from auto merge.

```javascript
// Exclude a specific data row from merge
var row = sheet.getFirstVisibleRow();
sheet.setAttribute( row, null, "RowMerge", 0);
sheet.setAutoMerge({ dataMerge: 1, headerMerge: 0, prevColumnMerge: 0 });

// Exclude the first header row from merge
var header = sheet.getHeaderRows()[0];
sheet.setAttribute( header, null, "RowMerge", 0);
```

#### Dynamic Change with setAutoMerge

```javascript
// After ibsheet8 creation, apply column-based merge + previous column-based merge on data area
sheet.setAutoMerge({ dataMerge: 1, headerMerge: 0, prevColumnMerge: 1 });
```

> **Note:** When using subtotals (`makeSubTotal`), `DataMerge` and `PrevColumnMerge` settings are ignored and both operate as `1`.

### Manual Merge (setMergeRange / setMergeCancel)

Merges a specific area into a single cell or cancels the merge by directly specifying the range.

> **Limitation:** In `SearchMode: 0`, merge state is not maintained during scrolling, so it is not properly supported.

```javascript
// Merge rows AR2~AR4, columns deptCd~empNm into a single cell
sheet.setMergeRange(
  sheet.getRowById("AR2"), "deptCd",
  sheet.getRowById("AR4"), "empNm"
);

// Unmerge the merged cell (specify the starting cell of the merge)
sheet.setMergeCancel(sheet.getRowById("AR2"), "deptCd");
```

#### setMergeRange Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| row1 | `object` | Required | Merge start row object |
| col1 | `string` | Required | Merge start column name |
| row2 | `object` | Required | Merge end row object (positioned below `row1`) |
| col2 | `string` | Required | Merge end column name (positioned to the right of `col1`) |

#### setMergeCancel Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| row | `object` | Required | Merged row object |
| col | `string` | Required | Merged column name |
