---
KEY: dataAutoTrim
KIND: config-property
PATH: props/cfg/data-auto-trim
ALIAS_EN: whether, trim, whitespace, data, retrieving, dataautotrim, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/data-auto-trim
---
# DataAutoTrim ***(cfg)***
> Sets whether to trim whitespace from data when retrieving. 

> If this property is set to `1(true)`, leading and trailing whitespace is automatically removed from data during retrieval, data input, and `setValue`.


> **<mark>Caution</mark> : Using this option may affect retrieval performance.
In retrieval modes other than `SearchMode:0 (FastLoad)` or `SearchMode:3 (ScrollAppend)`, performance degradation may be more significant depending on the amount of data.** 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Do not trim data when retrieving (`default`)|
|`1(true)`|Automatically trim data when retrieving|


### Example
```javascript
// Trim all data when retrieving
options.Cfg = {
    DataAutoTrim: true
};
```

### Read More
- [SearchMode cfg](/docs/props/cfg/search-mode)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|Feature added|
|core|8.0.0.19|Added whitespace handling for data input and `setValue` as well|
