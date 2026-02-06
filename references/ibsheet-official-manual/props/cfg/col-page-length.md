---
KEY: colPageLength
KIND: config-property
PATH: props/cfg/col-page-length
ALIAS_EN: number, columns, col, render, colpage, docs, funcs, core
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/col-page-length
---
# ColPageLength ***(cfg)***

> Sets the number of columns (`Col`) to render when using [ColPage](/docs/funcs/core/col-page).

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Number of columns per page unit (`default: 10`)|


### Example
```javascript
options = {
  Cfg :{
    SearchMode: 2,
    ColPage: 1,
    ColPageLength: 20,  // Number of columns to display per page
  }
};
```

### Read More
- [ColPage](/docs/funcs/core/col-page)
- [Understanding Col Structure](/docs/start/col)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.11|Feature added|
