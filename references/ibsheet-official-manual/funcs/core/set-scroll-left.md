---
KEY: setScrollLeft
KIND: method
PATH: funcs/core/set-scroll-left
ALIAS: sheet.setScrollLeft, setScrollLeft()
ALIAS_EN: moves, horizontal, scrollbar, pixel, units, setscrollleft, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-scroll-left
---
# setScrollLeft ***(method)***
> Moves the horizontal scrollbar in pixel units.

### Syntax
```javascript
boolean setScrollLeft( pos, section );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|pos|`number`|Required|Distance to move based on the x-axis|
|section|`number`|Optional|Left/right area based on the fixed pane
`0`:left
`1`:center(`default`)
`2`:right|

### Return Value
***boolean*** : Whether moved (returns `0(false)` when set to the same position as pos)

### Example
```javascript
// Get the current horizontal scrollbar position.
var offset = sheet.getScrollLeft(1);
//Re-render
sheet.rerender();
//Move to original position
sheet.setScrollLeft(offset, 1);
```

### Read More
- [getScrollLeft method](./get-scroll-left)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
