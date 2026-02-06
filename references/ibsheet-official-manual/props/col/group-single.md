---
KEY: groupSingle
KIND: column-property
PATH: props/col/group-single
ALIAS_EN: creating, group, row, based, column, whether, create, child
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/group-single
---
# GroupSingle ***(col)***
> When creating a group row based on this column, sets whether to create a group column when all child node values are the same (when all values of the group reference column are identical).


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Do not create a group column when all column content is the same|
|`1(true)`|Create a group column even when all column content is identical (`default`)|


### Example
```javascript
// Do not create a group column when all values in the column are the same
options.Cols = [
    ...
    {Type: "Text", Name: "SA_DEPTID", GroupSingle: 0, ...},
    ...
];
```

### Read More
- [GroupFormat cfg](/docs/props/cfg/group-format)
- [CanGroup col](./can-group)
- [GroupDef col](./group-def)
- [GroupWidth col](./group-width)
- [GroupEmpty col](./group-empty)
- [GroupSole col](./group-sole)
- [GroupDeleted col](./group-deleted)
- [GroupChar col](./group-char)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
