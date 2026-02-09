# Grouping

## Overview

IBSheet8's grouping is a feature that groups data rows based on specific column values and displays them in tree format.
Setting `Kind: "Group"` on a Solid Row allows users to dynamically configure grouping by dragging and dropping header cells.

---

## Cfg Properties

### Group

Sets the `Name` of columns to group by when the ibsheet8 loads, separated by `,`.

> Column names must be written **without spaces** between them.

```javascript
Cfg: {
  Group: "sName,sIndutyCodeName"  // Group by sName -> sIndutyCodeName order
}
```

- When `Solid Row Kind: "Group"` is also set, header text is displayed on the group row and users can change group columns via drag and drop.
- When `Solid Row Kind: "Group"` is not set, initial grouping is applied but users cannot change it.

### GroupMain

Specifies the column to display the group tree. If not set, the reference column is automatically assigned.

```javascript
Cfg: {
  GroupMain: "sName"  // Display group tree in the sName column
}
```

### GroupFormat

Sets the text format displayed on group rows.

| Placeholder | Description |
|--------|------|
| `{%s}` | Group reference value |
| `{%c}` | Number of data rows in the group |
| `{%vc}` | Number of data rows excluding hidden rows (v8.1.0.27+) |

```javascript
Cfg: {
  GroupFormat: "<span style='color:black'>{%s}</span> <span style='color:red'>({%c} items)</span>"
}
```

> HTML tags can be used to apply styles.

### GroupSort

Sets whether to sort the reference column when grouping. (v8.3.0.35+)

| Value | Description |
|----|------|
| `0` | Group without sorting, using current state |
| `1` | Sort then group (`default`) |

```javascript
Cfg: {
  GroupSort: 0  // Group using current state without sorting
}
```

---

## Cols Properties

### CanGroup

Sets whether a column can be grouped. Specific columns can be excluded when users dynamically group by dragging headers.

| Value | Description |
|----|------|
| `0 (false)` | Grouping not allowed |
| `1 (true)` | Grouping allowed (`default`) |

```javascript
{ Header: "Store Name", Name: "sName", CanGroup: 0 }  // This column cannot be drag-grouped
```

### GroupWidth

Adjusts the width of the column where the group tree is located (the column specified by `GroupMain`) during grouping.
Setting the value to `1` auto-adjusts based on the data amount.

```javascript
{ Header: "Store Name", Name: "sName", GroupWidth: 1 }  // Auto width adjustment
{ Header: "Store Name", Name: "sName", GroupWidth: 210 }  // Fixed at 210px
```

### GroupDef

Specifies the `Def` setting ID to apply to the group row when grouped. Define custom features in the `Def` area and reference the ID.

> When defining custom settings in `Def`, `Def: "Group"` must be included for proper operation.

```javascript
Def: {
  // Custom group row definition
  "myGroupRow": { Def: "Group", Color: "#FFADAD", CanEdit: 0, CanFocus: 0 }
}

Cols: [
  { Header: "Category Code Name", Name: "sIndutyCodeName", GroupDef: "myGroupRow", Color: "#EFFFEF" }
]
```

### GroupSubTotal

Sets options to apply to subtotal rows when using the group subtotal feature. Requires the `Cfg.UseGroupSubTotal` setting.

