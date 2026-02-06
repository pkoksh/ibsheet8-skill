---
KEY: filterEnumIconLeft
KIND: config-property
PATH: props/cfg/filter-enum-icon-left
ALIAS_EN: whether, position, checkbox, icon, left, side, filter, menu
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/filter-enum-icon-left
---
# FilterEnumIconLeft ***(cfg)***

> Sets whether to position the checkbox icon on the left side of the filter menu created when filtering `Enum` type columns.

### Type
`boolean`


### Options

|Value|Description|
|-----|-----|
|`0(false)`| Position `Enum` type filter checkbox on the right (`default`)|
|`1(true)`| Position `Enum` type filter checkbox on the left|


### Example
```javascript
options.Cfg = {
    FilterEnumIconLeft: true
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.6|Feature added|
