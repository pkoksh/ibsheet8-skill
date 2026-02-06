---
KEY: addRow
KIND: method
PATH: funcs/core/add-row
ALIAS: sheet.addRow, addRow()
ALIAS_EN: adds, new, row, addrow, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/add-row
---
# addRow ***(method)***

> Adds a new row.

> When using the tree feature, you must specify the `parent` argument to add a row at the desired level.

> When using `render:0` to not immediately reflect on screen and reflecting via `rerender` call, if `Formula` calculation is needed, you must call the `calculate` function for the `Formula` to be applied.

### Syntax
```javascript
object addRow( next, visible, focus, parent, init, render );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|next|`object`|Optional|[Data row object](/docs/appx/row-object)
(A new row is created above the specified row. If no value is given, it is created at the last row)|
|visible|`boolean`|Optional|Whether to reflect on screen immediately after creation
**Sets the [Visible](/docs/props/row/visible) value of the created row**
`0(false)`:Hidden
`1(true)`:Visible (`default`)|
|focus|`boolean`|Optional|Whether to move focus to the created row after creation
`0(false)`:Do not move focus
`1(true)`:Move focus (`default`)|
|parent|`object`|Optional|[Data row object](/docs/appx/row-object) (Specifies the parent row when using tree)|
|init|`object`|Optional|Value/option setting object for the new row|
|render|`boolean`|Optional|Whether to immediately reflect on screen
If this feature is set to `0(false)`, you must execute `rerender()` at the end of the operation for it to be reflected on screen.
**Not related to the [Visible](/docs/props/row/visible) status of the created row**
`0(false)`:Not reflected
`1(true)`:Immediately reflected (`default`)|

### Return Value
***object*** : Created [data row object](/docs/appx/row-object)

### Example
```javascript
// Creates a new row at the top.
sheet.addRow( {"next":sheet.getFirstRow()} )

// Creates a new row above the currently focused row.
sheet.addRow( {"next":sheet.getFocusedRow()} );

// Creates a new row below the currently focused row. (focus moves)
sheet.addRow( {"next":sheet.getNextRow(sheet.getFocusedRow())});

// When using tree, creates a new row at the same level below the currently focused row.
var nextRow = sheet.getNextSiblingRow(sheet.getFocusedRow());
var parentRow = sheet.getFocusedRow().parentNode;
sheet.addRow( {"next":nextRow, "parent":parentRow} );

// Adds a new row as a child node of the currently focused row.
// If no reference row is given via next, the row is added at the end of the child nodes.
sheet.addRow({"parent":sheet.getFocusedRow()});

// Creates a new row above the currently focused row.
// Sets values for the CONTRACTNO and CARNO columns of the new row.
// Sets the background color of the new row to red.
sheet.addRow({"next":sheet.getFocusedRow(), "init":{"CONTRACTNO":"S155", "CARNO":"1234123", Color:"red"}});
```
### Demo
- [addRow sample](https://codepen.io/ibsheet/pen/dygddxQ)

### Read More
- [addRows method](./add-rows)
- [deleteRow method](./delete-row)
- [deleteRows method](./delete-rows)
- [removeRow method](./remove-row)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.3|`init` argument added|
|core|8.0.0.20|`render` argument added|
