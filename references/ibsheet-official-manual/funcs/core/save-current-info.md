---
KEY: saveCurrentInfo
KIND: method
PATH: funcs/core/save-current-info
ALIAS: sheet.saveCurrentInfo, saveCurrentInfo()
ALIAS_EN: method, save, current, sheet, information, local, storage, session
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/save-current-info
---
# saveCurrentInfo ***(method)***
> Method to save the current sheet's information to local storage or session storage.
> 
 By default, the key value is set as [StorageKeyPrefix](/docs/props/cfg/storage-key-prefix)+"^sheetid".
> 
 The saved value is compressed according to [StorageCompressMode](/docs/props/cfg/storage-compress-mode) before being saved.
> 
 Does not work if there is no [StorageSession](/docs/props/cfg/storage-session) value.
> 
 **`Note`** : When the column information at sheet initialization differs from the saved sheet column information, the information saved in local storage or session storage is overwritten.

### Syntax
```javascript
boolean saveCurrentInfo();
```

### Return Value
***boolean***

```javascript
options.Cfg = {
  StorageSession: 1    // Setting to enable saving and loading current sheet information from local storage
};
```

### Example
```javascript
// Save the current sheet's information to local storage or session storage.
if (sheet.saveCurrentInfo()) {
    alert("Current sheet information has been saved.");
} else {
  alert("Failed to save current sheet information.");
}
```

### Read More
- [StorageSession cfg](/docs/props/cfg/storage-session)
- [StorageKeyPrefix cfg](/docs/props/cfg/storage-key-prefix)
- [StorageCompressMode cfg](/docs/props/cfg/storage-compress-mode)
- [clearCurrentInfo method](./clear-current-info)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
