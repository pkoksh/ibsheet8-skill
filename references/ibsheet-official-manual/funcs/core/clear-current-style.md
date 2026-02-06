---
KEY: clearCurrentStyle
KIND: method
PATH: funcs/core/clear-current-style
ALIAS: sheet.clearCurrentStyle, clearCurrentStyle()
ALIAS_EN: method, removes, style, related, information, current, sheet, saved
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/clear-current-style
---
# clearCurrentStyle ***(method)***
> A method that removes style-related information of the current sheet saved as style rows. 

> If `StorageType` of [StyleRowConfig](/docs/props/cfg/style-row-config) is 1, it removes the style information saved in local storage. (If [StorageSession](/docs/props/cfg/storage-session) value is 0, the removal operation is not performed.)

> If `StorageType` is 2, it sends a request to remove the style information saved at the path of the style row's `ServerUrl`.

### Syntax
```javascript
boolean clearCurrentStyle();
```

### Return Value
***boolean*** : Whether the function operated normally

### Example
```javascript
options.Cfg = {
    StorageSession: 1        // Configure to allow saving and retrieving current sheet information in local storage
};

        ...

// Remove saved style information.
sheet.clearCurrentStyle();
```

### Read More
- [StorageSession cfg](/docs/props/cfg/storage-session)
- [StyleRowConfig cfg](/docs/props/cfg/style-row-config)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.18|Feature added|
|core|8.3.0.33|Server deletion request feature improved|
