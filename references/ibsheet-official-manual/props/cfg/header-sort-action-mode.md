---
KEY: headerSortActionMode
KIND: config-property
PATH: props/cfg/header-sort-action-mode
ALIAS_EN: determines, sorting, performed, header, click, ctrl, headersortactionmode, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/header-sort-action-mode
---
# HeaderSortActionMode ***(cfg)***

> Determines how sorting is performed on header click/Ctrl click.</br>
> Depending on the option, single column sorting or multi-column sorting is executed.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
| `0(false)` | Click uses multi-sort, Ctrl click uses single sort. (`default`)|
| `1(true)` | Click uses single sort, Ctrl click uses multi-sort.|

### Example
```javascript
options.Cfg = {
    HeaderSortActionMode: true,
    ...
};
```

### Read More
- [MaxSort cfg](/docs/props/cfg/max-sort)
- [HeaderSortMode cfg](/docs/props/cfg/header-sort-mode)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|Feature added|
