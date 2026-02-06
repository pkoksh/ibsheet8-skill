---
KEY: autoSelectFirstenum
KIND: config-property
PATH: props/cfg/auto-select-firstenum
ALIAS_EN: first, item, enum, column, automatically, selected, autoselectfirstenum, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/auto-select-firstenum
---
# AutoSelectFirstEnum ***(cfg)***

> Sets the first item of an `Enum` column to be automatically selected.

> This works when adding rows or setting Enum/EnumKeys with the setAttribute function.

> When setting Enum/EnumKeys simultaneously, `EnumKeys` must be set first so that getValue can read the value of the first item.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Feature disabled (`default`)|
|`1(true)`|Sets the first Enum item value to be automatically selected|

### Example
```javascript
options.Cfg = {
    AutoSelectFirstEnum : 1(true)
};


sheet.setAttribute(sheet.getFocusedRow(), "ComboData", "EnumKeys", "|101|102");
sheet.setAttribute(sheet.getFocusedRow(), "ComboData", "Enum", "|In Progress|Completed");

```

### Read More
- [addRow](/docs/funcs/core/add-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.5|Feature added|
