---
KEY: remove-Col
KIND: method
PATH: funcs/core/remove-Col
ALIAS: sheet.remove-Col, remove-Col()
ALIAS_EN: specified, columnof, dataand, area, delete, removecol, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/remove-Col
---
# removeCol ***(method)***
> specified columnof dataand area Delete. 

> When removing multiple columns, set the `render` argument to `false` and then you must call `rerender` after all operations.

### Syntax
```javascript
void removeCol( col, render );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|col|`string`|Required|to delete column name|
|render|`boolean`|Optional|whether immediately reflect on screen
If this feature is set to `0(false)`, you must execute `rerender()` at the end of the operation for it to be reflected on screen.
`0(false)`:Not reflected
`1(true)`:Immediately reflected (`default`)|

### Return Value
***none***

### Example
```javascript
// sName column Delete.
sheet.removeCol("sName");

// render argument false
for (var i = 0; i < 50; i++) {
  sheet.removeCol( "EXT_SUBSUM" + i, false );
}
sheet.rerender();
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.17|`render` argument added|
