---
KEY: rangeEnumIconLeft
KIND: config-property
PATH: props/cfg/range-enum-icon-left
ALIAS_EN: whether, position, checkbox, icon, menu, left, range, docs
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/range-enum-icon-left
---
# RangeEnumIconLeft ***(cfg)***

> Sets whether to position the checkbox icon of the menu on the left when using the [Range](/docs/props/col/range) property with the `Enum` type.

### Type
`boolean`


### Options

|Value|Description|
|-----|-----|
|`0(false)`| Position the `Enum` type checkbox on the right (`default`)|
|`1(true)`| Position the `Enum` type checkbox on the left|


### Example
```javascript
options.Cfg = {
    RangeEnumIconLeft : true
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.8|Feature added|
