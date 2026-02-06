---
KEY: filterValueList
KIND: config-property
PATH: props/cfg/filter-value-list
ALIAS_EN: handle, specific, cell, filter, row, value, list, filtervaluelist
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/filter-value-list
---
# FilterValueList ***(cfg)***

> Sets how to handle when a specific cell in the filter row has a value list.


### Type
`number`


### Options
|Value|Description|
|-----|-----|
|`0`|Shows empty value as-is when filter value is empty (`default`) |
|`1`|When `Button: "Defaults"` and `Defaults` is set to `*Row`, displays the string defined in `Lang.Text.FilterEmptyValue` in the message file when the filter value is empty |
|`2`|For `Enum` type, displays the string defined in `Lang.Text.FilterEmptyValue` in the message file when the filter value is empty |
|`3`|Applies both `setting 1` and `setting 2` simultaneously |

### Example
```javascript
options.Cfg = {
   FilterValueList: 1
   ...
};
```

### Read More
- [Type appendix](/docs/appx/type)
- [Button col](/docs/props/col/button)
- [Defaults col](/docs/props/col/defaults)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
