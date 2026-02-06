---
KEY: getCell
KIND: method
PATH: funcs/core/get-cell
ALIAS: sheet.getCell, getCell()
ALIAS_EN: retrieves, specific, cell, html, tag, getcell, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-cell
---
# getCell ***(method)***

> Retrieves a specific cell's HTML tag (td).

> Using `javascript`'s `getBoundingClientRect()` method, you can obtain a `DOMRect` object that provides the cell's size and position information relative to the current viewport.

> The style within the tag can be modified, but the tag itself cannot be modified.

> Cannot be used with [SearchMode](/docs/props/cfg/search-mode): 0(FastLoad).

### Syntax
```javascript
object getCell( row, col );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|row |`object`|Required|[data row object](/docs/appx/row-object)|
|col |`string`|Required|column name|

### Return Value
***object*** : HTML TD tag object

### Example
```javascript
// Add the Black_Bold class to a specific cell's existing classes.
var ctd = sheet.getCell( sheet.getRowById("AR15"), "EMT_XL" );
ctd.className = ctd.className+" Black_Bold";

// Get a specific cell's top value relative to the current viewport.
var top = ctd.getBoundingClientRect().top;
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
