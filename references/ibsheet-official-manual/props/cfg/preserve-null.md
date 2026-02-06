---
KEY: preserveNull
KIND: config-property
PATH: props/cfg/preserve-null
ALIAS_EN: user, enters, data, null, value, bound, sheet, object
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/preserve-null
---
# PreserveNull ***(cfg)***

> When the user enters data as null, the null value is bound as-is to the sheet object, and when extracting data with `getSaveJson`, the data is extracted as null instead of "". 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
| `0` | Even if the user enters data as null, when extracting data with `getSaveJson`, the data is extracted as "" (`default`)|
| `1` | When the user enters data as null, when extracting data with `getSaveJson`, the data is extracted as the null value as-is |

### Example
```javascript
options = {
    Cfg :{
        PreserveNull: 1, // When the user enters data as null, extracting data with getSaveJson preserves the null value as-is
        ...
    }
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.34|Feature added|
