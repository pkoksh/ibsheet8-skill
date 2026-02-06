---
KEY: copyCols
KIND: config-property
PATH: props/cfg/copy-cols
ALIAS_EN: columns, copy, paste, copycols, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/copy-cols
---
# CopyCols ***(cfg)***

> Sets the columns to use for copy and paste.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Use only the focused column for pasting|
|`1`|Use all visible columns for pasting (If `SelectingCells : 0`, this value is set as `default`.)|
|`2`|Use all columns for pasting (including hidden columns)|
|`3`|Only for the focused row, use the focused cell range or all visible columns (`default`)|


### Example
```javascript
options = {
    "Cfg":{
      "CopyCols": 1,  // Use all visible columns for pasting
    }
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.20|Feature added|
