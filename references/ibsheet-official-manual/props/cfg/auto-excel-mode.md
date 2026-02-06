---
KEY: autoExcelMode
KIND: config-property
PATH: props/cfg/auto-excel-mode
ALIAS_EN: mode, allows, you, choose, whether, server, module, client
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/auto-excel-mode
---
# AutoExcelMode ***(cfg)***

> This mode allows you to choose whether to use the server module or the client module when downloading/uploading Excel files using the down2Excel() and loadExcel() functions. 

> If not configured separately, the server module is used by default. 

> Setting `AutoExcelMode` to `1` is the same as using the server module ([down2Excel](/docs/funcs/excel/down-to-excel), [loadExcel](/docs/funcs/excel/load-excel)).

> Setting `AutoExcelMode` to `2` is the same as using the client module ([exportData](/docs/funcs/core/export-data), [importData](/docs/funcs/core/import-data)). If you only want to use the client module, you can also use ([exportData](/docs/funcs/core/export-data), [importData](/docs/funcs/core/import-data)) without any separate configuration. 

> Setting `AutoExcelMode` to `3` creates an **automatic branching point** between the server module ([down2Excel](/docs/funcs/excel/down-to-excel), [loadExcel](/docs/funcs/excel/load-excel)) and the client module ([exportData](/docs/funcs/core/export-data), [importData](/docs/funcs/core/import-data)) based on browser capability. 


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`1`|Uses the server module (`down2Excel, loadExcel`). (`default`)|
|`2`|Uses the client module (`exportData, importData`). **(Available only in IE10 and above)** |
|`3`|Creates an **automatic branching point** between server module and client module based on browser capability. 
 For older browsers (IE9 and below): `Server module`, For modern browsers: `Client module`.|

### Example
```javascript
options.Cfg = {
    // Use server module
    AutoExcelMode: 1
};
//  AutoExcelMode: 1, server module Excel download
sheet.down2Excel({fileName: "Excel.xlsx"});

options.Cfg = {
    // Use client module
    AutoExcelMode: 2
};
// Modern browser (IE10 and above), AutoExcelMode: 2, client upload
sheet.loadExcel(); // Same as sheet.importData().

options.Cfg = {
    // Client module, server module automatic branching point.
    AutoExcelMode: 3
};
// Modern browser (IE10 and above), AutoExcelMode: 3, client Excel download
sheet.down2Excel({fileName: "Excel.xlsx"});

```

### Read More
- [down2Excel method](/docs/funcs/excel/down-to-excel)
- [exportData method](/docs/funcs/core/export-data)
- [importData method](/docs/funcs/core/import-data)
- [loadExcel method](/docs/funcs/excel/load-excel)

### Since

|product|version|desc|
|---|---|---|
|excel|8.0.0.4|Feature added|
|excel|8.0.0.5|Name changed `ExportMode => AutoExcelMode`|
