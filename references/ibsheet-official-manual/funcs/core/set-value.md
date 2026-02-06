---
KEY: setValue
KIND: method
PATH: funcs/core/set-value
ALIAS: sheet.setValue, setValue()
ALIAS_EN: changes, cell, value, specified, setvalue, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-value
---
# setValue ***(method)***
> Changes a cell's value to the specified value. 

> By default, calling this function does not trigger edit-related events (`onAfterChange`, `onEndEdit`, etc.).

> However, when `setValue` is called during data edit state, the `onEndEdit` event is triggered. 

> In this case, you can prevent the event from being triggered using the `ignoreEvent` option.

> When Change event processing is required after the value is changed, the [OnChange](/docs/props/event/on-change) event must be used.

### Syntax
```javascript
boolean setValue( row, col, val, render, ignoreEvent, noCalc );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|Required|[data row object](/docs/appx/row-object)|
|col|`string`|Required|column name|
|val|`number` \| `string`|Required|Input value (value matching the cell type)|
|render|`boolean`|Optional|Whether to immediately reflect the changed value on screen. 
When set to `false(0)`, the change is not immediately reflected on screen, and after the operation is complete, you must call a rendering function such as `rerender()` or `refreshCell`, `refreshRow`, `renderBody` depending on the situation.
`true(1)`: Immediately reflected (`default`)|
|ignoreEvent|`object` \| `boolean`|Optional|Option to control whether events triggered by `setValue` are fired. 
Can be set in JSON object form, where the event name is set as the key value and `true` is set to prevent the corresponding event from being triggered. 
When set to `true/false`, only the `onEndEdit` event is controlled.|
|calc|`boolean`|Optional|Whether to perform formula calculation. 
 When set to `0(false)`, formula calculation is not performed during `setValue`. 
To reflect formulas afterwards, `calculate()` must be called. (`default:1`)|

### ignoreEvent Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| OnChange| `boolean` | Optional | Controls whether the `OnChange` event triggered by `setValue` is fired. When set to true, the corresponding event is not triggered. (`default: 0(false)`) |
| OnSame| `boolean` | Optional | Controls whether the `OnSame` event triggered by `setValue` is fired. When set to true, the corresponding event is not triggered. (`default: 0(false)`) |
|onEndEdit| `boolean` | Optional | When `setValue` is called during edit state, the `onEndEdit` event is triggered by default. 
 Controls whether the triggered `onEndEdit` event fires. 
 When set to true, the corresponding event is not triggered. (`default: 0(false)`)|

<!-- ### When setting ignoreEvent to true/false
When `ignoreEvent` is set to true/false, it operates as the existing 5th argument option `ignoreOnEndEdit`. 
By default, `ignoreOnEndEdit` operates the same as the `onEndEdit` argument of `ignoreEvent`, and when set to true, it prevents the `onEndEdit` event from being triggered. 
 However, this option has been deprecated, so using `ignoreEvent` is recommended. -->

### Return Value
***boolean*** : Whether the value was changed (returns `1(true)` if the value was changed, `0(false)` if not changed (same as existing value))

### Example
```javascript
// ================================
// Data row change example
// ================================

// Retrieve 5th row (row object id is AR5.)
var r5 = sheet.getRowById("AR5");

// Change StartDate, EndDate values of the AR5 data row
sheet.setValue( r5, "StartDate", "20160105");
sheet.setValue({row:r5, col:"EndDate", val:"20160315"});

// OnChange, onEndEdit not triggered
sheet.setValue({row:r5, col:"A", val:10, ignoreEvent:{onEndEdit:true,OnChange:true}});

// ================================
// Data row change example
// Multiple row iteration processing
// ================================

var Rows = sheet.getDataRows(); // Extract all data rows of the sheet

for(var i=0; i<Rows.length; i++){
    // Batch change the closed column (Name:close_data) column value
   // By setting render to false(0), delaying screen rendering improves speed
    sheet.setValue({row:Rows[i], col:"close_data", val:"Changed", render:0});

}
// Apply screen changes
sheet.rerender(1);

// ================================
// Header row change example
// ================================

var hr = sheet.getRowById("Header"); // Retrieve the topmost header row

// Change specific column header text
sheet.setValue(hr, "SalesToday", "Sales");
sheet.setValue(hr, "SalesSum", "Sales");
sheet.setValue(hr, "CostToday", "Cost");
sheet.setValue(hr, "CostSum", "Cost");

// Re-apply merge according to the situation after header text change (row-based merge)
sheet.setAutoMerge( {headerMerge:2});

// ================================
// Total row change example
// ================================

// (Col) FormulaRow set total columns are auto-calculated, so they cannot be directly changed with setValue.
var sumRow = sheet.getRowById("FormulaRow"); // Retrieve total row

// (Col) Columns without FormulaRow applied can be changed
sheet.setValue(sumRow , "Notes", "Total reference memo");

```

### Read More
- [getDataRows method](./get-data-rows)
- [getRowById method](./get-row-by-id)
- [getValue method](./get-value)
- [getString method](./get-string)
- [setAutoMerge method](./set-auto-merge)
- [setRowValue method](./set-row-value)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.11|`ignoreOnEndEdit` added|
|core|8.2.0.21|`ignoreEvent` added, `ignoreOnEndEdit` deprecated|
|core|8.3.0.45|`calc` added|
