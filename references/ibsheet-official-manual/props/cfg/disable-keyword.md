---
KEY: disableKeyword
KIND: config-property
PATH: props/cfg/disable-keyword
ALIAS_EN: whether, reserved, keywords, filter, row, disablekeyword, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/disable-keyword
---
# DisableKeyWord ***(cfg)***

> Sets whether to use the reserved keywords `;(or)` and `,(and)` in the filter row.

> When this feature is set to `1(true)`, the reserved keyword functionality is disabled. When this feature is used, filtering is performed with the exact string entered in the filter row. 



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Use reserved keyword functionality (`default`)|
|`1(true)`|Do not use reserved keyword functionality|


### Example
```javascript
// Disables the reserved keywords `;` and `,` in the filter row.
options.Cfg = {
    DisableKeyWord: 1
};
```

### Read More
- [Filtering Feature](/docs/userGuide/filter)
- [showFilterRow](/docs/funcs/core/show-filter-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.53|Feature added|
