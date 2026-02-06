---
KEY: groupDeleted
KIND: column-property
PATH: props/col/group-deleted
ALIAS_EN: whether, include, rows, pending, deletion, deleted, docs, props
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/group-deleted
---
# GroupDeleted ***(col)***
> Sets whether to include rows pending deletion ([Deleted](/docs/props/row/deleted)) in grouping.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Rows pending deletion are excluded from grouping|
|`1(true)`|Rows pending deletion are included in grouping (`default`)|

### Example
```javascript
// Exclude rows pending deletion from grouping
options.Def.Col = {GroupDeleted: 0};
```

### Read More
- [GroupFormat cfg](/docs/props/cfg/group-format)
- [CanGroup col](./can-group)
- [GroupDef col](./group-def)
- [GroupWidth col](./group-width)
- [GroupEmpty col](./group-empty)
- [GroupSole col](./group-sole)
- [GroupSingle col](./group-single)
- [GroupChar col](./group-char)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
