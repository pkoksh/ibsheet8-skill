---
KEY: filterDefaultsIconLeft
KIND: config-property
PATH: props/cfg/filter-defaults-icon-left
ALIAS_EN: whether, position, checkbox, icon, left, side, filter, menu
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/filter-defaults-icon-left
---
# FilterDefaultsIconLeft ***(cfg)***

> Sets whether to position the checkbox icon on the left side of the filter menu created when filtering using [Defaults](/docs/props/col/defaults) in the filter row.

### Type
`boolean`


### Options

|Value|Description|
|-----|-----|
|`0(false)`|Position filter checkbox on the right (`default`)|
|`1(true)`|Position filter checkbox on the left|


### Example
```javascript
options.Cfg = {
    FilterDefaultsIconLeft: true
};
```

### Read More
 - [Defaults col](/docs/props/col/defaults)
 - [FilterEnumIconLeft cfg](./filter-enum-icon-left)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|Feature added|
