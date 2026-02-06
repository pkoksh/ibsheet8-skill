---
KEY: sortPos
KIND: row-property
PATH: props/row/sort-pos
ALIAS_EN: fixes, position, specified, row, sorting, sortpos
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/sort-pos
---
# SortPos ***(row)***
> Fixes the position of a specified row when sorting.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`positive`|The row will be positioned at the specified order among rows that have `SortPos` set, counting from the top.
 For example, if set to `2`, the row will be fixed at the second position among rows with `SortPos` set below the header.
 If there is only one row with `SortPos` set, it will be positioned at the first row.|
|`negative`|The row will be positioned at the specified index counting from the bottom.
For example, if set to `1`, the row will be fixed at the very bottom.|


### Example
```javascript
//Position specified rows at the top when sorting.
var row = sheet.getFocusedRow();
row["SortPos"] = 1;
```

### Read More
- [CanSort col](/docs/props/col/can-sort)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
