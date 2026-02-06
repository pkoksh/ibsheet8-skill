---
KEY: focusedRow
KIND: config-property
PATH: props/cfg/focused-row
ALIAS_EN: row, focus, creating, reload, ing, sheet, focusedrow, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/focused-row
---
# FocusedRow ***(cfg)***

> Sets the `ID` of the row to focus on when creating or `reload`ing the sheet.

> Data rows: `AR1, AR2 (AutoRow: AR + index)`, Solid rows: `SR1, SR2 (SolidRow: SR + index)`, Group rows: `GR1, GR2 (GroupRow: GR + index)`...
>


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|RowID [ Data row: `AR1(AutoRow + index)` ]|


### Example
```javascript
options.Cfg = {
    FocusedRow: "AR1",     // Focus on the first data row
    FocusedCol: "seq"      // Focus on the "seq" column of the focused row
};
```

### Read More
- [FocusedCol cfg](./focused-col)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
