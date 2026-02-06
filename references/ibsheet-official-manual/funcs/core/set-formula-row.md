---
KEY: setFormulaRow
KIND: method
PATH: funcs/core/set-formula-row
ALIAS: sheet.setFormulaRow, setFormulaRow()
ALIAS_EN: changes, formularow, summary, row, calculation, sum, avg, min
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-formula-row
---
# setFormulaRow ***(method)***
> Changes the `FormulaRow` (summary row) calculation (`Sum,Avg,Min,Max`) or hides the row.

### Syntax
```javascript
void setFormulaRow( val, cols, visible, render );
```

### Parameters


|Name|Type|Required| Description |
|----------|-----|---|----|
|val |`string` \| `object`|Required|Calculation method to set (one of `'Sum'`,`'Avg'`,`'Min'`,`'Max'`) 
or can be set in object form, such as `{"ColName1":"Sum","ColName2:"Avg"}`
(When using the object form, the `cols` argument is not required)|
|cols |`string`|Optional|Column name(s) to calculate (comma-delimited string when specifying multiple columns)|
|visible |`boolean`|Optional|Whether `FormulaRow` is visible
`0(false)`:`FormulaRow` (summary row) hidden (`default`)
`1(true)`:`FormulaRow` (summary row) visible|
|render |`boolean`|Optional|whether immediately reflect on screen
If this feature is set to `0(false)`, you must execute `rerender()` at the end of the operation for it to be reflected on screen.
`0(false)`:Not reflected (`default`)
`1(true)`:Immediately reflected|

### Return Value
***boolean*** : Whether setting is complete

### Example
```javascript
// Change the summary row calculation to average value
sheet.setFormulaRow( "Avg", "AMT1,AMT2", 1, 1 );

// Hide the summary row.
sheet.setFormulaRow({visible:0});
```

### Read More
- [setFormulaRowPosition method](./set-formula-row-position)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
