---
KEY: focus
KIND: method
PATH: funcs/core/focus
ALIAS: sheet.focus, focus()
ALIAS_EN: gives, focus, specified, cell, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/focus
---
# focus ***(method)***
> Gives focus to the specified cell.

> When setting focus via a button click outside the sheet, a delay must be applied using `setTimeout`.

### Syntax
```javascript
boolean focus( row, col, pagepos, ignoreEvent, triggerOnFocus );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|row|`object`|Required|[data row object](/docs/appx/row-object)|default value: the focused row if there is one, or the first visible row if there is none
|col|`string`|Required|column name|default value: the focused column if there is one, or the first visible column if there is none
|pagepos|`number`|Optional|Page specification when using server paging (`default: null`)|
|ignoreEvent|`boolean`|Optional|Whether to trigger `focus Event(onBeforeFocus, onFocus)` when the function is called
`0(false)`:Trigger `focus Event` (`default`)
`1(true)`:Do not trigger `focus Event`|
|triggerOnFocus|`boolean`|Optional|Always triggers `focus Event(onBeforeFocus, onFocus)` when an already selected cell is selected again via this function.
`0(false)`:Do not trigger `focus Event` when focusing on an already selected cell via this function (`default`)
`1(true)`:Trigger `focus Event` when focusing on an already selected cell via this function|

### Return Value
***boolean*** : Returns true if focus is set, false if the function is applied to an already focused cell, null if the corresponding cell does not exist

### Example
```javascript
// Set focus to a specific cell on button click
document.getElementById("btn_validCheck").onclick = function(){
    setTimeout(function(){
        var errRow = sheet.getRowById("AR4");
        sheet.focus(errRow, "CARNO");
    } , 10);
}
```

### Read More
- [blur method](./blur)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.7|`ignoreEvent` argument added|
|core|8.1.0.94|`triggerOnFocus` argument added|
