---
KEY: deleteRows
KIND: method
PATH: funcs/core/delete-rows
ALIAS: sheet.deleteRows, deleteRows()
ALIAS_EN: specified, rowsof, mark, state, deleteas, changed, deleterows, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/delete-rows
---
# deleteRows ***(method)***

> specified rowsof <mark>state Deleteas Changed</mark>.

> specified rows [Deleted](/docs/props/row/deleted) attribute value is set to `1`.

### Syntax
```javascript
boolean deleteRows( rows, del );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|rows|`array[object]`|Required|[data row object](/docs/appx/row-object) array|
|del|`number`|Optional|Delete whether
`0`:Cancel deletion
`1`:Delete (`default`)
`2`:After deletion, hide deleted rows(Visible:`0(false)` processing|


### Return Value
***boolean*** : status change result (state Delete/Cancel deletionas was changed, true, returns false if there is no change false return)

### Example
```javascript
//AR5,AR8 row for state is changed to Delete.
sheet.deleteRows({"rows":[sheet.getRowById("AR5"), sheet.getRowById("AR8")],"del":1});
```

### Read More
- [addRow method](./add-row)
- [addRows method](./add-rows)
- [deleteRow method](./delete-row)
- [removeRow method](./remove-row)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
