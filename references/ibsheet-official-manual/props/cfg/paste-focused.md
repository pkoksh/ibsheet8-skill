---
KEY: pasteFocused
KIND: config-property
PATH: props/cfg/paste-focused
ALIAS_EN: paste, method, pasting, data, copied, ctrl, sheet, pastefocused
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/paste-focused
---
# PasteFocused ***(cfg)***

> Sets the paste method when pasting data copied with `ctrl+c` from the sheet using `ctrl+v`. 

> When pasting, there must be a focused row or cell in the target sheet.  



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Do not paste to the focused row.|
|`3`|Paste only to the focused row and its sub-level rows. If the copied range differs in row size from the selected area, non-matching areas are ignored. (`default`)|
|`6`|Add a new row above the focused row and paste.|
|`9`|Paste downward from the focused row, and if there are no more rows to overwrite, add rows and paste.|


### Example
```javascript
options = {
    Cfg :{
      PasteFocused: 6,  // Add new rows on ctrl+v
    }
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
