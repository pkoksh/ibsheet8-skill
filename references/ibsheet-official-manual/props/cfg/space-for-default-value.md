---
KEY: spaceForDefaultValue
KIND: config-property
PATH: props/cfg/space-for-default-value
ALIAS_EN: empty, string, data, displayed, defaultvalue, docs, props, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/space-for-default-value
---
# SpaceForDefaultValue ***(cfg)***

> Sets empty string ("") data to also be displayed as [DefaultValue](/docs/props/col/default-value). 

> When this property is `false`, [DefaultValue](/docs/props/col/default-value) is applied only when the cell has no value (null, undefined, no data).
### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Only data that is `null`, `undefined`, or `no data` is displayed with the value set in [DefaultValue](/docs/props/col/default-value) (`default`)|
|`1(true)`|Empty string ("") data is also displayed with the value set in [DefaultValue](/docs/props/col/default-value)|

### Example
```javascript
options.Cfg = {
    SpaceForDefaultValue: true,         // Empty string ("") data is also displayed as "Confirm"
};
options.Cols = [
    {Header: "Details", Type: "Button", Name: "DetailBnt", Button: "Button", DefalutValue: "Confirm"},
    ...
];
```

### Read More
- [DefaultValue col](/docs/props/col/default-value)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.8|Feature added|
