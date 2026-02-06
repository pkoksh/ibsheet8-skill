---
KEY: canGroup
KIND: column-property
PATH: props/col/can-group
ALIAS_EN: whether, column, grouped, cangroup, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/can-group
---
# CanGroup ***(col)***
> Sets whether the column can be grouped.

> For the grouping feature where users drag header cells to dynamically configure groups, you can set specific columns to be excluded from grouping.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Grouping disabled|
|`1(true)`|Grouping enabled (`default`)|


### Example
```javascript
// Disable grouping for a specific column
options.Cols = [
    ...
    {Type: "Text", Name: "SA_DEPTID", CanGroup: 0, ...},
    ...
];
```

### Read More

- [GroupFormat cfg](/docs/props/cfg/group-format)
- [GroupDef col](./group-def)
- [GroupWidth col](./group-width)
- [GroupEmpty col](./group-empty)
- [GroupSole col](./group-sole)
- [GroupSingle col](./group-single)
- [GroupDeleted col](./group-deleted)
- [GroupChar col](./group-char)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
