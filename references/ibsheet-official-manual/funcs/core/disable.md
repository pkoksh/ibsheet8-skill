---
KEY: disable
KIND: method
PATH: funcs/core/disable
ALIAS: sheet.disable, disable()
ALIAS_EN: disables, sheet, disable, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/disable
---
# disable ***(method)***
> Disables the sheet.

> A transparent layer covers the sheet, blocking hover-related features and other keyboard/mouse events. 

> The `disable` area is outside the sheet area. When using `fixedInSheet` set to `true`, it is fixed within the inner area.

### Syntax
```javascript
void disable( hard, fixedInSheet );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|hard|`boolean`|Optional|A 50% semi-transparent layer is displayed over the sheet.
`0(false)`:Do not display layer (`default`)
`1(true)`:Display layer|
|fixedInSheet|`boolean`|Optional|Inside the sheet area, `disable` creates an area.
`0(false)`:`disable` Do not create area (`default`)
`1(true)`:`disable` Create area|



### Return Value
***none***

### Example
```javascript
//Disable the sheet
sheet.disable(true);
```

### Read More
- [enable method](./enable)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.19|`fixedInSheet` argument added|
