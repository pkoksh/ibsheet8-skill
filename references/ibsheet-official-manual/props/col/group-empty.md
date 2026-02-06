---
KEY: groupEmpty
KIND: column-property
PATH: props/col/group-empty
ALIAS_EN: whether, group, empty, values, groupempty, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/group-empty
---
# GroupEmpty ***(col)***
> Sets whether to group `0` or `""(empty)` values.

> Rows excluded from grouping are positioned at the top.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Neither 0 nor ""(empty) can be grouped|
|`1`|0 can be grouped but ""(empty) cannot be grouped|
|`2`|Both 0 and ""(empty) can be grouped (`default`)|



### Example
```javascript
// Exclude ""(empty) rows from the group
options.Cols = [
    ...
    {Type: "Text", Name: "Product_Name", Width: 100, GroupEmpty: 0, ...},
    ...
];
```

### Read More
- [GroupFormat cfg](/docs/props/cfg/group-format)
- [CanGroup col](./can-group)
- [GroupDef col](./group-def)
- [GroupWidth col](./group-width)
- [GroupSole col](./group-sole)
- [GroupSingle col](./group-single)
- [GroupDeleted col](./group-deleted)
- [GroupChar col](./group-char)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
