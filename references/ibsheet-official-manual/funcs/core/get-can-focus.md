---
KEY: getCanFocus
KIND: method
PATH: funcs/core/get-can-focus
ALIAS: sheet.getCanFocus, getCanFocus()
ALIAS_EN: checks, whether, specific, row, cell, focused, getcanfocus, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-can-focus
---
# getCanFocus ***(method)***

> Checks whether a specific row or cell can be focused.




### Syntax
```javascript
boolean getCanFocus( row, col );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|row |`object`|Required|[data row object](/docs/appx/row-object)|
|col |`string`|Optional|column name|

### Return Value
***boolean*** : focus possible whether (`0(false)`: focus not possible, `1(true)`: focus possible)

### Example
```javascript
//id AR33 row focus enter possible whether check
var cf = sheet.getCanFocus(sheet.getRowById("AR33"));

//specific cell focus enter possible whether check
var cf = sheet.getCanFocus(sheet.getRowById("AR5") , "CA_DSC");
```

### Read More
- [focus method](./focus)
- [isFocused method](./is-focused)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
