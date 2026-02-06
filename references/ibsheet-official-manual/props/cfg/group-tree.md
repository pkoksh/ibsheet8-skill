---
KEY: groupTree
KIND: config-property
PATH: props/cfg/group-tree
ALIAS_EN: uses, tree, nodes, group, reference, column, grouping, grouptree
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/group-tree
---
# GroupTree ***(cfg)***
> Uses tree nodes in each group reference column during grouping.

> Depending on the option, tree icon and [CanEdit](./can-edit) settings can be configured differently.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Disabled (`default`)|
|`1`|Non-editable ([CanEdit: 0](./can-edit)), tree icon positioned on the left|
|`2`|Non-editable ([CanEdit: 0](./can-edit)), tree icon positioned on the right|
|`3`|Editable ([CanEdit: 1](./can-edit)), tree icon positioned on the left|
|`4`|Editable ([CanEdit: 1](./can-edit)), tree icon positioned on the right|


### Example
```javascript
options.Cfg = {
    Group: "gender,age",    // Group by columns with colName gender and age when loading the sheet
    GroupTree: 3,           // Create collapse/expand tree nodes for gender and age columns
};
```

### Read More
- [Group cfg](./group)
<!--!
- `[Private]` [GroupTreeCol cfg](./group-tree-col)
!-->

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.21|Feature added|
