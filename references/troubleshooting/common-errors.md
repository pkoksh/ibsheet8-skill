# Common Errors

## Initialization Errors

### "Container element not found"
**Cause**: Attempted to create ibsheet8 before the DOM is ready
✗ Calling `IBSheet.create()` immediately after script load
✓ Call within `DOMContentLoaded`, React `useEffect`, or Vue `onMounted`
→ Details: [initialize-basic.md](../core/initialize-basic.md)

### "Sheet ID already exists"
**Cause**: Duplicate creation with the same ID
✗ Calling `IBSheet.create({ id: "sheet" })` multiple times
✓ Recreate after `window["sheet"]?.dispose()`
→ Details: [initialize-basic.md](../core/initialize-basic.md)

### Method call failure after asynchronous ibsheet8 creation
**Cause**: `IBSheet.create()` is asynchronous by default (`sync: 0`), so the ibsheet8 may not be ready when calling methods immediately after creation
✗ `IBSheet.create({...}); window["sheet"].loadSearchData({...});`
✓ Method 1: Synchronous creation with `sync: 1` option
✓ Method 2: Call within the `onRenderFirstFinish` event (recommended)
→ Details: [initialize-basic.md](../core/initialize-basic.md)

---

## Data Errors

### "Cannot read property of undefined"
**Cause**: Passing a row index (number) directly — a row object is required
✗ `sheet.getValue(0, "name")`
✓ `sheet.getValue(sheet.getRowByIndex(1), "name")` — index starts from 1
→ Details: [api-methods.md](../core/api-methods.md)

### Data is not displayed
**Cause**: Mismatch between column `Name` and data key
✗ Data `{ "userName": "Hong Gildong" }` + Column `Name: "name"`
✓ Make data key and column `Name` identical: `Name: "userName"`

### Empty values displayed as 0 in Int/Float columns
**Cause**: Int and Float types display empty values as 0 by default
✓ Set `EmptyValue: 1` to keep empty cells
→ Details: [column-type-property.md](../core/column-type-property.md)

### No changed data found when saving
**Cause**: `getSaveJson()` / `doSave()` extracts only changed rows by default (`saveMode: 2`)
✓ Use `sheet.getSaveJson({ saveMode: 0 })` when all data is needed
→ Details: [api-methods.md](../core/api-methods.md)

---

## Event Errors

### Failed to access ibsheet8 in event handler
**Cause**: When using arrow functions, `this` is not the ibsheet8 object
✗ `onClick: (evt) => { this.getValue(...) }`
✓ Use `evt.sheet.getValue(...)` (recommended, always safe)
✓ Or use a regular function `function(evt) { this.getValue(...) }`
→ Details: [events.md](../core/events.md)

### Caution when calling setValue in onAfterChange
**Cause**: `onAfterChange` fires only on user input; it does not re-fire by default when `setValue()` is called
✓ Use the `ignoreEvent` parameter to explicitly control event firing
`sheet.setValue(row, col, val, render, ignoreEvent)`
→ Details: [events.md](../core/events.md)

### onBeforeChange return value handling
✓ Revert to previous value: `return evt.oldval`
✓ Apply value transformation: `return evt.val.toUpperCase()`
✓ Normal processing: no return value

### Cancel input in onEndEdit
✓ `return true` → Cancel change (restore to previous value)

---

## Memory Leaks

### ibsheet8 instances keep accumulating in SPA
**Cause**: `dispose()` not called when component unmounts
✗ Calling `IBSheet.create()` without a cleanup function
✓ React: Call `window["sheet"]?.dispose()` in `useEffect` return
✓ Vue: Call `window["sheet"]?.dispose()` in `onUnmounted`
→ Details: [react.md](../integration/react.md), [vue.md](../integration/vue.md)

---

## Style Errors

### ibsheet8 displays too small
**Cause**: Container size not specified
✗ `<div id="container"></div>` (no size)
✓ `<div id="container" style="width:100%; height:500px;"></div>`

### ibsheet8 size does not match when container size changes
✓ `window.addEventListener("resize", () => sheet.fitSize())`

---

## Server Communication Errors

### CORS Error
**Cause**: CORS not configured on the server
✓ Add `Access-Control-Allow-Origin`, `Allow-Methods`, `Allow-Headers` headers on the server

### State not reset after saving
**Cause**: `acceptChangedData()` not called
✗ `sheet.acceptChanges()` (non-existent method)
✓ When using doSave: Check `evt.result >= 0` (success) in `onAfterSave`, then call `evt.sheet.acceptChangedData()`
✓ When using external libraries like fetch: Call `sheet.acceptChangedData()` directly after a successful response
→ Details: [api-methods.md](../core/api-methods.md)

---

## Enum (Combo) Errors

### Enum list is not displayed
**Cause**: EnumKeys/Enum format error — the first character serves as a delimiter
✗ `EnumKeys: ["A", "B", "C"]` (using array)
✓ `EnumKeys: "|A|B|C"`, `Enum: "|Active|Inactive|Pending"` (string where the first character is the delimiter)
→ Details: [column-type-property.md](../core/column-type-property.md)

