---
KEY: exportValue
KIND: cell-property
PATH: props/cell/export-value
ALIAS_EN: text, displayed, downloading, excel, exportvalue, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/export-value
---
# ExportValue ***(cell)***

> Sets the text to be displayed when downloading to Excel.

> For `Link` and `Img` types, the data format must be matched for the cell value to be displayed correctly.

> Example) Link type: "||ExportValue setting value|"

> Example) Img type: "|../image.jpg|50|50|0|0|||"

> For other types, the value is downloaded as the set string.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Text to be displayed when downloading to Excel|



### Example
```javascript
// 1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "ExportValue", "Please check the 'Balance Sheet' column first.");

// 2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSExportValue"] = "This period has been closed.";
// Verify changes
sheet.refreshCell({ row:ROW, col:"CLS" });

// 3. Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSExportValue": "Please enter the construction start date first." , ...}
    ]
}
```

### Read More
- [exportData method](/docs/funcs/core/export-data)
- [down2Excel method](/docs/funcs/excel/down-to-excel)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.19|Feature added|
|excel|1.0.6|Feature added|
