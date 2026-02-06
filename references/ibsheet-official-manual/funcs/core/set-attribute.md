---
KEY: setAttribute
KIND: method
PATH: funcs/core/set-attribute
ALIAS: sheet.setAttribute, setAttribute()
ALIAS_EN: property, specific, row, column, cell, setattribute, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-attribute
---
# setAttribute ***(method)***

> Sets a property for a specific row, column, or cell.

> If `row` is `null`, the property is set for the column.

> If `col` is `null`, the property is set for the row.

> Since not all properties can be set this way, if a dedicated function exists for the property, it is recommended to use that function instead.

> For `Visible` and `Width`, it is recommended to call the related functions instead of setAttribute.

>  - `hideCol`, `showCol`, `hideRow`, `setColWidth`

### Syntax
```javascript
void setAttribute( row, col, attr, val, render );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|Optional|[data row object](/docs/appx/row-object)|
|col |`string`|Optional|column name|
|attr|`string`|Required|Property name to set|
|val|`mixed`|Required|Property value to set|
|render|`boolean`|Optional|whether immediately reflect on screen
If this feature is set to `0(false)`, you must execute `rerender()` at the end of the operation for it to be reflected on screen.
`0(false)`:Not reflected
`1(true)`:Immediately reflected (`default`)|

### Return Value
***none***

### Example
```javascript
// Change a specific cell's background color to red
sheet.setAttribute(sheet.getFocusedRow(), sheet.getFocusedCol() ,"Color" ,"#FF0000" ,1);
// Make a specific column non-editable
sheet.setAttribute(null, "ColName", "CanEdit", 0, 1);
// Make a specific row's text bold
sheet.setAttribute({row:sheet.getRowById("AR20"), attr:"TextStyle", val:1, render:1});
```

### Read More
- [getAttribute method](./get-attribute)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
