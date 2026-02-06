---
KEY: setIconCheck
KIND: method
PATH: funcs/core/set-icon-check
ALIAS: sheet.setIconCheck, setIconCheck()
ALIAS_EN: icon, attribute, check, cell, value, changed, seticoncheck, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-icon-check
---
# setIconCheck ***(method)***
> `Icon`attribute is `Check` cell check value Changed.

### Syntax
```javascript
void setIconCheck( row, col, val );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|Required|[data row object](/docs/appx/row-object)|
|col |`string`|Required|column name|
|val |`boolean`|Optional|Check/uncheck setting
`0(false)`:Uncheck
`1(true)`:Check
`null`:Toggle (`default`)|

### Return Value
***none***

### Example
```javascript
//Selected cell Icon Checkvalue uncheckas modify.
sheet.setIconCheck(sheet.getFocusedRow(), sheet.getFocusedCol(), 0);
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
