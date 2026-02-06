---
KEY: focusedCol
KIND: config-property
PATH: props/cfg/focused-col
ALIAS_EN: column, name, colname, focus, creating, reload, ing, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/focused-col
---
# FocusedCol ***(cfg)***

> Sets the column name (`ColName`) to focus on when creating or `reload`ing the sheet.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Column name to focus on|


### Example
```javascript
options.Cfg = {
    FocusedRow: "AR5",         // Focus on the fifth data row
    FocusedCol: "sawonName"    // Focus on the "sawonName" column of the focused row
};
```

### Read More
- [FocusedRow cfg](./focused-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
