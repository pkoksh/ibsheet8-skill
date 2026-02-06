---
KEY: showHint
KIND: method
PATH: funcs/core/show-hint
ALIAS: sheet.showHint, showHint()
ALIAS_EN: enables, cell, hint, tooltip, showhint, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/show-hint
---
# showHint ***(method)***
> Enables the cell's hint (tooltip).


###
![Hint enabled](/assets/imgs/hint1.png "When the mouse cursor is over a cell, the hidden portion is shown through a hint")
<!-- IMAGE: Screenshot/Example Image - Hint enabled -->

[Hint example]

### Syntax
```javascript
boolean showHint( row, col, staticMode );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|Required|[data row object](/docs/appx/row-object)|
|col |`string`|Required|column name|
|staticMode|`boolean`|Optional|`0(false)` : When the mouse cursor moves over the sheet (whether header or data), the previously enabled hint is hidden. (`default`)
`1(true)` : Regardless of the mouse cursor, the previously enabled hint is hidden when a hint is enabled on a different cell.

### Return Value
***boolean*** : Returns `true` if the hint is enabled, `false` if not

### Example
```javascript
var r5 = sheet.getRowById("AR8");
// Show hint for the "CPT_WASH_TI_NM" column of the AR8 row.
sheet.showHint(r5, "CPT_WASH_TI_NM");
```

### Read More

- [hideHint method](./hide-hint)
- [onHint event](/docs/events/on-show-hint)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.1|argument name changed(`static`->`staticMode`)|
