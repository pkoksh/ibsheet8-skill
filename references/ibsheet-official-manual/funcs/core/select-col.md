---
KEY: selectCol
KIND: method
PATH: funcs/core/select-col
ALIAS: sheet.selectCol, selectCol()
ALIAS_EN: selects, specified, column, selectcol, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/select-col
---
# selectCol ***(method)***
> Selects the specified column.

> Cannot be used when the sheet `Cfg`'s `SelectingCells` setting is `0`.

### Syntax
```javascript
boolean selectCol( col, select, valid, ignoreEvent );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|col|`string`|Required|Column name to select|
|select|`boolean`|Optional| Whether to select/deselect
`0(false)`:Deselect
`1(true)`:Select (`default`)|
|valid|`boolean`|Optional|Whether to check if column selection is possible
(Does not actually select the column, but checks whether it is possible and returns the result)
`0(false)`:Do not check if column selection is possible (`default`)
`1(true)`:Check if column selection is possible|
|ignoreEvent|`boolean`|Optional| Whether to trigger [onSelectEnd](/docs/events/on-select-end) event 
`0(false)`: Triggered
`1(true)`: Not triggered (`default`)|

### Return Value
***boolean*** : Whether selection/deselection was changed

Returns `false` when trying to select an already selected column or deselect an already deselected column

### Example
```javascript
//Select AMT,QTY columns
sheet.selectCol("AMT", 1);
sheet.selectCol("QTY", 1);
```

### Read More
- [clearSelection method](./clear-selection)
- [selectRow method](./select-row)
- [selectRange method](./select-range)
- [getSelectedRange method](./get-selected-range)
- [onSelectEnd event](/docs/events/on-select-end)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.3.0.14|`ignoreEvent` argument added|
