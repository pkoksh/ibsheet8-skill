---
KEY: copyPasteHidden
KIND: config-property
PATH: props/cfg/copy-paste-hidden
ALIAS_EN: whether, pasting, possible, hidden, rows, columns, provided, bitwise
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/copy-paste-hidden
---
# CopyPasteHidden ***(cfg)***

> Sets whether pasting is possible for hidden rows/columns. (Provided as bitwise operation)



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Pasting to hidden rows and columns is not possible (`default`)|
|`1`|Pasting to hidden columns is possible, pasting to hidden rows is not possible|
|`2`|Pasting to hidden rows is possible, pasting to hidden columns is not possible|


### Example
```javascript
options = {
    "Cfg":{
      "CopyPasteHidden":3,  // Enable pasting to hidden rows and columns
    }
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
