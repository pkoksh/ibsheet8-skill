---
KEY: onBeforeCheckAll
KIND: event
PATH: events/on-before-check-all
ALIAS_EN: event, called, cells, bool, type, column, checked, unchecked
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-before-check-all
---
# onBeforeCheckAll ***(event)***
> Event called before all cells in a `Bool` type column are checked/unchecked via user click or [setAllCheck](/docs/funcs/core/set-all-check) in the sheet.

> Returning `0(false)` prevents the column-wide check/uncheck from proceeding.

> (Note: Unlike most events where returning 1(true) ignores the input, in this event returning false ignores the input)

### Syntax

```
    onBeforeCheckAll: function(paramObject) {

    }
or
    sheet.bind("onBeforeCheckAll" , function(paramObject) {});
```

### Parameters

| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the column-wide check/uncheck will occur|
|col|`string`|Column name where the column-wide check/uncheck will occur|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onBeforeCheckAll:function(evtParam){
        if(!confirm("Do you want to check the " + evtParam.col + " column?")){
            return false;
        }
    }
}
```

### Read More

- [setAllCheck method](/docs/funcs/core/set-all-check)
- [onCheckAllFinish event](/docs/events/on-check-all-finish)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.8|Feature added|
