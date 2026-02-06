---
KEY: extractDataText
KIND: method
PATH: funcs/core/extract-data-text
ALIAS: sheet.extractDataText, extractDataText()
ALIAS_EN: sheet, header, including, data, stringcolumnas, returns, extractdatatext, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/extract-data-text
---
# extractDataText ***(method)***
> sheet's header including all data Stringcolumnas returns.

> Returns data separated by tab (`\t`) between columns and line break (`\r\n`) between rows as a string.


> **<mark>Note</mark> : data count the more there are, performance issue may be triggered.**

### Syntax
```javascript
string extractDataText( excludeHideData );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|excludeHideData|`boolean`|Optional|hidden column, data excluding return whether
`0(false)`:hidden column, Include data (`default`)
`1(true)`:hidden column, data exclude|

### Return Value
***string*** : sheet's all data (Header, Head, Data, Foot, FormulaRow)

### Example
```javascript
// sheet's all data stringas return
var txt = sheet.extractDataText();

// hidden column, data exclude
var txt = sheet.extractDataText( {excludeHideData:1 } );
```

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.6|Feature added|
|core|8.2.0.7|`excludeHideData` argument added|
<!--!|`[Private]` core-lwc|8.1.1.94|Feature added|
|`[Private]` core-lwc|8.1.1.95|`excludeHideData` argument added|
!-->
