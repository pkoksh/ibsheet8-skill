---
KEY: setFixedBottom
KIND: method
PATH: funcs/core/set-fixed-bottom
ALIAS: sheet.setFixedBottom, setFixedBottom()
ALIAS_EN: fixes, data, rows, bottom, foot, area, setfixedbottom, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-fixed-bottom
---
# setFixedBottom ***(method)***
> Fixes data rows to the bottom `Foot` area.

> Starting from the bottom row, the specified `count` number of rows are fixed.

> **Note: This feature can only be used with `SearchMode: 1,2`.**

> **Cannot be used together with `DataMerge`, and the feature is limited if the number of fixed rows is too large for the sheet's height.**


### Syntax
```javascript
boolean setFixedBottom( count, render );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|count |`number`|Optional|Number of data rows to fix at the bottom|
|render |`boolean`|Optional|whether immediately reflect on screen
If this feature is set to `0(false)`, you must execute `rerender()` at the end of the operation for it to be reflected on screen.
`0(false)`:Not reflected
`1(true)`:Immediately reflected (`default`)|

### Return Value
***boolean*** : Result of the setting

### Example
```javascript
// Fix 4 data rows starting from the bottom data row.
sheet.setFixedBottom(4,1);
```

### Read More
- [setFixedTop method](./set-fixed-top)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.23|Feature added|