### Enum value saved as text instead of code
**Cause**: When `EnumKeys` is not set, the Enum text is saved as the value directly
✓ Set both `EnumKeys` (code) and `Enum` (display text)

---

## Bool (Checkbox) Errors

### Check state is not saved
**Cause**: Mismatch between default values 1/0 and server expected values (Y/N, etc.)
✗ `Type: "CheckBox"`, `OnValue/OffValue` (IBSheet7 syntax)
✓ `Type: "Bool"`, `TrueValue: "Y"`, `FalseValue: "N"`
→ Details: [column-type-property.md](../core/column-type-property.md)

---

## Formula Errors

### Formula does not work
**Cause**: `CanFormula` not set or `CalcOrder` missing
✓ `CanFormula: 1` and `CalcOrder: "columnName"` must be set in `Def.Row`
→ Details: [formula.md](../features/formula.md)

### Calculation error due to spaces in CalcOrder
✗ `CalcOrder: "yearSum, total, tax"` (contains spaces)
✓ `CalcOrder: "yearSum,total,tax"` (commas only, no spaces)

### AttributeFormula does not work
**Cause**: Not registered in CalcOrder in the `columnName+attributeName` format
✓ `CalcOrder: "total,qtyColor,rateCanEdit"` — include both regular Formula and AttributeFormula
→ Details: [attribute-formula.md](../features/attribute-formula.md)

### Formula error in CSP environment
**Cause**: String-format Formula internally uses `eval()`
✗ `Formula: "qty * price"` (string)
✓ `Formula: function(fr) { return fr.Row["qty"] * fr.Row["price"]; }` (function)

---

## Tree Grid Errors

### Tree structure is not displayed
**Cause**: `Cfg.MainCol` not set
✓ `Cfg: { MainCol: "columnName" }` must be specified
→ Details: [tree-grid.md](../features/tree-grid.md)

### No expand icon for child nodes during dynamic loading
**Cause**: `HaveChild` property not set
✓ Include `HaveChild: true` in row data that may have children

---

## Group/SubTotal Errors

### Grouping fails when Group property contains spaces
✗ `Group: "deptName, teamName"` (contains spaces)
✓ `Group: "deptName,teamName"` (commas only, no spaces)
→ Details: [grouping.md](../features/grouping.md)

### Error when calling makeSubTotal at initialization time
**Cause**: Must be called after data is loaded
✗ Calling `sheet.makeSubTotal([...])` immediately after ibsheet8 creation
✓ Call `evt.sheet.makeSubTotal([...])` within the `onDataLoad` event
→ Details: [summary.md](../features/summary.md)

---

## Frozen/Merge Errors

### Column count does not match when calling setFixedLeft
**Cause**: Hidden SEQ column is included in the count
✗ Specifying by visible column count → unintended result
✓ Count including the SEQ column (e.g., `setFixedLeft(3)` to fix 2 columns)
→ Details: [frozen-merge.md](../features/frozen-merge.md)

### DataMerge and setFixedTop/setFixedBottom cannot be used simultaneously
**Cause**: The two features are not compatible
✓ Choose only one: `DataMerge` or `setFixedTop/setFixedBottom`

---

## Filter Errors

### Filter does not work when calling doFilter
**Cause**: Filter row is not activated
✓ `Cfg: { ShowFilter: true }` or `sheet.showFilterRow()` must be called first
→ Details: [api-methods.md](../core/api-methods.md)

### doFilter delimiter format error
**Cause**: The first character of `cols`, `vals`, `operators` serves as a delimiter
✗ `cols: "dept|name"` (does not start with delimiter)
✓ `cols: "|dept|name"`, `vals: "|Sales|Hong Gildong"`, `operators: "|1|11"`

---

## Export/Import Errors

### Column mapping does not match during Excel Import
**Cause**: Import mode not specified or incorrectly set
✓ `sheet.loadExcel({ mode: "HeaderMatch" })` — mapping based on header names (default, recommended)
Others: `"HeaderSkip"`, `"NoHeader"`, `"FullLoad"`
→ Details: [export-import.md](../features/export-import.md)

### Korean characters are garbled during CSV Export
**Cause**: Encoding not set
✓ `sheet.down2Text({ fileName: "data.csv", downloadEncoding: "UTF-8(BOM)" })`

---

## Validation Errors

### Validation does not work during save despite ValidCheck being set
**Cause**: `Cfg.ValidCheck: true` alone is not sufficient — individual columns need `Required`, `ResultMask`, etc.
✓ Configure both Cfg and individual columns
→ Details: [validation.md](../features/validation.md)

### Difference between EditMask and ResultMask
- `EditMask`: Restricts during input (allowed pattern while typing)
- `ResultMask`: Validates on input completion (final value pattern)
→ Details: [validation.md](../features/validation.md)
