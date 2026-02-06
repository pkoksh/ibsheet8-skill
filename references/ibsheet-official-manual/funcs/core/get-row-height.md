---
KEY: getRowHeight
KIND: method
PATH: funcs/core/get-row-height
ALIAS: sheet.getRowHeight, getRowHeight()
ALIAS_EN: specificrow, height, pixel, unitas, getrowheight, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-row-height
---
# getRowHeight ***(method)***
> specificRow height pixel unitas OK.

### Syntax
```javascript
number getRowHeight( row );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|Required|[data row object](/docs/appx/row-object)|

### Return Value
***number*** : Row height (pixel unit)

### Example
```javascript
var r = sheet.getFirstVisibleRow();
//first Row height OK
var height = sheet.getRowHeight(r);
```

### Read More
- [getBodyHeight method](./get-body-height)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
