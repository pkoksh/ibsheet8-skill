---
KEY: getCurrentInfo
KIND: method
PATH: funcs/core/get-current-info
ALIAS: sheet.getCurrentInfo, getCurrentInfo()
ALIAS_EN: returns, column, information, current, sheet, string, getcurrentinfo, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-current-info
---
# getCurrentInfo ***(method)***
> Returns column information of the current sheet as a string.

### Syntax
```javascript
string getCurrentInfo();
```

### Return Value
***string - value containing hide status, width, and position information of current columns***

### Example
```javascript
// Returns a string containing column information of the current sheet
sheet.getCurrentInfo();
```

### Read More
- [setCurrentInfo method](./set-current-info)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
