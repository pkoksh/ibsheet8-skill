---
KEY: xlsImportMode
KIND: config-property
PATH: props/cfg/xls-import-mode
ALIAS_EN: determines, whether, switch, server, module, selecting, xls, file
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/xls-import-mode
---
# XlsImportMode ***(cfg)***

> Determines whether to switch to the server module when selecting an xls file in the file selection dialog when using the importData() function. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Use client module. (`default`)|
|`1(true)`|Use server module.|

### Example
```javascript
options.Cfg = {
    XlsImportMode: 1
};

// Automatically switches to server module when selecting an xls file in the file selection dialog.
sheet.importData();
```

### Read More
- [importData method](/docs/funcs/core/import-data)
- [loadExcel method](/docs/funcs/excel/load-excel)

### Since

|product|version|desc|
|---|---|---|
|excel|8.2.0.16|Feature added|
