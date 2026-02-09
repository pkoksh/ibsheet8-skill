# IBSheet8 Initialization Guide

Explains how to create and initialize an IBSheet8 grid on a page.

## Table of Contents

- [Overview](#overview)
- [Basic Setup](#basic-setup)
- [IBSheet.create() API](#ibsheetcreate-api)
- [options Object Structure](#options-object-structure)
- [Initialization Timing](#initialization-timing)
- [Data Load](#data-load)
- [ibsheet8 Cleanup](#ibsheet8-cleanup)
- [Example Code](#example-code)

---

## Overview

IBSheet8 initialization consists of the following 3 steps:

1. **Load library**: Include IBSheet8 scripts, message files, and stylesheets
2. **Prepare container**: Define the HTML element where the grid will be rendered
3. **Create ibsheet8**: Call the `IBSheet.create()` API

---

## Basic Setup

### HTML Basic Structure

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>IBSheet8 Example</title>

  <!-- IBSheet8 Stylesheet -->
  <link rel="stylesheet" href="ibsheet/css/default/ibsheet.css">

  <!-- IBSheet8 Script -->
  <script src="ibsheet/ibsheet.js"></script>

  <!-- IBSheet8 Message File -->
  <script src="ibsheet/locale/ko.js"></script>
</head>
<body>
  <!-- Grid Container -->
  <div id="sheetContainer" style="width:100%; height:500px;"></div>

  <script>
    document.addEventListener("DOMContentLoaded", function() {
      // Create ibsheet8
      IBSheet.create({
        id: "sheet",
        el: "sheetContainer",
        options: {
          Cfg: { /* Settings */ },
          Cols: [ /* Column definitions */ ]
        }
      });
    });
  </script>
</body>
</html>
```

### Container Element

The container must have a **fixed height**:

```html
<!-- Pixel units -->
<div id="sheetContainer" style="width:100%; height:500px;"></div>

<!-- Viewport units -->
<div id="sheetContainer" style="width:100%; height:80vh;"></div>

<!-- Using calc -->
<div id="sheetContainer" style="width:100%; height:calc(100vh - 100px);"></div>
```

> **Note**: To use `height: 100%`, all parent elements must also have their heights specified.

---

## IBSheet.create() API

The core API for creating an ibsheet8 instance.

### Syntax

```javascript
IBSheet.create(config);
```

### Parameters

| Parameter | Type | Required | Description |
|---------|------|------|------|
| `id` | String | O | ibsheet8 unique ID. Accessible via `window[id]` |
| `el` | String \| HTMLElement | O | Container element ID or DOM element |
| `options` | Object | O | ibsheet8 options (Cfg, Cols, Events, etc.) |
| `data` | Array | X | Data array to load initially |
| `sync` | Number | X | Synchronization option (0: async (default), 1: sync) |

### Return Value

Returns the created ibsheet8 object. In async mode (default), it may be returned before complete initialization, so using the `onRenderFirstFinish` event is recommended.

### How to Access ibsheet8

```javascript
// Method 1: Access via global object
const sheet = window["sheet"];

// Method 2: Use IBSheet API
const sheet = IBSheet["sheet"];

// Method 3: Store create() return value
const sheet = IBSheet.create({ ... });
```

---

## options Object Structure

### Cfg (ibsheet8 Global Settings)

Sets the global behavior of ibsheet8:

```javascript
Cfg: {
  SearchMode: 2,       // Rendering mode
  CanEdit: 1,          // Editable or not
  HeaderMerge: 1,      // Header merge
  DataMerge: 0,        // Data merge
  Alternate: 1,        // Alternating row background color
  ShowFilter: false    // Show filter row
}
```

Key Cfg properties:

| Property | Type | Default | Description |
|-----|------|-------|------|
| `SearchMode` | Number | 2 | 0: Fastload, 1: ClientPaging, 2: Lazyload, 3: ServerPaging |
| `CanEdit` | Boolean | 1 | ibsheet8 global edit enabled |
| `HeaderMerge` | Number | 0 | Header area auto merge |
| `DataMerge` | Number | 0 | Data area auto merge |
| `ShowFilter` | Boolean | false | Whether to create filter row |
| `Alternate` | Number | 0 | Alternating row background (0: disabled, 1: single, 2: separate) |
| `MainCol` | String | - | Column name for tree display in tree grid |

> For detailed properties, refer to [cfg-properties.md](cfg-properties.md).

### Cols (Column Definition)

Define the column array:

```javascript
Cols: [
  {
    Header: "No",
    Name: "no",
    Type: "Int",
    Width: 60,
    Align: "Center",
    CanEdit: false
  },
  {
    Header: "Name",
    Name: "name",
    Type: "Text",
    Width: 120,
    Required: true
  },
  {
    Header: "Status",
    Name: "status",
    Type: "Enum",
    Width: 100,
    Align: "Center",
    EnumKeys: "A|B|C",
    Enum: "Active|Pending|Closed"
  },
  {
    Header: "Amount",
    Name: "amount",
    Type: "Int",
    Width: 100,
    Align: "Right",
    Format: "#,##0"
  },
  {
    Header: "Registration Date",
    Name: "regDate",
    Type: "Date",
    Width: 100,
    Align: "Center",
    Format: "yyyy-MM-dd"
  }
]
```

Key column properties:

| Property | Type | Description |
|-----|------|------|
| `Header` | String | Header text (multiline: `"Line1\nLine2"`) |
| `Name` | String | Column identifier (required, maps to data key) |
| `Type` | String | Column type (Text, Int, Float, Date, Enum, Bool, Button, etc.) |
| `Width` | Number | Column width (pixels) |
| `Align` | String | Alignment (Left, Center, Right) |
| `CanEdit` | Boolean | Whether editing is enabled |
| `Required` | Boolean | Whether input is required |
| `DefaultValue` | Any | Default value for new rows |
| `Format` | String | Display format (number: `#,##0`, date: `yyyy-MM-dd`) |

> For detailed properties, refer to [initialize-column-properties.md](./initialize-column-properties.md).

### Events (Event Handlers)

Handle ibsheet8 events:

```javascript
Events: {
  // ibsheet8 rendering complete (used for post-async initialization work)
  onRenderFirstFinish: function(evt) {
    console.log("ibsheet8 initialization complete");
    this.loadSearchData({ data: initialData });
  },

  // Cell click
  onClick: function(evt) {
    console.log("Click:", evt.row, evt.col, evt.value);
  },

  // Before value change (cancel with return false)
  onBeforeChange: function(evt) {
    if (evt.col === "amount" && evt.value < 0) {
      alert("Amount must be 0 or greater.");
      return false;
    }
  },

  // After value change
  onAfterChange: function(evt) {
    console.log("Changed:", evt.col, evt.oldValue, "->", evt.value);
  },

  // After row add
  onAfterRowAdd: function(evt) {
    console.log("Row added:", evt.row);
  },

  // Before row delete
  onBeforeRowDelete: function(evt) {
    return confirm("Do you want to delete?");
  }
}
```

> For detailed events, refer to [events.md](events.md).

---

## Initialization Timing

### Using DOMContentLoaded

Create ibsheet8 after the DOM is fully loaded:

```javascript
document.addEventListener("DOMContentLoaded", function() {
  IBSheet.create({ ... });
});
```

### Sync/Async Initialization

```javascript
// Async initialization (default) - Fast page load
IBSheet.create({
  id: "sheet",
  el: "container",
  options: {
    Events: {
      onRenderFirstFinish: function() {
        // ibsheet8 fully initialized at this point
        this.loadSearchData({ data: myData });
      }
    }
  }
});

// Sync initialization - Can be used immediately after create() returns
const sheet = IBSheet.create({
  id: "sheet",
  el: "container",
  options: { ... },
  sync: 1  // Sync mode
});
sheet.loadSearchData({ data: myData });
```

### Using onRenderFirstFinish

Used to perform work after initialization is complete in async mode:

```javascript
Events: {
  onRenderFirstFinish: function(evt) {
    // 1. Load initial data
    this.loadSearchData({ data: initialData });

    // 2. Focus specific cell
    this.focus(0, "name");

    // 3. Integration with external components
    updateSummary(this.getRowCount());
  }
}
```

---

## Data Load

### Passing Initial Data

Pass via the `data` parameter when calling `create()`:

```javascript
IBSheet.create({
  id: "sheet",
  el: "container",
  options: { ... },
  data: [
    { name: "John", amount: 10000, regDate: "2024-01-15" },
    { name: "Jane", amount: 25000, regDate: "2024-02-20" }
  ]
});
```

### loadSearchData() Method

Load local data:

```javascript
sheet.loadSearchData({
  data: jsonArray,    // Data array
  sync: 1,            // Sync load (optional)
  append: 0           // 0: replace, 1: append
});
```

### doSearch() Server Integration

Retrieve data from the server:

```javascript
sheet.doSearch({
  url: "/api/list",
  method: "POST",
  param: { searchType: "all", keyword: "search term" },
  reqHeader: { "Content-Type": "application/json" }
});
```

---

## ibsheet8 Cleanup

### sheet.dispose()

Remove ibsheet8 and release resources:

```javascript
sheet.removeAll(); // Remove loaded data

sheet.dispose();  // Remove object

IBSheet.disposeAll();  // Remove all ibsheet8 objects
```

> For framework-specific integration details, refer to [react.md](../integration/react.md), [vue.md](../integration/vue.md).

---

## Example Code

### Basic Grid

```javascript
document.addEventListener("DOMContentLoaded", function() {
  IBSheet.create({
    id: "basicSheet",
    el: "sheetContainer",
    options: {
      Cfg: {
        SearchMode: 2,
        CanEdit: true
      },
      Cols: [
        { Header: "No", Name: "no", Type: "Int", Width: 60, CanEdit: false },
        { Header: "Name", Name: "name", Type: "Text", Width: 120 },
        { Header: "Email", Name: "email", Type: "Text", Width: 180 },
        { Header: "Phone", Name: "phone", Type: "Text", Width: 120 },
        { Header: "Join Date", Name: "joinDate", Type: "Date", Width: 100, Format: "yyyy-MM-dd" }
      ],
      Events: {
        onRenderFirstFinish: function() {
          this.loadSearchData({
            data: [
              { no: 1, name: "John", email: "john@test.com", phone: "010-1234-5678", joinDate: "2024-01-15" },
              { no: 2, name: "Jane", email: "jane@test.com", phone: "010-2345-6789", joinDate: "2024-02-20" }
            ]
          });
        }
      }
    }
  });
});
```

### CRUD Grid

```javascript
document.addEventListener("DOMContentLoaded", function() {
  IBSheet.create({
    id: "crudSheet",
    el: "sheetContainer",
    options: {
      Cfg: {
        SearchMode: 0,  // Fastload - Load all data
      },
      Def: {
        Row: {
          // Required for Formula usage: CanFormula, CalcOrder
          CanFormula: 1,
          CalcOrder: "total"
        }
      },
      Cols: [
        { Header: "Status", Name: "_STATUS", Type: "Status", Width: 50 },
        { Header: "Select", Name: "_CHK", Type: "Bool", Width: 50 },
        { Header: "Product Name", Name: "productName", Type: "Text", Width: 150, Required: true },
        { Header: "Unit Price", Name: "price", Type: "Int", Width: 100, Format: "#,##0" },
        { Header: "Quantity", Name: "quantity", Type: "Int", Width: 80 },
        { Header: "Total", Name: "total", Type: "Int", Width: 100, Format: "#,##0",
          Formula: "price * quantity", CanEdit: false }
      ],
    }
  });
});

// Add row
function addRow() {
  const sheet = window["crudSheet"];
  sheet.addRow({ init: { productName: "New Product", price: 0, quantity: 1 } });
}

// Delete selected rows
function deleteRows() {
  const sheet = window["crudSheet"];
  sheet.deleteRow({ check: 1 });  // Delete checked rows
}

// Save changed data
function saveData() {
  const sheet = window["crudSheet"];

  // Extract only changed data (Added: added, Changed: modified, Deleted: deleted)
  const saveData = sheet.getSaveJson();

  // Validation (if there is an error code)
  if (saveData.Code && saveData.Code.startsWith("ISB")) {
    alert("error occured!!")
    return;
  }
  console.log("Save data:", saveData);

  // Send to server via ajax and receive result

  // Reset status after successful server save
  sheet.acceptChanges();
}
```

---

## References

- [Cfg Property Details](./initialize-cfg-properties.md)
- [Column Property Details](./initialize-column-properties.md)
- [Column Types](./initialize-column-type-property.md)
- [Events](./events.md)
- [API Methods](./api-methods.md)
- [React Integration](../integration/react.md)
- [Vue Integration](../integration/vue.md)
