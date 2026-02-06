---
KEY: deleteRow
KIND: method
PATH: funcs/core/delete-row
ALIAS: sheet.deleteRow, deleteRow()
ALIAS_EN: specified, rowof, mark, state, deleteas, changed, deleterow, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/delete-row
---
# deleteRow ***(method)***

> specified rowof <mark>state Deleteas Changed</mark>.

> specified row [Deleted](/docs/props/row/deleted) attribute value is set to `1`.

> treeof case row status when changing to Delete case rowof child rowsalso Delete stateas Changed.

### Syntax
```javascript
boolean deleteRow( row , del , valid, visible);
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|row|`object`|Required|[data row object](/docs/appx/row-object)|
|del|`number`|Optional|Delete whether
`0`:Cancel deletion
`1`:Delete (`default`)|
|valid|`boolean`|Optional|Check delete/cancel deletion possibility
(actually does not actually delete/cancel; checks possibility and returns)
`0(false)`:Check delete/cancel deletion possibility inside (`default`)
`1(true)`:Check delete/cancel deletion possibility use|
|visible|`boolean`|Optional|Delete row screen whether to show whether
`0(false)`:Delete row Hidden
`1(true)`:Delete row Visible (`default`)|


### Return Value
***boolean*** : state change status (state Delete/Cancel deletionas was changed, true, returns false if there is no change false return)

### Example
```javascript
//AR5 row for state is changed to Delete.
sheet.deleteRow({row:sheet.getRowById("AR5"), del:1});
```

### Read More
- [addRow method](./add-row)
- [addRows method](./add-rows)
- [deleteRows method](./delete-rows)
- [removeRow method](./remove-row)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.1.0.38|visible Feature added|
