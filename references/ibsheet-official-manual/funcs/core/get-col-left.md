---
KEY: getColLeft
KIND: method
PATH: funcs/core/get-col-left
ALIAS: sheet.getColLeft, getColLeft()
ALIAS_EN: specific, column, position, sectionof, start, based, onas, check
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-col-left
---
# getColLeft ***(method)***

> specific column's position each sectionof start based onas check.

### Syntax
```javascript
number getColLeft( col );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|col|`string`|Required|OKwant to column name|


### Return Value
***number*** : Distance from the leftmost point of the section to the left end of the current column (px unit)

### Example
```javascript
//AMT column's xaxis offset value check
var colOff = sheet.getColLeft("AMT");
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
