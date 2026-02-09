# Tree Grid

## Basic Setup

Specify the column name to display the tree in `MainCol`. Only one column can be a tree.

```javascript
Cfg: {
    MainCol: "sProduct",     // Display tree in "sProduct" column
    NoTreeLines: true        // Hide node connection lines (optional)
}
```

---

## Data Format

### Items-based Hierarchical Structure (Recommended)

```javascript
var treeData = {
    "Data": [
        {
            sProduct: "Internal System Development Project", sCustomer: "Company B",
            Items: [
                { sProduct: "Global Integrated HR System", sKind: "Project", sPrice: "192" },
                {
                    sProduct: "E-HR System", sKind: "Maintenance",
                    Items: [
                        { sProduct: "Properties E-HR System", sKind: "Other", sPrice: "4" },
                        { sProduct: "Manufacturing E-HR System", sKind: "Other", sPrice: "4" }
                    ]
                }
            ]
        }
    ]
};

sheet.loadSearchData(treeData);
```

### Level-based Flat Structure

Hierarchy is represented by `Level` values. The top level is `0`, and child levels increment by 1 from the parent.
Use `IBSheet.v7.convertTreeData()` to convert to an Items-based structure.
The `IBSheet.v7.convertTreeData()` function is defined in the `/plugins/ibsheet-common.js` file.

```javascript
var treeData = {
    "Data": [
        { Level: 0, sProduct: "Hospital Development/CDP Construction", sKind: "Project", sPrice: "29" },
        { Level: 1, sProduct: "Performance Improvement Project", sKind: "Project", sPrice: "15.5" },
        { Level: 2, sProduct: "SHE System Construction", sKind: "Project", sPrice: "79" },
        { Level: 2, sProduct: "Cost Quotation System", sKind: "Project", sPrice: "3" }
    ]
};

var convertData = IBSheet.v7.convertTreeData(treeData);
sheet.loadSearchData(convertData);
```

---

## Expand/Collapse

```javascript
// Expand/Collapse by level
sheet.showTreeLevel(3);           // Expand up to level 3
sheet.showTreeLevel(1);           // Show only top level (collapse all)
sheet.showTreeLevel(3, 1);        // Expand up to level 3, do not fire events
sheet.showTreeLevel(3, 0, 1);     // Expand up to level 3, collapse all children
sheet.showTreeLevel(3, 0, 2);     // Expand up to level 3, expand all children

// Expand/Collapse specific row
sheet.setExpandRow(row);              // Toggle
sheet.setExpandRow(row, null, 1);     // Expand
sheet.setExpandRow(row, null, 0);     // Collapse

// Check expanded state
var isExpanded = sheet.getAttribute(row, null, "Expanded");
```

---

## Event Usage

```javascript
Events: {
    // Control before expanding (return true to cancel)
    onBeforeExpand: function(evtParam) {
        if (evtParam.row["Level"] > 4) {
            return true;  // Cancel expand
        }
    },
    // Process after expanding
    onAfterExpand: function(evtParam) {
        console.log("Expanded/Collapsed row:", evtParam.row);
    }
}
```

---

## Dynamic Loading (HaveChild)

Setting `HaveChild: true` on a row without children displays a collapsed tree icon.

```javascript
// Set HaveChild in data
Items: [{ sProduct: "Category A", HaveChild: true }]

// Dynamic load in onBeforeExpand
Events: {
    onBeforeExpand: function(evtParam) {
        var row = evtParam.row;
        if (row.firstChild) return;  // Skip if children already exist

        sheet.doSearch({
            url: "/api/tree/children",
            param: "parentId=" + sheet.getValue(row, "id"),
            parent: row
        });
        return true;
    }
}
```

---

## Checkbox Synchronization (TreeCheckSync)

Automatically synchronizes check states between parent and child nodes in columns with `Icon: "Check"`.

```javascript
Cfg: {
    MainCol: "sProduct",
    TreeCheckSync: 1   // 0: Individual check, 1: Auto sync (? display), 2: Auto sync (v display)
}
```

---

## References

- [MainCol cfg](/docs/props/cfg/main-col)
- [NoTreeLines cfg](/docs/props/cfg/no-tree-lines)
- [TreeCheckSync cfg](/docs/props/cfg/tree-check-sync)
- [showTreeLevel method](/docs/funcs/core/show-tree-level)
- [setExpandRow method](/docs/funcs/core/set-expand-row)
- [Expanded row](/docs/props/row/expanded)
- [HaveChild row](/docs/props/row/have-child)
- [onBeforeExpand event](/docs/events/on-before-expand)
- [onAfterExpand event](/docs/events/on-after-expand)
- [Tree Data Format](/docs/dataStructure/tree-structure)
