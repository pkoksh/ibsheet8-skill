---
KEY: isFocused
KIND: method
PATH: funcs/core/is-focused
ALIAS: sheet.isFocused, isFocused()
ALIAS_EN: specific, rowor, cell, focus, present, isfocused, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/is-focused
---
# isFocused ***(method)***
> specific rowor cell focus present OK.




### Syntax
```js
boolean isFocused( row, col );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|Required|[data row object](/docs/appx/row-object)|
|col |`string`|Optional|column name|

### Return Value
***boolean*** : focus presence (0:unfocused, 1:focused)

### Example
```javascript
//id AR33 row focus present check.
var isfo = sheet.isFocused(sheet.getRowById("AR33"));

//specific cell focus present OK.
var isfo = sheet.isFocused(sheet.getRowById("AR5"), "CA_DSC" );
```

### Read More
- [focus method](./focus)
- [getCanFocus method](./get-can-focus)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
