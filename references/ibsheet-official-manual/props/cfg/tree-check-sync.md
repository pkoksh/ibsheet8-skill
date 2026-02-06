---
KEY: treeCheckSync
KIND: config-property
PATH: props/cfg/tree-check-sync
ALIAS_EN: sheet, tree, feature, maincol, docs, props, cfg, main
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/tree-check-sync
---
# TreeCheckSync ***(cfg)***

> In a sheet using the tree feature through [MainCol](/docs/props/cfg/main-col), sets whether to automatically check child nodes when a parent is checked based on the parent-child relationship when using `Icon: "Check"`.

> When using a tree, this works effectively on all columns where `Icon: "Check"` is set. 



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Normal mode (check regardless of parent/child relationship)|
|`1`|Relationship mode (automatically check/uncheck based on parent/child relationship, when only some children are checked, the parent checkbox is checked as '?') (`default`)|
|`2`|Relationship mode (automatically check/uncheck based on parent/child relationship, when only some children are checked, the parent checkbox is checked as 'v') |

### Example
```javascript
options.Cfg = {
   "TreeCheckSync": 0
};
```

### Read More
- [MainCol cfg](/docs/props/cfg/main-col)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.4|Feature added|
|core|8.2.0.2|Mode 2 added|
