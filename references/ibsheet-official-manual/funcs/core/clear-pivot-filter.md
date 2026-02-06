---
KEY: clearPivotFilter
KIND: method
PATH: funcs/core/clear-pivot-filter
ALIAS: sheet.clearPivotFilter, clearPivotFilter()
ALIAS_EN: pivot, filter, applied, resets, row, content, recreates, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/clear-pivot-filter
---
# clearPivotFilter ***(method)***
> When a pivot filter is applied, resets the filter row content and recreates the pivot sheet based on the original sheet. 


### Syntax
```javascript
void clearPivotFilter();
```

### Return Value
***none***

### Example
```javascript
//Removes the pivot filter and recreates the pivot sheet.
pivotSheet_sheet.clearPivotFilter();
```

### Read More
- [doPivotFilter method](./do-pivot-filter)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.1|Feature added|
