---
KEY: getSheetTag
KIND: method
PATH: funcs/common/get-sheet-tag
ALIAS: sheet.getSheetTag, getSheetTag()
ALIAS_EN: returns, tag, sheet, default, div, argument, provided, return
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/common/get-sheet-tag
---
# getSheetTag ***(method)***

> Returns the tag of the sheet. By default, it returns the div tag; when an argument is provided, it can return the table tag. 


### Syntax
```javascript
void getSheetTag( tableTag );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|tableTag|`boolean`|Optional|Whether to get the table tag of the sheet|

### Return Value
***element*** Sheet tag


### Example
```javascript
// Returns the tag of the sheet.
sheet.getSheetTag();
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
