---
KEY: setRangeAttribute
KIND: method
PATH: funcs/common/set-range-attribute
ALIAS: sheet.setRangeAttribute, setRangeAttribute()
ALIAS_EN: uses, setattribute, attribute, values, within, range, once, setrangeattribute
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/common/set-range-attribute
---
# setRangeAttribute ***(method)***

> Uses setAttribute to set attribute values within a range at once. 


### Syntax
```javascript
void setRangeAttribute( startRow, startCol, endRow, endCol, attr, val );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|startRow|`object`|Optional|Starting data row object for batch attribute setting|
|startCol|`string`|Optional|Starting column name for batch attribute setting|
|endRow|`object`|Optional|Ending data row object for batch attribute setting|
|endCol|`string`|Optional|Ending column name for batch attribute setting|
|attr|`string`|Optional|Attribute name to set|
|val|`string`|Optional|Attribute value to set|

### Return Value
***none***

### Example
```javascript
// Changes the TextColor value to blue for all cells in the range from AR1 row to AR2 row, Col1 to Col2 columns.
sheet.setRangeAttribute(sheet.getRowById("AR1"), "Col1", sheet.getRowById("AR3"), "Col2", "TextColor", "blue");
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
