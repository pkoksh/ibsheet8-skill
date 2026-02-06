---
KEY: groupSort
KIND: config-property
PATH: props/cfg/group-sort
ALIAS_EN: whether, sort, reference, column, grouping, groupsort, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/group-sort
---
# GroupSort ***(cfg)***

> Sets whether to sort the reference column when grouping.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|0|Group in current state without sorting|
|1|Group after sorting (`default`)|


### Example
```javascript
options.Cfg = {
    "GroupSort": 0       // Group in current state without sorting
};
```

### Read More
- [Group cfg](./group)
- [GroupMain cfg](./group-main)
- [GroupSortMain](./group-sort-main)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.35|Feature added|
