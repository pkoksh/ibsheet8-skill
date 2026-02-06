---
KEY: path
KIND: cell-property
PATH: props/cell/path
ALIAS_EN: column, type, docs, props, cell, file, path, download
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/path
---
# Path ***(cell)***
> When the column [Type](/docs/props/cell/type) is `File`, sets the path to download files from.

> When using the `File` [Type](/docs/props/cell/type), this must be configured for downloads to work properly. 

> Data is displayed in [File](/docs/appx/file-type-upload) type cells only when this property or [FilePath](/docs/props/cfg/export) is set. 

>
> You can set individual paths for files in the cell by including a delimiter.
<!--!
> `[Private description]` Individual path configuration is also possible using arrays
!-->

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`| Path to download files from |

### Example
```javascript
//1. Set property via method
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Path", "https://api.ibleaders.com/ibsheet/v8/samples/customer/files/");


//2. Apply property by directly accessing the object (assuming column name is CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSPath"] = "https://api.ibleaders.com/ibsheet/v8/samples/customer/files/";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (assuming column name is CLS)
{
    data:[
        {... , "CLS":"testFile.xlsx", "CLSPath":"https://api.ibleaders.com/ibsheet/v8/samples/customer/files/" , ...}
    ]
}

//4. When setting individual paths
{
    data: [
        {
            "CLS": "testFile.xlsx;testFile2.xlsx",
            "CLSPath": "https://api.ibleaders.com/ibsheet/v8/samples/customer/files/;https://api.ibleaders.com/ibsheet/v8/samples/customer/files2/"
        }
    ]
}
```

### Read More
- [Type appendix](/docs/appx/type)
- [File Type upload appendix](/docs/appx/file-type-upload)
- [Alias cell](/docs/props/cell/Alias)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|Feature added|
|core|8.3.0.21|Individual setting behavior improved|
