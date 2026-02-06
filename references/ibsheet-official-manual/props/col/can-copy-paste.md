---
KEY: canCopyPaste
KIND: column-property
PATH: props/col/can-copy-paste
ALIAS_EN: restricts, copying, via, ctrl, pasting, column, cancopypaste, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/can-copy-paste
---
# CanCopyPaste ***(col)***
> Restricts copying via `ctrl+c`, `ctrl+x` and pasting via `ctrl+v` for the column.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Copy/paste disabled
When `ctrl+c` or `ctrl+x` is performed on a column with `CanCopyPaste: 0`, an empty cell is copied and `ctrl+v` is ignored.
 When copying/pasting a range via drag within the sheet, columns with `CanCopyPaste: 0` are skipped as if they do not exist and copied to the clipboard.
|
|`1(true)`|Copy/paste enabled (`default`)|



### Example
```javascript
// Disable copying of data in a specific column
options.Cols = [
    ...
    {Type: "Int", Name: "Rank_Sales", CanCopyPaste: false ...},
    ...
];
```

### Read More
- [CanEdit col](./can-edit)
- [CanMove col](./can-move)
- [CanResize col](./can-resize)
- [CanSort col](./can-sort)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
