---
KEY: useHeaderSortCancel
KIND: config-property
PATH: props/cfg/use-header-sort-cancel
ALIAS_EN: normally, sorting, clicking, header, cell, alternates, ascending, descending
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/use-header-sort-cancel
---
# UseHeaderSortCancel ***(cfg)***
> Normally, when sorting by clicking a header cell, it alternates between ascending and descending order.
> When `UseHeaderSortCancel` is set to `1(true)`, the order changes to ascending, descending, and then **sort cancel**.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
| `0(false)` | Header click sort order is ascending, descending (`default`) |
| `1(true)` | Header click sort order is ascending, descending, sort cancel |

### Example
```javascript
options = {
    Cfg :{
        UseHeaderSortCancel: true,
        ...
    }
};
```

### Read More
- [HeaderSortMode cfg](/docs/props/cfg/header-sort-mode)
- [MaxSort cfg](/docs/props/cfg/max-sort)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|Feature added|
