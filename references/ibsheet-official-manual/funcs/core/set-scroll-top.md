---
KEY: setScrollTop
KIND: method
PATH: funcs/core/set-scroll-top
ALIAS: sheet.setScrollTop, setScrollTop()
ALIAS_EN: moves, vertical, scrollbar, pixel, units, setscrolltop, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-scroll-top
---
# setScrollTop ***(method)***
> Moves the vertical scrollbar in pixel units.

### Syntax
```javascript
boolean setScrollTop( pos );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|pos|`number`|Required|Distance to move based on the y-axis|

### Return Value
***boolean*** : Whether moved (returns `0(false)` when set to the same position as pos)

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
- [getScrollTop method](./get-scroll-top)
- [getScrollLeft method](./get-scroll-left)
- [setScrollLeft method](./set-scroll-left)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
