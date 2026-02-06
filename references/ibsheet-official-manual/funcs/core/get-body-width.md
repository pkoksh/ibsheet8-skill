---
KEY: getBodyWidth
KIND: method
PATH: funcs/core/get-body-width
ALIAS: sheet.getBodyWidth, getBodyWidth()
ALIAS_EN: returns, width, specific, section, docs, props, col, left
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-body-width
---
# getBodyWidth ***(method)***

> Returns the width of a specific [Section](/docs/props/col/section) (left/right based on Fixed pane).

### Syntax
```javascript
number getBodyWidth( section );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|section |`number`|Optional|Area to get width of
`0`:Left
`1`:Center (`default`)
`2`:Right|

### Return Value
***number*** : sectionof width (pixel unit)

### Example
```javascript
//left Fixed pane areaof width OK
var w = sheet.getBodyWidth(0);
```

### Read More
- [getBodyHeight method](./get-body-height)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
