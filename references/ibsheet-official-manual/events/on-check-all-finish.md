---
KEY: onCheckAllFinish
KIND: event
PATH: events/on-check-all-finish
ALIAS_EN: event, called, cells, bool, type, column, checked, unchecked
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-check-all-finish
---
# onCheckAllFinish ***(event)***
> Event called when all cells in a `Bool` type column have been checked/unchecked via user click or [setAllCheck](/docs/funcs/core/set-all-check) in the sheet.


### Syntax

```
    onCheckAllFinish: function(paramObject) {

    }
or
    sheet.bind("onCheckAllFinish" , function(paramObject) {});
```

### Parameters

| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the column-wide check/uncheck has been completed|
|col|`string`|Column name where the column-wide check/uncheck has been completed|
|result|`boolean`|Whether all column cells are checked
`0(false)`:Unchecked
`1(true)`:Checked|

### Return
***none***

### Example
```javascript
options.Events = {
    onCheckAllFinish:function(evtParam){
        alert("The " + evtParam.col + " column check (" + evtParam.result + ") has been completed.");
    }
}
```

### Read More

- [setAllCheck method](/docs/funcs/core/set-all-check)
- [onBeforeCheckAll event](/docs/events/on-before-check-all)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.8|Feature added|
