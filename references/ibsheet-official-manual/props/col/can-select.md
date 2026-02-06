---
KEY: canSelect
KIND: column-property
PATH: props/col/can-select
ALIAS_EN: whether, column, selected, user, selects, partial, data, area
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/can-select
---
# CanSelect ***(col)***

> Sets whether the column can be selected when the user selects partial data in the data area via mouse drag.

> Columns set with `CanSelect: 0` are skipped during drag selection.


###
![canSelect](/assets/imgs/canSelect.png "Selection availability when selecting via drag")
<!-- IMAGE: Screenshot/Example Image - canSelect -->

When selected as shown above, pressing `ctrl+c` copies only the data from the February, March, and May columns to the clipboard.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Column selection disabled|
|`1(true)`|Column selection enabled (`default`)|

### Example
```javascript
// Set the AMT column as non-selectable
options.Cols = [
    ...
    {Type: "Int", CanEdit: 0, Name: "AMT", CanSelect: 0, Width: 120, ...},
    ...
];
```

### Read More
- [CanFocus col](./can-focus)
- [CanCopyPaste col](./can-copy-paste)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
