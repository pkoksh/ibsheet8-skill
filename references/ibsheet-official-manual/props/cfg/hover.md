---
KEY: hover
KIND: config-property
PATH: props/cfg/hover
ALIAS_EN: hover, action, mode, mouse, cursor, positioned, row, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/hover
---
# Hover ***(cfg)***

> Sets the `Hover` action mode when the mouse cursor is positioned on a row or cell in the sheet.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|No `Hover` action |
|`1`|Cell-level `Hover`|
|`2`|Row-level `Hover` (`default`)  |
|`3`|Row-level and column-level `Hover` (column-level `Hover` does not work in [MultiRecord](./multi-record)) |

### Example
```javascript
options.Cfg = {
    Hover: "1",       // Cell-level Hover action
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.3.0.47|Added `3` option|
