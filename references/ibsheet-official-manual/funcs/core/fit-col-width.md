---
KEY: fitColWidth
KIND: method
PATH: funcs/core/fit-col-width
ALIAS: sheet.fitColWidth, fitColWidth()
ALIAS_EN: column, width, ratio, units, specified, argument, adjusts, based
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/fit-col-width
---
# fitColWidth ***(method)***

> Sets each column width in ratio units as specified by the argument, or re-adjusts based on ratios to fit the sheet's total width.

> If the `ratio` argument is not set, all columns' widths are re-adjusted proportionally based on the current column width ratios to fit the sheet's width. If the `ratio` argument is set, columns are re-adjusted to the specified ratios.


> **<mark>Note</mark> : This feature is not properly supported when using [RelWidth](./docs/props/col/rel-width).**

> When setting `ratio`, the number of columns and ratio portions must be properly allocated (divided based on a total of 100 with no remainder) for it to work correctly.



### Syntax
```javascript
boolean fitColWidth(ratio);
```


### Parameters


|Name|Type|Required| Description |
|----------|-----|---|----|
|ratio |`array[number]`|Optional|Width ratio for columns|


### Return Value
***boolean*** : Whether applied (returns true if width was changed, returns false if there is no change)

### Example
```javascript
// Re-adjust columns to fit the sheet width while maintaining the current width ratios
sheet.fitColWidth();

// Re-adjust based on the entire sheet width: first column 10%, 50%, 30%, 10% width ratios
sheet.fitColWidth([10,50,30,10]);
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.41|Feature added|
