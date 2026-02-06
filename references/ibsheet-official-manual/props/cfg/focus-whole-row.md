---
KEY: focusWholeRow
KIND: config-property
PATH: props/cfg/focus-whole-row
ALIAS_EN: whether, apply, focus, selected, cell, entire, row, selecting
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/focus-whole-row
---
# FocusWholeRow ***(cfg)***

> Sets whether to apply focus only to the selected cell or to the entire row when selecting a cell in the sheet.

> `Limitation` When using this feature, `Lines` type columns are set to non-editable `(CanEdit:0)`.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Focus applied at the cell level (`default`)|
|`1(true)`|Focus applied at the row level|


### Example
```javascript
options.Cfg = {
    FocusWholeRow: true     // Apply focus at the row level
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
