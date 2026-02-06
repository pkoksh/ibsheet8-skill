---
KEY: selectRange
KIND: method
PATH: funcs/core/select-range
ALIAS: sheet.selectRange, selectRange()
ALIAS_EN: selects, deselects, rectangular, area, row, col, cell, selectrange
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/select-range
---
# selectRange ***(method)***
> Selects or deselects a rectangular area from the `row1, col1` cell to the `row2, col2` cell.

> If columns are not set (`col1, col2` are not set), **rows** from `row1` to `row2` are selected/deselected.

> If rows are not set (`row1, row2` are not set), **columns** from `col1` to `col2` are selected/deselected.

### Syntax
```javascript
number selectRange( row1, col1, row2, col2, select, type, valid, ignoreEvent );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row1|`object`|Optional|Selection start [data row object](/docs/appx/row-object)|
|col1|`string`|Optional|Selection start column name|
|row2|`object`|Optional|Selection end [data row object](/docs/appx/row-object)|
|col2|`string`|Optional|Selection end column name|
|select|`boolean`|Optional| Whether to select/deselect
`0(false)`:Deselect
`1(true)`:Select
`null`:Toggle (`default`)|
|type|`number`|Optional|`1`: Exclude hidden rows `2`: Exclude collapsed child nodes in tree|
|valid|`boolean`|Optional|Whether to check if the area can actually be selected/deselected
(Does not actually select/deselect the area, but returns the number of rows/cells that would be selected/deselected)
`0(false)`:Do not check if area selection/deselection is possible (`default`)
`1(true)`:Check if area selection/deselection is possible|
|ignoreEvent|`boolean`|Optional| Whether to trigger [onSelectEnd](/docs/events/on-select-end) event 
`0(false)`: Triggered
`1(true)`: Not triggered (`default`)|

### Return Value
***number*** : Number of rows/cells selected or deselected

### Example
```javascript
//Select from the AR5 row deptName cell to the AR10 row bizname cell
sheet.selectRange( sheet.getRowById("AR4"), "deptName", sheet.getRowById("AR10"), "bizname", 1 );
```

### Read More
- [clearSelection method](./clear-selection)
- [selectCol method](./select-col)
- [selectRow method](./select-row)
- [getSelectedRange method](./get-selected-range)
- [getSelectedRow method](./cget-selected-row)
- [onSelectEnd event](/docs/events/on-select-end)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.3.0.14|`ignoreEvent` argument added|
