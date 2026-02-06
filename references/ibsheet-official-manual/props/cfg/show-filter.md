---
KEY: showFilter
KIND: config-property
PATH: props/cfg/show-filter
ALIAS_EN: whether, add, filter, row, top, fixed, creating, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/show-filter
---
# ShowFilter ***(cfg)***

> Sets whether to add a filter row as a top fixed row when creating the sheet.

> When a filter row is added, filtering functionality for column data can be used.

> When set to `(0)false`, the filter row is not created, and after sheet creation, the filter row can be dynamically created through the [showFilterRow](/docs/funcs/core/show-filter-row) function. 

> Below is an example of using a filter row created with `ShowFilter:true`.


> In string columns, you can use `','(and search)` or `';'(or search)`.

>  - ex1. `apple;peach` ==> Hide all rows except those containing apple or peach
>  - ex2. `apple,peach` ==> Hide all rows except those containing both apple and peach


> For number or date columns, you can set a range using `'~'`. This can only be used with filter row operators 1(equal) and 2(not equal), and cannot be used with other operators.

>  - ex1. `20170101~20181231` ==> Hide all except data from January 1, 2017 to December 31, 2018
>  - ex2. `20241022~20241025;20241031` ==> Hide all except data from October 22, 2024 to October 25, 2024 and data from October 31, 2024
>  - ex3. `199000~488000` ==> Hide all except data between 199000 and 488000
>  - ex4. ` 99000;199000~488000` ==> Hide all except data of 99000 and data between 199000 and 488000

> The separators can be changed in the message file.

> "`ValueSeparator`": "`;`"     //or separator 

> "`ValueSeparatorHtml`": "`;`" //or separator 

> "`ValueAndSeparator`": "`,`"  //and separator 

> "`RangeSeparator`": "`~`"     //range operator 

> "`RangeSeparatorHtml`": "`~`" //range operator 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Do not add filter row. (`default`)|
|`1(true)`|Add filter row.|


### Example
```javascript
options = {
    Cfg :{
      ShowFilter: true,  // Add filter row when creating the sheet.
    }
};
```

### Try it
- [True](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/ShowFilter-true/)

### Read More
- [showFilterRow method](/docs/funcs/core/show-filter-row)
- [hideFilterRow method](/docs/funcs/core/hide-filter-row)
- [DisableKeyWord](/docs/props/cfg/disable-keyword)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
