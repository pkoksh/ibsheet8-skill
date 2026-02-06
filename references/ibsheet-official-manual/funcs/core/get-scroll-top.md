---
KEY: getScrollTop
KIND: method
PATH: funcs/core/get-scroll-top
ALIAS: sheet.getScrollTop, getScrollTop()
ALIAS_EN: checks, position, vertical, scrollbar, getscrolltop, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-scroll-top
---
# getScrollTop ***(method)***
> Checks the position of the vertical scrollbar.

### Syntax
```javascript
number getScrollTop();
```


### Return Value
***number*** : Distance moved along the y-axis for the vertical scrollbar (pixel unit)

### Example
```javascript
// Get the current vertical scrollbar position.
var offset = sheet.getScrollTop();
//Re-render
sheet.rerender();
//Move to original position
sheet.setScrollTop(offset);
```

### Read More
- [setScrollTop method](./set-scroll-top)
- [getScrollLeft method](./get-scroll-left)
- [setScrollLeft method](./set-scroll-left)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
