---
KEY: useGroupSubTotal
KIND: config-property
PATH: props/cfg/use-group-sub-total
ALIAS_EN: sheet, grouping, adds, subtotal, rows, group, usegroupsubtotal, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/use-group-sub-total
---
# UseGroupSubTotal ***(cfg)***

> When the sheet is being used with grouping, adds subtotal rows for each group to the sheet.

> When setting this option, the group feature must be in use, and the column property [GroupSubTotal](/docs/props/col/group-sub-total) option must be set for it to work.


### Type
`Int`

### Options
|Value|Description|
|-----|-----|
|`0`|Do not use group subtotal feature. (`default`)|
|`1`|Use group subtotal feature, adding subtotal rows as new rows.|
|`2`|Use group subtotal feature, displaying subtotals in the group row.|

### Example
```javascript
options.Cfg = {
    UseGroupSubTotal: 1              // Whether to use group subtotal feature
};
```

### Read More
- [Group cfg](./group)
- [GroupSubTotal col](/docs/props/col/group-sub-total)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.8|Feature added|
|core|8.3.0.42|`UseGroupSubTotal: 2` feature added|
