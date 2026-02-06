---
KEY: size
KIND: cell-property
PATH: props/cell/size
ALIAS_EN: maximum, number, characters, entered, cell, size
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/size
---
# Size ***(cell)***
> Sets the maximum number of characters that can be entered in the cell. 

> When [cfg.UnicodeByteMode](/docs/props/cfg/unicode-byte-mode) is set, input is restricted by calculating the byte count of Korean characters.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Maximum number of characters that can be entered|

### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Size", 20);


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSSize"] = 15;
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSSize": 10, ...}
    ]
}
```
### Read More
- [Size col](/docs/props/col/size)
- [SizeIgnoreDecimalSep cel](/docs/props/cell/size-ignore-decimal-sep)
- [UnicodeByteMode cfg](/docs/props/cfg/unicode-byte-mode)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
