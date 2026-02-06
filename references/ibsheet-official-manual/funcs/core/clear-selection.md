---
KEY: clearSelection
KIND: method
PATH: funcs/core/clear-selection
ALIAS: sheet.clearSelection, clearSelection()
ALIAS_EN: deselects, area, selected, via, drag, functions, clearselection, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/clear-selection
---
# clearSelection ***(method)***
> Deselects the area selected via drag or functions.

### Syntax
```javascript
void clearSelection( );
```

### Return Value
***none***

### Example
```javascript
//Deselect all selected areas
sheet.clearSelection();
```

### Read More
- [CanSelect row](/docs/props/row/can-select)
- [CanSelect col](/docs/props/col/can-select)
- [selectRow method](./select-row)
- [selectCol method](./select-col)
- [selectRange method](./select-range)
- [getSelectedRange method](./get-selected-range)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
