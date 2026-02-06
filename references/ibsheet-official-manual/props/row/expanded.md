---
KEY: expanded
KIND: row-property
PATH: props/row/expanded
ALIAS_EN: whether, row, collapsed, expanded, tree, feature
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/expanded
---
# Expanded ***(row)***

> Sets whether a row is collapsed or expanded when using the tree feature.

<!--!
> `[Private description]` Can also set the collapse/expand status using (cell) [ExpandedCols](/docs/props/cell/expand-cols), (cell) [ExpandedRows](/docs/props/cell/expand-rows).
!-->

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Collapsed|
|`1(true)`|Expanded|


### Example
```javascript
//Check whether a specific row is collapsed.
var ep = sheet.getAttribute(sheet.getFocusedRow(), null, "Expanded");

//Expand a specific row. Use the setExpandRow API.
sheet.setExpandRow(sheet.getRowByIndex(4), null, 1);
```

### Read More

- [showTreeLevel method](/docs/funcs/core/show-tree-level)
- [setExpandRow method](/docs/funcs/core/set-expand-row)
- [onBeforeExpand event](/docs/events/on-before-expand)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
