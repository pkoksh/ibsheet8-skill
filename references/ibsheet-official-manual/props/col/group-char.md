---
KEY: groupChar
KIND: column-property
PATH: props/col/group-char
ALIAS_EN: feature, splits, values, within, group, reference, column, based
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/group-char
---
# GroupChar ***(col)***
> A feature that splits values within a group reference column based on a specific character to create child nodes.

> For example, if the column has values like "ABCD-EF12","ABCD-EF22" and you declare `GroupChar: "-"`, the actual values will be displayed as follows:


###
![GroupChar](/assets/imgs/groupChar.png "Re-groups within content based on a specific character.")
<!-- IMAGE: Screenshot/Example Image - GroupChar -->


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Character to use as the split delimiter within group data|

### Example
```javascript
// Group by splitting on a specific character
options.Cols = [
    ...
    {Type: "Text", Name: "Product_Name", Width: 100, GroupChar: "-", ...},
    ...
];
```

### Read More
- [GroupFormat cfg](/docs/props/cfg/group-format)
- [MaxChars col](./max-chars)
- [CanGroup col](./can-group)
- [GroupDef col](./group-def)
- [GroupWidth col](./group-width)
- [GroupEmpty col](./group-empty)
- [GroupSole col](./group-sole)
- [GroupSingle col](./group-single)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
