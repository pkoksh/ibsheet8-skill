---
KEY: clear
KIND: method
PATH: funcs/core/clear
ALIAS: sheet.clear, clear()
ALIAS_EN: removes, sheet, portion, dom, area, clear, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/clear
---
# clear ***(method)***

> Removes the sheet portion from the DOM area.

> This is a feature to address memory leaks in older Internet Explorer browsers.

> It is automatically called internally when the browser is refreshed or when navigating to another page.

> You can reload the sheet removed from the DOM using the [reload](./reload)() function.

### Syntax
```javascript
void clear();
```


### Return Value
***none***

### Example
```javascript
//Remove the sheet DOM portion
sheet.clear();
```

### Read More

- [reload method](./reload)
- [dispose mehtod](./dispose)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
