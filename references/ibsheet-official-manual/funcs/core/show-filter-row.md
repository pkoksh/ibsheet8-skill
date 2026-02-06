---
KEY: showFilterRow
KIND: method
PATH: funcs/core/show-filter-row
ALIAS: sheet.showFilterRow, showFilterRow()
ALIAS_EN: displays, filter, row, header, showfilterrow, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/show-filter-row
---
# showFilterRow ***(method)***
> Displays the filter row below the header.

> Rows hidden through the filter have their [Visible](/docs/props/row/visible):`0(false)` value set internally. 

> If you do not want to use reserved words, you can turn off the reserved word feature through [DisableKeyWord](/docs/props/cfg/disable-keyword).



> You can use `','(AND search)` or `';'(OR search)` in string columns.

> - ex1. `Apple;Peach` ==> Hides all except rows containing Apple or Peach
> - ex2. `Apple,Peach` ==> Hides all except rows containing both Apple and Peach


> For Number or date columns, you can set a range using `'~'`. The filter row's operator can only be used with 1(equal) or 2(not equal), and other operators cannot be used.

> - ex1. `20170101~20181231` ==> Hides all except data from January 1, 2017 to December 31, 2018
> - ex2. `20241022~20241025;20241031` ==> Hides all except data from October 22, 2024 to October 25, 2024 and data from October 31, 2024
> - ex3. `199000~488000` ==> Hides all except data between 199000 and 488000
> - ex4. `99000;199000~488000` ==> Hides all except data of 99000 and data between 199000 and 488000

> Delimiters can be changed in the message file.

> "`ValueSeparator`": "`;`"     //OR delimiter 

> "`ValueSeparatorHtml`": "`;`" //OR delimiter 

> "`ValueAndSeparator`": "`,`"  //AND delimiter 

> "`RangeSeparator`": "`~`"     //Range operator 

> "`RangeSeparatorHtml`": "`~`" //Range operator 


### Syntax
```javascript
boolean showFilterRow();
```


### Return Value
***boolean*** : Whether the filter row is visible (returns `0(false)` if the filter row is already displayed or cannot be made visible)

### Example
```javascript
// Display the filter row.
sheet.showFilterRow();
```

### Read More
- [hideFilterRow method](./hide-filter-row)
- [DisableKeyWord](/docs/props/cfg/disable-keyword)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
