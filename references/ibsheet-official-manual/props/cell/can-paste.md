---
KEY: canPaste
KIND: cell-property
PATH: props/cell/can-paste
ALIAS_EN: restricts, pasting, specific, column, row, canpaste, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/can-paste
---
# CanPaste ***(cell)***
> Restricts pasting for a specific column in a row.

> When copying with `ctrl+c`, the data is stored in the clipboard, but pasting with `ctrl+v` is not allowed.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Pasting not allowed|
|`1(true)`|Pasting allowed (`default`)|


### Example
```javascript
// Method 1.
var ROW = sheet.getRowById("AR1");
ROW["sMoneyCanPaste"] = 0;

// Method 2.
var OPT = {
  "Def": {
    "Row": {
      "ColumnName": {
        CanPaste: 0
      }
      // or
      "ColumnNameCanPaste": 0
    }
  }
}
```

### Read More



### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.0|Feature added|
<!-- |`[Private]` core|8.2.0.0|Feature published| -->