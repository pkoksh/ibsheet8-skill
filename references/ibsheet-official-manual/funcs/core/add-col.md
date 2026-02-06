---
KEY: addCol
KIND: method
PATH: funcs/core/add-col
ALIAS: sheet.addCol, addCol()
ALIAS_EN: dynamically, adds, column, already, created, sheet, addcol, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/add-col
---
# addCol ***(method)***

> Dynamically adds a column to an already created sheet. 

> When adding multiple columns, set the `render` argument to `false` and you must call `rerender` after the operation is complete. If `Formula` calculation reflection is needed, you must call `calculate` for the calculations to be applied.

### Syntax
```javascript
object addCol( name, section, pos, param, visible, render );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|name|`string`|Required|Column name to add|
|section|`number`|Optional|Area to add to
`0`:Left area
`1`:Center area (`default`)
`2`:Right area|
|pos|`number`|Optional|Position within the section (starts from 0, -1 for the rightmost column) (`default: 0`)|
|param|`object`|Optional|Column attributes (e.g.: `{Type:"Text", Header:"Title", Width:120, CanEdit:0}` )
|visible|`boolean`|Optional|Whether to be `Visible` on screen after creation
`0(false)`:Hidden (`default`)
`1(true)`:Visible|
|render|`boolean`|Optional|Whether to immediately reflect on screen
If this feature is set to `0(false)`, you must execute `rerender()` at the end of the operation for it to be reflected on screen.
`0(false)`:Not reflected
`1(true)`:Immediately reflected (`default`)|

### Return Value
***object*** : Created column object (returns `null` if an already existing column name is entered in the name argument)

### Example
```javascript
// Add a column "Name:EXT_SUBSUM" as the last column in the center area
sheet.addCol( "EXT_SUBSUM", 1, -1, {Type:"Int",Header:"Subtotal",Width:200,CanEdit:1,Color:"#DADADA"}, true );

// render argument false
for (var i = 0; i < 50; i++) {
  sheet.addCol( "EXT_SUBSUM" + i, 1, -1, {Type:"Int",Header:"Subtotal",Width:200,CanEdit:1,Color:"#DADADA"}, true, false );
}

sheet.rerender();
```

### Read More
- [addRow method](./add-row)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.17|`render` argument added|
