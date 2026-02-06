---
KEY: setSheetSize
KIND: method
PATH: funcs/common/set-sheet-size
ALIAS: sheet.setSheetSize, setSheetSize()
ALIAS_EN: adjusts, tag, size, sheet, feature, changes, div, wrapping
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/common/set-sheet-size
---
# setSheetSize ***(method)***

> Adjusts the tag size of the sheet. This feature changes the size of the div wrapping the sheet. 

> When a number is entered, it is automatically converted to px. 

> When entered with a unit, it is applied as-is. 


### Syntax
```javascript
void setSheetSize( width, height );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|width|`number`|Optional|Sheet tag width to set|
|height|`number`|Optional|Sheet tag height to set|

### Return Value
***none***

### Example
```javascript
// Sets the sheet tag size to width 500px, height 800px.
sheet.setSheetSize(500, 800);
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
