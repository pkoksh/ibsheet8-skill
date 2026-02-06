---
KEY: headerCheck
KIND: config-property
PATH: props/cfg/header-check
ALIAS_EN: creates, checkboxes, headers, columns, bool, type, creating, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/header-check
---
# HeaderCheck ***(cfg)***

> Creates checkboxes in the headers of all columns with `Bool` type when creating the sheet. 

> Clicking the checkbox in the header cell **checks** or **unchecks** all checkboxes in that column.

> If you want to apply it to specific columns only, refer to [(Col)HeaderCheck](/docs/props/col/header-check).

### Type
`number`

### Options
|Value|Description|
|-----|-----|
| `0` | Do not create checkboxes (`default`)|
| `1` | Create checkboxes|

### Example
```javascript
options = {
    Cfg :{
        HeaderCheck: 1,  // Creates checkboxes in the header of all Bool type columns.
        ...
    }
};
```

### Read More
- [HeaderCheck col](/docs/props/col/header-check)
- [HeaderCheckMode cfg](./header-check-mode)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
