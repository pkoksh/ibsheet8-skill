---
KEY: setFixedRight
KIND: method
PATH: funcs/core/set-fixed-right
ALIAS: sheet.setFixedRight, setFixedRight()
ALIAS_EN: fixes, specified, number, columns, right, section, position, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-fixed-right
---
# setFixedRight ***(method)***
> Fixes the specified number of columns to the right (`Section:2`) position of the sheet. (Fixed pane)

> The specified column count includes `Hidden` columns as well.


###
![Fixed pane](/assets/imgs/setFixedCols1.png)
<!-- IMAGE: Screenshot/Example Image - Fixed pane -->


### Syntax
```javascript
array setFixedRight( count, reMerge, sync );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|count |`number`|Optional|Number of columns to fix in the right area
(If not set or set to `0`, all columns in the corresponding area are moved to the center area)|
|reMerge |`boolean`|Optional|After column move, re-apply the same as previously set [merge](./set-auto-merge) again applied whether
`0(false)`:Do not re-apply merge same as previously set after column move (`default`)
`1(true)`:Re-apply merge same as previously set after column move|
|sync|`boolean`|Optional|Execute rendering synchronously processing
`0(false)`:Asynchronous mode (`default`)
`1(true)`:Synchronous mode|

### Return Value
***boolean*** : Processing result (returns `false` if there is no change)

### Example
```javascript
// Fix 2 columns to the right.
sheet.setFixedRight(2);
```

### Read More
- [setFixedLeft method](./set-fixed-left)
- [setFixedCols method](./set-fixed-cols)
- [setColWidth method](./set-col-width)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.1.0.16|`sync` Feature added|
