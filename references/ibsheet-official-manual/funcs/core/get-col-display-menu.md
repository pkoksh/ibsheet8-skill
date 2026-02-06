---
KEY: getColDisplayMenu
KIND: method
PATH: funcs/core/get-col-display-menu
ALIAS: sheet.getColDisplayMenu, getColDisplayMenu()
ALIAS_EN: returns, menu, object, allows, setting, display, status, columns
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-col-display-menu
---
# getColDisplayMenu ***(method)***

> Returns a menu object that allows setting the display status of columns currently shown in the sheet.

> The menu can be displayed at a specific position using [showMenu](/docs/static/show-menu).


![getColDisplayMenu](/assets/imgs/colDisplayMenu.png "ColDisplayMenu")
<!-- IMAGE: Screenshot/Example Image - getColDisplayMenu -->

[Menu preview]


### Syntax
```javascript
object getColDisplayMenu();
```

### Return Value
***object*** : menu object

### Example
```javascript
// Example of displaying a 'column display status' menu at the mouse position
var menu = sheet.getColDisplayMenu();

IBSheet.showMenu(menu, {Mouse: 1});
```

### Read More
- [Menu appendix](/docs/appx/menu)
- [showMenu static](/docs/static/show-menu)
- [showMenu method](./show-menu)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.51|Feature added|
