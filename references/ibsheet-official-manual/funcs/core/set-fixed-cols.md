---
KEY: setFixedCols
KIND: method
PATH: funcs/core/set-fixed-cols
ALIAS: sheet.setFixedCols, setFixedCols()
ALIAS_EN: number, columns, included, sheet, left, right, sections, setfixedcols
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-fixed-cols
---
# setFixedCols ***(method)***
> Sets the number of columns to be included in the sheet's left and right `sections`.

> When set, hidden columns are also included in the fixed area.

> **Even if `SEQcolumn` was not created in `LeftCols` during initialization, the `SEQcolumn` may exist in a `Hidden` state.

> Therefore, when using `setFixedCols`, the `left` argument must always include the `SEQcolumn` in the calculation.**

> To modify only the column count of the left or right `section`, use the [setFixedLeft](./set-fixed-left) or [setFixedRight](./set-fixed-right) function.

###
![Fixed pane](/assets/imgs/setFixedCols1.png)
<!-- IMAGE: Screenshot/Example Image - Fixed pane -->

### Syntax
```javascript
array setFixedCols( left, right, reMerge, sync );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|left |`number`|Optional|Number of columns in the left area
(If not set or set to `0`, all columns in the corresponding area are included in the center area)|
|right|`number`|Optional|Number of columns in the right area
(If not set or set to `0`, all columns in the corresponding area are included in the center area)|
|reMerge |`boolean`|Optional|After column move, whether to re-apply the same [merge](./set-auto-merge) as previously set
`0(false)`:Do not re-apply merge same as previously set after column move (`default`)
`1(true)`:Re-apply merge same as previously set after column move|
|sync|`boolean`|Optional|Execute rendering with synchronous processing
`0(false)`:Asynchronous mode (`default`)
`1(true)`:Synchronous mode|

### Return Value
***array[boolean, boolean]*** : Result for each of the left and right settings

### Example
```javascript
//Fix 4 columns on the left and 1 column on the right.
sheet.setFixedCols(4,1);
```

### Read More
- [setFixedLeft method](./set-fixed-left)
- [setFixedRight method](./set-fixed-right)
- [setColWidth method](./set-col-width)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.1.0.16|`sync` Feature added|
