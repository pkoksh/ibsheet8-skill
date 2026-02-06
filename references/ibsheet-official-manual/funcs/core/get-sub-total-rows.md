---
KEY: getSubTotalRows
KIND: method
PATH: funcs/core/get-sub-total-rows
ALIAS: sheet.getSubTotalRows, getSubTotalRows()
ALIAS_EN: creationapplied, subtotal, cumulative, total, rows, returns, getsubtotalrows, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-sub-total-rows
---
# getSubTotalRows ***(method)***

> creationapplied subtotal/cumulative total rows returns.

> return value as follows
> {subTotal:[[subtotal rows for the 1st base column], [subtotal rows for the 2nd base column] ... ], Total:[[cumulative total rows for the 1st base column], [cumulative total rows for the 2nd base column] ... ]}

### Syntax
```javascript
object getSubTotalRows();
```

### Return Value
***object***

### Example
```javascript
//Gets the subtotal/cumulative total rows.
var totalRows = sheet.getSubTotalRows();
```

### Read More
- [makeSubTotal method](./make-sub-total)
- [removeSubTotal method](./remove-sub-total)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
