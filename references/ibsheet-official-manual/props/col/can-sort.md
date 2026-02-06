---
KEY: canSort
KIND: column-property
PATH: props/col/can-sort
ALIAS_EN: whether, column, sorted, cansort, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/can-sort
---
# CanSort ***(col)***

> Sets whether the column can be sorted.

> Sorting occurs when the user clicks a cell in the header area. This sets whether to allow it.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|User sorting disabled|
|`1(true)`|User sorting enabled (`default`)|


### Example
```javascript
// Block sorting for a specific column
options.Cols = [
    ...
    {Type: "Int", Name: "Rank_Sales", CanSort: 0 ...},
    ...
];
```

### Read More
- [CanMove col](./can-move)
- [CanResize col](./can-resize)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
