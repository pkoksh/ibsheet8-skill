---
KEY: addRows
KIND: method
PATH: funcs/core/add-rows
ALIAS: sheet.addRows, addRows()
ALIAS_EN: adds, multiple, new, rows, addrows, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/add-rows
---
# addRows ***(method)***

> Adds multiple new rows.

> When using the tree feature, you must specify the `parent` argument to add rows at the desired level.

### Syntax
```javascript
object addRows( count, next, focus, parent, valid );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|count|`number`|Required|Number of rows to add|
|next|`object`|Optional|[Data row object](/docs/appx/row-object)
(New rows are created above the specified row. If no value is given, they are created at the last row)|
|focus|`boolean`|Optional|Whether to move focus to the created rows after creation
`0(false)`:Do not move focus
`1(true)`:Move focus (`default`)|
|parent|`object`|Optional|[Data row object](/docs/appx/row-object) (Specifies the parent row when using tree)|
|valid|`boolean`|Optional|Check whether row addition is possible
(Rows are not actually added; it checks and returns whether addition is possible or not)
`0(false)`:Do not check row addition possibility (`default`)
`1(true)`:Check row addition possibility|


### Return Value
***object*** : [Data row object](/docs/appx/row-object) of the topmost row among the added rows

### Example
```javascript
//Adds 3 new rows above the focused row.
var firtAddRow = sheet.addRows( {"count":3, "next":sheet.getFocusedRow()} );

//Adds 2 new rows at the selected row position.
sheet.addRows({"count":2, "parent":sheet.getFocusedRow().parentNode, "next":sheet.getFocusedRow()});
```

### Read More
- [addRow method](./add-row)
- [deleteRow method](./delete-row)
- [deleteRows method](./delete-rows)
- [removeRow method](./remove-row)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
