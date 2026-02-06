---
KEY: blur
KIND: method
PATH: funcs/core/blur
ALIAS: sheet.blur, blur()
ALIAS_EN: removes, focus, sheet, blur, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/blur
---
# blur ***(method)***
> Removes focus from the sheet.

> When opening a layer popup via a button on the sheet, you must remove focus from the sheet to smoothly move focus within the layer popup.

### Syntax
```javascript
boolean blur( mode );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|mode|`number`|Optional| Sets whether to remove focus from the internal cells of the sheet and/or the sheet itself.
`0`:Remove all (`default`)
`1`:Remove focus from internal cells only
`2`:Remove focus from the sheet only|



### Return Value
***boolean*** : Returns `true` if focus was successfully removed, `false` if focus removal failed

### Example
```javascript
//Remove focus from the current sheet before opening a layer popup (cell focus is maintained)
sheet.blur(2);
dialog.dialog( "open" );
```

### Read More
- [focus method](./focus)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
