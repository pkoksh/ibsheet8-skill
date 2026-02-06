---
KEY: setFixedTop
KIND: method
PATH: funcs/core/set-fixed-top
ALIAS: sheet.setFixedTop, setFixedTop()
ALIAS_EN: fixes, data, rows, top, setfixedtop, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-fixed-top
---
# setFixedTop ***(method)***
> Fixes data rows to the top.

> **Note: This feature cannot be used with `SearchMode: 0 or 3`.**

> **Note: Cannot be used together with `DataMerge`, and the sheet's data rows must have `at least 4 rows`.**

### Syntax
```javascript
boolean setFixedTop( count, render );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|count |`number`|Optional|Number of data rows to fix at the top|
|render |`boolean`|Optional|whether immediately reflect on screen
If this feature is set to `0(false)`, you must execute `rerender()` at the end of the operation for it to be reflected on screen.
`0(false)`:Not reflected
`1(true)`:Immediately reflected (`default`)|

### Return Value
***boolean*** : Result of the setting

### Example
```javascript
// Fix 4 data rows at the top, excluding header rows.
sheet.setFixedTop(4,1);
```

### Read More
- [setFixedBottom method](./set-fixed-bottom)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.13|`render` argument default Changed|
