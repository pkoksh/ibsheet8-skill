---
KEY: headerCheckMode
KIND: config-property
PATH: props/cfg/header-check-mode
ALIAS_EN: sheet, header, checkboxes, headercheck, cfg, col, enabled, rows
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/header-check-mode
---
# HeaderCheckMode ***(cfg)***

> In a sheet with header checkboxes (`HeaderCheck (cfg, col)`) enabled, sets which rows are targeted for checking when clicking the header checkbox of a `Bool` type column.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
| `0` | All rows in the sheet (`default`)|
| `1` | Only visible rows in the sheet |

### Example
```javascript
options = {
    Cfg :{
        HeaderCheck: 1,  // Creates checkboxes in the header of all Bool type columns.
        HeaderCheckMode: 1, // Checks only visible rows (filtered rows or rows with Visible 0 are not checked)
        ...
    }
};
```

### Read More
- [HeaderCheck col](/docs/props/col/header-check)
- [HeaderCheck cfg](./header-check)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
