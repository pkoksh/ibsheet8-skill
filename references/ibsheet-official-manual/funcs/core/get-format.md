---
KEY: getFormat
KIND: method
PATH: funcs/core/get-format
ALIAS: sheet.getFormat, getFormat()
ALIAS_EN: checks, format, specific, cell, getformat, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-format
---
# getFormat ***(method)***

> Checks the Format of a specific cell.

### Syntax
```javascript
string getFormat( row, col, edit );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|Required|[data row object](/docs/appx/row-object)|
|col |`string`|Required|column name|
|edit|`boolean`|Optional|Check EditFormat
`0(false)`:`Format` value return (`default`)
`1(true)`:`EditFormat` value return|

### Return Value
***string*** : Format string set for the cell (returns empty string ("") for cells without Format settings)

### Example
```javascript
// Check the format of a date cell
var f = sheet.getFormat( sheet.getFocusedRow(), "EnterDate" );
var ef = sheet.getFormat( sheet.getFocusedRow(), "EnterDate", 1);
if(f=="yyyy/MM/dd" && ef == "yyyyMMdd"){
  alert("'year/month/day' order format. ");
}
```

### Read More
- [getType method](./get-type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
