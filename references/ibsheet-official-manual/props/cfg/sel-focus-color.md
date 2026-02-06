---
KEY: selFocusColor
KIND: config-property
PATH: props/cfg/sel-focus-color
ALIAS_EN: changes, background, color, header, row, seq, column, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/sel-focus-color
---
# SelFocusColor ***(cfg)***

> Changes the background color of the header row and SEQ column row when the sheet is focused or an area is selected.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Feature not used (`default`)|
|`1`|Apply background color change to header row and SEQ column row|

### Example
```javascript
options.Cfg = {
    SelFocusColor : 1            // Change background color of header row and SEQ column row
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.92|Feature added|
