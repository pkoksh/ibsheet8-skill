---
KEY: removeRow
KIND: method
PATH: funcs/core/remove-row
ALIAS: sheet.removeRow, removeRow()
ALIAS_EN: removes, specified, row, removerow, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/remove-row
---
# removeRow ***(method)***
> Removes the specified row. 

> The [data row object](/docs/appx/row-object) is removed and immediately reflected on screen. 

> When using `removeRow` to remove multiple rows consecutively, set the `norender` argument to `1`, perform all operations, and then you must use `renderBody()`. Also, when using merge in the sheet, you must use `setAutoMerge()` after `renderBody()`. 
 When removing multiple rows at once, using `removeRows` eliminates the need for the above steps.

### Syntax
```javascript
void removeRow( row, nomerge, norender );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|Required|[data row object](/docs/appx/row-object)|
|nomerge|`boolean`|Optional|When [DataMerge cfg](/docs/props/cfg/data-merge) value is not `0`, whether to immediately recalculate merge
`0(false)`:Recalculate merge after row deletion (`default`)
`1(true)`:Do not recalculate merge after row deletion|
|norender|`boolean`|Optional<mark>(Usage Note)</mark>|Whether to immediately reflect on screen
After using this feature, when executing extra operations, `renderBody()` must be executed first.
`0(false)`:Immediately reflected (`default`)
`1(true)`:Not reflected
|

### Return Value
***none***

### Example
```javascript
// Remove the AR5 row.
sheet.removeRow({row:sheet.getRowById("AR5")});

// Remove checked rows.
var rows = sheet.getRowsByChecked("chk");
for (var i = 0; i < rows.length; i++) {
    sheet.removeRow(rows[i], null, 1);
}
sheet.renderBody(); // Must be called for subsequent operations to work.

var rows = sheet.getRowsByChecked("chk");
for (var i = 0; i < rows.length; i++) {
    sheet.removeRow(rows[i], null, 1);
}
sheet.renderBody(); // Must be called for subsequent operations to work.
sheet.setAutoMerge(3,3,1); // For sheets with merge, the merge operation must be performed again.
```

### Read More
- [deleteRow method](./delete-row)
- [deleteRows method](./delete-rows)
- [removeRows method](./remove-rows)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.7|`norender` added|
