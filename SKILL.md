---
name: ibsheet8
description: IBSheet8 (version 8) grid library development support. Activated in projects that create ibsheet8 using IBSheet.create() with Cfg/Cols/Events option structure. Use this skill for: (1) IBSheet8 grid creation and initialization, (2) data binding and CRUD implementation, (3) column configuration and cell editor setup, (4) event handling, (5) server communication implementation, (6) advanced features like tree grid, pivot, and grouping, (7) React/Vue framework integration, (8) performance optimization. Use this skill when the project contains IBSheet.create, ibsheetloader, or ibsheet8 keywords. Trigger keywords: ibsheet8, IBSheet.create, ibsheetloader, IBSheet8, grid, sheet
---

# IBSheet Development Guide

- IBSheet8 is a web grid component that can quickly display and edit large volumes of data.
- IBSheet8 is a different product from IBSheet7, and their usage differs.
- When converting IBSheet7 source code to IBSheet8, refer to .\references\integration\IBSheet7_to_IBSheet8_guide.md for guidance.

## Quick Start

```html
<!DOCTYPE html>
<html>
<head>
  <script src="ibsheet/ibsheet.js"></script>
  <script src="ibsheet/locale/ko.js"></script>
  <link rel="stylesheet" href="ibsheet/css/default/ibsheet.css">
</head>
<body>
  <div id="sheetContainer" style="width:100%; height:500px;"></div>
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      IBSheet.create({
        id: "sheet", // window["sheet"] is created
        el: "sheetContainer",
        options: {
          Cfg: { SearchMode: 2 },
          Cols: [
            { Header: "ID", Name: "id", Type: "Int", Width: 80 },
            { Header: "Name", Name: "name", Type: "Text", Width: 120 },
            { Header: "Amount", Name: "amount", Type: "Int", Width: 100, Format: "#,##0" }
          ],
          Events: {
            onRenderFirstFinish: function(evt) {
              // ibsheet8 creation complete
            }
          }
        },
        data: []
      });
    });
  </script>
</body>
</html>
```

## Core API

```javascript
// Load data
mySheet.loadSearchData({ data: jsonArray });

// Add/Delete rows
mySheet.addRow({ init: { name: "New" } });
var row = mySheet.getRowByIndex(10);
mySheet.deleteRow(row);

// Cell value manipulation
mySheet.setValue(row, "name", "value");
const value = mySheet.getValue(row, "name");

// Data extraction
const allData = mySheet.getSaveJson();
const changedData = mySheet.getSaveJson({ check: 1 });  // Changed data only

// Reset status after save
mySheet.acceptChanges();
```

## Main Column Types

| Type | Description | Example |
|------|-------------|---------|
| Text | String | `{ Type: "Text", Size: 50 }` |
| Lines | Multi-line string | `{ Type: "Lines", Size: 3500 }` |
| Int | Integer | `{ Type: "Int", Format: "#,##0" }` |
| Float | Decimal | `{ Type: "Float", Format: "#,##0.00" }` |
| Date | Date | `{ Type: "Date", Format: "yyyy-MM-dd" }` |
| Enum | Dropdown | `{ Type: "Enum", EnumKeys: "A|B", Enum: "Active|Inactive" }` |
| Bool | Checkbox | `{ Type: "Bool", TrueValue: "Y", FalseValue: "N" }` |
| Button | Button | `{ Type: "Button", ButtonText: "Click" }` |

[Details](references/core/column-type-property.md)

> **Summary Row**: Simply add the `FormulaRow: "Sum"` property to a numeric column, and a summary row is automatically created in the Foot area. There is no need to manually create a Foot array. ([Details](references/features/summary.md))

## Main Events

```javascript
Events: {
  onRenderFirstFinish: function(evt) { },  // Initialization complete
  onSearchFinish: function(evt) { },       // Data load complete
  onAfterClick: function(evt) { },          // Cell click
  onBeforeChange: function(evt) { },        // Before value change (return false to cancel)
  onAfterChange: function(evt) { },         // After value change
}
```

> **Caution: Event Naming Convention**
> IBSheet8 events use `Start↔Finish` and `Before↔After` patterns. **The `Start↔End` pattern is NOT used.**
> - `onSearchStart` ↔ `onSearchFinish` (O) — `onSearchEnd` does not exist (X)

