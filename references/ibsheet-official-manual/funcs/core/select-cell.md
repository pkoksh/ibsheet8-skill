---
KEY: selectCell
KIND: method
PATH: funcs/core/select-cell
ALIAS: sheet.selectCell, selectCell()
ALIAS_EN: selects, deselects, specified, cell, selectcell, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/select-cell
---
# selectCell ***(method)***
> Selects or deselects the specified cell.

> Cannot be used when the sheet `Cfg`'s `SelectingCells` setting is `0`.

### Syntax
```javascript
boolean selectCell( row, col, select, valid, ignoreEvent );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|Required|[data row object](/docs/appx/row-object)|
|col|`string`|Required|column name|
|select|`boolean`|Optional| Whether to select/deselect
`0(false)`:Deselect
`1(true)`:Select
 `null`:Toggle (`default`)
|valid|`boolean`|Optional|Whether to check if selection/deselection is possible
(Does not actually select/deselect the cell, but checks whether it is possible and returns the result)
`0(false)`:Do not check if selection/deselection is possible (`default`)
`1(true)`:Check if selection/deselection is possible|
|ignoreEvent|`boolean`|Optional| Whether to trigger [onSelectEnd](/docs/events/on-select-end) event 
`0(false)`: Triggered
`1(true)`: Not triggered (`default`)|

### Return Value
***boolean*** : Whether selection/deselection was changed

Returns `false` when trying to select an already selected cell or deselect an already deselected cell

### Example
```javascript
//Select the currently focused cell
var row = sheet.getFocusedRow();
var col = sheet.getFocusedCol();
sheet.selectCell( row, col, 1);
```

### Read More
- [clearSelection method](./clear-selection)
- [selectRow method](./select-row)
- [selectCol method](./select-col)
- [selectRange method](./select-range)
- [getSelectedRange method](./get-selected-range)
- [getSelectedRow method](./cget-selected-row)
- [onSelectEnd event](/docs/events/on-select-end)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.3.0.14|`ignoreEvent` argument added|
