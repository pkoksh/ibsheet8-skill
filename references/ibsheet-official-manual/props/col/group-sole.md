---
KEY: groupSole
KIND: column-property
PATH: props/col/group-sole
ALIAS_EN: creating, group, row, based, column, whether, exclude, groups
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/group-sole
---
# GroupSole ***(col)***
> When creating a group row based on this column, sets whether to exclude groups that have only one child row.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Do not group when the child row is a single row|
|`1(true)`|Group regardless of the number of child rows (`default`)|


### Example
```javascript
// Do not group single child rows
options.Cols = [
    ...
    {Type: "Text", Name: "SA_DEPTID", GroupSole: 0, ...},
    ...
];
```

### Read More
- [GroupFormat cfg](/docs/props/cfg/group-format)
- [CanGroup col](./can-group)
- [GroupDef col](./group-def)
- [GroupWidth col](./group-width)
- [GroupEmpty col](./group-empty)
- [GroupSingle col](./group-single)
- [GroupDeleted col](./group-deleted)
- [GroupChar col](./group-char)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