| Property | Type | Required | Description |
|------|------|------|------|
| Type | string | Required | `"Sum"`, `"Avg"`, `"Count"`, `"Max"`, `"Min"` |
| Color | string | Optional | Subtotal row background color (default: `"#FFFFEF"`) |
| Format | string | Optional | Subtotal value format (default: column's Format value) |

```javascript
Cfg: {
  Group: "sName",
  UseGroupSubTotal: 1  // 1: Add new subtotal row, 2: Display subtotal on group row
}

Cols: [
  { Header: "Product Price", Name: "sPrice", Type: "Int", GroupSubTotal: { Type: "Sum", Color: "#FFDDAA", Format: "#,###" } }
]
```

---

## Def.Group (Group Row Default Settings)

`Def.Group` defines default settings applied to all group rows. Properties such as Formula can be specified for individual cells.

```javascript
Def: {
  Row: {
    CanFormula: 1  // Enable formula usage
  },
  Group: {
    Expanded: 1,               // Group default expanded state (1: expanded, 0: collapsed)
    Color: "#e7f1ff",          // Group row background color
    sPrice: {
      Formula: sPriceFormula   // Formula for sPrice column on group row (e.g., sum)
    }
  }
}
```

---

## Solid Row - Group Row (Kind: "Group")

Setting `Kind: "Group"` in the `Solid` array creates a group manipulation area at the top of the ibsheet8. Users can add/change grouping by dragging header cells to this area.

### Basic Group Row

```javascript
Solid: [{
  Kind: "Group",
  Space: -1,   // Positioned above the ibsheet8
  id: "Group"
}]
```

### Custom Group Row (Adding Buttons)

Custom cells can be configured using the `Cells` property.

```javascript
Solid: [{
  Kind: "Group",
  Space: -1,
  id: "Group",
  Cells: "Custom,btnMinus,btnPlus",
  btnMinus: {
    Type: "Button",
    Button: "Button",
    AddClass: "GroupRowBtn",
    ButtonText: "<i class='fa fa-folder' style='color:#BBB'></i>",
    OnClick: minusClick,  // Custom action such as collapse all
    Width: 25
  },
  btnPlus: {
    Type: "Button",
    Button: "Button",
    AddClass: "GroupRowBtn",
    ButtonText: "<i class='fa fa-folder-open' style='color:#BBB'></i>",
    OnClick: plusClick,   // Custom action such as expand all
    Width: 25
  }
}]
```

### Space Position Values

| Space | Position |
|-------|------|
| `-1` | Above the ibsheet8 |
| `0` | Inside the ibsheet8, above the header |
| `1` | Inside the ibsheet8, below the header |

---

## Grouping API Methods

### doGroup

Executes grouping by specified columns.

```javascript
// Single column grouping
sheet.doGroup("sName");

// Multi-column grouping (comma-separated, no spaces)
sheet.doGroup("sName,sIndutyCodeName");
```

### showGroupRow

Dynamically creates the group row. (v8.3.0.9+)

```javascript
// Create group row only
sheet.showGroupRow();

// Create group row + execute grouping
sheet.showGroupRow("sName");

// Multi-column grouping
sheet.showGroupRow(["sName", "sPrice"]);

// With format specification
sheet.showGroupRow("sName", '{%s} <font color="gray">({%c} items)</font>');
```

### hideGroupRow

Removes or hides the group row. (v8.3.0.9+)

```javascript
sheet.hideGroupRow();   // Remove group row (default)
sheet.hideGroupRow(0);  // Hide group row (not removed)
```

### getGroupRows

Returns the group rows created by grouping.

```javascript
var groupRows = sheet.getGroupRows();
// Return value: { groupColumnName1: [groupRows], groupColumnName2: [groupRows], ... }
```

---

## Grouping Events

### onBeforeGroup

Called before group execution/release. Returning `true` cancels the grouping.

| Parameter | Type | Description |
|----------|------|------|
| sheet | object | ibsheet8 object |
| group | string | Group reference column names |

```javascript
Events: {
  onBeforeGroup: function(e) {
    // Restrict grouping by a specific column
    if (e.group.indexOf("sAddr") > -1) {
      alert("Cannot group by the address column.");
      return true;  // Cancel grouping
    }
    // Limit number of group columns
    if (e.group.split(",").length > 3) {
      alert("Cannot group by more than 3 columns.");
      return true;
    }
  }
}
```

### onAfterGroup

Called after group execution/release (before rendering).

| Parameter | Type | Description |
|----------|------|------|
| sheet | object | ibsheet8 object |

```javascript
Events: {
  onAfterGroup: function(e) {
    console.log("Grouping has been set/released.");
  }
}
```

---

## Comprehensive Example

```javascript
var sPriceFormula = function(f) {
  // Formula for calculating sPrice sum on group row
  var sum = 0;
  // ... sum logic
  return sum;
};

var options = {
  Cfg: {
    SearchMode: 0,
    GroupMain: "sName",           // Display group tree in sName column
    CanSort: 0,
    GroupFormat: "<span style='color:black'>{%s}</span> <span style='color:red'>({%c} items)</span>",
    FitWidth: 1
  },
  Def: {
    Row: { CanFormula: 1 },
    Col: { Align: "Center" },
    Group: {
      Expanded: 1,                // Group default expanded
      sPrice: { Formula: sPriceFormula },  // Group row sPrice formula
      Color: "#e7f1ff"            // Group row background color
    }
  },
  LeftCols: [
    { Header: "No", Name: "SEQ", MinWidth: 50 }
  ],
  Cols: [
    { Header: "Store Name", Name: "sName", Type: "Text", MinWidth: 140, Align: "Left",
      CanGroup: 0, GroupWidth: 1, Width: 140 },
    { Header: "Store ID", Name: "sShId", Type: "Text", MinWidth: 140, Width: 140, Align: "Left" },
    { Header: { Value: "Category Code Name" }, Name: "sIndutyCodeName", Type: "Text", MinWidth: 140, Width: 140,
      GroupDef: "myGroupRow", Color: "#EFFFEF" },
    { Header: "Category Code", Name: "sIndutyCode", Type: "Text", MinWidth: 140, Align: "Left", Width: 140 },
    { Header: { Value: "Product Name" }, Name: "sProdName", Type: "Text", MinWidth: 140, Align: "Left",
      Width: 140, Color: "#EFFFEF" },
    { Header: "Store Address", Name: "sAddr", Type: "Text", MinWidth: 220, Align: "Left", Width: 220 },
    { Header: "Store Phone", Name: "sPhone", Type: "Text", MinWidth: 120, Align: "Left", Width: 120 },
    { Header: "Recommendations", Name: "sRcmn", Type: "Int", Format: "#,###", MinWidth: 140, Width: 140 },
    { Header: "Product Price", Name: "sPrice", Type: "Int", Format: "#,###", MinWidth: 100, Align: "Right", Width: 100 }
  ],
  Solid: [{
    Kind: "Group",
    Space: -1,                    // Place group row above the ibsheet8
    id: "Group",
    Cells: "Custom,btnMinus,btnPlus",
    btnMinus: {
      Type: "Button", Button: "Button", AddClass: "GroupRowBtn",
      ButtonText: "<i class='fa fa-folder' style='color:#BBB'></i>",
      OnClick: minusClick,        // Collapse all
      Width: 25
    },
    btnPlus: {
      Type: "Button", Button: "Button", AddClass: "GroupRowBtn",
      ButtonText: "<i class='fa fa-folder-open' style='color:#BBB'></i>",
      OnClick: plusClick,          // Expand all
      Width: 25
    }
  }]
};
```

### Example Properties Summary

| Property | Location | Description |
|------|------|------|
| `GroupMain: "sName"` | Cfg | Display group tree in sName column |
| `GroupFormat: "..."` | Cfg | Group row text format (supports HTML) |
| `CanGroup: 0` | Col(sName) | sName column excluded from drag grouping |
| `GroupWidth: 1` | Col(sName) | Auto-adjust group tree column width |
| `GroupDef: "myGroupRow"` | Col(sIndutyCodeName) | Custom group row setting reference |
| `Def.Group.Expanded: 1` | Def | Group default expanded state |
| `Def.Group.Color` | Def | Group row background color |
| `Def.Group.sPrice.Formula` | Def | Group row sPrice column formula |
| `Solid Kind: "Group"` | Solid | Create group drag & drop area |
| `Solid Cells` | Solid | Add custom buttons (collapse/expand) |
