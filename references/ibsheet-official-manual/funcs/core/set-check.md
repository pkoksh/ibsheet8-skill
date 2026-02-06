---
KEY: setCheck
KIND: method
PATH: funcs/core/set-check
ALIAS: sheet.setCheck, setCheck()
ALIAS_EN: checks, unchecks, value, bool, type, cell, setcheck, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-check
---
# setCheck ***(method)***
> Checks/unchecks the value of a `Bool` type cell.

> **If the cell is not editable, the value is not modified. (To modify regardless of editability, use setValue)**

> You can check whether the value can be changed through the `valid` argument.

> If you check an already checked cell with `val` argument `1(true)` and `valid:1`, it returns `false`.

> Conversely, if you check an already unchecked cell with `val` argument `0(false)` and `valid:1`, it returns `true`.

> If the cell is not a `Bool` type or is not editable, checking with `valid:1` returns `false`.

### Syntax
```javascript
boolean setCheck( row, col, val, valid);
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|Required|[data row object](/docs/appx/row-object)|
|col |`string`|Required|column name|
|val |`boolean`|Required|Whether to check
`0(false)`:Uncheck 
`1(true)`:Check
`null`:Toggle (`default`)|
|valid|`boolean`|Optional|Whether to check if cell check/uncheck is possible
(Does not actually check/uncheck, but checks whether it is possible and returns the result)
`0(false)`:Do not check if check/uncheck is possible (`default`)
`1(true)`:Check if check/uncheck is possible|

### Return Value
***boolean*** : `true`: Value was changed `false`: Value was not changed

### Example
```javascript
var r5 = sheet.getRowById("AR5");
//Change the value of AR5 row "CHK" column to checked
sheet.setCheck(r5, "CHK", 1);

//Check whether the AR5 row "CHK" column value can be changed
var isChecked = sheet.setCheck(r5, "CHK", 0, 1);
```
### Read More

- [setValue method](./set-value)
- [setString method](./set-string)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
