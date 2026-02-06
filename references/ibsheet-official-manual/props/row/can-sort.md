---
KEY: canSort
KIND: row-property
PATH: props/row/can-sort
ALIAS_EN: whether, sorting, allowed, child, rows, tree, cansort, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/can-sort
---
# CanSort ***(row)***

> Sets whether sorting is allowed for child rows when using a tree.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Sorting disabled|
|`1(true)`|Sorting enabled|


### Example
```javascript
//Allow sorting for child rows of a specific row.
var row = sheet.getNextSiblingRow(true);
row["CanSort"] = 1;
```

### Read More
- [SortPos row](/docs/props/row/sort-pos)
- [CanSort col](/docs/props/col/can-sort)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
