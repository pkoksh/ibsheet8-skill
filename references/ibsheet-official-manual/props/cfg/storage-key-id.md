---
KEY: storageKeyId
KIND: config-property
PATH: props/cfg/storage-key-id
ALIAS_EN: option, custom, postfix, key, value, instead, sheet, saving
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/storage-key-id
---
# StorageKeyId ***(cfg)***

> Option to set a custom Id to use as the `postFix` of the Key value instead of the sheet's Id when saving current sheet information to local storage or session storage.
> 
 When this option is set, the Key value is not set as `StorageKeyPrefix+"^sheetId"`, but instead set as `StorageKeyPrefix+"^configuredValue"`.
> 
 Does not operate if there is no [StorageSession](./storage-session) value.

### Type
`string`


### Example
```javascript
options.Cfg = {
    StorageSession: 1,       // Set to allow saving and retrieving current sheet information in local storage
    StorageKeyId: "customId", // Saves current sheet information to local storage with `StorageKeyPrefix+"^customId"` as the key value.
};

sheet.saveCurrentInfo();      // Save current sheet information to local storage
sheet.clearCurrentInfo();     // Remove current sheet information from local storage
```

### Read More
- [StorageSession cfg](./storage-session)
- [StorageCompressMode cfg](./storage-compress-mode)
- [saveCurrentInfo method](/docs/funcs/core/save-current-info)
- [clearCurrentInfo method](/docs/funcs/core/clear-current-info)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.7|Feature added|
