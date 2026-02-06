---
KEY: getSavedCurrentInfo
KIND: method
PATH: funcs/core/get-saved-current-info
ALIAS: sheet.getSavedCurrentInfo, getSavedCurrentInfo()
ALIAS_EN: retrieves, sheet, column, information, saved, current, local, storage
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-saved-current-info
---
# getSavedCurrentInfo ***(method)***
> Retrieves the sheet's column information saved in the current local storage or session storage as a string.

### Syntax
```javascript
string getSavedCurrentInfo();
```

### Return Value
***string current local storage or session storage saved column hidden, width, and position information value***

### Example
```javascript
// Returns a string containing the sheet's column information saved in the current local storage or session storage
sheet.getSavedCurrentInfo();
```

### Read More
- [getCurrentInfo method](./get-current-info)
- [setCurrentInfo method](./set-current-info)
- [saveCurrentInfo method](./save-current-info)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.28|Feature added|
