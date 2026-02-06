---
KEY: sizeIgnoreDecimalSep
KIND: cell-property
PATH: props/cell/size-ignore-decimal-sep
ALIAS_EN: entered, string, numeric, feature, excludes, group, separator, decimal
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/size-ignore-decimal-sep
---
# SizeIgnoreDecimalSep ***(cell)***
> When the entered string is numeric, this feature excludes the group separator and decimal separator characters from the character count limit set for the column.

> In the Locale message files (ko.js, en.js, etc.), the group separator is configured as `Format.GroupSeparator` and the decimal separator as `Format.DecimalSeparator`.

> **<mark>Note</mark> : The `Size` property must be set on the Col or Cell for this feature to work.**



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`boolean`|Determines whether the entered data is numeric using the group separator and decimal separator, and if so, whether to exclude separator characters from the maximum character count
(`Int`, `Float` type: `default:1(true)`, other types: `default:0(false)`)
Group separator (`Format.GroupSeparator`) characters used worldwide: `,`, `.`, ` `, `'`
Decimal separator (`Format.DecimalSeparator`) characters used worldwide: `,`, `.`|

### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "SizeIgnoreDecimalSep", true);


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSSizeIgnoreDecimalSep"] = true;
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});

//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSSizeIgnoreDecimalSep": true ...}
    ]
}
```


### Read More
- [Size cell](/docs/props/cell/size)
- [UnicodeByteMode cfg](/docs/props/cfg/unicode-byte-mode)


### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.15|Feature added|
