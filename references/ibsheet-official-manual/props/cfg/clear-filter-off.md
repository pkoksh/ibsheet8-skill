---
KEY: clearFilterOff
KIND: config-property
PATH: props/cfg/clear-filter-off
ALIAS_EN: whether, delete, filter, cell, value, selecting, disabled, among
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/clear-filter-off
---
# ClearFilterOff ***(cfg)***

> Sets whether to delete the filter cell value when selecting Disabled(X) among filter row operators.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Keep filter cell value when selecting filter Disabled(x) (`default`)|
|`1`|Delete filter cell value when selecting filter Disabled(x)|


### Example
```javascript
options = {
  "Cfg":{
    "ClearFilterOff":1,  // Delete filter cell value when selecting filter Disabled(x)
  }
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
