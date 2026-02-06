---
KEY: moveRow
KIND: method
PATH: funcs/core/move-row
ALIAS: sheet.moveRow, moveRow()
ALIAS_EN: moves, specified, row, moverow, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/move-row
---
# moveRow ***(method)***
> Moves the specified row. 

> The row specified by `row` is moved above the row specified by `next`.

> In the case of a tree, the row specified by `row` is moved as a child node under the row specified by `parent`, and the position among child nodes can be specified through `next`. 

> When the focused row is moved via `moveRow`, a `focus` action occurs at the moved position. To prevent the focus action from occurring, use `focus: 0`.


### Syntax
```javascript
boolean moveRow( row, next, render, parent, spannedMove, focus );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|Required|[Data row object](/docs/appx/row-object) to move|
|next|`object`|Required|[Data row object](/docs/appx/row-object) at the target position.
The row is moved above the specified row. (When `next` is not provided, the row is moved to the last position)|
|render|`boolean`|Optional|Whether to immediately reflect on screen
If this feature is set to `0(false)`, you must execute `rerender()` at the end of the operation for it to be reflected on screen.
`0(false)`:Not reflected
`1(true)`:Immediately reflected (`default`)|
|parent|`object`|Optional|Parent [data row object](/docs/appx/row-object) to move under when using the tree feature|
|spannedMove|`boolean`|Optional|When the argument is set to `1(true)` and the first row of a merged group is moved, whether to move all merged rows together
`0(false)`:Only the row specified in `row` is moved (`default`)
`1(true)`:When the row specified in `row` is the first row of a merged group, all rows in the merged group are moved|
|focus|`boolean`|Optional|Whether to move focus to the moved row
`0(false)`:Do not move focus to the moved row (`default`)
`1(true)`:Move focus to the moved row|


### Return Value
***boolean*** : Returns `1(true)` on successful move, returns `0(false)` on failure (e.g., when the target position is the same as the original position)

### Example
```javascript
//Move the AR5 row to the very top of the sheet.
sheet.moveRow({row:sheet.getRowById("AR5"), next:sheet.getFirstRow()});

//Move the AR8 row to the last position among child nodes of the currently focused row.
var target = sheet.getRowById("AR8");
sheet.moveRow({row:target, parent:sheet.getFocusedRow()});
```

### Read More
- [copyRow method](./copy-row)
- [copyRows method](./copy-rows)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.8|`focus` argument added and focus action triggered on the moved row when using `moveRow`.|
