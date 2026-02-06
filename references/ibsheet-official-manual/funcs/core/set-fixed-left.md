---
KEY: setFixedLeft
KIND: method
PATH: funcs/core/set-fixed-left
ALIAS: sheet.setFixedLeft, setFixedLeft()
ALIAS_EN: fixes, specified, number, columns, left, section, position, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-fixed-left
---
# setFixedLeft ***(method)***
> Fixes the specified number of columns to the left (`Section:0`) position of the sheet. (Fixed pane)

> The specified column count includes `Hidden` columns as well.

> **Even if the `SEQ column` was not created under `LeftCols` during initialization, the `SEQ column` may exist in a `Hidden` state.

> Therefore, when using `setFixedCols`, the `left` argument must always be calculated including the `SEQ column`.**

###
![Fixed pane](/assets/imgs/setFixedCols1.png)
<!-- IMAGE: Screenshot/Example Image - Fixed pane -->


### Syntax
```javascript
array setFixedLeft( count, reMerge, sync );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|count |`number`|Optional|Number of columns in the left area
(If not set or set to `0`, all columns in the corresponding area are moved to the center area)|
|reMerge |`boolean`|Optional|Whether to re-apply the previously set [merge](./set-auto-merge) after column move
`0(false)`:Do not re-apply merge same as previously set after column move (`default`)
`1(true)`:Re-apply merge same as previously set after column move|
|sync|`boolean`|Optional|Execute rendering synchronously processing
`0(false)`:Asynchronous mode (`default`)
`1(true)`:Synchronous mode|

### Return Value
***boolean*** : Processing result (returns `false` if there is no change)

### Example
```javascript
// Fix 4 columns to the left and re-apply merge.
sheet.setFixedLeft(4, 1);
```

### Read More
- [setFixedRight method](./set-fixed-right)
- [setFixedCols method](./set-fixed-cols)
- [setColWidth method](./set-col-width)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.1.0.16|`sync` Feature added|
