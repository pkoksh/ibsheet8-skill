---
KEY: copyEdit
KIND: config-property
PATH: props/cfg/copy-edit
ALIAS_EN: whether, copy, cell, value, mask, included, format, docs
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/copy-edit
---
# CopyEdit ***(cfg)***

> Sets whether to copy the cell value with the mask-included format ([Format](/docs/props/col/format)) or the format used during editing ([EditFormat](/docs/props/col/edit-format)) when copying the selected cell value to the `clipboard` via `ctrl+c`. 

> When pasting a value via `ctrl+v`, it is appropriate to copy the cell value with [EditFormat](/docs/props/col/edit-format) applied.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Copy cell value with `Format` applied. If `CustomFormat` is set, `CustomFormat` is applied with priority|
|`1`|Copy cell value with `EditFormat` applied (`default`)|


### Example
```javascript
options = {
    "Cfg":{
      "CopyEdit": 0,  // Copy cell value with Format applied
    }
};
```

### Read More
- [Format col](/docs/props/col/format)
- [CustomFormat col](/docs/props/col/custom-format)
- [EditFormat col](/docs/props/col/edit-format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
