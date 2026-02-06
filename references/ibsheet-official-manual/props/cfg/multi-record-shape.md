---
KEY: multiRecordShape
KIND: config-property
PATH: props/cfg/multi-record-shape
ALIAS_EN: setting, makes, excel, file, downloads, appear, shown, screen
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/multi-record-shape
---
# MultiRecordShape ***(cfg)***

> A setting that makes Excel file downloads appear as shown on screen in sheets using the MultiRecord ([MultiRecord](/docs/props/cfg/multi-record)) feature.

> Only supported for server module downloads ([down2Excel](/docs/funcs/excel/down-to-excel)). Client module downloads ([exportData](/docs/funcs/core/export-data)) are not supported.

> Not supported in [showDownloadDialog](/docs/funcs/dialog/show-download-dialog) which downloads using a dialog.



### Type
`number`


### Options
|Value|Description|
|-----|-----|
|`0`|Download with columns displayed in a single line (`default`)|
|`1`|Download with columns displayed as shown in the sheet|
<!--!
|`[Private]` `2`|Operates in MultiRecord shape during Select|
|`[Private]` `4`|Operates in MultiRecord shape during Copy/Paste|
!-->


### Example
```javascript
options.Cfg = {
   MultiRecord: 1,  // Set as a MultiRecord dedicated sheet
   MultiRecordShape: 1,  // Download Excel file in the shape of the MultiRecord sheet
   ...
};

// API usage
sheet.down2Excel({ sheetDesign: 1, merge: 1 }); // Execute Excel download
```

### Read More

- [MultiRecord cfg](/docs/props/cfg/multi-record)
- [down2Excel method](/docs/funcs/excel/down-to-excel)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|excel|0.0.0|Feature added|
<!--!
|`[Private]` core|8.0.0.17|`2(Select)`, `4(Copy/Paste)` feature added|
!-->
