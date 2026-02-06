---
KEY: getUserOptions
KIND: method
PATH: funcs/core/get-user-options
ALIAS: sheet.getUserOptions, getUserOptions()
ALIAS_EN: returns, sheet, initialization, setting, values, getuseroptions, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-user-options
---
# getUserOptions ***(method)***

> Returns the sheet's initialization setting values.

> Returns the content set through [IBSheet.create({options})](/docx/static/create) when creating the sheet.

> Content commonly applied through [IBSheet.CommonOptions](/docx/static/common-options) or [IBSheet.onBeforeCreate](on-before-create) is also returned, but content added or modified after creation is not returned.

> The returned setting values vary depending on the `mode`.


### Syntax
```javascript
object getUserOptions( mode );
```

### Parameters
|Name|Type|Required| Description |
|----|----|--------|-------------|
|mode|`number`|Optional|`0`:Returns the options set when creating the sheet (`default`)
 `1`:Returns options for Excel dialog use (changes `ZIndex` in `Cfg` from `mode: 0`, adds `CanSort: 0`) 
 `2`:Returns the options set when creating the sheet, but with current column information (`mode: 0` with current latest column information) 
 `3`:Returns options for Excel dialog use (changes `ZIndex` in `Cfg` from `mode: 2`, adds `CanSort: 0`)|


### Return Value
***object*** : Initialization (options) content used when creating the sheet

### Example
```javascript
// Check partial content of the Cfg setting values at sheet initialization.
var opts = sheet.getUserOptions( );
alert(opts.Cfg.CanEdit);

// Check current column information of the sheet.
var opts = sheet.getUserOptions( 2 );
alert(opts.Cols);
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.7|1,3 added|
