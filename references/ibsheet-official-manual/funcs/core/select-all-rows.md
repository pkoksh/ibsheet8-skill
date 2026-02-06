---
KEY: selectAllRows
KIND: method
PATH: funcs/core/select-all-rows
ALIAS: sheet.selectAllRows, selectAllRows()
ALIAS_EN: selects, deselects, rows, selectallrows, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/select-all-rows
---
# selectAllRows ***(method)***
> Selects or deselects all rows.


### Syntax
```javascript
boolean selectAllRows( select, ignoreEvent );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|select|`boolean`|Optional| Select / Deselect 
`0(false)`:Deselect
`1(true)`:Select
`null`:Toggle (`default`)|
|ignoreEvent|`boolean`|Optional| Whether to trigger [onSelectEnd](/docs/events/on-select-end) event 
`0(false)`:Triggered
`1(true)`:Not triggered (`default`)|

### Return Value
***boolean*** : Whether select/deselect state changed

Returns `false` if attempting to select when all rows are already selected, or attempting to deselect when already deselected.

### Example
```javascript
// Select all rows.
sheet.selectAllRows(1);
```

### Read More
- [clearSelection method](./clear-selection)
- [selectCol method](./select-col)
- [selectRow method](./select-row)
- [selectRange method](./select-range)
- [getSelectedRange method](./get-selected-range)
- [getSelectedRow method](./cget-selected-row)
- [onSelectEnd event](/docs/events/on-select-end)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.3.0.14|`ignoreEvent` argument added|
