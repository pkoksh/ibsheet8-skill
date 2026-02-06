---
KEY: copyRow
KIND: method
PATH: funcs/core/copy-row
ALIAS: sheet.copyRow, copyRow()
ALIAS_EN: copies, specified, row, specific, position, copyrow, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/copy-row
---
# copyRow ***(method)***

> Copies the specified row to a specific position.

### Syntax
```javascript
object copyRow( row , next , empty , parent , child, forceVisible );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|row|`object`|Required|[data row object](/docs/appx/row-object)|
|next|`object`|Optional|[data row object](/docs/appx/row-object)
(nextThe row specified by rowrow is copied above the specified row. If no value, copied to the last row)|
|empty|`boolean`|Optional|copy when Include data whether
`1(true)`When set to [onAfterRowCopy](/docs/events/on-after-row-copy) event is not triggered
`0(false)`:Include data (`default`)
`1(true)`:Exclude data|
|parent|`object`|Optional|[data row object](/docs/appx/row-object) (tree When using parent specifying the corresponding row)|
|child|`boolean`|Optional|tree When using whether to also copy child rows
`0(false)`:Exclude child rows (`default`)
`1(true)`:Include child rows|
|forceVisible|`boolean`|Optional|Set invisible rows to be visible when copying
`0(false)`:row Hidden(Visible:`0(false)`) state and copy (`default`)
`1(true)`:row Visible(Visible:`1(true)`) state and copy|

### Return Value
***object*** : Copied [data row object](/docs/appx/row-object)

### Example
```javascript
//AR5 Copy the row above the focused row
var row = sheet.copyRow({row:sheet.getRowById("AR5"), next:sheet.getFocusedRow()});

//AR5 Copy the row below the focused row
var row = sheet.copyRow({row:sheet.getRowById("AR5"), "next":sheet.getNextRow(sheet.getFocusedRow())});

//Hide the copied row.
row["Visible"] = 0;
sheet.renderBody();
```

### Read More
- [addRow method](./add-row)
- [moveRow method](./move-row)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|