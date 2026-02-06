---
KEY: setString
KIND: method
PATH: funcs/core/set-string
ALIAS: sheet.setString, setString()
ALIAS_EN: modifies, date, type, cell, value, format, applied, string
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-string
---
# setString ***(method)***
> Modifies a `Date` type cell's value with a format-applied date string.

> For `Enum, Radio` type cells with [EnumKeys](/docs/props/cell/enum-keys) defined, saves with the specified `EnumKeys` value.


### Syntax
```javascript
void setString( row, col, val, render);
```

### Parameters


|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|Required|[data row object](/docs/appx/row-object)|
|col |`string`|Required|column name|
|val |`string`|Required|Input value (value matching the cell type) |
|render |`boolean`|Optional|whether immediately reflect on screen
If this feature is set to `0(false)`, you must execute `rerender()` at the end of the operation for it to be reflected on screen.
`0(false)`:Not reflected
`1(true)`:Immediately reflected (`default`)|

### Return Value
***none***

### Example
```javascript
var r5 = sheet.getRowById("AR5");
//AR5 row value input
sheet.setString( r5, "StartDate", "2016/12/23" );
```

### Read More

- [EnumKeys cell](/docs/props/cell/enum-keys)
- [getValue method](./get-value)
- [setValue method](./set-value)
- [getString method](./get-string)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.3|Enum type, Radio type Enum value and EnumKeys matching Feature added|
