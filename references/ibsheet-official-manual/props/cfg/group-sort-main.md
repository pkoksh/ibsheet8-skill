---
KEY: groupSortMain
KIND: config-property
PATH: props/cfg/group-sort-main
ALIAS_EN: ascending, descending, sort, order, group, column, grouping, groupsortmain
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/group-sort-main
---
# GroupSortMain ***(cfg)***

> Sets the ascending/descending sort order for the group column when using grouping.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`1`|Ascending sort (`default`)|
|`2`|Descending sort|


### Example
```javascript
options.Cfg = {
    "GroupSortMain": 2       // Sort the grouping column in descending order.
};
```

### Read More
- [Group cfg](./group)
- [GroupMain cfg](./group-main)
- [Solid appendix](/docs/appx/solid)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