[Details](references/core/events.md)

## Reference Guide

### Core References
| Topic | File | Description |
|-------|------|-------------|
| IBSheet8 Creation | [references/core/initialize-basic.md](references/core/initialize-basic.md) | Basic ibsheet8 creation method |
| Cfg Properties | [references/core/initialize-cfg-properties.md](references/core/initialize-cfg-properties.md) | IBSheet8 global configuration properties |
| Col Properties | [references/core/initialize-column-properties.md](references/core/initialize-column-properties.md) | Column initialization properties |
| Column Types | [references/core/column-type-property.md](references/core/column-type-property.md) | All column types and properties |
| Column Formats | [references/core/column-format-property.md](references/core/column-format-property.md) | Cell display format definitions |
| Events | [references/core/events.md](references/core/events.md) | Full event list and usage |
| pagnation, Count Indicator| [references/core/pagnation-rowCountIndicator.md](references/core/pagnation-rowCountIndicator.md) | pagnation, row count indicator properties |
| API Methods | [references/core/api-methods.md](references/core/api-methods.md) | IBSheet8 manipulation methods |

### Feature Guides
| Topic | File | Description |
|-------|------|-------------|
| Grouping | [references/features/grouping.md](references/features/grouping.md) | Row grouping |
| Summary/Subtotal | [references/features/summary.md](references/features/summary.md) | FormulaRow, SubTotal |
| Pivot | [references/features/pivot.md](references/features/pivot.md) | Pivot table |
| Formula | [references/features/formula.md](references/features/formula.md) | Auto-calculation between columns |
| Attribute Formula | [references/features/attribute-formula.md](references/features/attribute-formula.md) | Dynamic property setting |
| Tree Grid | [references/features/tree-grid.md](references/features/tree-grid.md) | Hierarchical data |
| Freeze/Merge | [references/features/frozen-merge.md](references/features/frozen-merge.md) | Row/column freeze, cell merge |
| Export/Import | [references/features/export-import.md](references/features/export-import.md) | Excel, PDF conversion |
| Validation | [references/features/validation.md](references/features/validation.md) | Input value validation |

### Framework Integration
| Topic | File | Description |
|-------|------|-------------|
| React | [references/integration/react.md](references/integration/react.md) | React componentization |
| Vue | [references/integration/vue.md](references/integration/vue.md) | Vue componentization |

### Troubleshooting
| Topic | File | Description |
|-------|------|-------------|
| Common Errors | [references/troubleshooting/common-errors.md](references/troubleshooting/common-errors.md) | Error causes and solutions |

## Templates

### Basic
- [assets/templates/basic/simple-grid.html](assets/templates/basic/simple-grid.html) - Minimal configuration grid
- [assets/templates/basic/readonly-grid.html](assets/templates/basic/readonly-grid.html) - Read-only grid

### CRUD
- [assets/templates/crud/standard-crud.html](assets/templates/crud/standard-crud.html) - Standard CRUD grid
- [assets/templates/crud/batch-crud.html](assets/templates/crud/batch-crud.html) - Batch save method

### Advanced
- [assets/templates/advanced/master-detail.html](assets/templates/advanced/master-detail.html) - Master-detail
- [assets/templates/advanced/tree-grid.html](assets/templates/advanced/tree-grid.html) - Tree grid
- [assets/templates/advanced/pivot-table.html](assets/templates/advanced/pivot-table.html) - Pivot table

### Framework
- [assets/templates/framework/react-component.jsx](assets/templates/framework/react-component.jsx) - React component
- [assets/templates/framework/vue-component.vue](assets/templates/framework/vue-component.vue) - Vue component

## Important Notes

1. **Initialization Timing**: Call `IBSheet.create()` after `DOMContentLoaded` or after the container is rendered
2. **Multiple IBSheet8 Instances**: Each ibsheet8 must have a unique ID (a global object is created based on the assigned ID)
3. **Col Name**: All column Names within a single ibsheet8 must be unique
3. **Event Context**: `this` inside event handlers refers to the ibsheet8 object
4. **Row Object**: Every row is a row object, not an index (number)
5. **STATUS**: Uses Added, Changed, Deleted instead of I, U, D
