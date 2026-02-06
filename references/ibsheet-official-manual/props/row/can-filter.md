---
KEY: canFilter
KIND: row-property
PATH: props/row/can-filter
ALIAS_EN: whether, filtering, applied, specific, row, canfilter
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/can-filter
---
# CanFilter ***(row)***
> Sets whether filtering is applied to a specific row.

> When set to `0(false)`, the row will always be visible regardless of filter settings.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Excluded from filtering|
|`1(true)`|Filtering applied|


### Example
```javascript
// Make specific rows always visible regardless of filters.
{"data":[
    ...
    {"CanFilter":0,"ColName1":"Value1","ColName2":"Value2", ...},
    ...
]}
```

### Read More
- [showFilterRow method](/docs/funcs/core/show-filter-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
