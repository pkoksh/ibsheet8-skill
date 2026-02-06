---
KEY: enumOpenMode
KIND: config-property
PATH: props/cfg/enum-open-mode
ALIAS_EN: open, enum, list, focus, navigation, enumopenmode, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/enum-open-mode
---
# EnumOpenMode ***(cfg)***

> Sets how to open the Enum list during focus navigation. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|0(false)|Do not display the Enum list on focus|
|1(true)|Display the Enum list on focus (`default`)|

### Example
```javascript
options.Cfg = {
  EnumOpenMode: false      // Do not display the Enum list on focus
};
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.11|Feature added|
