---
KEY: standardFilter
KIND: config-property
PATH: props/cfg/standard-filter
ALIAS_EN: show, hide, behavior, child, nodes, filter, feature, tree
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/standard-filter
---
# StandardFilter ***(cfg)***

> Sets the show/hide behavior for child nodes when using the filter feature in a tree.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|0|Searches and filters from parent rows to child rows in order. (If only child rows have the searched value, they are not displayed.)|
|1|Prohibited (deprecated)|
|2|If the searched value is in a child row, both the corresponding row and parent rows are displayed. (`default`)|
|3|If the searched value is in a child row, both the parent rows and all children of that row are displayed.|


### Example
```javascript
options = {
    Cfg:{
      StandardFilter: 3 // When using filter in tree, also display children of found rows
    },
    Cols: [...]
 };

```

### Read More
- [showFilter method](/docs/props/cfg/show-filter)
- [showFilterRow method](/docs/funcs/core/show-filter-row)


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.47|Feature added|
