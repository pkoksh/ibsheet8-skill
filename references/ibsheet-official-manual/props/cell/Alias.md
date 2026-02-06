---
KEY: Alias
KIND: cell-property
PATH: props/cell/Alias
ALIAS_EN: cell, value, displayed, instead, actual, file, name, column
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/Alias
---
# Alias ***(cell)***
> Sets the cell value to be displayed instead of the actual file name when the column [Type](/docs/props/cell/type) is `File`.

> If not specified, the actual file name will be displayed as the cell value.
>
> You can set aliases for individual files in the cell by including a delimiter.
<!--!
> `[Private description]` Individual settings are also possible using arrays

> Not applied when `Format` is set.
!-->

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|String to display instead of the file name in `File` column cells|

### Example
```javascript
//1. Set property via method
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Alias", "myFile" );


//2. Set property by directly accessing the object (assuming column name is CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSAlias"] = "myFile";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Set property within loaded data (assuming column name is CLS)
{
    data:[
        {... , "CLSAlias":"myFile" , ...}
    ]
}

//4. Setting individual aliases
{
    data: [
        {
            "CLS": "testFile.xlsx;testFile2.xlsx",
            "CLSAlias": "file1;file2"
        }
    ]
}
```

### Read More
- [Type appendix](/docs/appx/type)
- [File Type Upload appendix](/docs/appx/file-type-upload)
- [Path cell](/docs/props/cell/path)
- [Format]

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|Feature added|
|core|8.3.0.21|Individual setting behavior improved|