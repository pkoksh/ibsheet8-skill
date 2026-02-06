---
KEY: getFormulaRowPosition
KIND: method
PATH: funcs/core/get-formula-row-position
ALIAS: sheet.getFormulaRowPosition, getFormulaRowPosition()
ALIAS_EN: returns, position, value, formularow, total, row, bottom, default
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-formula-row-position
---
# getFormulaRowPosition ***(method)***
> Returns the position value of the `FormulaRow` (total row) - either bottom (default) or top.

### Syntax
```javascript
number getFormulaRowPosition();
```

### Return Value
***number*** : FormulaRowof position value

### Example
```javascript
//totalrowof position retrieves.
var pos = sheet.getFormulaRowPosition();
```

### Read More
- [setFormulaRow method](./set-formula-row)
- [setFormulaRowPosition method](./set-formula-row-position)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
