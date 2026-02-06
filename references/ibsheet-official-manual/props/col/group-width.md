---
KEY: groupWidth
KIND: column-property
PATH: props/col/group-width
ALIAS_EN: column, grouped, adjusts, width, group, tree, created, specified
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/group-width
---
# GroupWidth ***(col)***
> When the column is grouped, adjusts the width of the column where the group tree will be created (the column specified in the `GroupMain` option; when `GroupMain` option is not set, the first column excluding `SEQ`) to the specified size.

When set to 1, the width is automatically adjusted based on the amount of data in the column.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Column width when grouped (in pixels)|



### Example
```javascript
// Set the width of the column where the group tree will be placed to 210px when the column is grouped
options.Cols = [
    ...
    {Type: "Text", Name: "SA_Name", Width: 100, GroupWidth: 210, ...},
    ...
];
```

### Read More
- [GroupFormat cfg](/docs/props/cfg/group-format)
- [CanGroup col](./can-group)
- [GroupDef col](./group-def)
- [GroupEmpty col](./group-empty)
- [GroupSole col](./group-sole)
- [GroupSingle col](./group-single)
- [GroupDeleted col](./group-deleted)
- [GroupChar col](./group-char)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
