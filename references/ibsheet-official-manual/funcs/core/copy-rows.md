---
KEY: copyRows
KIND: method
PATH: funcs/core/copy-rows
ALIAS: sheet.copyRows, copyRows()
ALIAS_EN: specified, rows, specific, positionas, copy, copyrows, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/copy-rows
---
# copyRows ***(method)***

> specified rows specific positionas copy.

> Internally, since this is an action of copying and adding multiple rows (ctrl+c, ctrl+v), [onAfterRowCopy](/docs/events/on-after-row-copy) event and [onAfterRowAdd](/docs/events/on-after-row-add)event is triggered.

### Syntax
```javascript
object copyRows( rows, next, empty, parent, child, forceVisible );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|rows|`object`|Required|[data row object](/docs/appx/row-object) array|
|next|`object`|Optional|[data row object](/docs/appx/row-object)
(nextThe row specified by rowsrows are copied above the specified row. If no value, copied to the last row)|
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
***array[row object]*** : Copied [data row object](/docs/appx/row-object)s

### Example
```javascript
//AR5,AR6,AR9Copy rows to the top
sheet.copyRows({rows:[
    sheet.getRowById("AR5"),
    sheet.getRowById("AR6"),
    sheet.getRowById("AR9")
    ], next:sheet.getFirstRow()});




//Copies rows with CHK column checked to the last row of sheet2
function work(){
    var chkRows = sheet.getRowsByChecked("CHK");
    sheet2.copyRows({rows:chkRows});
}
```

### Read More
- [copyRow method](./copy-row)
- [addRow method](./add-row)
- [moveRow method](./move-rows)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
