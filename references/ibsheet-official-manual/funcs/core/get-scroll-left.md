---
KEY: getScrollLeft
KIND: method
PATH: funcs/core/get-scroll-left
ALIAS: sheet.getScrollLeft, getScrollLeft()
ALIAS_EN: checks, position, horizontal, scrollbar, pixel, units, getscrollleft, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-scroll-left
---
# getScrollLeft ***(method)***
> Checks the position of the horizontal scrollbar in pixel units.

### Syntax
```javascript
number getScrollLeft( section );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|section|`number`|Optional|Left/right area based on the fixed pane
`0`:left
`1`:center (`default`)
`2`:right|


### Return Value
***number*** : Distance moved along the x-axis for the horizontal scrollbar (pixel unit)

### Example
```javascript
// Get the current horizontal scrollbar position.
var offset = sheet.getScrollLeft(1);
//Re-render
sheet.rerender();
//Move to original position
sheet.setScrollLeft(offset , 1 );
```

### Read More
- [setScrollLeft method](./set-scroll-left)
- [getScrollTop method](./get-scroll-top)
- [setScrollTop method](./set-scroll-top)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
