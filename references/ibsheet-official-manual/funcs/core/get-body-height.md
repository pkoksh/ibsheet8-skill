---
KEY: getBodyHeight
KIND: method
PATH: funcs/core/get-body-height
ALIAS: sheet.getBodyHeight, getBodyHeight()
ALIAS_EN: sheet, data, areaof, height, return, getbodyheight, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-body-height
---
# getBodyHeight ***(method)***

> sheet data areaof height return.

> headeror filter Row height includedoes not not.



### Syntax
```javascript
number getBodyHeight( );
```


### Return Value
***number*** : data areaof height (pixel unit)

### Example
```javascript
//Returns the height of the data area. (Unrelated to vertical scroll)
var h = sheet.getBodyHeight( );
```

### Read More
- [getRowTop method](./get-row-top)
- [getScrollTop method](./get-scroll-top)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
