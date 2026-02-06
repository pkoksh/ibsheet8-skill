---
KEY: storageSession
KIND: config-property
PATH: props/cfg/storage-session
ALIAS_EN: option, enable, saving, sheet, information, local, storage, session
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/storage-session
---
# StorageSession ***(cfg)***

> Option to enable saving sheet information to local storage or session storage.  
 If information is stored in local storage or session storage, the information is retrieved and applied to the sheet when the sheet is loaded.

> **`Caution`**: If the column information at sheet initialization time differs from the saved sheet column information, the information stored in local storage or session storage is deleted.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Not used (`default`)|
|`1`|Save to local storage|
|`2`|Save to session storage|


### Example
```javascript
options.Cfg = {
    StorageSession: 1        // Set to allow saving and retrieving current sheet information in local storage
};

sheet.saveCurrentInfo();      // Save current sheet information to local storage
sheet.clearCurrentInfo();     // Remove current sheet information from local storage
```

### Read More
- [StorageKeyPrefix Cfg](./storage-key-prefix)
- [StorageCompressMode Cfg](./storage-compress-mode)
- [saveCurrentInfo method](/docs/funcs/core/save-current-info)
- [clearCurrentInfo method](/docs/funcs/core/clear-current-info)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
