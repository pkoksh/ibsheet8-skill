---
KEY: headerCheck
KIND: column-property
PATH: props/col/header-check
ALIAS_EN: creates, checkbox, header, bool, type, column, clicking, checks
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/header-check
---
# HeaderCheck ***(col>Header)***

> Creates a checkbox in the header of a `Bool` type column, and clicking the checkbox **checks** or **unchecks** all cell checkboxes in the column.

> To apply header checkboxes to all `Bool` type columns, refer to [(Cfg)HeaderCheck](/docs/props/cfg/header-check).

> When used together with [(Cfg)HeaderCheck](/docs/props/cfg/header-check), this property takes precedence.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
| `0` | Checkbox not created|
| `1` | Checkbox created|

### Example
```javascript
options.Cols = [
    ...
    {
        Header:{
            Value: "Checkbox",
            HeaderCheck: 1
        },
        Type: "Bool", Name: "sCheckBox", Width: 100, ...
    },
    ...
];
```

### Read More
- [HeaderCheck cfg](/docs/props/cfg/header-check)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
