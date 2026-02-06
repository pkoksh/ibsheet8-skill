---
KEY: filterDefaultsMaxWidth
KIND: config-property
PATH: props/cfg/filter-defaults-max-width
ALIAS_EN: maxwidth, filter, menu, created, defaults, docs, props, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/filter-defaults-max-width
---
# FilterDefaultsMaxWidth ***(cfg)***

> Sets the `MaxWidth` of the filter menu created when using [Defaults](/docs/props/col/defaults) in the filter row. 

> If the width of the filter menu to be created is smaller than the set value, the original width takes priority. If it is larger than the set value, the filter menu width is reduced and a horizontal scrollbar is created. 


### Type
`number`


### Options

|Value|Description|
|-----|-----|
|`number`|MaxWidth of the filter Defaults menu|


### Example
```javascript
options.Cfg = {
    FilterDefaultsMaxWidth: 500
};
```

### Read More
 - [Defaults col](/docs/props/col/defaults)
 - [FilterEnumIconLeft cfg](./filter-enum-icon-left)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.34|Feature added|
