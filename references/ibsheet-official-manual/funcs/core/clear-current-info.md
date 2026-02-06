---
KEY: clearCurrentInfo
KIND: method
PATH: funcs/core/clear-current-info
ALIAS: sheet.clearCurrentInfo, clearCurrentInfo()
ALIAS_EN: method, removes, current, sheet, information, saved, via, savecurrentinfo
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/clear-current-info
---
# clearCurrentInfo ***(method)***
> A method that removes the current sheet's information saved via [saveCurrentInfo()](./save-current-info) from local storage or session storage.
> 
 If [StorageSession](/docs/props/cfg/storage-session) value is 0, the removal operation is not performed.

### Syntax
```javascript
boolean clearCurrentInfo();
```

### Return Value
***boolean*** : Whether the function operated normally. (Returns false when removal of sheet information from local storage or session storage fails)

### Example
```javascript
options.Cfg = {
    StorageSession: 1        // Configure to allow saving and retrieving current sheet information in local storage
};

        ...

// Remove the current sheet's information from local storage or session storage.
sheet.clearCurrentInfo();
```

### Read More
- [StorageSession cfg](/docs/props/cfg/storage-session)
- [StorageKeyPrefix cfg](/docs/props/cfg/storage-key-prefix)
- [StorageCompressMode cfg](/docs/props/cfg/storage-compress-mode)
- [saveCurrentInfo method](./save-current-info)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
