---
KEY: groupDef
KIND: column-property
PATH: props/col/group-def
ALIAS_EN: specifies, common, settings, apply, group, rows, column, grouped
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/group-def
---
# GroupDef ***(col)***
> Specifies the common settings to apply to group rows when the column is grouped.

> During sheet initialization, you can set custom features in the `Def` area and specify the ID defined in `Def` for the column.

> When setting custom features in the `Def` area, <b>`Group` must be set in the `Def` property</b> for it to work correctly.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Custom feature ID set in Def|



### Example
```javascript
options.Def = {
    // Custom group row settings
    "myGroupRow": {Def: "Group", Color: "#FFADAD", CanEdit: 0, CanFocus: 0}
};

// Apply custom group settings to a specific column
options.Cols = [
    ...
    {Type: "Text", Name: "SA_DEPTID", GroupDef: "myGroupRow", ...},
    ...
];
```

### Read More
- [GroupFormat cfg](/docs/props/cfg/group-format)
- [CanGroup col](./can-group)
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
