---
KEY: canFilter
KIND: column-property
PATH: props/col/can-filter
ALIAS_EN: disables, filter, feature, specific, column, canfilter, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/can-filter
---
# CanFilter ***(col)***

> Disables the filter feature for a specific column.

> When this property is used, the filter cell for the column becomes non-editable.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Filter disabled|
|`1`|Filter enabled (`default`)|
|`2`|When used in a tree, if all child nodes are hidden, the parent is also hidden.|


### Example
```javascript
// Block filtering for a specific column
options.Cols = [
    ...
    {Type: "Int", Name: "Rank_Sales", CanFilter: 0 ...},
    ...
];
```

### Read More
- [showFilter cfg](/docs/props/cfg/show-filter)
- [CanMove col](./can-move)
- [CanResize col](./can-resize)
- [CanSort col](./can-sort)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
