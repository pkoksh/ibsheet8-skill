---
KEY: orig
KIND: cell-property
PATH: props/cell/orig
ALIAS_EN: contains, data, initially, loaded, cell, orig
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/orig
---
# Orig ***(cell)***

> Contains the data initially loaded into the cell.

> Use this for reference when you need to check the original data from the initial load for a specific cell.
### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Orig`|Initially loaded data|


### Example
```javascript
// Check the original data before modification.
var orgValue = sheet.getAttribute(sheet.getRowById("AR99"), "CLS", "Orig");
```

### Read More
- [revertCell method](/docs/funcs/core/revert-cell)
- [revertRow method](/docs/funcs/core/revert-row)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
