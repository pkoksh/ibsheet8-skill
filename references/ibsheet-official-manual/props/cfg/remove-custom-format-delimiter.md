---
KEY: removeCustomFormatDelimiter
KIND: config-property
PATH: props/cfg/remove-custom-format-delimiter
ALIAS_EN: adds, feature, removes, delimiters, loaded, data, matches, configured
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/remove-custom-format-delimiter
---
# RemoveCustomFormatDelimiter ***(cfg)***

> Adds a feature that removes delimiters when the loaded data matches the configured CustomFormat.  

> To ensure the same CustomFormat is properly applied, the original data is replaced with data that has delimiters removed. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Do not remove delimiters (`default`)|
|`1(true)`|Remove delimiters when the format matches the configured CustomFormat|

### Example
```javascript
options.Cfg = {
  RemoveCustomFormatDelimiter: true      // Remove format delimiters
};
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.24|Feature added|
