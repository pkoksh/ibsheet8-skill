---
KEY: setAllCheck
KIND: method
PATH: funcs/core/set-all-check
ALIAS: sheet.setAllCheck, setAllCheck()
ALIAS_EN: checks, unchecks, cells, bool, type, column, setallcheck, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-all-check
---
# setAllCheck ***(method)***
> Checks/unchecks all cells in a `Bool` type column.

> **If the cell is not editable, the value will not be modified. (To modify regardless of editability, use setValue)**

> The `ignoreEvent` argument can be used to control whether the event ([onAfterChange event](/docs/events/on-after-change)) is triggered. (`default: 0(false)`)

### Syntax
```javascript
void setAllCheck( col, val, ignoreEvent );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|col |`string`|Required|column name|
|val |`boolean`|Required|Whether to check
`0(false)`:Uncheck (`default`)
 `1(true)`:Check|
|ignoreEvent|`boolean`|Optional|Whether to trigger the event ([onAfterChange event](/docs/events/on-after-change))
`0(false)`:Trigger event(`default`)
`1(true)`:Do not trigger event|

### Return Value
***none***

### Example
```javascript
// Check all in the "CHK" column
sheet.setAllCheck("CHK", 1);

// Uncheck all in the "CHK" column without triggering the event.
sheet.setAllCheck("CHK", 0, true);
```
### Read More

- [setCheck method](./set-check)
- [onCheckAllFinish event](/docs/events/on-check-all-finish)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.7|ignoreEvent argument added|
