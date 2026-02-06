---
KEY: selectRow
KIND: method
PATH: funcs/core/select-row
ALIAS: sheet.selectRow, selectRow()
ALIAS_EN: selects, specified, row, selectrow, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/select-row
---
# selectRow ***(method)***
> Selects the specified row.


### Syntax
```javascript
boolean selectRow( row, select, valid, ignoreEvent );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|Required|[data row object](/docs/appx/row-object)|
|select|`boolean`|Optional| Select / Deselect
`0(false)`:Deselect
`1(true)`:Select
`null`:Toggle (`default`)|
|valid|`boolean`|Optional|Check whether row can be selected/deselected
(Does not actually select/deselect the row, but only checks whether it is possible and returns the result)
`0(false)`:Do not check row select/deselect possibility (`default`)
`1(true)`:Check row select/deselect possibility|
|ignoreEvent|`boolean`|Optional| Whether to trigger [onSelectEnd](/docs/events/on-select-end) event 
`0(false)`: Triggered
`1(true)`: Not triggered (`default`)|

### Return Value
***boolean*** : Whether select/deselect state changed

Returns `0(false)` if attempting to select an already selected row, or attempting to deselect an already deselected row.

### Example
```javascript
// Select the currently focused row
var row = sheet.getFocusedRow();
sheet.selectRow( row, 1);
```

### Read More
- [clearSelection method](./clear-selection)
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
